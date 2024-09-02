import { IPokemonEntity } from "../types";
import { Effect } from "../types/enum/Effect";
import { Orientation } from "../types/enum/Game";
import { PokemonEntity } from "./pokemon-entity";
export type Cell = {
    x: number;
    y: number;
    value: PokemonEntity | undefined;
};
export default class Board {
    rows: number;
    columns: number;
    cells: Array<PokemonEntity | undefined>;
    effects: Array<Effect | undefined>;
    constructor(rows: number, colums: number);
    getValue(x: number, y: number): PokemonEntity | undefined;
    setValue(x: number, y: number, value: PokemonEntity | undefined): void;
    moveValue(x0: number, y0: number, x1: number, y1: number): void;
    swapValue(x0: number, y0: number, x1: number, y1: number): void;
    forEach(callback: (x: number, y: number, tg: PokemonEntity | undefined) => void): void;
    find(predicate: (x: number, y: number, entity: PokemonEntity) => boolean): PokemonEntity | null;
    orientation(x0: number, y0: number, x1: number, y1: number, pokemon: IPokemonEntity, target: IPokemonEntity | undefined): Orientation;
    getAdjacentCells(cellX: number, cellY: number, includesCenter?: boolean): Cell[];
    getCellsInFront(pokemon: PokemonEntity, target: PokemonEntity, range?: number): Cell[];
    getCellsInRange(cellX: number, cellY: number, range: number): Cell[];
    getCellsInRadius(cellX: number, cellY: number, radius: number): Cell[];
    getCellsBetween(x0: number, y0: number, x1: number, y1: number): Cell[];
    getTeleportationCell(x: number, y: number): Cell | undefined;
    getFlyAwayCell(x: number, y: number): Cell | null;
    getEffectOnCell(x: number, y: number): Effect | undefined;
    getFarthestTargetCoordinateAvailablePlace(pokemon: IPokemonEntity): {
        x: number;
        y: number;
        distance: number;
        target: PokemonEntity;
    } | undefined;
}
