"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = GamePlayerDetail;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const react_i18next_1 = require("react-i18next");
const Config_1 = require("../../../../../types/Config");
const Game_1 = require("../../../../../types/enum/Game");
const utils_1 = require("../../../utils");
const life_1 = require("../icons/life");
const money_1 = require("../icons/money");
function GamePlayerDetail(props) {
    const { t } = (0, react_i18next_1.useTranslation)();
    const synergyList = (0, react_1.useMemo)(() => Object.entries(props.synergies)
        .filter(([syn, val]) => val >= Config_1.SynergyTriggers[syn][0])
        .map(([syn]) => syn), [props.synergies]);
    return ((0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsxs)("div", { style: {
                    display: "flex",
                    gap: "1em",
                    alignItems: "center"
                }, children: [(0, jsx_runtime_1.jsx)("span", { className: "player-name", children: props.name }), (0, jsx_runtime_1.jsxs)("span", { children: [t("lvl"), " ", props.level] }), (0, jsx_runtime_1.jsx)("span", { children: (0, jsx_runtime_1.jsx)(life_1.Life, { value: props.life }) }), (0, jsx_runtime_1.jsx)("span", { children: (0, jsx_runtime_1.jsx)(money_1.Money, { value: props.money }) })] }), (0, jsx_runtime_1.jsx)("div", { style: { display: "flex", justifyContent: "start" }, children: props.history.slice(-5).map((record, i) => {
                    return ((0, jsx_runtime_1.jsxs)("div", { style: {
                            display: "flex",
                            justifyContent: "space-around",
                            alignItems: "center",
                            flexFlow: "column"
                        }, children: [(0, jsx_runtime_1.jsx)("img", { style: {
                                    border: record.result === Game_1.BattleResult.WIN
                                        ? "4px solid #4aa52e"
                                        : record.result === Game_1.BattleResult.DRAW
                                            ? "4px solid #cc6a28"
                                            : "4px solid #8c2022",
                                    marginLeft: "6px",
                                    borderRadius: "12px"
                                }, src: (0, utils_1.getAvatarSrc)(record.avatar) }), (0, jsx_runtime_1.jsx)("p", { children: (record.id === "pve" ? t(record.name) : record.name).slice(0, 5) })] }, `${record.name}${i}_game-player-detail`));
                }) }), (0, jsx_runtime_1.jsx)("div", { style: { display: "flex", justifyContent: "start" }, children: synergyList.map((synergy, i) => {
                    return ((0, jsx_runtime_1.jsx)("div", { style: {
                            display: "flex",
                            justifyContent: "space-around",
                            alignItems: "center",
                            flexFlow: "column"
                        }, children: (0, jsx_runtime_1.jsx)("img", { src: `assets/types/${synergy}.svg`, alt: synergy, title: synergy, className: "synergy-icon" }) }, `${props.name}_${synergy}${i}_game-player-detail`));
                }) })] }));
}
//# sourceMappingURL=game-player-detail.js.map