"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const schema_1 = require("@colyseus/schema");
const cron_1 = require("cron");
const nanoid_1 = require("nanoid");
const lobby_1 = require("../../models/colyseus-models/lobby");
const lobby_user_1 = __importDefault(require("../../models/colyseus-models/lobby-user"));
const message_1 = __importDefault(require("../../models/colyseus-models/message"));
const tournament_1 = require("../../models/colyseus-models/tournament");
const chat_v2_1 = __importDefault(require("../../models/mongo-models/chat-v2"));
const tournament_2 = __importDefault(require("../../models/mongo-models/tournament"));
const Config_1 = require("../../types/Config");
const EloRank_1 = require("../../types/enum/EloRank");
const Game_1 = require("../../types/enum/Game");
const logger_1 = require("../../utils/logger");
class LobbyState extends schema_1.Schema {
    constructor() {
        super(...arguments);
        this.messages = new schema_1.ArraySchema();
        this.users = new schema_1.MapSchema();
        this.nextSpecialGame = null;
        this.tournaments = new schema_1.ArraySchema();
        this.ccu = 0;
    }
    addMessage(payload, authorId, author, avatar) {
        const id = (0, nanoid_1.nanoid)();
        const time = Date.now();
        const message = new message_1.default(id, payload, authorId, author, avatar, time);
        chat_v2_1.default
            .create({
            id: id,
            payload: payload,
            authorId: authorId,
            author: author,
            avatar: avatar,
            time: time
        })
            .then(() => {
            this.messages.push(message);
        });
    }
    removeMessage(id) {
        chat_v2_1.default.deleteMany({ id: id }).then((result) => {
            const messageIndex = this.messages.findIndex((m) => m.id === id);
            if (messageIndex !== -1) {
                this.messages.splice(messageIndex, 1);
            }
        });
    }
    removeMessages(authorId) {
        let i = this.messages.length;
        while (i--) {
            if (this.messages[i].authorId === authorId) {
                this.messages.splice(i, 1);
            }
        }
        chat_v2_1.default.deleteMany({ authorId: authorId });
    }
    addAnnouncement(message) {
        this.addMessage(message, "server", "Server Announcement", "0294/Joyous");
    }
    getNextSpecialGame() {
        const getNextDate = (t) => new cron_1.CronTime(t, "Europe/Paris").sendAt().toUnixInteger();
        const nextGreatballRanked = getNextDate(Config_1.GREATBALL_RANKED_LOBBY_CRON);
        const nextUltraballRanked = getNextDate(Config_1.ULTRABALL_RANKED_LOBBY_CRON);
        const nextScribble = getNextDate(Config_1.SCRIBBLE_LOBBY_CRON);
        const nextSpecialGameDateInt = Math.min(nextGreatballRanked, nextUltraballRanked, nextScribble);
        const nextSpecialGameDate = new Date(nextSpecialGameDateInt * 1000).toISOString();
        if (nextSpecialGameDateInt === nextGreatballRanked) {
            this.nextSpecialGame = new lobby_1.SpecialGamePlannedSchema(Game_1.GameMode.RANKED, nextSpecialGameDate, EloRank_1.EloRank.GREATBALL);
        }
        else if (nextSpecialGameDateInt === nextUltraballRanked) {
            this.nextSpecialGame = new lobby_1.SpecialGamePlannedSchema(Game_1.GameMode.RANKED, nextSpecialGameDate, EloRank_1.EloRank.ULTRABALL);
        }
        else if (nextSpecialGameDateInt === nextScribble) {
            this.nextSpecialGame = new lobby_1.SpecialGamePlannedSchema(Game_1.GameMode.SCRIBBLE, nextSpecialGameDate);
        }
    }
    createTournament(name, startDate) {
        return __awaiter(this, void 0, void 0, function* () {
            const id = (0, nanoid_1.nanoid)();
            logger_1.logger.debug(`creating tournament id ${id}`);
            return tournament_2.default.create({
                id,
                name,
                startDate,
                brackets: new Map(),
                players: new Map(),
                finished: false
            });
        });
    }
    removeTournament(id) {
        tournament_2.default.findByIdAndDelete(id).then((result) => {
            logger_1.logger.debug(`deleted tournament id ${id}`);
            const tournamentIndex = this.tournaments.findIndex((m) => m.id === id);
            if (tournamentIndex !== -1) {
                this.tournaments.splice(tournamentIndex, 1);
            }
        });
    }
}
exports.default = LobbyState;
__decorate([
    (0, schema_1.type)([message_1.default])
], LobbyState.prototype, "messages", void 0);
__decorate([
    (0, schema_1.filterChildren)(function (client, key) {
        return client.auth.uid === key;
    }),
    (0, schema_1.type)({ map: lobby_user_1.default })
], LobbyState.prototype, "users", void 0);
__decorate([
    (0, schema_1.type)(lobby_1.SpecialGamePlannedSchema)
], LobbyState.prototype, "nextSpecialGame", void 0);
__decorate([
    (0, schema_1.type)([tournament_1.TournamentSchema])
], LobbyState.prototype, "tournaments", void 0);
__decorate([
    (0, schema_1.type)("number")
], LobbyState.prototype, "ccu", void 0);
//# sourceMappingURL=lobby-state.js.map