"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WikiDungeon = WikiDungeon;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const react_i18next_1 = require("react-i18next");
const pokemon_1 = require("../../../../../models/colyseus-models/pokemon");
const precomputed_pokemon_data_1 = require("../../../../../models/precomputed/precomputed-pokemon-data");
const Dungeon_1 = require("../../../../../types/enum/Dungeon");
const Pokemon_1 = require("../../../../../types/enum/Pokemon");
const utils_1 = require("../../../utils");
const synergy_icon_1 = __importDefault(require("../icons/synergy-icon"));
function WikiDungeon() {
    const { t } = (0, react_i18next_1.useTranslation)();
    const [pokemonsPerRegion, setPokemonsPerRegion] = (0, react_1.useState)({});
    (0, react_1.useEffect)(() => {
        const timer = setTimeout(() => {
            setPokemonsPerRegion(Object.keys(Dungeon_1.DungeonPMDO).reduce((o, dungeon) => {
                const regionalMons = precomputed_pokemon_data_1.PRECOMPUTED_REGIONAL_MONS.filter((p) => pokemon_1.PokemonClasses[p].prototype.isInRegion(p, dungeon))
                    .filter((pkm, index, array) => array.findIndex((p) => Pokemon_1.PkmFamily[p] === Pokemon_1.PkmFamily[pkm]) === index);
                o[dungeon] = regionalMons;
                return o;
            }, {}));
        }, 100);
        return () => clearTimeout(timer);
    }, []);
    return ((0, jsx_runtime_1.jsx)("div", { id: "wiki-dungeon", children: (0, jsx_runtime_1.jsx)("ul", { children: Object.keys(Dungeon_1.DungeonPMDO)
                .sort((a, b) => t(`map.${a}`).localeCompare(t(`map.${b}`)))
                .map((dungeon) => {
                var _a;
                return ((0, jsx_runtime_1.jsxs)("li", { className: "my-box", children: [(0, jsx_runtime_1.jsxs)("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "center" }, children: [(0, jsx_runtime_1.jsx)("h2", { children: t(`map.${dungeon}`) }), (0, jsx_runtime_1.jsx)("div", { style: { display: "flex", gap: "5px" }, children: Dungeon_1.DungeonDetails[dungeon].synergies.map((synergy) => ((0, jsx_runtime_1.jsx)(synergy_icon_1.default, { type: synergy }, "map_synergy_" + synergy))) })] }), (0, jsx_runtime_1.jsx)("img", { src: `/assets/maps/${dungeon}-preview.png`, loading: "lazy", alt: dungeon }), (0, jsx_runtime_1.jsx)("div", { className: "wiki-dungeon-regional-mons", children: ((_a = pokemonsPerRegion[dungeon]) !== null && _a !== void 0 ? _a : []).map((pkm) => ((0, jsx_runtime_1.jsx)("img", { className: "pokemon-portrait", loading: "lazy", src: (0, utils_1.getPortraitSrc)(Pokemon_1.PkmIndex[pkm]) }, pkm))) })] }, dungeon));
            }) }) }));
}
//# sourceMappingURL=wiki-dungeon.js.map