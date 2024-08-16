"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = MetaReport;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_tabs_1 = require("react-tabs");
const react_i18next_1 = require("react-i18next");
const composition_report_1 = require("./composition-report");
const item_report_1 = require("./item-report");
require("./meta-report.css");
const pokemon_report_1 = require("./pokemon-report");
function MetaReport() {
    const { t } = (0, react_i18next_1.useTranslation)();
    return ((0, jsx_runtime_1.jsx)("div", { id: "meta-report", children: (0, jsx_runtime_1.jsxs)(react_tabs_1.Tabs, { children: [(0, jsx_runtime_1.jsxs)(react_tabs_1.TabList, { children: [(0, jsx_runtime_1.jsx)(react_tabs_1.Tab, { children: t("meta_report") }, "team-comps"), (0, jsx_runtime_1.jsx)(react_tabs_1.Tab, { children: t("item_report") }, "items"), (0, jsx_runtime_1.jsx)(react_tabs_1.Tab, { children: t("pokemon_report") }, "pokemons")] }), (0, jsx_runtime_1.jsx)(react_tabs_1.TabPanel, { children: (0, jsx_runtime_1.jsx)(composition_report_1.CompositionReport, {}) }, "team-comps-panel"), (0, jsx_runtime_1.jsx)(react_tabs_1.TabPanel, { children: (0, jsx_runtime_1.jsx)(item_report_1.ItemReport, {}) }), (0, jsx_runtime_1.jsx)(react_tabs_1.TabPanel, { children: (0, jsx_runtime_1.jsx)(pokemon_report_1.PokemonReport, {}) })] }) }));
}
//# sourceMappingURL=meta-report.js.map