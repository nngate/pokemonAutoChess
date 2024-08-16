import GameState from "../rooms/states/game-state";
import { IPlayer } from "../types";
export type Matchup = {
    a: IPlayer;
    b: IPlayer;
    count: number;
    distance: number;
    ghost?: boolean;
};
export declare function selectMatchups(state: GameState): Matchup[];
export declare function getCount(a: IPlayer, b: IPlayer, bIsGhost: boolean): number;
export declare function getDistance(a: IPlayer, b: IPlayer, bIsGhost: boolean): number;
