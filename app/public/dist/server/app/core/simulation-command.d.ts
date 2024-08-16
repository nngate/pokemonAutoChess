import Board from "./board";
import { PokemonEntity } from "./pokemon-entity";
export declare abstract class SimulationCommand {
    delay: number;
    executed: boolean;
    constructor(delay: number);
    execute(): void;
    update(dt: number): void;
}
export declare class AbilityCommand extends SimulationCommand {
    delayedFunction: () => void;
    constructor(delayedFunction: () => void, delay: number);
    execute(): void;
}
export declare class AttackCommand extends SimulationCommand {
    pokemon: PokemonEntity;
    board: Board;
    targetCoordinate: {
        x: number;
        y: number;
    };
    constructor(delay: number, pokemon: PokemonEntity, board: Board, targetCoordinate: {
        x: number;
        y: number;
    });
    execute(): void;
}
