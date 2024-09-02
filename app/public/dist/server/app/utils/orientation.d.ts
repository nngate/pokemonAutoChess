import Board from "../core/board";
import { PokemonEntity } from "../core/pokemon-entity";
import { Orientation } from "../types/enum/Game";
export declare const OrientationVector: Record<Orientation, [number, number]>;
export declare const OrientationArray: Orientation[];
export declare function effectInLine(board: Board, pokemon: PokemonEntity, target: PokemonEntity | Orientation, effect: (target: PokemonEntity) => void): void;
