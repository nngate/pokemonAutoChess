import { MapSchema } from "@colyseus/schema";
import { Pokemon } from "../models/colyseus-models/pokemon";
import { SpecialGameRule } from "../types/enum/SpecialGameRule";
export declare function isPositionEmpty(x: number, y: number, board: MapSchema<Pokemon, string>): boolean;
export declare function getFirstAvailablePositionInBench(board: MapSchema<Pokemon, string>): number | undefined;
export declare function getFirstAvailablePositionOnBoard(board: MapSchema<Pokemon, string>): number[] | undefined;
export declare function getFreeSpaceOnBench(board: MapSchema<Pokemon, string>): number;
export declare function getMaxTeamSize(playerLevel: number, specialGameRule?: SpecialGameRule | null): number;
