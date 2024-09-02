import { ArraySchema, MapSchema, Schema } from "@colyseus/schema";
import { GameUser } from "../../models/colyseus-models/game-user";
import Message from "../../models/colyseus-models/message";
import { EloRank } from "../../types/Config";
import { GameMode } from "../../types/enum/Game";
export interface IPreparationState {
    users: MapSchema<GameUser>;
    messages: ArraySchema<Message>;
    gameStartedAt: string | null;
    ownerId: string;
    ownerName: string;
    name: string;
    minRank: EloRank | null;
    gameMode: GameMode;
}
export default class PreparationState extends Schema implements IPreparationState {
    messages: ArraySchema<Message>;
    users: MapSchema<GameUser, string>;
    gameStartedAt: string | null;
    ownerId: string;
    ownerName: string;
    name: string;
    password: string | null;
    minRank: EloRank | null;
    gameMode: GameMode;
    noElo: boolean;
    whitelist: string[];
    blacklist: string[];
    constructor(params: {
        ownerId?: string;
        roomName: string;
        minRank?: EloRank;
        noElo?: boolean;
        gameMode: GameMode;
        whitelist?: string[];
        blacklist?: string[];
    });
    addMessage(params: {
        payload: string;
        authorId: string;
        author?: string | undefined;
        avatar?: string | undefined;
    }): void;
    removeMessage(id: string): void;
}
