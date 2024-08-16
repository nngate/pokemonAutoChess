"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = SynergyComponent;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_dom_1 = __importDefault(require("react-dom"));
const react_i18next_1 = require("react-i18next");
const react_tooltip_1 = require("react-tooltip");
const Config_1 = require("../../../../../types/Config");
const synergy_icon_1 = __importDefault(require("../icons/synergy-icon"));
const synergy_detail_component_1 = __importDefault(require("./synergy-detail-component"));
function SynergyComponent(props) {
    const { t } = (0, react_i18next_1.useTranslation)();
    const levelReached = Config_1.SynergyTriggers[props.type]
        .filter((n) => n <= props.value)
        .at(-1);
    return ((0, jsx_runtime_1.jsxs)("div", { style: {
            display: "grid",
            gridTemplateColumns: "40px 2ch 1fr",
            alignItems: "center",
            justifyContent: "space-around",
            backgroundColor: props.value >= Config_1.SynergyTriggers[props.type][0]
                ? "var(--color-bg-secondary)"
                : "rgba(84, 89, 107,0)",
            margin: "5px",
            borderRadius: "12px",
            padding: "2px",
            border: props.value >= Config_1.SynergyTriggers[props.type][0]
                ? "var(--border-thin)"
                : "none",
            cursor: "var(--cursor-hover)"
        }, "data-tooltip-id": "detail-" + props.type, children: [react_dom_1.default.createPortal((0, jsx_runtime_1.jsx)(react_tooltip_1.Tooltip, { id: "detail-" + props.type, className: "custom-theme-tooltip", place: "right", "data-tooltip-offset": { bottom: (5 - props.index) * 50 }, children: (0, jsx_runtime_1.jsx)(synergy_detail_component_1.default, { type: props.type, value: props.value }) }), document.body), (0, jsx_runtime_1.jsx)(synergy_icon_1.default, { type: props.type, size: "40px" }), (0, jsx_runtime_1.jsx)("span", { style: {
                    fontSize: "32px",
                    textShadow: "2px 2px 2px #00000080",
                    textAlign: "center"
                }, children: props.value }), (0, jsx_runtime_1.jsxs)("div", { style: {
                    display: "flex",
                    flexFlow: "column",
                    lineHeight: 1.25
                }, children: [(0, jsx_runtime_1.jsx)("div", { style: {
                            display: "flex",
                            justifyContent: "space-evenly"
                        }, children: Config_1.SynergyTriggers[props.type].map((t) => {
                            return ((0, jsx_runtime_1.jsx)("span", { style: {
                                    color: levelReached === t
                                        ? "#f7d51d"
                                        : props.value >= t
                                            ? "#ffffff"
                                            : "#b8b8b8"
                                }, children: t }, t));
                        }) }), (0, jsx_runtime_1.jsx)("p", { style: { margin: "0px", textAlign: "center" }, children: t(`synergy.${props.type}`) })] })] }));
}
//# sourceMappingURL=synergy-component.js.map