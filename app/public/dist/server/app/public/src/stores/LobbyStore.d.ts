import { PayloadAction } from "@reduxjs/toolkit";
import { RoomAvailable } from "colyseus.js";
import LobbyUser, { ILobbyUser } from "../../../models/colyseus-models/lobby-user";
import Message from "../../../models/colyseus-models/message";
import { TournamentBracketSchema, TournamentSchema } from "../../../models/colyseus-models/tournament";
import { IBot } from "../../../models/mongo-models/bot-v2";
import { IPokemonConfig } from "../../../models/mongo-models/user-metadata";
import { IChatV2, ISuggestionUser, PkmWithConfig } from "../../../types";
import { Language } from "../../../types/enum/Language";
import { ILeaderboardBotInfo, ILeaderboardInfo } from "../../../types/interfaces/LeaderboardInfo";
import { ISpecialGamePlanned } from "../../../types/interfaces/Lobby";
export interface IUserLobbyState {
    botLogDatabase: string[];
    messages: IChatV2[];
    leaderboard: ILeaderboardInfo[];
    botLeaderboard: ILeaderboardBotInfo[];
    levelLeaderboard: ILeaderboardInfo[];
    user: ILobbyUser | undefined;
    searchedUser: ILobbyUser | undefined;
    tabIndex: number;
    preparationRooms: RoomAvailable[];
    gameRooms: RoomAvailable[];
    botList: IBot[];
    pastebinUrl: string;
    botData: IBot;
    pokemonCollection: IPokemonConfig[];
    boosterContent: PkmWithConfig[];
    suggestions: ISuggestionUser[];
    language: Language;
    nextSpecialGame: ISpecialGamePlanned | null;
    tournaments: TournamentSchema[];
    ccu: number;
}
export declare const lobbySlice: import("@reduxjs/toolkit").Slice<IUserLobbyState, {
    pushBotLog: (state: import("immer").WritableDraft<IUserLobbyState>, action: PayloadAction<string>) => void;
    pushMessage: (state: import("immer").WritableDraft<IUserLobbyState>, action: PayloadAction<Message>) => void;
    removeMessage: (state: import("immer").WritableDraft<IUserLobbyState>, action: PayloadAction<Message>) => void;
    setLeaderboard: (state: import("immer").WritableDraft<IUserLobbyState>, action: PayloadAction<ILeaderboardInfo[]>) => void;
    setBotLeaderboard: (state: import("immer").WritableDraft<IUserLobbyState>, action: PayloadAction<ILeaderboardBotInfo[]>) => void;
    setLevelLeaderboard: (state: import("immer").WritableDraft<IUserLobbyState>, action: PayloadAction<ILeaderboardInfo[]>) => void;
    addPokemonConfig: (state: import("immer").WritableDraft<IUserLobbyState>, action: PayloadAction<IPokemonConfig>) => void;
    changePokemonConfig: (state: import("immer").WritableDraft<IUserLobbyState>, action: PayloadAction<{
        id: string;
        field: string;
        value: any;
    }>) => void;
    changeUser: (state: import("immer").WritableDraft<IUserLobbyState>, action: PayloadAction<{
        id: string;
        field: string;
        value: any;
    }>) => void;
    setUser: (state: import("immer").WritableDraft<IUserLobbyState>, action: PayloadAction<LobbyUser>) => void;
    setTabIndex: (state: import("immer").WritableDraft<IUserLobbyState>, action: PayloadAction<number>) => void;
    setCcu: (state: import("immer").WritableDraft<IUserLobbyState>, action: PayloadAction<number>) => void;
    addRoom: (state: import("immer").WritableDraft<IUserLobbyState>, action: PayloadAction<RoomAvailable>) => void;
    removeRoom: (state: import("immer").WritableDraft<IUserLobbyState>, action: PayloadAction<string>) => void;
    setSearchedUser: (state: import("immer").WritableDraft<IUserLobbyState>, action: PayloadAction<LobbyUser | undefined>) => void;
    setBotList: (state: import("immer").WritableDraft<IUserLobbyState>, action: PayloadAction<IBot[]>) => void;
    setPastebinUrl: (state: import("immer").WritableDraft<IUserLobbyState>, action: PayloadAction<string>) => void;
    setBotData: (state: import("immer").WritableDraft<IUserLobbyState>, action: PayloadAction<IBot>) => void;
    setBoosterContent: (state: import("immer").WritableDraft<IUserLobbyState>, action: PayloadAction<PkmWithConfig[]>) => void;
    setSuggestions: (state: import("immer").WritableDraft<IUserLobbyState>, action: PayloadAction<ISuggestionUser[]>) => void;
    setLanguage: (state: import("immer").WritableDraft<IUserLobbyState>, action: PayloadAction<Language>) => void;
    leaveLobby: () => IUserLobbyState;
    setNextSpecialGame: (state: import("immer").WritableDraft<IUserLobbyState>, action: PayloadAction<ISpecialGamePlanned>) => void;
    addTournament: (state: import("immer").WritableDraft<IUserLobbyState>, action: PayloadAction<TournamentSchema>) => void;
    removeTournament: (state: import("immer").WritableDraft<IUserLobbyState>, action: PayloadAction<TournamentSchema>) => void;
    changeTournament: (state: import("immer").WritableDraft<IUserLobbyState>, action: PayloadAction<{
        tournamentId: string;
        field: string;
        value: any;
    }>) => void;
    updateTournament: (state: import("immer").WritableDraft<IUserLobbyState>) => void;
    changeTournamentPlayer: (state: import("immer").WritableDraft<IUserLobbyState>, action: PayloadAction<{
        tournamentId: string;
        playerId: string;
        field: string;
        value: any;
    }>) => void;
    addTournamentBracket: (state: import("immer").WritableDraft<IUserLobbyState>, action: PayloadAction<{
        tournamendId: string;
        bracketId: string;
        bracket: TournamentBracketSchema;
    }>) => void;
    removeTournamentBracket: (state: import("immer").WritableDraft<IUserLobbyState>, action: PayloadAction<{
        tournamendId: string;
        bracketId: string;
    }>) => void;
    changeTournamentBracket: (state: import("immer").WritableDraft<IUserLobbyState>, action: PayloadAction<{
        tournamentId: string;
        bracketId: string;
        field: string;
        value: any;
    }>) => void;
}, "lobby", "lobby", import("@reduxjs/toolkit").SliceSelectors<IUserLobbyState>>;
export declare const setLanguage: import("@reduxjs/toolkit").ActionCreatorWithPayload<Language, "lobby/setLanguage">, removeMessage: import("@reduxjs/toolkit").ActionCreatorWithPayload<Message, "lobby/removeMessage">, setBoosterContent: import("@reduxjs/toolkit").ActionCreatorWithPayload<PkmWithConfig[], "lobby/setBoosterContent">, addPokemonConfig: import("@reduxjs/toolkit").ActionCreatorWithPayload<IPokemonConfig, "lobby/addPokemonConfig">, changePokemonConfig: import("@reduxjs/toolkit").ActionCreatorWithPayload<{
    id: string;
    field: string;
    value: any;
}, "lobby/changePokemonConfig">, pushMessage: import("@reduxjs/toolkit").ActionCreatorWithPayload<Message, "lobby/pushMessage">, setLeaderboard: import("@reduxjs/toolkit").ActionCreatorWithPayload<ILeaderboardInfo[], "lobby/setLeaderboard">, setBotLeaderboard: import("@reduxjs/toolkit").ActionCreatorWithPayload<ILeaderboardBotInfo[], "lobby/setBotLeaderboard">, setLevelLeaderboard: import("@reduxjs/toolkit").ActionCreatorWithPayload<ILeaderboardInfo[], "lobby/setLevelLeaderboard">, changeUser: import("@reduxjs/toolkit").ActionCreatorWithPayload<{
    id: string;
    field: string;
    value: any;
}, "lobby/changeUser">, setUser: import("@reduxjs/toolkit").ActionCreatorWithPayload<LobbyUser, "lobby/setUser">, setTabIndex: import("@reduxjs/toolkit").ActionCreatorWithPayload<number, "lobby/setTabIndex">, addRoom: import("@reduxjs/toolkit").ActionCreatorWithPayload<RoomAvailable<any>, "lobby/addRoom">, removeRoom: import("@reduxjs/toolkit").ActionCreatorWithPayload<string, "lobby/removeRoom">, setCcu: import("@reduxjs/toolkit").ActionCreatorWithPayload<number, "lobby/setCcu">, setSearchedUser: import("@reduxjs/toolkit").ActionCreatorWithOptionalPayload<LobbyUser | undefined, "lobby/setSearchedUser">, setBotList: import("@reduxjs/toolkit").ActionCreatorWithPayload<IBot[], "lobby/setBotList">, setPastebinUrl: import("@reduxjs/toolkit").ActionCreatorWithPayload<string, "lobby/setPastebinUrl">, setBotData: import("@reduxjs/toolkit").ActionCreatorWithPayload<IBot, "lobby/setBotData">, leaveLobby: import("@reduxjs/toolkit").ActionCreatorWithoutPayload<"lobby/leaveLobby">, setSuggestions: import("@reduxjs/toolkit").ActionCreatorWithPayload<ISuggestionUser[], "lobby/setSuggestions">, pushBotLog: import("@reduxjs/toolkit").ActionCreatorWithPayload<string, "lobby/pushBotLog">, setNextSpecialGame: import("@reduxjs/toolkit").ActionCreatorWithPayload<ISpecialGamePlanned, "lobby/setNextSpecialGame">, addTournament: import("@reduxjs/toolkit").ActionCreatorWithPayload<TournamentSchema, "lobby/addTournament">, removeTournament: import("@reduxjs/toolkit").ActionCreatorWithPayload<TournamentSchema, "lobby/removeTournament">, changeTournament: import("@reduxjs/toolkit").ActionCreatorWithPayload<{
    tournamentId: string;
    field: string;
    value: any;
}, "lobby/changeTournament">, updateTournament: import("@reduxjs/toolkit").ActionCreatorWithoutPayload<"lobby/updateTournament">, changeTournamentPlayer: import("@reduxjs/toolkit").ActionCreatorWithPayload<{
    tournamentId: string;
    playerId: string;
    field: string;
    value: any;
}, "lobby/changeTournamentPlayer">, addTournamentBracket: import("@reduxjs/toolkit").ActionCreatorWithPayload<{
    tournamendId: string;
    bracketId: string;
    bracket: TournamentBracketSchema;
}, "lobby/addTournamentBracket">, removeTournamentBracket: import("@reduxjs/toolkit").ActionCreatorWithPayload<{
    tournamendId: string;
    bracketId: string;
}, "lobby/removeTournamentBracket">, changeTournamentBracket: import("@reduxjs/toolkit").ActionCreatorWithPayload<{
    tournamentId: string;
    bracketId: string;
    field: string;
    value: any;
}, "lobby/changeTournamentBracket">;
declare const _default: import("redux").Reducer<IUserLobbyState>;
export default _default;
