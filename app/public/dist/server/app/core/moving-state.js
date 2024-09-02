"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const types_1 = require("../types");
const Effect_1 = require("../types/enum/Effect");
const Game_1 = require("../types/enum/Game");
const Passive_1 = require("../types/enum/Passive");
const Synergy_1 = require("../types/enum/Synergy");
const distance_1 = require("../utils/distance");
const pokemon_entity_1 = require("./pokemon-entity");
const pokemon_state_1 = __importDefault(require("./pokemon-state"));
class MovingState extends pokemon_state_1.default {
    update(pokemon, dt, board, weather, player) {
        super.update(pokemon, dt, board, weather, player);
        if (pokemon.cooldown <= 0) {
            pokemon.cooldown = 500 / (0, pokemon_entity_1.getMoveSpeed)(pokemon, weather);
            const targetAtRange = this.getNearestTargetAtRangeCoordinates(pokemon, board);
            if (pokemon.status.charm && pokemon.canMove) {
                if (pokemon.status.charmOrigin &&
                    (0, distance_1.distanceC)(pokemon.positionX, pokemon.positionY, pokemon.status.charmOrigin.positionX, pokemon.status.charmOrigin.positionY) > 1) {
                    this.move(pokemon, board, {
                        x: pokemon.status.charmOrigin.positionX,
                        y: pokemon.status.charmOrigin.positionY
                    });
                }
            }
            else if (targetAtRange) {
                pokemon.toAttackingState();
            }
            else {
                const targetAtSight = this.getNearestTargetAtSightCoordinates(pokemon, board);
                if (targetAtSight && pokemon.canMove) {
                    this.move(pokemon, board, targetAtSight);
                }
            }
        }
        else {
            pokemon.cooldown = Math.max(0, pokemon.cooldown - dt);
            if (pokemon.status.skydiving && pokemon.cooldown <= 0) {
                pokemon.status.skydiving = false;
            }
        }
    }
    move(pokemon, board, coordinates) {
        let x = undefined;
        let y = undefined;
        if (pokemon.types.has(Synergy_1.Synergy.DARK) &&
            pokemon.baseRange === 1 &&
            pokemon.passive !== Passive_1.Passive.GUZZLORD &&
            !pokemon.status.locked) {
            const farthestCoordinate = board.getFarthestTargetCoordinateAvailablePlace(pokemon);
            if (farthestCoordinate) {
                x = farthestCoordinate.x;
                y = farthestCoordinate.y;
                if (pokemon.passive === Passive_1.Passive.STENCH) {
                    board
                        .getCellsBetween(x, y, pokemon.positionX, pokemon.positionY)
                        .forEach((cell) => {
                        if (cell.x !== x || cell.y !== y) {
                            pokemon.simulation.room.broadcast(types_1.Transfer.BOARD_EVENT, {
                                simulationId: pokemon.simulation.id,
                                type: Game_1.BoardEvent.POISON_GAS,
                                x: cell.x,
                                y: cell.y
                            });
                            board.effects[board.columns * cell.y + cell.x] =
                                Effect_1.Effect.POISON_GAS;
                        }
                    });
                }
                board.swapValue(pokemon.positionX, pokemon.positionY, x, y);
                pokemon.orientation = board.orientation(x, y, pokemon.targetX, pokemon.targetY, pokemon, undefined);
            }
        }
        else {
            const cells = board.getAdjacentCells(pokemon.positionX, pokemon.positionY);
            let distance = 999;
            cells.forEach((cell) => {
                if (cell.value === undefined) {
                    const candidateDistance = (0, distance_1.distanceC)(coordinates.x, coordinates.y, cell.x, cell.y);
                    if (candidateDistance < distance) {
                        distance = candidateDistance;
                        x = cell.x;
                        y = cell.y;
                    }
                }
            });
            if (x !== undefined && y !== undefined) {
                pokemon.orientation = board.orientation(pokemon.positionX, pokemon.positionY, x, y, pokemon, undefined);
                board.swapValue(pokemon.positionX, pokemon.positionY, x, y);
            }
        }
    }
    onEnter(pokemon) {
        super.onEnter(pokemon);
        pokemon.action = Game_1.PokemonActionState.WALK;
        pokemon.cooldown = 0;
    }
    onExit(pokemon) {
        super.onExit(pokemon);
    }
}
exports.default = MovingState;
//# sourceMappingURL=moving-state.js.map