"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Game_1 = require("../types/enum/Game");
const Item_1 = require("../types/enum/Item");
const distance_1 = require("../utils/distance");
const random_1 = require("../utils/random");
const abilities_1 = require("./abilities/abilities");
const pokemon_state_1 = __importDefault(require("./pokemon-state"));
const simulation_command_1 = require("./simulation-command");
const animation_manager_1 = require("../public/src/game/animation-manager");
class AttackingState extends pokemon_state_1.default {
    constructor() {
        super(...arguments);
        this.name = "attacking";
    }
    update(pokemon, dt, board, weather, player) {
        super.update(pokemon, dt, board, weather, player);
        if (pokemon.cooldown <= 0) {
            pokemon.cooldown = pokemon.getAttackDelay();
            let target = board.getValue(pokemon.targetX, pokemon.targetY);
            let targetCoordinate = {
                x: pokemon.targetX,
                y: pokemon.targetY
            };
            if (pokemon.status.confusion) {
                targetCoordinate = this.getTargetCoordinateWhenConfused(pokemon, board);
            }
            else if (!(target &&
                target.team !== pokemon.team &&
                target.isTargettable &&
                (0, distance_1.distanceC)(pokemon.positionX, pokemon.positionY, targetCoordinate.x, targetCoordinate.y) <= pokemon.range)) {
                targetCoordinate = this.getNearestTargetAtRangeCoordinates(pokemon, board);
                if (targetCoordinate) {
                    target = board.getValue(targetCoordinate.x, targetCoordinate.y);
                }
            }
            if (!target || !targetCoordinate || pokemon.status.charm) {
                const targetAtSight = this.getNearestTargetAtSightCoordinates(pokemon, board);
                if (targetAtSight) {
                    pokemon.toMovingState();
                }
            }
            else if (target &&
                pokemon.pp >= pokemon.maxPP &&
                !pokemon.status.silence) {
                let crit = false;
                if (pokemon.items.has(Item_1.Item.REAPER_CLOTH)) {
                    crit = (0, random_1.chance)(pokemon.critChance / 100);
                }
                abilities_1.AbilityStrategies[pokemon.skill].process(pokemon, this, board, target, crit);
            }
            else {
                pokemon.count.attackCount++;
                pokemon.targetX = targetCoordinate.x;
                pokemon.targetY = targetCoordinate.y;
                pokemon.orientation = board.orientation(pokemon.positionX, pokemon.positionY, targetCoordinate.x, targetCoordinate.y, pokemon, target);
                const { delayBeforeShoot, travelTime } = (0, animation_manager_1.getAttackTimings)(pokemon);
                pokemon.commands.push(new simulation_command_1.AttackCommand(delayBeforeShoot + travelTime, pokemon, target, board));
            }
        }
        else {
            pokemon.cooldown = Math.max(0, pokemon.cooldown - dt);
        }
    }
    onEnter(pokemon) {
        super.onEnter(pokemon);
        pokemon.action = Game_1.PokemonActionState.ATTACK;
        pokemon.cooldown = 0;
    }
    onExit(pokemon) {
        super.onExit(pokemon);
        pokemon.targetX = -1;
        pokemon.targetY = -1;
    }
}
exports.default = AttackingState;
//# sourceMappingURL=attacking-state.js.map