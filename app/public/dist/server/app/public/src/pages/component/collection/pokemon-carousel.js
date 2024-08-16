"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = PokemonCarousel;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const precomputed_pokemon_data_1 = require("../../../../../models/precomputed/precomputed-pokemon-data");
const Ability_1 = require("../../../../../types/enum/Ability");
const Passive_1 = require("../../../../../types/enum/Passive");
const Pokemon_1 = require("../../../../../types/enum/Pokemon");
const Synergy_1 = require("../../../../../types/enum/Synergy");
const hooks_1 = require("../../../hooks");
const pokemon_collection_item_1 = __importDefault(require("./pokemon-collection-item"));
function PokemonCarousel(props) {
    const pokemonCollection = (0, hooks_1.useAppSelector)((state) => state.lobby.pokemonCollection);
    const getConfig = (0, react_1.useCallback)((index) => pokemonCollection.find((p) => p.id == index), [pokemonCollection]);
    const pokemonsSorted = (0, react_1.useMemo)(() => {
        if (props.sort === "index") {
            return Object.values(Pokemon_1.Pkm).sort((a, b) => {
                return Pokemon_1.PkmFamily[a] === Pokemon_1.PkmFamily[b]
                    ? (0, precomputed_pokemon_data_1.getPokemonData)(a).stars - (0, precomputed_pokemon_data_1.getPokemonData)(b).stars
                    : Pokemon_1.PkmIndex[Pokemon_1.PkmFamily[a]].localeCompare(Pokemon_1.PkmIndex[Pokemon_1.PkmFamily[b]]);
            });
        }
        else {
            return Object.values(Pokemon_1.Pkm).sort((a, b) => {
                var _a, _b, _c, _d;
                return (((_b = (_a = getConfig(Pokemon_1.PkmIndex[b])) === null || _a === void 0 ? void 0 : _a.dust) !== null && _b !== void 0 ? _b : 0) -
                    ((_d = (_c = getConfig(Pokemon_1.PkmIndex[a])) === null || _c === void 0 ? void 0 : _c.dust) !== null && _d !== void 0 ? _d : 0));
            });
        }
    }, [props.sort]);
    const elligiblePokemons = (0, react_1.useMemo)(() => pokemonsSorted.map((pkm) => {
        const pokemonData = (0, precomputed_pokemon_data_1.getPokemonData)(pkm);
        if (pkm !== Pokemon_1.Pkm.DEFAULT &&
            (pokemonData.skill !== Ability_1.Ability.DEFAULT ||
                pokemonData.passive !== Passive_1.Passive.NONE) &&
            pokemonData.passive !== Passive_1.Passive.UNOWN &&
            (props.type === "all" ||
                pokemonData.types.includes(Synergy_1.Synergy[props.type]))) {
            return ((0, jsx_runtime_1.jsx)(pokemon_collection_item_1.default, { name: pkm, index: pokemonData.index, config: getConfig(pokemonData.index), filter: props.filter, shinyOnly: props.shinyOnly, setPokemon: props.setPokemon }, `${pokemonData.index}-${props.type}`));
        }
        return null;
    }), [
        getConfig,
        props.filter,
        props.sort,
        props.setPokemon,
        props.shinyOnly,
        props.type
    ]);
    return (0, jsx_runtime_1.jsx)("div", { className: "pokemon-carousel", children: elligiblePokemons });
}
//# sourceMappingURL=pokemon-carousel.js.map