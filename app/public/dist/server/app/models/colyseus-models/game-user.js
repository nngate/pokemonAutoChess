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
exports.GameUser = void 0;
const schema_1 = require("@colyseus/schema");
const map_tileset_1 = __importDefault(require("./map-tileset"));
class GameUser extends schema_1.Schema {
    constructor(id, name, elo, avatar, isBot, ready, title, role, anonymous) {
        super();
        this.map = new map_tileset_1.default();
        this.id = id;
        this.name = name;
        this.avatar = avatar;
        this.ready = ready;
        this.isBot = isBot;
        this.elo = elo;
        this.title = title;
        this.role = role;
        this.anonymous = anonymous;
    }
}
exports.GameUser = GameUser;
__decorate([
    (0, schema_1.type)("string")
], GameUser.prototype, "id", void 0);
__decorate([
    (0, schema_1.type)("string")
], GameUser.prototype, "name", void 0);
__decorate([
    (0, schema_1.type)("string")
], GameUser.prototype, "avatar", void 0);
__decorate([
    (0, schema_1.type)("boolean")
], GameUser.prototype, "ready", void 0);
__decorate([
    (0, schema_1.type)("boolean")
], GameUser.prototype, "isBot", void 0);
__decorate([
    (0, schema_1.type)("uint16")
], GameUser.prototype, "elo", void 0);
__decorate([
    (0, schema_1.type)(map_tileset_1.default)
], GameUser.prototype, "map", void 0);
__decorate([
    (0, schema_1.type)("string")
], GameUser.prototype, "title", void 0);
__decorate([
    (0, schema_1.type)("string")
], GameUser.prototype, "role", void 0);
__decorate([
    (0, schema_1.type)("boolean")
], GameUser.prototype, "anonymous", void 0);
//# sourceMappingURL=game-user.js.map