import { Effect } from "./Effect";
import { Passive } from "./Passive";
import { Synergy } from "./Synergy";
export declare enum Weather {
    SUN = "SUN",
    NIGHT = "NIGHT",
    WINDY = "WINDY",
    MISTY = "MISTY",
    RAIN = "RAIN",
    SNOW = "SNOW",
    STORM = "STORM",
    SANDSTORM = "SANDSTORM",
    BLOODMOON = "BLOODMOON",
    NEUTRAL = "NEUTRAL"
}
export declare const WeatherPassives: Map<Passive, Weather>;
export declare const PassiveAssociatedToWeather: Map<Weather, Passive>;
export declare const WeatherAssociatedToSynergy: Map<Synergy, Weather>;
export declare const SynergyAssociatedToWeather: Map<Weather, Synergy>;
export declare const WeatherEffects: Map<Weather, Effect>;
