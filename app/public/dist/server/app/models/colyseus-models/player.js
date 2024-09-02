"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const schema_1 = require("@colyseus/schema");
const Config_1 = require("../../types/Config");
const Dungeon_1 = require("../../types/enum/Dungeon");
const Game_1 = require("../../types/enum/Game");
const Item_1 = require("../../types/enum/Item");
const Pokemon_1 = require("../../types/enum/Pokemon");
const SpecialGameRule_1 = require("../../types/enum/SpecialGameRule");
const Synergy_1 = require("../../types/enum/Synergy");
const Weather_1 = require("../../types/enum/Weather");
const array_1 = require("../../utils/array");
const board_1 = require("../../utils/board");
const random_1 = require("../../utils/random");
const schemas_1 = require("../../utils/schemas");
const effects_1 = require("../effects");
const pokemon_factory_1 = __importDefault(require("../pokemon-factory"));
const precomputed_pokemon_data_1 = require("../precomputed/precomputed-pokemon-data");
const experience_manager_1 = __importDefault(require("./experience-manager"));
const history_item_1 = __importDefault(require("./history-item"));
const pokemon_1 = require("./pokemon");
const pokemon_collection_1 = __importDefault(require("./pokemon-collection"));
const pokemon_config_1 = __importDefault(require("./pokemon-config"));
const synergies_1 = __importStar(require("./synergies"));
class Player extends schema_1.Schema {
    constructor(id, name, elo, avatar, isBot, rank, pokemonCollection, title, role, state) {
        var _a, _b;
        super();
        this.simulationId = "";
        this.simulationTeamIndex = 0;
        this.board = new schema_1.MapSchema();
        this.shop = new schema_1.ArraySchema();
        this.experienceManager = new experience_manager_1.default();
        this.synergies = new synergies_1.default();
        this.money = process.env.MODE == "dev" ? 999 : 5;
        this.life = 100;
        this.shopLocked = false;
        this.streak = 0;
        this.interest = 0;
        this.opponentId = "";
        this.opponentName = "";
        this.opponentAvatar = "";
        this.opponentTitle = "";
        this.boardSize = 0;
        this.items = new schema_1.ArraySchema();
        this.alive = true;
        this.history = new schema_1.ArraySchema();
        this.itemsProposition = new schema_1.ArraySchema();
        this.pokemonsProposition = new schema_1.ArraySchema();
        this.pveRewards = new schema_1.ArraySchema();
        this.pveRewardsPropositions = new schema_1.ArraySchema();
        this.loadingProgress = 0;
        this.berryTreesType = [
            (0, random_1.pickRandomIn)(Item_1.Berries),
            (0, random_1.pickRandomIn)(Item_1.Berries),
            (0, random_1.pickRandomIn)(Item_1.Berries)
        ];
        this.berryTreesStage = [1, 1, 1];
        this.effects = new effects_1.Effects();
        this.regionalPokemons = new schema_1.ArraySchema();
        this.commonRegionalPool = new Array();
        this.uncommonRegionalPool = new Array();
        this.rareRegionalPool = new Array();
        this.epicRegionalPool = new Array();
        this.ultraRegionalPool = new Array();
        this.opponents = new Map();
        this.titles = new Set();
        this.rerollCount = 0;
        this.artificialItems = (0, random_1.pickNRandomIn)(Item_1.ArtificialItems, 3);
        this.weatherRocks = (0, random_1.pickNRandomIn)(Item_1.WeatherRocks, 3);
        this.randomComponentsGiven = [];
        this.randomEggsGiven = [];
        this.canRegainLife = true;
        this.wildChance = 0;
        this.ghost = false;
        this.id = id;
        this.spectatedPlayerId = id;
        this.name = name;
        this.elo = elo;
        this.avatar = avatar;
        this.isBot = isBot;
        this.rank = rank;
        this.title = title;
        this.role = role;
        this.pokemonCollection = new pokemon_collection_1.default(pokemonCollection);
        this.lightX = state.lightX;
        this.lightY = state.lightY;
        this.map = (0, random_1.pickRandomIn)(Dungeon_1.DungeonPMDO);
        this.updateRegionalPool(state);
        if (isBot) {
            this.loadingProgress = 100;
            this.lightX = 3;
            this.lightY = 2;
        }
        if (state.specialGameRule === SpecialGameRule_1.SpecialGameRule.NINE_LIVES) {
            this.life = 9;
            this.canRegainLife = false;
        }
        const randomStarter = state.shop.getRandomPokemonFromPool(Game_1.Rarity.COMMON, this);
        const pokemon = pokemon_factory_1.default.createPokemonFromName(randomStarter, this);
        pokemon.positionX = (_a = (0, board_1.getFirstAvailablePositionInBench)(this.board)) !== null && _a !== void 0 ? _a : 0;
        pokemon.positionY = 0;
        this.board.set(pokemon.id, pokemon);
        pokemon.onAcquired(this);
        if (state.specialGameRule === SpecialGameRule_1.SpecialGameRule.UNIQUE_STARTER) {
            const randomUnique = (0, random_1.pickRandomIn)(Config_1.UniqueShop);
            const pokemonsObtained = (randomUnique in Pokemon_1.PkmDuos ? Pokemon_1.PkmDuos[randomUnique] : [randomUnique]).map((p) => pokemon_factory_1.default.createPokemonFromName(p, this));
            pokemonsObtained.forEach((pokemon) => {
                var _a;
                pokemon.positionX = (_a = (0, board_1.getFirstAvailablePositionInBench)(this.board)) !== null && _a !== void 0 ? _a : 0;
                pokemon.positionY = 0;
                this.board.set(pokemon.id, pokemon);
                pokemon.onAcquired(this);
            });
        }
        if (state.specialGameRule === SpecialGameRule_1.SpecialGameRule.DITTO_PARTY) {
            for (let i = 0; i < 5; i++) {
                const ditto = pokemon_factory_1.default.createPokemonFromName(Pokemon_1.Pkm.DITTO, this);
                ditto.positionX = (_b = (0, board_1.getFirstAvailablePositionInBench)(this.board)) !== null && _b !== void 0 ? _b : 0;
                ditto.positionY = 0;
                this.board.set(ditto.id, ditto);
                ditto.onAcquired(this);
            }
        }
    }
    addBattleResult(id, name, result, avatar, weather) {
        this.history.push(new history_item_1.default(id, name, result, avatar, weather ? weather : Weather_1.Weather.NEUTRAL));
    }
    getPokemonAt(x, y) {
        let p = undefined;
        this.board.forEach((pokemon) => {
            if (pokemon.positionX == x && pokemon.positionY == y) {
                p = pokemon;
            }
        });
        return p;
    }
    transformPokemon(pokemon, newEntry) {
        const newPokemon = pokemon_factory_1.default.createPokemonFromName(newEntry, this);
        pokemon.items.forEach((item) => {
            newPokemon.items.add(item);
        });
        newPokemon.positionX = pokemon.positionX;
        newPokemon.positionY = pokemon.positionY;
        this.board.delete(pokemon.id);
        this.board.set(newPokemon.id, newPokemon);
        newPokemon.onAcquired(this);
        this.updateSynergies();
        return newPokemon;
    }
    updateSynergies() {
        var _a, _b;
        const pokemons = (0, schemas_1.values)(this.board);
        let updatedSynergies = (0, synergies_1.computeSynergies)(pokemons);
        this.updateFishingRods(updatedSynergies);
        const artifNeedsRecomputing = this.updateArtificialItems(updatedSynergies);
        if (artifNeedsRecomputing) {
            updatedSynergies = (0, synergies_1.computeSynergies)(pokemons);
        }
        const rockNeedsRecomputing = this.updateWeatherRocks(updatedSynergies);
        if (rockNeedsRecomputing) {
            updatedSynergies = (0, synergies_1.computeSynergies)(pokemons);
        }
        const previousLight = (_a = this.synergies.get(Synergy_1.Synergy.LIGHT)) !== null && _a !== void 0 ? _a : 0;
        const newLight = (_b = updatedSynergies.get(Synergy_1.Synergy.LIGHT)) !== null && _b !== void 0 ? _b : 0;
        const minimumToGetLight = Config_1.SynergyTriggers[Synergy_1.Synergy.LIGHT][0];
        const lightChanged = (previousLight >= minimumToGetLight && newLight < minimumToGetLight) ||
            (previousLight < minimumToGetLight && newLight >= minimumToGetLight);
        updatedSynergies.forEach((value, synergy) => this.synergies.set(synergy, value));
        if (lightChanged)
            this.onLightChange();
        this.effects.update(this.synergies, this.board);
        this.wildChance =
            pokemons
                .filter((p) => p.types.has(Synergy_1.Synergy.WILD))
                .reduce((total, p) => total + p.stars, 0) / 100;
    }
    updateArtificialItems(updatedSynergies) {
        let needsRecomputingSynergiesAgain = false;
        const previousNbArtifItems = Config_1.SynergyTriggers[Synergy_1.Synergy.ARTIFICIAL].filter((n) => { var _a; return ((_a = this.synergies.get(Synergy_1.Synergy.ARTIFICIAL)) !== null && _a !== void 0 ? _a : 0) >= n; }).length;
        const newNbArtifItems = Config_1.SynergyTriggers[Synergy_1.Synergy.ARTIFICIAL].filter((n) => { var _a; return ((_a = updatedSynergies.get(Synergy_1.Synergy.ARTIFICIAL)) !== null && _a !== void 0 ? _a : 0) >= n; }).length;
        if (newNbArtifItems > previousNbArtifItems) {
            const gainedArtificialItems = this.artificialItems.slice(previousNbArtifItems, newNbArtifItems);
            gainedArtificialItems.forEach((item) => {
                this.items.push(item);
            });
        }
        else if (newNbArtifItems < previousNbArtifItems) {
            const lostArtificialItems = this.artificialItems.slice(newNbArtifItems, previousNbArtifItems);
            const lostTrash = lostArtificialItems.filter((item) => item === Item_1.Item.TRASH).length;
            let cleanedTrash = 0;
            this.board.forEach((pokemon) => {
                lostArtificialItems.forEach((item) => {
                    if (pokemon.items.has(item)) {
                        if (item === Item_1.Item.TRASH && lostTrash - cleanedTrash > 0) {
                            pokemon.items.delete(item);
                            cleanedTrash++;
                        }
                        else if (item !== Item_1.Item.TRASH) {
                            pokemon.items.delete(item);
                            if (item in Item_1.SynergyGivenByItem) {
                                const type = Item_1.SynergyGivenByItem[item];
                                const nativeTypes = (0, precomputed_pokemon_data_1.getPokemonData)(pokemon.name).types;
                                if (nativeTypes.includes(type) === false) {
                                    pokemon.types.delete(type);
                                    if (!(0, pokemon_1.isOnBench)(pokemon)) {
                                        needsRecomputingSynergiesAgain = true;
                                    }
                                }
                            }
                        }
                    }
                });
            });
            lostArtificialItems.forEach((item) => {
                if (item !== Item_1.Item.TRASH) {
                    (0, array_1.removeInArray)(this.items, item);
                }
                else if (item === Item_1.Item.TRASH && lostTrash - cleanedTrash > 0) {
                    (0, array_1.removeInArray)(this.items, item);
                    cleanedTrash++;
                }
            });
        }
        return needsRecomputingSynergiesAgain;
    }
    updateWeatherRocks(updatedSynergies) {
        let needsRecomputingSynergiesAgain = false;
        const previousNbRockItems = Config_1.SynergyTriggers[Synergy_1.Synergy.ROCK].filter((n) => { var _a; return ((_a = this.synergies.get(Synergy_1.Synergy.ROCK)) !== null && _a !== void 0 ? _a : 0) >= n; }).length;
        const newNbRockItems = Config_1.SynergyTriggers[Synergy_1.Synergy.ROCK].filter((n) => { var _a; return ((_a = updatedSynergies.get(Synergy_1.Synergy.ROCK)) !== null && _a !== void 0 ? _a : 0) >= n; }).length;
        if (newNbRockItems > previousNbRockItems) {
            const gainedWeatherRocks = this.weatherRocks.slice(previousNbRockItems, newNbRockItems);
            gainedWeatherRocks.forEach((item) => {
                this.items.push(item);
            });
        }
        else if (newNbRockItems < previousNbRockItems) {
            const lostWeatherRocks = this.weatherRocks.slice(newNbRockItems, previousNbRockItems);
            this.board.forEach((pokemon) => {
                lostWeatherRocks.forEach((item) => {
                    if (pokemon.items.has(item)) {
                        pokemon.items.delete(item);
                        if (item in Item_1.SynergyGivenByItem) {
                            const type = Item_1.SynergyGivenByItem[item];
                            const nativeTypes = (0, precomputed_pokemon_data_1.getPokemonData)(pokemon.name).types;
                            if (nativeTypes.includes(type) === false) {
                                pokemon.types.delete(type);
                                if (!(0, pokemon_1.isOnBench)(pokemon)) {
                                    needsRecomputingSynergiesAgain = true;
                                }
                            }
                        }
                    }
                });
            });
            lostWeatherRocks.forEach((item) => {
                (0, array_1.removeInArray)(this.items, item);
            });
        }
        return needsRecomputingSynergiesAgain;
    }
    updateFishingRods(updatedSynergies) {
        const fishingLevel = Config_1.SynergyTriggers[Synergy_1.Synergy.WATER].filter((n) => { var _a; return ((_a = updatedSynergies.get(Synergy_1.Synergy.WATER)) !== null && _a !== void 0 ? _a : 0) >= n; }).length;
        if (this.items.includes(Item_1.Item.OLD_ROD) && fishingLevel !== 1)
            (0, array_1.removeInArray)(this.items, Item_1.Item.OLD_ROD);
        if (this.items.includes(Item_1.Item.GOOD_ROD) && fishingLevel !== 2)
            (0, array_1.removeInArray)(this.items, Item_1.Item.GOOD_ROD);
        if (this.items.includes(Item_1.Item.SUPER_ROD) && fishingLevel !== 3)
            (0, array_1.removeInArray)(this.items, Item_1.Item.SUPER_ROD);
        if (this.items.includes(Item_1.Item.OLD_ROD) === false &&
            this.items.includes(Item_1.Item.GOLDEN_ROD) === false &&
            fishingLevel === 1)
            this.items.push(Item_1.Item.OLD_ROD);
        if (this.items.includes(Item_1.Item.GOOD_ROD) === false &&
            this.items.includes(Item_1.Item.GOLDEN_ROD) === false &&
            fishingLevel === 2)
            this.items.push(Item_1.Item.GOOD_ROD);
        if (this.items.includes(Item_1.Item.SUPER_ROD) === false &&
            this.items.includes(Item_1.Item.GOLDEN_ROD) === false &&
            fishingLevel === 3)
            this.items.push(Item_1.Item.SUPER_ROD);
    }
    updateRegionalPool(state) {
        const newRegionalPokemons = precomputed_pokemon_data_1.PRECOMPUTED_REGIONAL_MONS.filter((p) => pokemon_1.PokemonClasses[p].prototype.isInRegion(p, this.map, state));
        state.shop.resetRegionalPool(this);
        newRegionalPokemons.forEach((p) => {
            const isVariant = Object.values(Pokemon_1.PkmRegionalVariants).some((variants) => variants.includes(p));
            if ((0, precomputed_pokemon_data_1.getPokemonData)(p).stars === 1 && !isVariant) {
                state.shop.addRegionalPokemon(p, this);
            }
        });
        (0, schemas_1.resetArraySchema)(this.regionalPokemons, newRegionalPokemons.filter((p, index, array) => array.findIndex((p2) => Pokemon_1.PkmFamily[p] === Pokemon_1.PkmFamily[p2]) === index));
    }
    onLightChange() {
        const pokemonsReactingToLight = [
            Pokemon_1.Pkm.NECROZMA,
            Pokemon_1.Pkm.ULTRA_NECROZMA,
            Pokemon_1.Pkm.CHERRIM_SUNLIGHT,
            Pokemon_1.Pkm.CHERRIM
        ];
        this.board.forEach((pokemon) => {
            if (pokemonsReactingToLight.includes(pokemon.name)) {
                pokemon.onChangePosition(pokemon.positionX, pokemon.positionY, this);
            }
        });
    }
}
exports.default = Player;
__decorate([
    (0, schema_1.type)("string")
], Player.prototype, "id", void 0);
__decorate([
    (0, schema_1.type)("string")
], Player.prototype, "simulationId", void 0);
__decorate([
    (0, schema_1.type)("number")
], Player.prototype, "simulationTeamIndex", void 0);
__decorate([
    (0, schema_1.type)("string")
], Player.prototype, "name", void 0);
__decorate([
    (0, schema_1.type)("string")
], Player.prototype, "avatar", void 0);
__decorate([
    (0, schema_1.type)({ map: pokemon_1.Pokemon })
], Player.prototype, "board", void 0);
__decorate([
    (0, schema_1.type)(["string"])
], Player.prototype, "shop", void 0);
__decorate([
    (0, schema_1.type)(experience_manager_1.default)
], Player.prototype, "experienceManager", void 0);
__decorate([
    (0, schema_1.type)({ map: "uint8" })
], Player.prototype, "synergies", void 0);
__decorate([
    (0, schema_1.type)("uint16")
], Player.prototype, "money", void 0);
__decorate([
    (0, schema_1.type)("int8")
], Player.prototype, "life", void 0);
__decorate([
    (0, schema_1.type)("boolean")
], Player.prototype, "shopLocked", void 0);
__decorate([
    (0, schema_1.type)("uint8")
], Player.prototype, "streak", void 0);
__decorate([
    (0, schema_1.type)("uint8")
], Player.prototype, "interest", void 0);
__decorate([
    (0, schema_1.type)("string")
], Player.prototype, "opponentId", void 0);
__decorate([
    (0, schema_1.type)("string")
], Player.prototype, "opponentName", void 0);
__decorate([
    (0, schema_1.type)("string")
], Player.prototype, "opponentAvatar", void 0);
__decorate([
    (0, schema_1.type)("string")
], Player.prototype, "opponentTitle", void 0);
__decorate([
    (0, schema_1.type)("string")
], Player.prototype, "spectatedPlayerId", void 0);
__decorate([
    (0, schema_1.type)("uint8")
], Player.prototype, "boardSize", void 0);
__decorate([
    (0, schema_1.type)(["string"])
], Player.prototype, "items", void 0);
__decorate([
    (0, schema_1.type)("uint8")
], Player.prototype, "rank", void 0);
__decorate([
    (0, schema_1.type)("uint16")
], Player.prototype, "elo", void 0);
__decorate([
    (0, schema_1.type)("boolean")
], Player.prototype, "alive", void 0);
__decorate([
    (0, schema_1.type)([history_item_1.default])
], Player.prototype, "history", void 0);
__decorate([
    (0, schema_1.type)({ map: pokemon_config_1.default })
], Player.prototype, "pokemonCollection", void 0);
__decorate([
    (0, schema_1.type)("string")
], Player.prototype, "title", void 0);
__decorate([
    (0, schema_1.type)("string")
], Player.prototype, "role", void 0);
__decorate([
    (0, schema_1.type)(["string"])
], Player.prototype, "itemsProposition", void 0);
__decorate([
    (0, schema_1.type)(["string"])
], Player.prototype, "pokemonsProposition", void 0);
__decorate([
    (0, schema_1.type)(["string"])
], Player.prototype, "pveRewards", void 0);
__decorate([
    (0, schema_1.type)(["string"])
], Player.prototype, "pveRewardsPropositions", void 0);
__decorate([
    (0, schema_1.type)("float32")
], Player.prototype, "loadingProgress", void 0);
__decorate([
    (0, schema_1.type)(["string"])
], Player.prototype, "berryTreesType", void 0);
__decorate([
    (0, schema_1.type)(["uint8"])
], Player.prototype, "berryTreesStage", void 0);
__decorate([
    (0, schema_1.type)("string")
], Player.prototype, "map", void 0);
__decorate([
    (0, schema_1.type)({ set: "string" })
], Player.prototype, "effects", void 0);
__decorate([
    (0, schema_1.type)(["string"])
], Player.prototype, "regionalPokemons", void 0);
//# sourceMappingURL=player.js.map