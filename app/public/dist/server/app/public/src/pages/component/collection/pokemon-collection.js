"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = PokemonCollection;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const react_i18next_1 = require("react-i18next");
const react_tabs_1 = require("react-tabs");
const store_1 = require("../../utils/store");
const Synergy_1 = require("../../../../../types/enum/Synergy");
const checkbox_1 = require("../checkbox/checkbox");
const synergy_icon_1 = __importDefault(require("../icons/synergy-icon"));
const pokemon_typeahead_1 = require("../typeahead/pokemon-typeahead");
const pokemon_carousel_1 = __importDefault(require("./pokemon-carousel"));
const pokemon_emotions_modal_1 = __importDefault(require("./pokemon-emotions-modal"));
const unown_panel_1 = __importDefault(require("./unown-panel"));
require("./pokemon-collection.css");
function PokemonCollection() {
    const { t } = (0, react_i18next_1.useTranslation)();
    const [selectedPokemon, setSelectedPokemon] = (0, react_1.useState)("");
    const prevFilterState = (0, react_1.useMemo)(() => {
        var _a, _b, _c;
        const prevState = store_1.localStore.get(store_1.LocalStoreKeys.COLLECTION_FILTER);
        return {
            filter: (_a = prevState === null || prevState === void 0 ? void 0 : prevState.filter) !== null && _a !== void 0 ? _a : "unlockable",
            sort: (_b = prevState === null || prevState === void 0 ? void 0 : prevState.sort) !== null && _b !== void 0 ? _b : "index",
            shinyOnly: (_c = prevState === null || prevState === void 0 ? void 0 : prevState.shinyOnly) !== null && _c !== void 0 ? _c : false
        };
    }, [store_1.localStore]);
    const [filter, setFilter] = (0, react_1.useState)(prevFilterState.filter);
    const [sort, setSort] = (0, react_1.useState)(prevFilterState.sort);
    const [shinyOnly, setShinyOnly] = (0, react_1.useState)(prevFilterState.shinyOnly);
    (0, react_1.useEffect)(() => {
        store_1.localStore.set(store_1.LocalStoreKeys.COLLECTION_FILTER, {
            filter,
            sort,
            shinyOnly
        });
    }, [filter, sort, shinyOnly]);
    return ((0, jsx_runtime_1.jsxs)("div", { id: "pokemon-collection", children: [(0, jsx_runtime_1.jsxs)("header", { children: [(0, jsx_runtime_1.jsx)(pokemon_typeahead_1.PokemonTypeahead, { value: selectedPokemon, onChange: setSelectedPokemon }), (0, jsx_runtime_1.jsxs)("select", { value: filter, onChange: (e) => setFilter(e.target.value), children: [(0, jsx_runtime_1.jsx)("option", { value: "all", children: t("show_all") }), (0, jsx_runtime_1.jsx)("option", { value: "locked", children: t("show_locked") }), (0, jsx_runtime_1.jsx)("option", { value: "unlockable", children: t("show_unlockable") }), (0, jsx_runtime_1.jsx)("option", { value: "unlocked", children: t("show_unlocked") })] }), (0, jsx_runtime_1.jsxs)("select", { value: sort, onChange: (e) => setSort(e.target.value), children: [(0, jsx_runtime_1.jsx)("option", { value: "index", children: t("sort_by_index") }), (0, jsx_runtime_1.jsx)("option", { value: "shards", children: t("sort_by_shards") })] }), (0, jsx_runtime_1.jsx)(checkbox_1.Checkbox, { checked: shinyOnly, onToggle: setShinyOnly, label: t("shiny_hunter"), isDark: true })] }), (0, jsx_runtime_1.jsx)("div", { children: (0, jsx_runtime_1.jsxs)(react_tabs_1.Tabs, { children: [(0, jsx_runtime_1.jsxs)(react_tabs_1.TabList, { className: "pokemon-collection-tabs", children: [(0, jsx_runtime_1.jsx)(react_tabs_1.Tab, { children: t("all") }, "title-all"), Object.keys(Synergy_1.Synergy).map((type) => {
                                    return ((0, jsx_runtime_1.jsx)(react_tabs_1.Tab, { children: (0, jsx_runtime_1.jsx)(synergy_icon_1.default, { type: type }) }, "title-" + type));
                                }), (0, jsx_runtime_1.jsx)(react_tabs_1.Tab, { children: (0, jsx_runtime_1.jsx)("img", { src: "assets/unown/unown-qm.png", alt: "?", className: "unown-icon" }) }, "?")] }), ["all"].concat(Object.keys(Synergy_1.Synergy)).map((type) => {
                            return ((0, jsx_runtime_1.jsx)(react_tabs_1.TabPanel, { children: (0, jsx_runtime_1.jsx)(pokemon_carousel_1.default, { type: type, setPokemon: setSelectedPokemon, filter: filter, sort: sort, shinyOnly: shinyOnly }) }, type));
                        }), (0, jsx_runtime_1.jsx)(react_tabs_1.TabPanel, { children: (0, jsx_runtime_1.jsx)(unown_panel_1.default, { setPokemon: setSelectedPokemon, filter: filter, sort: sort, shinyOnly: shinyOnly }) })] }) }), selectedPokemon && ((0, jsx_runtime_1.jsx)(pokemon_emotions_modal_1.default, { pokemon: selectedPokemon, onClose: () => setSelectedPokemon("") }))] }));
}
//# sourceMappingURL=pokemon-collection.js.map