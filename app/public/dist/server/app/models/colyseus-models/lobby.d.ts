import { Schema } from "@colyseus/schema";
import { EloRank } from "../../types/enum/EloRank";
import { GameMode } from "../../types/enum/Game";
import { ISpecialGamePlanned } from "../../types/interfaces/Lobby";
export declare class SpecialGamePlannedSchema extends Schema implements ISpecialGamePlanned {
    mode: GameMode;
    date: string;
    minRank: EloRank | "";
    constructor(mode: GameMode, date: string, minRank?: EloRank);
}
