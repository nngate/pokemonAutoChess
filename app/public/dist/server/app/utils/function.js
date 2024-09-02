"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.repeat = void 0;
exports.debounce = debounce;
exports.throttle = throttle;
function debounce(fn, delayInMs = 300) {
    let timeoutId;
    return function (...args) {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => fn.apply(this, args), delayInMs);
    };
}
function throttle(fn, delayInMs) {
    let inThrottle;
    let lastResult;
    return function (...args) {
        const context = this;
        if (!inThrottle) {
            inThrottle = true;
            setTimeout(() => (inThrottle = false), delayInMs);
            lastResult = fn.apply(context, args);
        }
        return lastResult;
    };
}
const repeat = (n) => (cb) => {
    for (let i = 0; i < n; i++) {
        cb(i);
    }
};
exports.repeat = repeat;
//# sourceMappingURL=function.js.map