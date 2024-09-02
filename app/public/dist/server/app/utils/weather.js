"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getWeather = getWeather;
const Passive_1 = require("../types/enum/Passive");
const Weather_1 = require("../types/enum/Weather");
const Item_1 = require("../types/enum/Item");
const Config_1 = require("../types/Config");
function getWeather(playerBoard, opponentBoard) {
    var _a;
    function getDominantWeather(count, weathers = [...count.keys()]) {
        const sortedCount = weathers
            .map((w) => { var _a; return [w, (_a = count.get(w)) !== null && _a !== void 0 ? _a : 0]; })
            .sort((a, b) => b[1] - a[1]);
        if (sortedCount.length === 0)
            return null;
        if (sortedCount.length === 1)
            return sortedCount[0][0];
        if (sortedCount.length >= 2 && sortedCount[0][1] === sortedCount[1][1])
            return null;
        return sortedCount[0][0];
    }
    const boardWeatherScore = new Map();
    [playerBoard, opponentBoard].forEach((board) => {
        const playerWeatherScore = new Map();
        board.forEach((pkm) => {
            var _a, _b;
            if (pkm.positionY != 0) {
                if (Weather_1.WeatherPassives.has(pkm.passive)) {
                    const weather = Weather_1.WeatherPassives.get(pkm.passive);
                    boardWeatherScore.set(weather, ((_a = boardWeatherScore.get(weather)) !== null && _a !== void 0 ? _a : 0) + 100);
                    playerWeatherScore.set(weather, ((_b = playerWeatherScore.get(weather)) !== null && _b !== void 0 ? _b : 0) + 100);
                }
                pkm.types.forEach((type) => {
                    var _a, _b, _c, _d, _e, _f, _g, _h;
                    if (Weather_1.WeatherAssociatedToSynergy.has(type)) {
                        const weather = Weather_1.WeatherAssociatedToSynergy.get(type);
                        boardWeatherScore.set(weather, ((_a = boardWeatherScore.get(weather)) !== null && _a !== void 0 ? _a : 0) + 1);
                        pkm.items.forEach((item) => {
                            var _a;
                            if (Item_1.WeatherRocks.includes(item) &&
                                Item_1.SynergyGivenByItem[item] === type) {
                                boardWeatherScore.set(weather, ((_a = boardWeatherScore.get(weather)) !== null && _a !== void 0 ? _a : 0) + 2);
                            }
                        });
                        if (pkm.passive === Passive_1.Passive.SAND_STREAM &&
                            weather === Weather_1.Weather.SANDSTORM) {
                            boardWeatherScore.set(Weather_1.Weather.SANDSTORM, ((_b = boardWeatherScore.get(Weather_1.Weather.SANDSTORM)) !== null && _b !== void 0 ? _b : 0) + 2);
                            playerWeatherScore.set(Weather_1.Weather.SANDSTORM, ((_c = playerWeatherScore.get(Weather_1.Weather.SANDSTORM)) !== null && _c !== void 0 ? _c : 0) + 2);
                        }
                        if (pkm.passive === Passive_1.Passive.DRIZZLE && weather === Weather_1.Weather.RAIN) {
                            boardWeatherScore.set(Weather_1.Weather.RAIN, ((_d = boardWeatherScore.get(Weather_1.Weather.RAIN)) !== null && _d !== void 0 ? _d : 0) + 2);
                            playerWeatherScore.set(Weather_1.Weather.RAIN, ((_e = playerWeatherScore.get(Weather_1.Weather.RAIN)) !== null && _e !== void 0 ? _e : 0) + 2);
                        }
                        if (pkm.passive === Passive_1.Passive.WIND_POWER &&
                            weather === Weather_1.Weather.STORM) {
                            boardWeatherScore.set(Weather_1.Weather.STORM, ((_f = boardWeatherScore.get(Weather_1.Weather.STORM)) !== null && _f !== void 0 ? _f : 0) + 2);
                            playerWeatherScore.set(Weather_1.Weather.STORM, ((_g = playerWeatherScore.get(Weather_1.Weather.STORM)) !== null && _g !== void 0 ? _g : 0) + 2);
                        }
                        if (pkm.passive !== Passive_1.Passive.CASTFORM) {
                            playerWeatherScore.set(weather, ((_h = playerWeatherScore.get(weather)) !== null && _h !== void 0 ? _h : 0) + 1);
                        }
                    }
                });
            }
        });
        board.forEach((pkm) => {
            var _a;
            if (pkm.positionY != 0) {
                if (pkm.passive === Passive_1.Passive.CASTFORM) {
                    const dominant = getDominantWeather(playerWeatherScore, [
                        Weather_1.Weather.SUN,
                        Weather_1.Weather.RAIN,
                        Weather_1.Weather.SNOW
                    ]);
                    if (dominant) {
                        boardWeatherScore.set(dominant, ((_a = boardWeatherScore.get(dominant)) !== null && _a !== void 0 ? _a : 0) + 100);
                    }
                }
            }
        });
    });
    const dominantWeather = getDominantWeather(boardWeatherScore);
    if (dominantWeather &&
        ((_a = boardWeatherScore.get(dominantWeather)) !== null && _a !== void 0 ? _a : 0) >=
            Config_1.WeatherThreshold[dominantWeather]) {
        return dominantWeather;
    }
    return Weather_1.Weather.NEUTRAL;
}
//# sourceMappingURL=weather.js.map