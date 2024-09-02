import { ArraySchema, MapSchema } from "@colyseus/schema";
import { PayloadAction } from "@reduxjs/toolkit";
import Simulation from "../../../core/simulation";
import ExperienceManager from "../../../models/colyseus-models/experience-manager";
import PokemonCollection from "../../../models/colyseus-models/pokemon-collection";
import Synergies from "../../../models/colyseus-models/synergies";
import { IPokemonConfig } from "../../../models/mongo-models/user-metadata";
import { IDps, IPlayer, ISimulation } from "../../../types";
import { GamePhaseState, Team } from "../../../types/enum/Game";
import { Item } from "../../../types/enum/Item";
import { Pkm, PkmProposition } from "../../../types/enum/Pokemon";
import { Weather } from "../../../types/enum/Weather";
export interface GameStateStore {
    afterGameId: string;
    phaseDuration: number;
    roundTime: number;
    phase: GamePhaseState;
    players: IPlayer[];
    simulations: ISimulation[];
    stageLevel: number;
    noElo: boolean;
    currentPlayerId: string;
    currentSimulationId: string;
    currentSimulationTeamIndex: number;
    money: number;
    interest: number;
    streak: number;
    shopLocked: boolean;
    experienceManager: ExperienceManager;
    shop: Pkm[];
    itemsProposition: Item[];
    pokemonsProposition: PkmProposition[];
    currentPlayerSynergies: [string, number][];
    weather: Weather;
    blueDpsMeter: IDps[];
    redDpsMeter: IDps[];
    pokemonCollection: MapSchema<IPokemonConfig>;
    additionalPokemons: Pkm[];
}
export declare const gameSlice: import("@reduxjs/toolkit").Slice<GameStateStore, {
    setRoundTime: (state: import("immer").WritableDraft<GameStateStore>, action: PayloadAction<number>) => void;
    setAfterGameId: (state: import("immer").WritableDraft<GameStateStore>, action: PayloadAction<string>) => void;
    setPhase: (state: import("immer").WritableDraft<GameStateStore>, action: PayloadAction<GamePhaseState>) => void;
    setStageLevel: (state: import("immer").WritableDraft<GameStateStore>, action: PayloadAction<number>) => void;
    setNoELO: (state: import("immer").WritableDraft<GameStateStore>, action: PayloadAction<boolean>) => void;
    addPlayer: (state: import("immer").WritableDraft<GameStateStore>, action: PayloadAction<IPlayer>) => void;
    removePlayer: (state: import("immer").WritableDraft<GameStateStore>, action: PayloadAction<IPlayer>) => void;
    setMoney: (state: import("immer").WritableDraft<GameStateStore>, action: PayloadAction<number>) => void;
    setInterest: (state: import("immer").WritableDraft<GameStateStore>, action: PayloadAction<number>) => void;
    setStreak: (state: import("immer").WritableDraft<GameStateStore>, action: PayloadAction<number>) => void;
    setShopLocked: (state: import("immer").WritableDraft<GameStateStore>, action: PayloadAction<boolean>) => void;
    setExperienceManager: (state: import("immer").WritableDraft<GameStateStore>, action: PayloadAction<ExperienceManager>) => void;
    changePlayer: (state: import("immer").WritableDraft<GameStateStore>, action: PayloadAction<{
        id: string;
        field: string;
        value: any;
    }>) => void;
    setShop: (state: import("immer").WritableDraft<GameStateStore>, action: PayloadAction<ArraySchema<Pkm>>) => void;
    setItemsProposition: (state: import("immer").WritableDraft<GameStateStore>, action: PayloadAction<ArraySchema<Item>>) => void;
    setPokemonProposition: (state: import("immer").WritableDraft<GameStateStore>, action: PayloadAction<PkmProposition[]>) => void;
    setAdditionalPokemons: (state: import("immer").WritableDraft<GameStateStore>, action: PayloadAction<Pkm[]>) => void;
    setSynergies: (state: import("immer").WritableDraft<GameStateStore>, action: PayloadAction<{
        value: Synergies;
        id: string;
    }>) => void;
    setLife: (state: import("immer").WritableDraft<GameStateStore>, action: PayloadAction<{
        value: number;
        id: string;
    }>) => void;
    setLoadingProgress: (state: import("immer").WritableDraft<GameStateStore>, action: PayloadAction<{
        value: number;
        id: string;
    }>) => void;
    setWeather: (state: import("immer").WritableDraft<GameStateStore>, action: PayloadAction<{
        value: Weather;
        id: string;
    }>) => void;
    setSimulation: (state: import("immer").WritableDraft<GameStateStore>, action: PayloadAction<Simulation>) => void;
    setPlayer: (state: import("immer").WritableDraft<GameStateStore>, action: PayloadAction<IPlayer>) => void;
    addDpsMeter: (state: import("immer").WritableDraft<GameStateStore>, action: PayloadAction<{
        value: IDps;
        team: Team;
        id: string;
    }>) => void;
    changeDpsMeter: (state: import("immer").WritableDraft<GameStateStore>, action: PayloadAction<{
        id: string;
        team: Team;
        field: string;
        value: string | number;
        simulationId: string;
    }>) => void;
    removeDpsMeter: (state: import("immer").WritableDraft<GameStateStore>, action: PayloadAction<{
        team: Team;
        simulationId: string;
    }>) => void;
    setPokemonCollection: (state: import("immer").WritableDraft<GameStateStore>, action: PayloadAction<PokemonCollection>) => void;
    leaveGame: () => GameStateStore;
}, "game", "game", import("@reduxjs/toolkit").SliceSelectors<GameStateStore>>;
export declare const setSimulation: import("@reduxjs/toolkit").ActionCreatorWithPayload<Simulation, "game/setSimulation">, setAdditionalPokemons: import("@reduxjs/toolkit").ActionCreatorWithPayload<Pkm[], "game/setAdditionalPokemons">, setPokemonProposition: import("@reduxjs/toolkit").ActionCreatorWithPayload<PkmProposition[], "game/setPokemonProposition">, setPokemonCollection: import("@reduxjs/toolkit").ActionCreatorWithPayload<PokemonCollection, "game/setPokemonCollection">, leaveGame: import("@reduxjs/toolkit").ActionCreatorWithoutPayload<"game/leaveGame">, removeDpsMeter: import("@reduxjs/toolkit").ActionCreatorWithPayload<{
    team: Team;
    simulationId: string;
}, "game/removeDpsMeter">, changeDpsMeter: import("@reduxjs/toolkit").ActionCreatorWithPayload<{
    id: string;
    team: Team;
    field: string;
    value: string | number;
    simulationId: string;
}, "game/changeDpsMeter">, addDpsMeter: import("@reduxjs/toolkit").ActionCreatorWithPayload<{
    value: IDps;
    team: Team;
    id: string;
}, "game/addDpsMeter">, setLoadingProgress: import("@reduxjs/toolkit").ActionCreatorWithPayload<{
    value: number;
    id: string;
}, "game/setLoadingProgress">, setPlayer: import("@reduxjs/toolkit").ActionCreatorWithPayload<IPlayer, "game/setPlayer">, setLife: import("@reduxjs/toolkit").ActionCreatorWithPayload<{
    value: number;
    id: string;
}, "game/setLife">, setSynergies: import("@reduxjs/toolkit").ActionCreatorWithPayload<{
    value: Synergies;
    id: string;
}, "game/setSynergies">, setRoundTime: import("@reduxjs/toolkit").ActionCreatorWithPayload<number, "game/setRoundTime">, setAfterGameId: import("@reduxjs/toolkit").ActionCreatorWithPayload<string, "game/setAfterGameId">, setPhase: import("@reduxjs/toolkit").ActionCreatorWithPayload<GamePhaseState, "game/setPhase">, setStageLevel: import("@reduxjs/toolkit").ActionCreatorWithPayload<number, "game/setStageLevel">, setWeather: import("@reduxjs/toolkit").ActionCreatorWithPayload<{
    value: Weather;
    id: string;
}, "game/setWeather">, setNoELO: import("@reduxjs/toolkit").ActionCreatorWithPayload<boolean, "game/setNoELO">, addPlayer: import("@reduxjs/toolkit").ActionCreatorWithPayload<IPlayer, "game/addPlayer">, removePlayer: import("@reduxjs/toolkit").ActionCreatorWithPayload<IPlayer, "game/removePlayer">, setExperienceManager: import("@reduxjs/toolkit").ActionCreatorWithPayload<ExperienceManager, "game/setExperienceManager">, setStreak: import("@reduxjs/toolkit").ActionCreatorWithPayload<number, "game/setStreak">, setInterest: import("@reduxjs/toolkit").ActionCreatorWithPayload<number, "game/setInterest">, setMoney: import("@reduxjs/toolkit").ActionCreatorWithPayload<number, "game/setMoney">, setShopLocked: import("@reduxjs/toolkit").ActionCreatorWithPayload<boolean, "game/setShopLocked">, changePlayer: import("@reduxjs/toolkit").ActionCreatorWithPayload<{
    id: string;
    field: string;
    value: any;
}, "game/changePlayer">, setShop: import("@reduxjs/toolkit").ActionCreatorWithPayload<ArraySchema<Pkm>, "game/setShop">, setItemsProposition: import("@reduxjs/toolkit").ActionCreatorWithPayload<ArraySchema<Item>, "game/setItemsProposition">;
declare const _default: import("redux").Reducer<GameStateStore>;
export default _default;
