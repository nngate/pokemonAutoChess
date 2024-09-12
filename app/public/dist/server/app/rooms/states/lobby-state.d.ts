import { ArraySchema, Schema } from "@colyseus/schema";
import Message from "../../models/colyseus-models/message";
import { TournamentSchema } from "../../models/colyseus-models/tournament";
import { ISpecialGamePlanned } from "../../types/interfaces/Lobby";
export default class LobbyState extends Schema {
    messages: ArraySchema<Message>;
    nextSpecialGame: ISpecialGamePlanned | null;
    tournaments: ArraySchema<TournamentSchema>;
    ccu: number;
    addMessage(payload: string, authorId: string, author: string, avatar: string): void;
    removeMessage(id: string): void;
    removeMessages(authorId: string): void;
    addAnnouncement(message: string): void;
    getNextSpecialGame(): void;
    createTournament(name: string, startDate: string): Promise<import("mongoose").Document<unknown, {}, import("../../types/interfaces/Tournament").ITournament> & import("../../types/interfaces/Tournament").ITournament & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    removeTournament(id: string): void;
}
