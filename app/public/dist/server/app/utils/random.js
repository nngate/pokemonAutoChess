"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.chance = chance;
exports.coinflip = coinflip;
exports.randomBetween = randomBetween;
exports.pickRandomIn = pickRandomIn;
exports.pickNRandomIn = pickNRandomIn;
exports.shuffleArray = shuffleArray;
function chance(probability) {
    return Math.random() < probability;
}
function coinflip() {
    return Math.random() < 0.5;
}
function randomBetween(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
function pickRandomIn(list) {
    if (!Array.isArray(list))
        return pickRandomIn(Object.values(list));
    return list[Math.floor(Math.random() * list.length)];
}
function pickNRandomIn(array, number) {
    const selection = [], options = [...array];
    shuffleArray(options);
    while (selection.length < number && options.length > 0) {
        selection.push(options.pop());
    }
    return selection;
}
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        const temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}
//# sourceMappingURL=random.js.map