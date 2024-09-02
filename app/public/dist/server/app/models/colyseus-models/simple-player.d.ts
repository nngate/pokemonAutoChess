import { ArraySchema, Schema } from "@colyseus/schema";
import { ISimplePlayer, Role } from "../../types";
import { Synergy } from "../../types/enum/Synergy";
import { IPokemonRecord } from "./game-record";
export declare class SampleSynergy extends Schema {
    name: Synergy;
    value: number;
    constructor(name: Synergy, value: number);
}
export default class SimplePlayer extends Schema implements ISimplePlayer {
    id: string;
    name: string;
    avatar: string;
    rank: number;
    pokemons: ArraySchema<IPokemonRecord>;
    elo: number;
    exp: number;
    title: string;
    role: Role;
    synergies: ArraySchema<{
        name: Synergy;
        value: number;
    }>;
    constructor(id: string, name: string, avatar: string, rank: number, pokemons: IPokemonRecord[] | ArraySchema<IPokemonRecord>, exp: number, title: string, role: Role, synergies: Array<{
        name: Synergy;
        value: number;
    }> | ArraySchema<{
        name: Synergy;
        value: number;
    }>, elo: number);
}
