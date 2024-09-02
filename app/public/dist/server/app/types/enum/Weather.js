"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WeatherEffects = exports.SynergyAssociatedToWeather = exports.WeatherAssociatedToSynergy = exports.PassiveAssociatedToWeather = exports.WeatherPassives = exports.Weather = void 0;
const map_1 = require("../../utils/map");
const Effect_1 = require("./Effect");
const Passive_1 = require("./Passive");
const Synergy_1 = require("./Synergy");
var Weather;
(function (Weather) {
    Weather["SUN"] = "SUN";
    Weather["NIGHT"] = "NIGHT";
    Weather["WINDY"] = "WINDY";
    Weather["MISTY"] = "MISTY";
    Weather["RAIN"] = "RAIN";
    Weather["SNOW"] = "SNOW";
    Weather["STORM"] = "STORM";
    Weather["SANDSTORM"] = "SANDSTORM";
    Weather["BLOODMOON"] = "BLOODMOON";
    Weather["NEUTRAL"] = "NEUTRAL";
})(Weather || (exports.Weather = Weather = {}));
exports.WeatherPassives = new Map([
    [Passive_1.Passive.SUN, Weather.SUN],
    [Passive_1.Passive.RAIN, Weather.RAIN],
    [Passive_1.Passive.SANDSTORM, Weather.SANDSTORM],
    [Passive_1.Passive.MISTY, Weather.MISTY],
    [Passive_1.Passive.SNOW, Weather.SNOW],
    [Passive_1.Passive.STORM, Weather.STORM],
    [Passive_1.Passive.NIGHT, Weather.NIGHT],
    [Passive_1.Passive.WINDY, Weather.WINDY],
    [Passive_1.Passive.AIRLOCK, Weather.NEUTRAL]
]);
exports.PassiveAssociatedToWeather = (0, map_1.reverseMap)(exports.WeatherPassives);
exports.WeatherAssociatedToSynergy = new Map([
    [Synergy_1.Synergy.FIRE, Weather.SUN],
    [Synergy_1.Synergy.WATER, Weather.RAIN],
    [Synergy_1.Synergy.GROUND, Weather.SANDSTORM],
    [Synergy_1.Synergy.FAIRY, Weather.MISTY],
    [Synergy_1.Synergy.ICE, Weather.SNOW],
    [Synergy_1.Synergy.ELECTRIC, Weather.STORM],
    [Synergy_1.Synergy.DARK, Weather.NIGHT],
    [Synergy_1.Synergy.FLYING, Weather.WINDY],
    [Synergy_1.Synergy.WILD, Weather.BLOODMOON],
    [Synergy_1.Synergy.NORMAL, Weather.NEUTRAL]
]);
exports.SynergyAssociatedToWeather = (0, map_1.reverseMap)(exports.WeatherAssociatedToSynergy);
exports.WeatherEffects = new Map([
    [Weather.SUN, Effect_1.Effect.SUN],
    [Weather.RAIN, Effect_1.Effect.RAIN],
    [Weather.SANDSTORM, Effect_1.Effect.SANDSTORM],
    [Weather.MISTY, Effect_1.Effect.MISTY],
    [Weather.SNOW, Effect_1.Effect.SNOW],
    [Weather.STORM, Effect_1.Effect.STORM],
    [Weather.NIGHT, Effect_1.Effect.NIGHT],
    [Weather.WINDY, Effect_1.Effect.WINDY],
    [Weather.BLOODMOON, Effect_1.Effect.BLOODMOON]
]);
//# sourceMappingURL=Weather.js.map