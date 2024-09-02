import { Command } from "@colyseus/command";
import { Client } from "colyseus";
import { IGameUser } from "../../models/colyseus-models/game-user";
import { IBot } from "../../models/mongo-models/bot-v2";
import { IUserMetadata } from "../../models/mongo-models/user-metadata";
import { BotDifficulty } from "../../types/enum/Game";
import PreparationRoom from "../preparation-room";
export declare class OnJoinCommand extends Command<PreparationRoom, {
    client: Client;
    options: any;
    auth: any;
}> {
    execute({ client, options, auth }: {
        client: any;
        options: any;
        auth: any;
    }): Promise<void>;
}
export declare class OnGameStartRequestCommand extends Command<PreparationRoom, {
    client?: Client;
}> {
    execute({ client }?: {
        client?: Client;
    }): Promise<void>;
}
export declare class OnNewMessageCommand extends Command<PreparationRoom, {
    client: Client;
    message: string;
}> {
    execute({ client, message }: {
        client: Client;
        message: string;
    }): void;
}
export declare class RemoveMessageCommand extends Command<PreparationRoom, {
    client: Client;
    messageId: string;
}> {
    execute({ client, messageId }: {
        client: Client;
        messageId: string;
    }): void;
}
export declare class OnRoomNameCommand extends Command<PreparationRoom, {
    client: Client;
    message: string;
}> {
    execute({ client, message: roomName }: {
        client: any;
        message: any;
    }): void;
}
export declare class OnRoomPasswordCommand extends Command<PreparationRoom, {
    client: Client;
    message: string;
}> {
    execute({ client, message: password }: {
        client: any;
        message: any;
    }): void;
}
export declare class OnToggleEloCommand extends Command<PreparationRoom, {
    client: Client;
    message: boolean;
}> {
    execute({ client, message: noElo }: {
        client: any;
        message: any;
    }): void;
}
export declare class OnKickPlayerCommand extends Command<PreparationRoom, {
    client: Client;
    message: string;
}> {
    execute({ client, message: userId }: {
        client: any;
        message: any;
    }): void;
}
export declare class OnDeleteRoomCommand extends Command<PreparationRoom, {
    client: Client;
}> {
    execute({ client }: {
        client: any;
    }): void;
}
export declare class OnLeaveCommand extends Command<PreparationRoom, {
    client: Client;
    consented: boolean;
}> {
    execute({ client, consented }: {
        client: any;
        consented: any;
    }): void;
}
export declare class OnToggleReadyCommand extends Command<PreparationRoom, {
    client: Client;
    ready: boolean | undefined;
}> {
    execute({ client, ready }: {
        client: any;
        ready: any;
    }): OnGameStartRequestCommand[] | undefined;
}
export declare class InitializeBotsCommand extends Command<PreparationRoom, {
    ownerId: string;
}> {
    execute({ ownerId }: {
        ownerId: any;
    }): Promise<void>;
}
type OnAddBotPayload = {
    type: IBot | BotDifficulty;
    user: IGameUser;
};
export declare class OnAddBotCommand extends Command<PreparationRoom, OnAddBotPayload> {
    execute(data: OnAddBotPayload): Promise<void>;
}
export declare class OnRemoveBotCommand extends Command<PreparationRoom, {
    target?: string | undefined;
    user?: IGameUser | undefined;
}> {
    execute({ target, user }: {
        target: any;
        user: any;
    }): void;
}
export declare class OnListBotsCommand extends Command<PreparationRoom> {
    execute(data: {
        user: IUserMetadata;
    }): Promise<void>;
}
export {};
