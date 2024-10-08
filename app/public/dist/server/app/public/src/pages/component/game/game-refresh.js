"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = GameRefresh;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_i18next_1 = require("react-i18next");
const hooks_1 = require("../../../hooks");
const game_1 = require("../../game");
const jsx_1 = require("../../utils/jsx");
const money_1 = require("../icons/money");
function GameRefresh() {
    const { t } = (0, react_i18next_1.useTranslation)();
    const shopFreeRolls = (0, hooks_1.useAppSelector)((state) => state.game.shopFreeRolls);
    const cost = shopFreeRolls > 0 ? 0 : 1;
    return ((0, jsx_runtime_1.jsxs)("button", { className: (0, jsx_1.cc)("bubbly blue refresh-button", { shimmer: shopFreeRolls > 0 }), title: t("refresh_gold_hint"), onClick: () => {
            var _a;
            (_a = (0, game_1.getGameScene)()) === null || _a === void 0 ? void 0 : _a.refreshShop();
        }, children: [(0, jsx_runtime_1.jsx)("img", { src: `/assets/ui/refresh.svg` }), cost > 0 ? (0, jsx_runtime_1.jsx)(money_1.Money, { value: `${t("refresh")} ${cost}` }) : `${t("refresh")} (${shopFreeRolls})`] }));
}
//# sourceMappingURL=game-refresh.js.map