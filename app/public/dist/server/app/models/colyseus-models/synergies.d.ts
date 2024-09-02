import { MapSchema } from "@colyseus/schema";
import { IPokemon } from "../../types";
import { Synergy } from "../../types/enum/Synergy";
export default class Synergies extends MapSchema<number, Synergy> implements Map<Synergy, number> {
    constructor();
    countActiveSynergies(): number;
}
export declare function computeSynergies(board: IPokemon[]): Map<Synergy, number>;
export declare function addSynergiesGivenByItems(pkm: IPokemon): void;
