import { User } from "@firebase/auth-types";
import { PayloadAction } from "@reduxjs/toolkit";
import { Client, Room } from "colyseus.js";
import { IBot } from "../../../models/mongo-models/bot-v2";
import { IUserMetadata } from "../../../models/mongo-models/user-metadata";
import AfterGameState from "../../../rooms/states/after-game-state";
import GameState from "../../../rooms/states/game-state";
import PreparationState from "../../../rooms/states/preparation-state";
import { Emotion, ICustomLobbyState, Role, Title } from "../../../types";
import { BotDifficulty } from "../../../types/enum/Game";
import { Item } from "../../../types/enum/Item";
import { Language } from "../../../types/enum/Language";
import { PkmProposition } from "../../../types/enum/Pokemon";
export interface INetwork {
    client: Client;
    lobby: Room<ICustomLobbyState> | undefined;
    preparation: Room<PreparationState> | undefined;
    game: Room<GameState> | undefined;
    after: Room<AfterGameState> | undefined;
    uid: string;
    displayName: string;
    profile: IUserMetadata | undefined;
    error: string | null;
}
export declare const networkSlice: import("@reduxjs/toolkit").Slice<INetwork, {
    logIn: (state: import("immer").WritableDraft<INetwork>, action: PayloadAction<User>) => void;
    logOut: (state: import("immer").WritableDraft<INetwork>) => void;
    setProfile: (state: import("immer").WritableDraft<INetwork>, action: PayloadAction<IUserMetadata>) => void;
    joinLobby: (state: import("immer").WritableDraft<INetwork>, action: PayloadAction<Room<ICustomLobbyState>>) => void;
    joinPreparation: (state: import("immer").WritableDraft<INetwork>, action: PayloadAction<Room<PreparationState>>) => void;
    joinGame: (state: import("immer").WritableDraft<INetwork>, action: PayloadAction<Room<GameState>>) => void;
    joinAfter: (state: import("immer").WritableDraft<INetwork>, action: PayloadAction<Room<AfterGameState>>) => void;
    sendMessage: (state: import("immer").WritableDraft<INetwork>, action: PayloadAction<string>) => void;
    removeMessage: (state: import("immer").WritableDraft<INetwork>, action: PayloadAction<{
        id: string;
    }>) => void;
    searchName: (state: import("immer").WritableDraft<INetwork>, action: PayloadAction<string>) => void;
    changeName: (state: import("immer").WritableDraft<INetwork>, action: PayloadAction<string>) => void;
    changeAvatar: (state: import("immer").WritableDraft<INetwork>, action: PayloadAction<{
        index: string;
        emotion: Emotion;
        shiny: boolean;
    }>) => void;
    requestBotList: (state: import("immer").WritableDraft<INetwork>, action: PayloadAction<{
        withSteps: boolean;
    } | undefined>) => void;
    createBot: (state: import("immer").WritableDraft<INetwork>, action: PayloadAction<IBot>) => void;
    requestBotData: (state: import("immer").WritableDraft<INetwork>, action: PayloadAction<string>) => void;
    addBot: (state: import("immer").WritableDraft<INetwork>, action: PayloadAction<BotDifficulty | IBot>) => void;
    removeBot: (state: import("immer").WritableDraft<INetwork>, action: PayloadAction<string>) => void;
    listBots: (state: import("immer").WritableDraft<INetwork>) => void;
    toggleReady: (state: import("immer").WritableDraft<INetwork>, action: PayloadAction<boolean | undefined>) => void;
    toggleEloRoom: (state: import("immer").WritableDraft<INetwork>, action: PayloadAction<boolean>) => void;
    lockClick: (state: import("immer").WritableDraft<INetwork>) => void;
    levelClick: (state: import("immer").WritableDraft<INetwork>) => void;
    shopClick: (state: import("immer").WritableDraft<INetwork>, action: PayloadAction<number>) => void;
    pokemonPropositionClick: (state: import("immer").WritableDraft<INetwork>, action: PayloadAction<PkmProposition>) => void;
    itemClick: (state: import("immer").WritableDraft<INetwork>, action: PayloadAction<Item>) => void;
    gameStartRequest: (state: import("immer").WritableDraft<INetwork>, action: PayloadAction<string>) => void;
    changeRoomName: (state: import("immer").WritableDraft<INetwork>, action: PayloadAction<string>) => void;
    changeRoomPassword: (state: import("immer").WritableDraft<INetwork>, action: PayloadAction<string | null>) => void;
    changeSelectedEmotion: (state: import("immer").WritableDraft<INetwork>, action: PayloadAction<{
        index: string;
        emotion: Emotion;
        shiny: boolean;
    }>) => void;
    buyEmotion: (state: import("immer").WritableDraft<INetwork>, action: PayloadAction<{
        index: string;
        emotion: Emotion;
        shiny: boolean;
    }>) => void;
    buyBooster: (state: import("immer").WritableDraft<INetwork>, action: PayloadAction<{
        index: string;
    }>) => void;
    openBooster: (state: import("immer").WritableDraft<INetwork>) => void;
    showEmote: (state: import("immer").WritableDraft<INetwork>, action: PayloadAction<string | undefined>) => void;
    searchById: (state: import("immer").WritableDraft<INetwork>, action: PayloadAction<string>) => void;
    setTitle: (state: import("immer").WritableDraft<INetwork>, action: PayloadAction<string>) => void;
    removeTournament: (state: import("immer").WritableDraft<INetwork>, action: PayloadAction<{
        id: string;
    }>) => void;
    createTournamentLobbies: (state: import("immer").WritableDraft<INetwork>, action: PayloadAction<{
        id: string;
    }>) => void;
    participateInTournament: (state: import("immer").WritableDraft<INetwork>, action: PayloadAction<{
        tournamentId: string;
        participate: boolean;
    }>) => void;
    giveBooster: (state: import("immer").WritableDraft<INetwork>, action: PayloadAction<{
        uid: string;
        numberOfBoosters: number;
    }>) => void;
    giveRole: (state: import("immer").WritableDraft<INetwork>, action: PayloadAction<{
        uid: string;
        role: Role;
    }>) => void;
    giveTitle: (state: import("immer").WritableDraft<INetwork>, action: PayloadAction<{
        uid: string;
        title: Title;
    }>) => void;
    kick: (state: import("immer").WritableDraft<INetwork>, action: PayloadAction<string>) => void;
    deleteRoom: (state: import("immer").WritableDraft<INetwork>) => void;
    ban: (state: import("immer").WritableDraft<INetwork>, action: PayloadAction<{
        uid: string;
        reason: string;
    }>) => void;
    unban: (state: import("immer").WritableDraft<INetwork>, action: PayloadAction<{
        uid: string;
        name: string;
    }>) => void;
    deleteBotDatabase: (state: import("immer").WritableDraft<INetwork>, action: PayloadAction<string>) => void;
    addBotDatabase: (state: import("immer").WritableDraft<INetwork>, action: PayloadAction<string>) => void;
    selectLanguage: (state: import("immer").WritableDraft<INetwork>, action: PayloadAction<Language>) => void;
    createTournament: (state: import("immer").WritableDraft<INetwork>, action: PayloadAction<{
        name: string;
        startDate: string;
    }>) => void;
    setNetworkError: (state: import("immer").WritableDraft<INetwork>, action: PayloadAction<string | null>) => void;
}, "network", "network", import("@reduxjs/toolkit").SliceSelectors<INetwork>>;
export declare const selectLanguage: import("@reduxjs/toolkit").ActionCreatorWithPayload<Language, "network/selectLanguage">, unban: import("@reduxjs/toolkit").ActionCreatorWithPayload<{
    uid: string;
    name: string;
}, "network/unban">, deleteBotDatabase: import("@reduxjs/toolkit").ActionCreatorWithPayload<string, "network/deleteBotDatabase">, addBotDatabase: import("@reduxjs/toolkit").ActionCreatorWithPayload<string, "network/addBotDatabase">, ban: import("@reduxjs/toolkit").ActionCreatorWithPayload<{
    uid: string;
    reason: string;
}, "network/ban">, pokemonPropositionClick: import("@reduxjs/toolkit").ActionCreatorWithPayload<PkmProposition, "network/pokemonPropositionClick">, giveTitle: import("@reduxjs/toolkit").ActionCreatorWithPayload<{
    uid: string;
    title: Title;
}, "network/giveTitle">, giveRole: import("@reduxjs/toolkit").ActionCreatorWithPayload<{
    uid: string;
    role: Role;
}, "network/giveRole">, removeMessage: import("@reduxjs/toolkit").ActionCreatorWithPayload<{
    id: string;
}, "network/removeMessage">, removeTournament: import("@reduxjs/toolkit").ActionCreatorWithPayload<{
    id: string;
}, "network/removeTournament">, createTournamentLobbies: import("@reduxjs/toolkit").ActionCreatorWithPayload<{
    id: string;
}, "network/createTournamentLobbies">, participateInTournament: import("@reduxjs/toolkit").ActionCreatorWithPayload<{
    tournamentId: string;
    participate: boolean;
}, "network/participateInTournament">, giveBooster: import("@reduxjs/toolkit").ActionCreatorWithPayload<{
    uid: string;
    numberOfBoosters: number;
}, "network/giveBooster">, showEmote: import("@reduxjs/toolkit").ActionCreatorWithOptionalPayload<string | undefined, "network/showEmote">, openBooster: import("@reduxjs/toolkit").ActionCreatorWithoutPayload<"network/openBooster">, changeSelectedEmotion: import("@reduxjs/toolkit").ActionCreatorWithPayload<{
    index: string;
    emotion: Emotion;
    shiny: boolean;
}, "network/changeSelectedEmotion">, buyEmotion: import("@reduxjs/toolkit").ActionCreatorWithPayload<{
    index: string;
    emotion: Emotion;
    shiny: boolean;
}, "network/buyEmotion">, buyBooster: import("@reduxjs/toolkit").ActionCreatorWithPayload<{
    index: string;
}, "network/buyBooster">, changeRoomName: import("@reduxjs/toolkit").ActionCreatorWithPayload<string, "network/changeRoomName">, changeRoomPassword: import("@reduxjs/toolkit").ActionCreatorWithPayload<string | null, "network/changeRoomPassword">, gameStartRequest: import("@reduxjs/toolkit").ActionCreatorWithPayload<string, "network/gameStartRequest">, logIn: import("@reduxjs/toolkit").ActionCreatorWithPayload<User, "network/logIn">, logOut: import("@reduxjs/toolkit").ActionCreatorWithoutPayload<"network/logOut">, setProfile: import("@reduxjs/toolkit").ActionCreatorWithPayload<IUserMetadata, "network/setProfile">, joinLobby: import("@reduxjs/toolkit").ActionCreatorWithPayload<Room<ICustomLobbyState>, "network/joinLobby">, sendMessage: import("@reduxjs/toolkit").ActionCreatorWithPayload<string, "network/sendMessage">, searchName: import("@reduxjs/toolkit").ActionCreatorWithPayload<string, "network/searchName">, joinPreparation: import("@reduxjs/toolkit").ActionCreatorWithPayload<Room<PreparationState>, "network/joinPreparation">, joinGame: import("@reduxjs/toolkit").ActionCreatorWithPayload<Room<GameState>, "network/joinGame">, joinAfter: import("@reduxjs/toolkit").ActionCreatorWithPayload<Room<AfterGameState>, "network/joinAfter">, changeName: import("@reduxjs/toolkit").ActionCreatorWithPayload<string, "network/changeName">, changeAvatar: import("@reduxjs/toolkit").ActionCreatorWithPayload<{
    index: string;
    emotion: Emotion;
    shiny: boolean;
}, "network/changeAvatar">, requestBotList: import("@reduxjs/toolkit").ActionCreatorWithOptionalPayload<{
    withSteps: boolean;
} | undefined, "network/requestBotList">, createBot: import("@reduxjs/toolkit").ActionCreatorWithPayload<IBot, "network/createBot">, requestBotData: import("@reduxjs/toolkit").ActionCreatorWithPayload<string, "network/requestBotData">, addBot: import("@reduxjs/toolkit").ActionCreatorWithPayload<IBot | BotDifficulty, "network/addBot">, removeBot: import("@reduxjs/toolkit").ActionCreatorWithPayload<string, "network/removeBot">, listBots: import("@reduxjs/toolkit").ActionCreatorWithoutPayload<"network/listBots">, toggleReady: import("@reduxjs/toolkit").ActionCreatorWithOptionalPayload<boolean | undefined, "network/toggleReady">, toggleEloRoom: import("@reduxjs/toolkit").ActionCreatorWithPayload<boolean, "network/toggleEloRoom">, itemClick: import("@reduxjs/toolkit").ActionCreatorWithPayload<Item, "network/itemClick">, shopClick: import("@reduxjs/toolkit").ActionCreatorWithPayload<number, "network/shopClick">, levelClick: import("@reduxjs/toolkit").ActionCreatorWithoutPayload<"network/levelClick">, lockClick: import("@reduxjs/toolkit").ActionCreatorWithoutPayload<"network/lockClick">, searchById: import("@reduxjs/toolkit").ActionCreatorWithPayload<string, "network/searchById">, setTitle: import("@reduxjs/toolkit").ActionCreatorWithPayload<string, "network/setTitle">, kick: import("@reduxjs/toolkit").ActionCreatorWithPayload<string, "network/kick">, deleteRoom: import("@reduxjs/toolkit").ActionCreatorWithoutPayload<"network/deleteRoom">, createTournament: import("@reduxjs/toolkit").ActionCreatorWithPayload<{
    name: string;
    startDate: string;
}, "network/createTournament">, setNetworkError: import("@reduxjs/toolkit").ActionCreatorWithPayload<string | null, "network/setNetworkError">;
declare const _default: import("redux").Reducer<INetwork>;
export default _default;
