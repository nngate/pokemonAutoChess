"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPokemonData = exports.PRECOMPUTED_REGIONAL_MONS = exports.PRECOMPUTED_EMOTIONS_PER_POKEMON_INDEX = exports.PRECOMPUTED_POKEMONS_DATA = exports.PRECOMPUTED_POKEMONS_PER_ABILITY = exports.PRECOMPUTED_POKEMONS_PER_RARITY = exports.PRECOMPUTED_POKEMONS_PER_TYPE = exports.PRECOMPUTED_POKEMONS_PER_TYPE_AND_CATEGORY = void 0;
const pokemons_per_type_and_category_json_1 = __importDefault(require("./pokemons-per-type-and-category.json"));
const pokemons_per_type_json_1 = __importDefault(require("./pokemons-per-type.json"));
const pokemons_per_rarity_json_1 = __importDefault(require("./pokemons-per-rarity.json"));
const pokemons_per_ability_json_1 = __importDefault(require("./pokemons-per-ability.json"));
const pokemons_data_json_1 = __importDefault(require("./pokemons-data.json"));
const emotions_per_pokemon_index_json_1 = __importDefault(require("./emotions-per-pokemon-index.json"));
const Pokemon_1 = require("../../types/enum/Pokemon");
const Game_1 = require("../../types/enum/Game");
const Ability_1 = require("../../types/enum/Ability");
const Passive_1 = require("../../types/enum/Passive");
exports.PRECOMPUTED_POKEMONS_PER_TYPE_AND_CATEGORY = pokemons_per_type_and_category_json_1.default;
exports.PRECOMPUTED_POKEMONS_PER_TYPE = pokemons_per_type_json_1.default;
exports.PRECOMPUTED_POKEMONS_PER_RARITY = pokemons_per_rarity_json_1.default;
exports.PRECOMPUTED_POKEMONS_PER_ABILITY = pokemons_per_ability_json_1.default;
exports.PRECOMPUTED_POKEMONS_DATA = pokemons_data_json_1.default;
exports.PRECOMPUTED_EMOTIONS_PER_POKEMON_INDEX = emotions_per_pokemon_index_json_1.default;
exports.PRECOMPUTED_REGIONAL_MONS = Object.values(Pokemon_1.Pkm).filter((p) => {
    const { regional, skill, passive } = getPokemonData(p);
    return regional && (skill !== Ability_1.Ability.DEFAULT || passive !== Passive_1.Passive.NONE);
});
function getPokemonData(name) {
    if (name in exports.PRECOMPUTED_POKEMONS_DATA)
        return Object.assign({ name, index: Pokemon_1.PkmIndex[name] }, exports.PRECOMPUTED_POKEMONS_DATA[name]);
    return {
        name: Pokemon_1.Pkm.DEFAULT,
        index: Pokemon_1.PkmIndex[Pokemon_1.Pkm.DEFAULT],
        additional: false,
        regional: false,
        hp: 10,
        range: 1,
        rarity: Game_1.Rarity.SPECIAL,
        stars: 1,
        stages: 1,
        skill: Ability_1.Ability.DEFAULT,
        passive: Passive_1.Passive.NONE,
        types: [],
        evolution: null
    };
}
exports.getPokemonData = getPokemonData;
//# sourceMappingURL=index.js.map