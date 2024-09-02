"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = KeybindInfo;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const react_i18next_1 = require("react-i18next");
const preferences_1 = require("../../../preferences");
const game_1 = require("../../game");
const jsx_1 = require("../../utils/jsx");
require("./keybind-info.css");
function KeybindInfo() {
    const { t } = (0, react_i18next_1.useTranslation)();
    const preferences = (0, preferences_1.loadPreferences)();
    const [keyRemapped, setKeyRemapped] = (0, react_1.useState)(null);
    function onKeydown(e) {
        if (keyRemapped === null)
            return;
        const key = e.key.toUpperCase();
        if (key === "ESCAPE") {
            setKeyRemapped(null);
            return;
        }
        preferences.keybindings[keyRemapped] = key;
        (0, preferences_1.savePreferences)({ keybindings: preferences.keybindings });
        setKeyRemapped(null);
        const gameScene = (0, game_1.getGameScene)();
        if (gameScene)
            gameScene.registerKeys();
    }
    (0, react_1.useEffect)(() => {
        window.addEventListener("keydown", onKeydown);
        return () => {
            window.removeEventListener("keydown", onKeydown);
        };
    }, [onKeydown]);
    return ((0, jsx_runtime_1.jsxs)("div", { className: "keybind-container", children: [(0, jsx_runtime_1.jsx)("h2", { children: t("key_bindings") }), (0, jsx_runtime_1.jsxs)("dl", { children: [(0, jsx_runtime_1.jsx)("dt", { children: (0, jsx_runtime_1.jsx)("kbd", { className: (0, jsx_1.cc)("remappable", { remapping: keyRemapped === "sell" }), onClick: () => setKeyRemapped("sell"), children: keyRemapped === "sell" ? "?" : preferences.keybindings.sell }) }), (0, jsx_runtime_1.jsx)("dd", { children: t("key_desc_sell") }), (0, jsx_runtime_1.jsx)("dt", { children: (0, jsx_runtime_1.jsx)("kbd", { className: (0, jsx_1.cc)("remappable", {
                                remapping: keyRemapped === "buy_xp"
                            }), onClick: () => setKeyRemapped("buy_xp"), children: keyRemapped === "buy_xp" ? "?" : preferences.keybindings.buy_xp }) }), (0, jsx_runtime_1.jsx)("dd", { children: t("key_desc_buy_xp") }), (0, jsx_runtime_1.jsx)("dt", { children: (0, jsx_runtime_1.jsx)("kbd", { className: (0, jsx_1.cc)("remappable", {
                                remapping: keyRemapped === "refresh"
                            }), onClick: () => setKeyRemapped("refresh"), children: keyRemapped === "refresh" ? "?" : preferences.keybindings.refresh }) }), (0, jsx_runtime_1.jsx)("dd", { children: t("key_desc_refresh") }), (0, jsx_runtime_1.jsx)("dt", { children: (0, jsx_runtime_1.jsx)("kbd", { className: (0, jsx_1.cc)("remappable", { remapping: keyRemapped === "emote" }), onClick: () => setKeyRemapped("emote"), children: keyRemapped === "emote" ? "?" : preferences.keybindings.emote }) }), (0, jsx_runtime_1.jsx)("dd", { children: t("key_desc_avatar_anim") }), (0, jsx_runtime_1.jsx)("dt", { children: (0, jsx_runtime_1.jsx)("kbd", { children: "Ctrl" }) }), (0, jsx_runtime_1.jsx)("dd", { children: t("key_desc_avatar_emotes") }), (0, jsx_runtime_1.jsxs)("dt", { children: [(0, jsx_runtime_1.jsx)("kbd", { children: "Ctrl" }), "+", (0, jsx_runtime_1.jsx)("kbd", { children: "1" }), "..", (0, jsx_runtime_1.jsx)("kbd", { children: "9" })] }), (0, jsx_runtime_1.jsxs)("dd", { children: [t("key_desc_avatar_show_emote"), " 1..9"] })] })] }));
}
//# sourceMappingURL=keybind-info.js.map