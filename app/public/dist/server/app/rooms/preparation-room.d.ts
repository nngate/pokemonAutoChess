import { Dispatcher } from "@colyseus/command";
import { Client, Room } from "colyseus";
import { EloRank } from "../types/Config";
import { GameMode } from "../types/enum/Game";
import PreparationState from "./states/preparation-state";
export default class PreparationRoom extends Room<PreparationState> {
    dispatcher: Dispatcher<this>;
    constructor();
    setName(name: string): Promise<void>;
    setPassword(password: string): Promise<void>;
    toggleElo(noElo: boolean): Promise<void>;
    setGameStarted(gameStartedAt: string): Promise<void>;
    onCreate(options: {
        ownerId?: string;
        roomName: string;
        minRank?: EloRank;
        gameMode: GameMode;
        noElo?: boolean;
        autoStartDelayInSeconds?: number;
        whitelist?: string[];
        blacklist?: string[];
        tournamentId?: string;
        bracketId?: string;
    }): void;
    onAuth(client: Client, options: any, request: any): Promise<import("firebase-admin/lib/auth/user-record").UserRecord | undefined>;
    onJoin(client: Client, options: any, auth: any): void;
    onLeave(client: Client, consented: boolean): Promise<void>;
    onDispose(): void;
    onServerAnnouncement(message: string): void;
    onGameStart({ gameId, preparationId }: {
        gameId: string;
        preparationId: string;
    }): void;
    status(): {
        players: {
            id?: string;
            avatar?: string;
            name?: string;
            elo?: number;
        }[];
        name: string;
        id: string;
    };
    updatePlayersInfo(): void;
}
