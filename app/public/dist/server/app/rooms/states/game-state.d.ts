import { ArraySchema, MapSchema, Schema, SetSchema } from "@colyseus/schema";
import BotManager from "../../core/bot-manager";
import Simulation from "../../core/simulation";
import { FloatingItem } from "../../models/colyseus-models/floating-item";
import Player from "../../models/colyseus-models/player";
import { PokemonAvatarModel } from "../../models/colyseus-models/pokemon-avatar";
import { Portal, SynergySymbol } from "../../models/colyseus-models/portal";
import Shop from "../../models/shop";
import { EloRank } from "../../types/Config";
import { GameMode, GamePhaseState } from "../../types/enum/Game";
import { Item } from "../../types/enum/Item";
import { Pkm } from "../../types/enum/Pokemon";
import { SpecialGameRule } from "../../types/enum/SpecialGameRule";
import { Weather } from "../../types/enum/Weather";
export default class GameState extends Schema {
    afterGameId: string;
    roundTime: number;
    phase: GamePhaseState;
    players: MapSchema<Player, string>;
    avatars: MapSchema<PokemonAvatarModel, string>;
    floatingItems: MapSchema<FloatingItem, string>;
    portals: MapSchema<Portal, string>;
    symbols: MapSchema<SynergySymbol, string>;
    additionalPokemons: ArraySchema<Pkm>;
    stageLevel: number;
    weather: Weather;
    noElo: boolean;
    gameMode: GameMode;
    spectators: SetSchema<string>;
    simulations: MapSchema<Simulation, string>;
    lightX: number;
    lightY: number;
    specialGameRule: SpecialGameRule | null;
    time: number;
    updatePhaseNeeded: boolean;
    botManager: BotManager;
    shop: Shop;
    gameFinished: boolean;
    gameLoaded: boolean;
    name: string;
    startTime: number;
    endTime: number | undefined;
    preparationId: string;
    shinyEncounter: boolean;
    pveRewards: Item[];
    pveRewardsPropositions: Item[];
    minRank: EloRank | null;
    constructor(preparationId: string, name: string, noElo: boolean, gameMode: GameMode, minRank: EloRank | null);
}
