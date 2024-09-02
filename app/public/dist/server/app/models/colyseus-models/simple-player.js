"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SampleSynergy = void 0;
const schema_1 = require("@colyseus/schema");
const game_record_1 = require("./game-record");
class SampleSynergy extends schema_1.Schema {
    constructor(name, value) {
        super();
        this.name = name;
        this.value = value;
    }
}
exports.SampleSynergy = SampleSynergy;
__decorate([
    (0, schema_1.type)("string")
], SampleSynergy.prototype, "name", void 0);
__decorate([
    (0, schema_1.type)("number")
], SampleSynergy.prototype, "value", void 0);
class SimplePlayer extends schema_1.Schema {
    constructor(id, name, avatar, rank, pokemons, exp, title, role, synergies, elo) {
        super();
        this.pokemons = new schema_1.ArraySchema();
        this.synergies = new schema_1.ArraySchema();
        this.id = id;
        this.name = name;
        this.avatar = avatar;
        this.rank = rank;
        this.exp = exp;
        this.title = title;
        this.role = role;
        this.elo = elo;
        pokemons.forEach((pkm) => {
            this.pokemons.push(new game_record_1.PokemonRecord(pkm));
        });
        synergies.forEach((s) => {
            this.synergies.push(new SampleSynergy(s.name, s.value));
        });
    }
}
exports.default = SimplePlayer;
__decorate([
    (0, schema_1.type)("string")
], SimplePlayer.prototype, "id", void 0);
__decorate([
    (0, schema_1.type)("string")
], SimplePlayer.prototype, "name", void 0);
__decorate([
    (0, schema_1.type)("string")
], SimplePlayer.prototype, "avatar", void 0);
__decorate([
    (0, schema_1.type)("uint8")
], SimplePlayer.prototype, "rank", void 0);
__decorate([
    (0, schema_1.type)([game_record_1.PokemonRecord])
], SimplePlayer.prototype, "pokemons", void 0);
__decorate([
    (0, schema_1.type)("uint16")
], SimplePlayer.prototype, "elo", void 0);
__decorate([
    (0, schema_1.type)("uint16")
], SimplePlayer.prototype, "exp", void 0);
__decorate([
    (0, schema_1.type)("string")
], SimplePlayer.prototype, "title", void 0);
__decorate([
    (0, schema_1.type)("string")
], SimplePlayer.prototype, "role", void 0);
__decorate([
    (0, schema_1.type)([SampleSynergy])
], SimplePlayer.prototype, "synergies", void 0);
//# sourceMappingURL=simple-player.js.map