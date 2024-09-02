"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fpsToDuration = exports.average = exports.roundTo2Digits = exports.clamp = exports.max = exports.min = void 0;
const min = (minimum) => (value) => Math.max(minimum, value);
exports.min = min;
const max = (maximum) => (value) => Math.min(maximum, value);
exports.max = max;
const clamp = (num, min, max) => Math.min(Math.max(num, min), max);
exports.clamp = clamp;
const roundTo2Digits = (value) => parseFloat(value.toFixed(2));
exports.roundTo2Digits = roundTo2Digits;
const average = (...values) => {
    const sum = values.reduce((a, b) => a + b, 0);
    return sum / values.length;
};
exports.average = average;
const fpsToDuration = (targetFramesPerSecond) => (nbFrames) => Math.round(nbFrames * (1000 / targetFramesPerSecond));
exports.fpsToDuration = fpsToDuration;
//# sourceMappingURL=number.js.map