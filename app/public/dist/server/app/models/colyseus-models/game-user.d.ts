import { Schema } from "@colyseus/schema";
import { Role } from "../../types";
import MapTileset from "./map-tileset";
export interface IGameUser {
    id: string;
    name: string;
    avatar: string;
    ready: boolean;
    isBot: boolean;
    elo: number;
    title: string;
    role: Role;
    anonymous: boolean;
}
export declare class GameUser extends Schema implements IGameUser {
    id: string;
    name: string;
    avatar: string;
    ready: boolean;
    isBot: boolean;
    elo: number;
    map: MapTileset;
    title: string;
    role: Role;
    anonymous: boolean;
    constructor(id: string, name: string, elo: number, avatar: string, isBot: boolean, ready: boolean, title: string, role: Role, anonymous: boolean);
}
