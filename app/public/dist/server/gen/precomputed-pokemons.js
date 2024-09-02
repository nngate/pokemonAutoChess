"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.precomputedPokemons = void 0;
const pokemon_factory_1 = __importDefault(require("../app/models/pokemon-factory"));
const Pokemon_1 = require("../app/types/enum/Pokemon");
exports.precomputedPokemons = Object.values(Pokemon_1.Pkm)
    .filter((p) => p !== Pokemon_1.Pkm.DEFAULT)
    .map((pkm) => pokemon_factory_1.default.createPokemonFromName(pkm));
//# sourceMappingURL=precomputed-pokemons.js.map