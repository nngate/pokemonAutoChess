"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = WikiData;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_i18next_1 = require("react-i18next");
const Config_1 = require("../../../../../types/Config");
const Game_1 = require("../../../../../types/enum/Game");
const Strings_1 = require("../../../../../types/strings/Strings");
const Item_1 = require("../../../../../types/enum/Item");
function WikiData() {
    const { t } = (0, react_i18next_1.useTranslation)();
    const rarities = [Game_1.Rarity.COMMON, Game_1.Rarity.UNCOMMON, Game_1.Rarity.RARE, Game_1.Rarity.EPIC, Game_1.Rarity.ULTRA];
    const rarities_with_special = rarities.concat([Game_1.Rarity.SPECIAL]);
    const rarities_all = rarities.concat([Game_1.Rarity.UNIQUE, Game_1.Rarity.LEGENDARY, Game_1.Rarity.HATCH, Game_1.Rarity.SPECIAL]);
    const percentage = new Intl.NumberFormat(navigator.language, { style: "percent", maximumSignificantDigits: 2 });
    return ((0, jsx_runtime_1.jsxs)("div", { id: "wiki-data", children: [(0, jsx_runtime_1.jsx)("p", { children: t("wiki.data_description") }), (0, jsx_runtime_1.jsx)("h2", { children: t("wiki.tiers_by_level_title") }), (0, jsx_runtime_1.jsx)("p", { children: t("wiki.tiers_by_level_description") }), (0, jsx_runtime_1.jsxs)("table", { id: "wiki-data-tiers-by-level", children: [(0, jsx_runtime_1.jsxs)("thead", { children: [(0, jsx_runtime_1.jsx)("th", { children: t("level") }), rarities.map((r, i) => (0, jsx_runtime_1.jsx)("th", { style: { color: Config_1.RarityColor[rarities[i]] }, children: t("rarity." + r) }))] }), (0, jsx_runtime_1.jsx)("tbody", { children: Object.entries(Config_1.RarityProbabilityPerLevel).map(([level, odds], i) => (0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("td", { children: level }), Object.entries(odds).map(([rarity, probability], i) => ((0, jsx_runtime_1.jsx)("td", { style: { color: Config_1.RarityColor[rarities[i]] }, children: percentage.format(probability) }, rarity)))] })) })] }), (0, jsx_runtime_1.jsx)("h2", { children: t("wiki.pool_size_per_category") }), (0, jsx_runtime_1.jsx)("p", { children: t("wiki.pool_size_per_category_description") }), (0, jsx_runtime_1.jsxs)("table", { id: "wiki-data-pool-size-per-category", children: [(0, jsx_runtime_1.jsxs)("thead", { children: [(0, jsx_runtime_1.jsx)("tr", { children: rarities.map((r, i) => (0, jsx_runtime_1.jsx)("th", { style: { color: Config_1.RarityColor[rarities[i]] }, colSpan: 2, children: t("rarity." + r) })) }), (0, jsx_runtime_1.jsx)("tr", { children: rarities.map((r, i) => (0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsxs)("th", { children: [(0, jsx_runtime_1.jsx)("img", { src: "assets/ui/star_empty.svg", height: "16" }, "2s1"), (0, jsx_runtime_1.jsx)("img", { src: "assets/ui/star_empty.svg", height: "16" }, "2s2")] }), (0, jsx_runtime_1.jsxs)("th", { children: [(0, jsx_runtime_1.jsx)("img", { src: "assets/ui/star_empty.svg", height: "16" }, "3s1"), (0, jsx_runtime_1.jsx)("img", { src: "assets/ui/star_empty.svg", height: "16" }, "3s2"), (0, jsx_runtime_1.jsx)("img", { src: "assets/ui/star_empty.svg", height: "16" }, "3s3")] })] })) })] }), (0, jsx_runtime_1.jsx)("tbody", { children: (0, jsx_runtime_1.jsx)("tr", { children: rarities.map((r, i) => ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)("td", { style: { color: Config_1.RarityColor[rarities[i]] }, children: Config_1.PoolSize[r][1] }), (0, jsx_runtime_1.jsx)("td", { style: { color: Config_1.RarityColor[rarities[i]] }, children: Config_1.PoolSize[r][2] })] }))) }) })] }), (0, jsx_runtime_1.jsx)("h2", { children: t("wiki.experience_by_rank") }), (0, jsx_runtime_1.jsx)("p", { children: t("wiki.experience_by_rank_description") }), (0, jsx_runtime_1.jsxs)("table", { id: "wiki-data-experience-by-rank", children: [(0, jsx_runtime_1.jsxs)("thead", { children: [(0, jsx_runtime_1.jsx)("th", { children: t("rank") }), [1, 2, 3, 4, 5, 6, 7, 8].map(rank => (0, jsx_runtime_1.jsx)("th", { children: (0, Strings_1.getRankLabel)(rank) }))] }), (0, jsx_runtime_1.jsx)("tbody", { children: (0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("td", { children: t("experience") }), [1, 2, 3, 4, 5, 6, 7, 8].map((rank, i) => (0, jsx_runtime_1.jsx)("th", { children: Config_1.ExpPlace[i] }))] }) })] }), (0, jsx_runtime_1.jsx)("h2", { children: t("wiki.booster_rarity_probability") }), (0, jsx_runtime_1.jsx)("p", { children: t("wiki.booster_rarity_probability_description") }), (0, jsx_runtime_1.jsxs)("table", { id: "wiki-data-booster-rarity-probability", children: [(0, jsx_runtime_1.jsx)("thead", { children: rarities_all.map((r, i) => (0, jsx_runtime_1.jsx)("th", { style: { color: Config_1.RarityColor[rarities_all[i]] }, children: t("rarity." + r) })) }), (0, jsx_runtime_1.jsx)("tbody", { children: (0, jsx_runtime_1.jsx)("tr", { children: rarities_all.map((r, i) => (0, jsx_runtime_1.jsx)("td", { style: { color: Config_1.RarityColor[rarities_all[i]] }, children: percentage.format(Config_1.BoosterRarityProbability[r]) })) }) })] }), (0, jsx_runtime_1.jsx)("h2", { children: t("wiki.fishing_rarity_rate") }), (0, jsx_runtime_1.jsx)("p", { children: t("wiki.fishing_rarity_rate_description") }), (0, jsx_runtime_1.jsxs)("table", { id: "wiki-data-fishing-rarity-rate", children: [(0, jsx_runtime_1.jsxs)("thead", { children: [(0, jsx_runtime_1.jsx)("th", {}), rarities_with_special.map((r, i) => (0, jsx_runtime_1.jsx)("th", { style: { color: Config_1.RarityColor[rarities_with_special[i]] }, children: t("rarity." + r) }))] }), (0, jsx_runtime_1.jsx)("tbody", { children: [...Item_1.FishingRods].reverse().map((rod, i) => (0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("td", { children: t("item." + rod) }), rarities_with_special.map((r, i) => { var _a; return (0, jsx_runtime_1.jsx)("td", { style: { color: Config_1.RarityColor[rarities_with_special[i]] }, children: percentage.format((_a = Config_1.FishRarityProbability[rod][r]) !== null && _a !== void 0 ? _a : 0) }); })] })) })] }), (0, jsx_runtime_1.jsx)("h2", { children: t("wiki.special_pokemons_rate") }), (0, jsx_runtime_1.jsxs)("p", { children: [t("wiki.ditto_rate"), ": ", percentage.format(Config_1.DITTO_RATE)] }), (0, jsx_runtime_1.jsxs)("p", { children: [t("wiki.kecleon_rate"), ": ", percentage.format(Config_1.KECLEON_RATE)] }), (0, jsx_runtime_1.jsxs)("p", { children: [t("wiki.arceus_rate"), ": ", percentage.format(Config_1.ARCEUS_RATE)] })] }));
}
//# sourceMappingURL=wiki-data.js.map