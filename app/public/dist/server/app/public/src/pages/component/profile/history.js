"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = History;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_i18next_1 = require("react-i18next");
const synergies_1 = require("../../../../../models/colyseus-models/synergies");
const pokemon_factory_1 = __importDefault(require("../../../../../models/pokemon-factory"));
const Config_1 = require("../../../../../types/Config");
const date_1 = require("../../utils/date");
const team_1 = __importDefault(require("../after/team"));
const synergy_icon_1 = __importDefault(require("../icons/synergy-icon"));
const elo_badge_1 = require("./elo-badge");
require("./history.css");
function History(props) {
    const { t } = (0, react_i18next_1.useTranslation)();
    return ((0, jsx_runtime_1.jsxs)("article", { className: "game-history-list", children: [(0, jsx_runtime_1.jsx)("h2", { children: t("game_history") }), (0, jsx_runtime_1.jsxs)("div", { children: [(!props.history || props.history.length === 0) && ((0, jsx_runtime_1.jsx)("p", { children: t("no_history_found") })), props.history &&
                        props.history.map((r) => ((0, jsx_runtime_1.jsxs)("div", { className: "my-box game-history", children: [(0, jsx_runtime_1.jsxs)("span", { className: "top", children: [t("top"), " ", r.rank] }), (0, jsx_runtime_1.jsx)(elo_badge_1.EloBadge, { elo: r.elo }), (0, jsx_runtime_1.jsx)("ul", { className: "synergies", children: getTopSynergies(r.pokemons.map(p => p)).map(([type, value]) => ((0, jsx_runtime_1.jsxs)("li", { children: [(0, jsx_runtime_1.jsx)(synergy_icon_1.default, { type: type }), (0, jsx_runtime_1.jsx)("span", { children: value })] }, r.time + type))) }), (0, jsx_runtime_1.jsx)("p", { className: "date", children: (0, date_1.formatDate)(r.time) }), (0, jsx_runtime_1.jsx)(team_1.default, { team: r.pokemons.map(p => p) })] }, r.time)))] })] }));
}
function getTopSynergies(team) {
    const synergies = (0, synergies_1.computeSynergies)(team.map((pkmRecord) => {
        const pkm = pokemon_factory_1.default.createPokemonFromName(pkmRecord.name);
        pkm.positionY = 1;
        pkmRecord.items.forEach((item) => {
            pkm.items.add(item);
        });
        return pkm;
    }));
    const topSynergies = [...synergies.entries()]
        .sort((a, b) => {
        const aReachedTrigger = a[1] >= Config_1.SynergyTriggers[a[0]][0];
        const bReachedTrigger = b[1] >= Config_1.SynergyTriggers[b[0]][0];
        return aReachedTrigger && !bReachedTrigger
            ? -1
            : bReachedTrigger && !aReachedTrigger
                ? +1
                : b[1] - a[1];
    })
        .slice(0, 3);
    return topSynergies;
}
//# sourceMappingURL=history.js.map