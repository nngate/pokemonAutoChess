import { IBot } from "../models/mongo-models/bot-v2";
export declare function fetchBots(): Promise<Map<string, IBot>>;
export declare function createBotList(bots: Map<string, IBot>, options?: {
    withSteps: boolean;
}): Partial<IBot>[];
