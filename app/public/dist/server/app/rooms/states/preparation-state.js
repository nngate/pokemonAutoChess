"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const schema_1 = require("@colyseus/schema");
const nanoid_1 = require("nanoid");
const game_user_1 = require("../../models/colyseus-models/game-user");
const message_1 = __importDefault(require("../../models/colyseus-models/message"));
const Game_1 = require("../../types/enum/Game");
class PreparationState extends schema_1.Schema {
    constructor(params) {
        var _a, _b, _c, _d, _e;
        super();
        this.messages = new schema_1.ArraySchema();
        this.users = new schema_1.MapSchema();
        this.gameMode = Game_1.GameMode.NORMAL;
        this.ownerId =
            params.gameMode === Game_1.GameMode.NORMAL ? (_a = params.ownerId) !== null && _a !== void 0 ? _a : "" : "";
        this.name = params.roomName;
        this.gameStartedAt = null;
        this.ownerName = "";
        this.password = null;
        this.noElo = (_b = params.noElo) !== null && _b !== void 0 ? _b : false;
        this.minRank = (_c = params.minRank) !== null && _c !== void 0 ? _c : null;
        this.gameMode = params.gameMode;
        this.whitelist = (_d = params.whitelist) !== null && _d !== void 0 ? _d : [];
        this.blacklist = (_e = params.blacklist) !== null && _e !== void 0 ? _e : [];
    }
    addMessage(params) {
        var _a, _b;
        const id = (0, nanoid_1.nanoid)();
        const time = Date.now();
        const message = new message_1.default(id, params.payload, params.authorId, (_a = params.author) !== null && _a !== void 0 ? _a : "", (_b = params.avatar) !== null && _b !== void 0 ? _b : "", time);
        this.messages.push(message);
    }
    removeMessage(id) {
        const messageIndex = this.messages.findIndex((m) => m.id === id);
        if (messageIndex !== -1) {
            this.messages.splice(messageIndex, 1);
        }
    }
}
exports.default = PreparationState;
__decorate([
    (0, schema_1.type)([message_1.default])
], PreparationState.prototype, "messages", void 0);
__decorate([
    (0, schema_1.type)({ map: game_user_1.GameUser })
], PreparationState.prototype, "users", void 0);
__decorate([
    (0, schema_1.type)("string")
], PreparationState.prototype, "gameStartedAt", void 0);
__decorate([
    (0, schema_1.type)("string")
], PreparationState.prototype, "ownerId", void 0);
__decorate([
    (0, schema_1.type)("string")
], PreparationState.prototype, "ownerName", void 0);
__decorate([
    (0, schema_1.type)("string")
], PreparationState.prototype, "name", void 0);
__decorate([
    (0, schema_1.type)("string")
], PreparationState.prototype, "password", void 0);
__decorate([
    (0, schema_1.type)("string")
], PreparationState.prototype, "minRank", void 0);
__decorate([
    (0, schema_1.type)("string")
], PreparationState.prototype, "gameMode", void 0);
__decorate([
    (0, schema_1.type)("boolean")
], PreparationState.prototype, "noElo", void 0);
__decorate([
    (0, schema_1.type)(["string"])
], PreparationState.prototype, "whitelist", void 0);
__decorate([
    (0, schema_1.type)(["string"])
], PreparationState.prototype, "blacklist", void 0);
//# sourceMappingURL=preparation-state.js.map