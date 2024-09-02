"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IdleState = void 0;
const Game_1 = require("../types/enum/Game");
const Passive_1 = require("../types/enum/Passive");
const pokemon_state_1 = __importDefault(require("./pokemon-state"));
class IdleState extends pokemon_state_1.default {
    update(pokemon, dt, board, weather, player) {
        super.update(pokemon, dt, board, weather, player);
        if (pokemon.status.tree) {
            if (pokemon.pp >= pokemon.maxPP) {
                pokemon.status.tree = false;
                pokemon.toMovingState();
            }
        }
        else if (pokemon.canMove) {
            pokemon.toMovingState();
        }
        if (pokemon.cooldown <= 0) {
            pokemon.cooldown = 500;
            if (pokemon.passive === Passive_1.Passive.SUDOWOODO && pokemon.status.tree) {
                pokemon.addAttack(pokemon.stars === 1 ? 1 : 2, pokemon, 0, false);
            }
        }
        else {
            pokemon.cooldown -= dt;
        }
    }
    onEnter(pokemon) {
        super.onEnter(pokemon);
        if (pokemon.status.tree) {
            pokemon.action = Game_1.PokemonActionState.IDLE;
        }
        else if (pokemon.status.resurecting) {
            pokemon.action = Game_1.PokemonActionState.HURT;
        }
        else {
            pokemon.action = Game_1.PokemonActionState.SLEEP;
        }
        pokemon.cooldown = 0;
    }
    onExit(pokemon) {
        super.onExit(pokemon);
        pokemon.targetX = -1;
        pokemon.targetY = -1;
    }
}
exports.IdleState = IdleState;
//# sourceMappingURL=idle-state.js.map