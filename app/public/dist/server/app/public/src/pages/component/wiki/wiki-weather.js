"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = WikiWeather;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_i18next_1 = require("react-i18next");
const react_tooltip_1 = require("react-tooltip");
const precomputed_pokemon_data_1 = require("../../../../../models/precomputed/precomputed-pokemon-data");
const Config_1 = require("../../../../../types/Config");
const Ability_1 = require("../../../../../types/enum/Ability");
const Pokemon_1 = require("../../../../../types/enum/Pokemon");
const Weather_1 = require("../../../../../types/enum/Weather");
const utils_1 = require("../../../utils");
const descriptions_1 = require("../../utils/descriptions");
const jsx_1 = require("../../utils/jsx");
const game_pokemon_detail_1 = require("../game/game-pokemon-detail");
const synergy_icon_1 = __importDefault(require("../icons/synergy-icon"));
const pokemonsByWeather = new Map();
Object.values(Weather_1.Weather).forEach((weather) => {
    pokemonsByWeather.set(weather, getPokemonsInfluencingWeather(weather));
});
function WikiWeather() {
    const { t } = (0, react_i18next_1.useTranslation)();
    return ((0, jsx_runtime_1.jsxs)("div", { id: "wiki-weather", children: [(0, jsx_runtime_1.jsxs)("div", { className: "my-box", style: { marginBottom: "0.5em" }, children: [(0, jsx_runtime_1.jsx)("p", { children: t("weather_dominant_hint") }), (0, jsx_runtime_1.jsx)("p", { children: t("weather_dominant_hint2") })] }), (0, jsx_runtime_1.jsx)("ul", { children: Object.values(Weather_1.Weather).map((weather) => {
                    var _a;
                    return ((0, jsx_runtime_1.jsxs)("li", { className: "my-box", children: [(0, jsx_runtime_1.jsxs)("header", { children: [(0, jsx_runtime_1.jsx)("img", { className: "weather-icon", src: `/assets/icons/weather/${weather.toLowerCase()}.svg` }), (0, jsx_runtime_1.jsx)("h2", { children: t(`weather.${weather}`) }), (0, jsx_runtime_1.jsxs)("span", { style: { display: "flex", alignItems: "center", gap: "4px" }, children: [Config_1.WeatherThreshold[weather], (0, jsx_runtime_1.jsx)(synergy_icon_1.default, { type: Weather_1.SynergyAssociatedToWeather.get(weather) })] })] }), (0, jsx_runtime_1.jsx)("p", { className: "description", children: (0, descriptions_1.addIconsToDescription)(t(`weather_description.${weather}`)) }), (0, jsx_runtime_1.jsx)("ul", { children: ((_a = pokemonsByWeather.get(weather)) !== null && _a !== void 0 ? _a : []).map((p) => ((0, jsx_runtime_1.jsx)("li", { children: (0, jsx_runtime_1.jsxs)("div", { className: (0, jsx_1.cc)("pokemon-portrait", {
                                            additional: p.additional,
                                            regional: p.regional
                                        }), "data-tooltip-id": `pokemon-detail-${p.index}`, children: [(0, jsx_runtime_1.jsx)("img", { src: (0, utils_1.getPortraitSrc)(p.index) }), (0, jsx_runtime_1.jsx)(react_tooltip_1.Tooltip, { id: `pokemon-detail-${p.index}`, className: "custom-theme-tooltip game-pokemon-detail-tooltip", children: (0, jsx_runtime_1.jsx)(game_pokemon_detail_1.GamePokemonDetail, { pokemon: p.name }) })] }, p.name) }, p.index))) })] }, weather));
                }) })] }));
}
function getPokemonsInfluencingWeather(weather) {
    return Object.values(Pokemon_1.Pkm)
        .map((pkm) => (0, precomputed_pokemon_data_1.getPokemonData)(pkm))
        .filter((pkm) => pkm.skill != Ability_1.Ability.DEFAULT &&
        pkm.passive != null &&
        (pkm.passive === Weather_1.PassiveAssociatedToWeather.get(weather) ||
            (pkm.name === Pokemon_1.Pkm.CASTFORM_SUN && weather === Weather_1.Weather.SUN) ||
            (pkm.name === Pokemon_1.Pkm.CASTFORM_RAIN && weather === Weather_1.Weather.RAIN) ||
            (pkm.name === Pokemon_1.Pkm.CASTFORM_HAIL && weather === Weather_1.Weather.SNOW)));
}
//# sourceMappingURL=wiki-weather.js.map