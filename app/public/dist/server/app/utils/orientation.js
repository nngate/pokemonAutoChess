"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrientationArray = exports.OrientationVector = void 0;
exports.effectInLine = effectInLine;
const pokemon_entity_1 = require("../core/pokemon-entity");
const Game_1 = require("../types/enum/Game");
exports.OrientationVector = {
    [Game_1.Orientation.UP]: [0, 1],
    [Game_1.Orientation.UPRIGHT]: [1, 1],
    [Game_1.Orientation.RIGHT]: [1, 0],
    [Game_1.Orientation.DOWNRIGHT]: [1, -1],
    [Game_1.Orientation.DOWN]: [0, -1],
    [Game_1.Orientation.DOWNLEFT]: [-1, -1],
    [Game_1.Orientation.LEFT]: [-1, 0],
    [Game_1.Orientation.UPLEFT]: [-1, 1]
};
exports.OrientationArray = [
    Game_1.Orientation.UP,
    Game_1.Orientation.UPRIGHT,
    Game_1.Orientation.RIGHT,
    Game_1.Orientation.DOWNRIGHT,
    Game_1.Orientation.DOWN,
    Game_1.Orientation.DOWNLEFT,
    Game_1.Orientation.LEFT,
    Game_1.Orientation.UPLEFT
];
function effectInLine(board, pokemon, target, effect) {
    const orientation = target instanceof pokemon_entity_1.PokemonEntity
        ? board.orientation(pokemon.positionX, pokemon.positionY, target.positionX, target.positionY, pokemon, target)
        : target;
    const targetsHit = new Set();
    const applyEffect = (x, y) => {
        const targetInLine = board.getValue(x, y);
        if (targetInLine != null) {
            effect(targetInLine);
            targetsHit.add(targetInLine);
        }
    };
    switch (orientation) {
        case Game_1.Orientation.UP:
            for (let y = pokemon.positionY + 1; y < board.rows; y++) {
                applyEffect(pokemon.positionX, y);
            }
            break;
        case Game_1.Orientation.UPRIGHT:
            for (let x = pokemon.positionX + 1, y = pokemon.positionY + 1; x < board.columns && y < board.rows; x++, y++) {
                applyEffect(x, y);
            }
            break;
        case Game_1.Orientation.RIGHT:
            for (let x = pokemon.positionX + 1; x < board.rows; x++) {
                applyEffect(x, pokemon.positionY);
            }
            break;
        case Game_1.Orientation.DOWNRIGHT:
            for (let x = pokemon.positionX + 1, y = pokemon.positionY - 1; x < board.columns && y >= 0; x++, y--) {
                applyEffect(x, y);
            }
            break;
        case Game_1.Orientation.DOWN:
            for (let y = pokemon.positionY - 1; y >= 0; y--) {
                applyEffect(pokemon.positionX, y);
            }
            break;
        case Game_1.Orientation.DOWNLEFT:
            for (let x = pokemon.positionX - 1, y = pokemon.positionY - 1; x >= 0 && y >= 0; x--, y--) {
                applyEffect(x, y);
            }
            break;
        case Game_1.Orientation.LEFT:
            for (let x = pokemon.positionX - 1; x >= 0; x--) {
                applyEffect(x, pokemon.positionY);
            }
            break;
        case Game_1.Orientation.UPLEFT:
            for (let x = pokemon.positionX - 1, y = pokemon.positionY + 1; x >= 0 && y < board.rows; x--, y++) {
                applyEffect(x, y);
            }
            break;
    }
    if (target instanceof pokemon_entity_1.PokemonEntity && targetsHit.has(target) === false) {
        effect(target);
    }
}
//# sourceMappingURL=orientation.js.map