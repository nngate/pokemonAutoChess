"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AttackCommand = exports.AbilityCommand = exports.SimulationCommand = void 0;
const types_1 = require("../types");
const Effect_1 = require("../types/enum/Effect");
const Game_1 = require("../types/enum/Game");
class SimulationCommand {
    constructor(delay) {
        this.executed = false;
        this.delay = delay;
    }
    execute() { }
    update(dt) {
        this.delay -= dt;
        if (this.delay < 0) {
            this.execute();
            this.executed = true;
        }
    }
}
exports.SimulationCommand = SimulationCommand;
class AbilityCommand extends SimulationCommand {
    constructor(delayedFunction, delay) {
        super(delay);
        this.delayedFunction = delayedFunction;
    }
    execute() {
        super.execute();
        this.delayedFunction();
    }
}
exports.AbilityCommand = AbilityCommand;
class AttackCommand extends SimulationCommand {
    constructor(delay, pokemon, board, targetCoordinate) {
        super(delay);
        this.pokemon = pokemon;
        this.board = board;
        this.targetCoordinate = targetCoordinate;
    }
    execute() {
        this.pokemon.state.attack(this.pokemon, this.board, this.targetCoordinate);
        if (this.pokemon.effects.has(Effect_1.Effect.RISING_VOLTAGE) ||
            this.pokemon.effects.has(Effect_1.Effect.OVERDRIVE) ||
            this.pokemon.effects.has(Effect_1.Effect.POWER_SURGE)) {
            let isTripleAttack = false, isPowerSurge = false;
            if (this.pokemon.effects.has(Effect_1.Effect.RISING_VOLTAGE)) {
                isTripleAttack = this.pokemon.count.attackCount % 4 === 0;
            }
            else if (this.pokemon.effects.has(Effect_1.Effect.OVERDRIVE)) {
                isTripleAttack = this.pokemon.count.attackCount % 3 === 0;
            }
            else if (this.pokemon.effects.has(Effect_1.Effect.POWER_SURGE)) {
                isTripleAttack = this.pokemon.count.attackCount % 3 === 0;
                isPowerSurge = true;
            }
            if (isTripleAttack) {
                this.pokemon.count.tripleAttackCount++;
                this.pokemon.state.attack(this.pokemon, this.board, this.targetCoordinate);
                this.pokemon.state.attack(this.pokemon, this.board, this.targetCoordinate);
                if (isPowerSurge) {
                    this.board
                        .getAdjacentCells(this.targetCoordinate.x, this.targetCoordinate.y)
                        .forEach((cell) => {
                        if (cell) {
                            const enemy = this.board.getValue(cell.x, cell.y);
                            if (enemy && this.pokemon.team !== enemy.team) {
                                enemy.handleSpecialDamage(10, this.board, Game_1.AttackType.SPECIAL, this.pokemon, false);
                                this.pokemon.simulation.room.broadcast(types_1.Transfer.ABILITY, {
                                    id: this.pokemon.simulation.id,
                                    skill: "LINK_CABLE_link",
                                    positionX: this.targetCoordinate.x,
                                    positionY: this.targetCoordinate.y,
                                    targetX: enemy.positionX,
                                    targetY: enemy.positionY
                                });
                            }
                        }
                    });
                }
            }
        }
    }
}
exports.AttackCommand = AttackCommand;
//# sourceMappingURL=simulation-command.js.map