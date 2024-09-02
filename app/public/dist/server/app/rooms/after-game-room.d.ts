import { Dispatcher } from "@colyseus/command";
import { Client, Room } from "colyseus";
import SimplePlayer from "../models/colyseus-models/simple-player";
import AfterGameState from "./states/after-game-state";
export default class AfterGameRoom extends Room<AfterGameState> {
    dispatcher: Dispatcher<this>;
    constructor();
    onCreate(options: {
        players: SimplePlayer[];
        idToken: string;
        elligibleToXP: boolean;
        elligibleToELO: boolean;
    }): void;
    onAuth(client: Client, options: any, request: any): Promise<import("firebase-admin/lib/auth/user-record").UserRecord | undefined>;
    onJoin(client: Client): void;
    onLeave(client: Client, consented: boolean): Promise<void>;
    onDispose(): void;
}
