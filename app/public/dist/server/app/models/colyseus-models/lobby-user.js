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
const game_record_1 = require("./game-record");
const map_tileset_1 = __importDefault(require("./map-tileset"));
const pokemon_collection_1 = __importDefault(require("./pokemon-collection"));
const pokemon_config_1 = __importDefault(require("./pokemon-config"));
const win_tileset_1 = __importDefault(require("./win-tileset"));
class LobbyUser extends schema_1.Schema {
    constructor(id, name, elo, avatar, wins, exp, level, donor, history, honors, pokemonCollection, booster, titles, title, role, anonymous, creationTime, lastSignInTime, language) {
        super();
        this.map = new map_tileset_1.default();
        this.mapWin = new win_tileset_1.default();
        this.honors = new schema_1.ArraySchema();
        this.history = new schema_1.ArraySchema();
        this.pokemonCollection = new pokemon_collection_1.default();
        this.titles = new schema_1.ArraySchema();
        this.id = id;
        this.name = name;
        this.avatar = avatar;
        this.elo = elo;
        this.wins = wins;
        this.exp = exp;
        this.level = level;
        this.donor = donor;
        this.booster = booster;
        this.title = title;
        this.role = role;
        this.anonymous = anonymous;
        this.creationTime = creationTime;
        this.lastSignInTime = lastSignInTime;
        this.language = language;
        if (history && history.length && history.length != 0) {
            history.forEach((h) => {
                this.history.push(h);
            });
        }
        if (honors && honors.length && honors.length != 0) {
            honors.forEach((h) => {
                this.honors.push(h);
            });
        }
        if (pokemonCollection && pokemonCollection.size) {
            pokemonCollection.forEach((value, key) => {
                this.pokemonCollection.set(key, new pokemon_config_1.default(value.id, value));
            });
        }
        if (titles && titles.length && titles.length != 0) {
            titles.forEach((value) => {
                this.titles.push(value);
            });
        }
    }
}
exports.default = LobbyUser;
__decorate([
    (0, schema_1.type)("string")
], LobbyUser.prototype, "id", void 0);
__decorate([
    (0, schema_1.type)("string")
], LobbyUser.prototype, "name", void 0);
__decorate([
    (0, schema_1.type)("string")
], LobbyUser.prototype, "avatar", void 0);
__decorate([
    (0, schema_1.type)("uint16")
], LobbyUser.prototype, "elo", void 0);
__decorate([
    (0, schema_1.type)(map_tileset_1.default)
], LobbyUser.prototype, "map", void 0);
__decorate([
    (0, schema_1.type)("string")
], LobbyUser.prototype, "language", void 0);
__decorate([
    (0, schema_1.type)("uint16")
], LobbyUser.prototype, "wins", void 0);
__decorate([
    (0, schema_1.type)("uint16")
], LobbyUser.prototype, "exp", void 0);
__decorate([
    (0, schema_1.type)("uint16")
], LobbyUser.prototype, "level", void 0);
__decorate([
    (0, schema_1.type)("boolean")
], LobbyUser.prototype, "donor", void 0);
__decorate([
    (0, schema_1.type)(win_tileset_1.default)
], LobbyUser.prototype, "mapWin", void 0);
__decorate([
    (0, schema_1.type)(["string"])
], LobbyUser.prototype, "honors", void 0);
__decorate([
    (0, schema_1.type)([game_record_1.GameRecord])
], LobbyUser.prototype, "history", void 0);
__decorate([
    (0, schema_1.type)({ map: pokemon_config_1.default })
], LobbyUser.prototype, "pokemonCollection", void 0);
__decorate([
    (0, schema_1.type)("uint16")
], LobbyUser.prototype, "booster", void 0);
__decorate([
    (0, schema_1.type)(["string"])
], LobbyUser.prototype, "titles", void 0);
__decorate([
    (0, schema_1.type)("string")
], LobbyUser.prototype, "title", void 0);
__decorate([
    (0, schema_1.type)("string")
], LobbyUser.prototype, "role", void 0);
__decorate([
    (0, schema_1.type)("boolean")
], LobbyUser.prototype, "anonymous", void 0);
__decorate([
    (0, schema_1.type)("string")
], LobbyUser.prototype, "creationTime", void 0);
__decorate([
    (0, schema_1.type)("string")
], LobbyUser.prototype, "lastSignInTime", void 0);
//# sourceMappingURL=lobby-user.js.map