"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = GameRefresh;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_i18next_1 = require("react-i18next");
const game_1 = require("../../game");
const money_1 = require("../icons/money");
function GameRefresh() {
    const { t } = (0, react_i18next_1.useTranslation)();
    return ((0, jsx_runtime_1.jsxs)("button", { className: "bubbly blue refresh-button", title: t("refresh_gold_hint"), onClick: () => {
            var _a;
            (_a = (0, game_1.getGameScene)()) === null || _a === void 0 ? void 0 : _a.refreshShop();
        }, children: [(0, jsx_runtime_1.jsx)("img", { src: `/assets/ui/refresh.svg` }), (0, jsx_runtime_1.jsx)(money_1.Money, { value: t("refresh") + " 1" })] }));
}
//# sourceMappingURL=game-refresh.js.map