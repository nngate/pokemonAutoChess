"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const schema_1 = require("@colyseus/schema");
const item_factory_1 = __importDefault(require("../models/item-factory"));
const pokemon_factory_1 = __importDefault(require("../models/pokemon-factory"));
const precomputed_pokemon_data_1 = require("../models/precomputed/precomputed-pokemon-data");
const precomputed_types_1 = require("../models/precomputed/precomputed-types");
const utils_1 = require("../public/src/pages/utils/utils");
const types_1 = require("../types");
const Config_1 = require("../types/Config");
const Effect_1 = require("../types/enum/Effect");
const Game_1 = require("../types/enum/Game");
const Item_1 = require("../types/enum/Item");
const Passive_1 = require("../types/enum/Passive");
const Pokemon_1 = require("../types/enum/Pokemon");
const Synergy_1 = require("../types/enum/Synergy");
const Weather_1 = require("../types/enum/Weather");
const logger_1 = require("../utils/logger");
const random_1 = require("../utils/random");
const schemas_1 = require("../utils/schemas");
const board_1 = __importDefault(require("./board"));
const dps_1 = __importDefault(require("./dps"));
const pokemon_entity_1 = require("./pokemon-entity");
const simulation_command_1 = require("./simulation-command");
class Simulation extends schema_1.Schema {
    constructor(id, room, blueTeam, redTeam, bluePlayer, redPlayer, stageLevel, weather) {
        var _a;
        super();
        this.weather = Weather_1.Weather.NEUTRAL;
        this.winnerId = "";
        this.blueTeam = new schema_1.MapSchema();
        this.redTeam = new schema_1.MapSchema();
        this.blueDpsMeter = new schema_1.MapSchema();
        this.redDpsMeter = new schema_1.MapSchema();
        this.blueEffects = new Set();
        this.redEffects = new Set();
        this.board = new board_1.default(Config_1.BOARD_HEIGHT, Config_1.BOARD_WIDTH);
        this.finished = false;
        this.flowerSpawn = [false, false];
        this.stageLevel = 0;
        this.stormLightningTimer = 0;
        this.tidalwaveTimer = 0;
        this.id = id;
        this.room = room;
        this.bluePlayer = bluePlayer;
        this.redPlayer = redPlayer;
        this.bluePlayerId = bluePlayer.id;
        this.redPlayerId = (_a = redPlayer === null || redPlayer === void 0 ? void 0 : redPlayer.id) !== null && _a !== void 0 ? _a : "pve";
        this.stageLevel = stageLevel;
        this.weather = weather;
        this.board = new board_1.default(Config_1.BOARD_HEIGHT, Config_1.BOARD_WIDTH);
        [this.bluePlayer, this.redPlayer].forEach((player) => {
            if (!player)
                return;
            player.board.forEach((pokemon, id) => {
                pokemon.beforeSimulationStart({ weather: this.weather, player });
            });
        });
        bluePlayer.effects.forEach((e) => this.blueEffects.add(e));
        redPlayer === null || redPlayer === void 0 ? void 0 : redPlayer.effects.forEach((e) => this.redEffects.add(e));
        this.finished = false;
        this.winnerId = "";
        this.flowerSpawn = [false, false];
        this.stormLightningTimer = (0, random_1.randomBetween)(4000, 8000);
        if (blueTeam) {
            blueTeam.forEach((pokemon) => {
                if (pokemon.positionY != 0) {
                    this.addPokemon(pokemon, pokemon.positionX, pokemon.positionY - 1, 0);
                }
            });
        }
        if (redTeam) {
            redTeam.forEach((pokemon) => {
                if (pokemon.positionY != 0) {
                    this.addPokemon(pokemon, pokemon.positionX, 5 - (pokemon.positionY - 1), 1);
                }
            });
        }
        ;
        [
            {
                team: blueTeam,
                entityTeam: this.blueTeam,
                effects: this.blueEffects,
                player: bluePlayer
            },
            {
                team: redTeam,
                entityTeam: this.redTeam,
                effects: this.redEffects,
                player: redPlayer
            }
        ].forEach(({ team, entityTeam, effects, player }) => {
            if (player) {
                if ([
                    Effect_1.Effect.COCOON,
                    Effect_1.Effect.INFESTATION,
                    Effect_1.Effect.HORDE,
                    Effect_1.Effect.HEART_OF_THE_SWARM
                ].some((e) => effects.has(e))) {
                    const teamIndex = team === blueTeam ? 0 : 1;
                    const bugTeam = new Array();
                    team.forEach((pkm) => {
                        if (pkm.types.has(Synergy_1.Synergy.BUG) && pkm.positionY != 0) {
                            bugTeam.push(pkm);
                        }
                    });
                    bugTeam.sort((a, b) => (0, pokemon_entity_1.getUnitScore)(b) - (0, pokemon_entity_1.getUnitScore)(a));
                    let numberToSpawn = 0;
                    if (effects.has(Effect_1.Effect.COCOON)) {
                        numberToSpawn = 1;
                    }
                    if (effects.has(Effect_1.Effect.INFESTATION)) {
                        numberToSpawn = 2;
                    }
                    if (effects.has(Effect_1.Effect.HORDE)) {
                        numberToSpawn = 3;
                    }
                    if (effects.has(Effect_1.Effect.HEART_OF_THE_SWARM)) {
                        numberToSpawn = 5;
                    }
                    for (let i = 0; i < numberToSpawn; i++) {
                        const bug = pokemon_factory_1.default.createPokemonFromName(bugTeam[i].name, player);
                        const coord = this.getClosestAvailablePlaceOnBoardToPokemon(bugTeam[i], teamIndex);
                        this.addPokemon(bug, coord.x, coord.y, teamIndex, true);
                    }
                }
                player.board.forEach((pokemon) => {
                    const entity = (0, schemas_1.values)(entityTeam).find((p) => p.refToBoardPokemon === pokemon);
                    if (entity) {
                        pokemon.afterSimulationStart({
                            simulation: this,
                            player,
                            team: entityTeam,
                            entity
                        });
                    }
                    if (pokemon.items.has(Item_1.Item.ROTOM_PHONE)) {
                        const teamIndex = team === blueTeam ? 0 : 1;
                        const rotomDrone = pokemon_factory_1.default.createPokemonFromName(Pokemon_1.Pkm.ROTOM_DRONE, player);
                        const coord = this.getClosestAvailablePlaceOnBoardToPokemon(pokemon, teamIndex);
                        this.addPokemon(rotomDrone, coord.x, coord.y, teamIndex, true);
                    }
                });
            }
        });
        this.applyPostEffects();
    }
    getCurrentBattleResult(playerId) {
        var _a, _b;
        if (this.blueTeam.size === 0 && this.redTeam.size > 0) {
            return playerId === ((_a = this.bluePlayer) === null || _a === void 0 ? void 0 : _a.id)
                ? Game_1.BattleResult.DEFEAT
                : Game_1.BattleResult.WIN;
        }
        else if (this.redTeam.size === 0 && this.blueTeam.size > 0) {
            return playerId === ((_b = this.redPlayer) === null || _b === void 0 ? void 0 : _b.id)
                ? Game_1.BattleResult.DEFEAT
                : Game_1.BattleResult.WIN;
        }
        return Game_1.BattleResult.DRAW;
    }
    getEffects(playerId) {
        var _a, _b;
        return playerId === ((_a = this.bluePlayer) === null || _a === void 0 ? void 0 : _a.id)
            ? this.blueEffects
            : playerId === ((_b = this.redPlayer) === null || _b === void 0 ? void 0 : _b.id)
                ? this.redEffects
                : undefined;
    }
    getDpsMeter(playerId) {
        var _a, _b;
        return playerId === ((_a = this.bluePlayer) === null || _a === void 0 ? void 0 : _a.id)
            ? this.blueDpsMeter
            : playerId === ((_b = this.redPlayer) === null || _b === void 0 ? void 0 : _b.id)
                ? this.redDpsMeter
                : undefined;
    }
    getTeam(playerId) {
        var _a, _b;
        return playerId === ((_a = this.bluePlayer) === null || _a === void 0 ? void 0 : _a.id)
            ? this.blueTeam
            : playerId === ((_b = this.redPlayer) === null || _b === void 0 ? void 0 : _b.id)
                ? this.redTeam
                : undefined;
    }
    getOpponentTeam(playerId) {
        var _a, _b;
        return playerId === ((_a = this.bluePlayer) === null || _a === void 0 ? void 0 : _a.id)
            ? this.redTeam
            : playerId === ((_b = this.redPlayer) === null || _b === void 0 ? void 0 : _b.id)
                ? this.blueTeam
                : undefined;
    }
    addPokemon(pokemon, x, y, team, isClone = false) {
        const pokemonEntity = new pokemon_entity_1.PokemonEntity(pokemon, x, y, team, this);
        pokemonEntity.isClone = isClone;
        this.applySynergyEffects(pokemonEntity);
        this.applyItemsEffects(pokemonEntity);
        this.applyWeatherEffects(pokemonEntity);
        this.board.setValue(pokemonEntity.positionX, pokemonEntity.positionY, pokemonEntity);
        if (team == Game_1.Team.BLUE_TEAM) {
            const dps = new dps_1.default(pokemonEntity.id, (0, utils_1.getPortraitPath)(pokemonEntity));
            this.blueTeam.set(pokemonEntity.id, pokemonEntity);
            this.blueDpsMeter.set(pokemonEntity.id, dps);
        }
        if (team == Game_1.Team.RED_TEAM) {
            const dps = new dps_1.default(pokemonEntity.id, (0, utils_1.getPortraitPath)(pokemonEntity));
            this.redTeam.set(pokemonEntity.id, pokemonEntity);
            this.redDpsMeter.set(pokemonEntity.id, dps);
        }
        return pokemonEntity;
    }
    getFirstAvailablePlaceOnBoard(teamIndex) {
        let candidateX = 0, candidateY = 0;
        if (teamIndex === 0) {
            outerloop: for (let y = 0; y < this.board.rows; y++) {
                for (let x = 0; x < this.board.columns; x++) {
                    if (this.board.getValue(x, y) === undefined) {
                        candidateX = x;
                        candidateY = y;
                        break outerloop;
                    }
                }
            }
        }
        else {
            outerloop: for (let y = 0; y < this.board.rows; y++) {
                for (let x = this.board.columns - 1; x >= 0; x--) {
                    if (this.board.getValue(x, y) === undefined) {
                        candidateX = x;
                        candidateY = y;
                        break outerloop;
                    }
                }
            }
        }
        return { x: candidateX, y: candidateY };
    }
    getClosestAvailablePlaceOnBoardTo(positionX, positionY, teamIndex) {
        const placesToConsiderByOrderOfPriority = [
            [0, 0],
            [-1, 0],
            [+1, 0],
            [0, -1],
            [-1, -1],
            [+1, -1],
            [-1, +1],
            [+1, +1],
            [0, +1],
            [-2, 0],
            [+2, 0],
            [-2, -1],
            [+2, -1],
            [0, -2],
            [-1, -2],
            [+1, -2],
            [-2, -2],
            [+2, -2],
            [-2, +1],
            [+2, +1],
            [-3, 0],
            [+3, 0],
            [-3, -1],
            [+3, -1],
            [-3, -2],
            [+3, -2],
            [0, -3],
            [-1, -3],
            [+1, -3],
            [-2, -3],
            [+2, -3],
            [-3, -3],
            [+3, -3],
            [-3, +1],
            [+3, +1]
        ];
        for (const [dx, dy] of placesToConsiderByOrderOfPriority) {
            const x = positionX + dx;
            const y = teamIndex === 0 ? positionY - 1 + dy : 5 - (positionY - 1) - dy;
            if (x >= 0 &&
                x < this.board.columns &&
                y >= 0 &&
                y < this.board.rows &&
                this.board.getValue(x, y) === undefined) {
                return { x, y };
            }
        }
        return this.getFirstAvailablePlaceOnBoard(teamIndex);
    }
    getClosestAvailablePlaceOnBoardToPokemon(pokemon, teamIndex) {
        return this.getClosestAvailablePlaceOnBoardTo(pokemon.positionX, pokemon.positionY, teamIndex);
    }
    applyItemsEffects(pokemon) {
        if (pokemon.passive === Passive_1.Passive.PICKUP && pokemon.items.size === 0) {
            pokemon.items.add((0, random_1.pickRandomIn)(Item_1.CraftableItems.concat(Item_1.Berries)));
        }
        if (pokemon.items.has(Item_1.Item.WONDER_BOX)) {
            pokemon.items.delete(Item_1.Item.WONDER_BOX);
            const randomItems = item_factory_1.default.createWonderboxItems(pokemon.items);
            randomItems.forEach((item) => {
                if (pokemon.items.size < 3) {
                    pokemon.items.add(item);
                }
            });
        }
        pokemon.items.forEach((item) => {
            this.applyItemEffect(pokemon, item);
        });
        if (pokemon.passive === Passive_1.Passive.SYNCHRO) {
            pokemon.status.triggerSynchro();
        }
    }
    applyItemEffect(pokemon, item) {
        if (Config_1.ItemStats[item]) {
            Object.entries(Config_1.ItemStats[item]).forEach(([stat, value]) => pokemon.applyStat(stat, value));
        }
        if (item === Item_1.Item.SOUL_DEW) {
            pokemon.status.triggerSoulDew(1000);
        }
        if (item === Item_1.Item.WIDE_LENS) {
            pokemon.range += 2;
        }
        if (item === Item_1.Item.MAX_REVIVE) {
            pokemon.status.resurection = true;
        }
        if (item === Item_1.Item.SWIFT_WING) {
            pokemon.addDodgeChance(0.1, pokemon, 0, false);
        }
        if (item === Item_1.Item.FLAME_ORB) {
            pokemon.addAttack(pokemon.baseAtk, pokemon, 0, false);
            pokemon.status.triggerBurn(60000, pokemon, pokemon);
        }
        if (item === Item_1.Item.TOXIC_ORB) {
            pokemon.addAttack(pokemon.baseAtk, pokemon, 0, false);
            pokemon.status.triggerPoison(60000, pokemon, pokemon);
        }
        if (item === Item_1.Item.POKERUS_VIAL) {
            pokemon.status.triggerPokerus();
        }
        if (item === Item_1.Item.FLUFFY_TAIL) {
            pokemon.status.triggerRuneProtect(60000);
        }
        if (item === Item_1.Item.KINGS_ROCK) {
            pokemon.addShield(0.3 * pokemon.hp, pokemon, 0, false);
        }
        if (item === Item_1.Item.DYNAMAX_BAND) {
            pokemon.addMaxHP(2.5 * pokemon.hp, pokemon, 0, false);
        }
        if (item === Item_1.Item.GOLD_BOTTLE_CAP && pokemon.player) {
            pokemon.addCritChance(pokemon.player.money, pokemon, 0, false);
            pokemon.addCritPower(pokemon.player.money / 100, pokemon, 0, false);
        }
        if (item === Item_1.Item.SACRED_ASH) {
            pokemon.status.resurection = true;
        }
    }
    applySynergyEffects(pokemon) {
        var _a, _b;
        if (pokemon.team === Game_1.Team.BLUE_TEAM) {
            this.applyEffects(pokemon, pokemon.types, this.blueEffects, ((_a = this.bluePlayer) === null || _a === void 0 ? void 0 : _a.synergies.countActiveSynergies()) || 0);
        }
        else if (pokemon.team === Game_1.Team.RED_TEAM) {
            this.applyEffects(pokemon, pokemon.types, this.redEffects, ((_b = this.redPlayer) === null || _b === void 0 ? void 0 : _b.synergies.countActiveSynergies()) || 0);
        }
        if (pokemon.types.has(Synergy_1.Synergy.GHOST)) {
            pokemon.addDodgeChance(0.25, pokemon, 0, false);
        }
    }
    applyWeatherEffects(pokemon) {
        const weatherEffect = Weather_1.WeatherEffects.get(this.weather);
        if (weatherEffect) {
            switch (weatherEffect) {
                case Effect_1.Effect.WINDY:
                    pokemon.addDodgeChance(pokemon.types.has(Synergy_1.Synergy.FLYING) ? 0.2 : 0.1, pokemon, 0, false);
                    break;
                case Effect_1.Effect.NIGHT:
                    pokemon.addCritChance(10, pokemon, 0, false);
                    break;
            }
            pokemon.effects.add(weatherEffect);
        }
    }
    applyPostEffects() {
        ;
        [this.blueTeam, this.redTeam].forEach((team) => {
            team.forEach((pokemon) => {
                if (pokemon.effects.has(Effect_1.Effect.DRAGON_SCALES) ||
                    pokemon.effects.has(Effect_1.Effect.DRAGON_DANCE)) {
                    pokemon.addShield(30 * pokemon.stars, pokemon, 0, false);
                }
                if (pokemon.effects.has(Effect_1.Effect.DRAGON_DANCE)) {
                    pokemon.addAbilityPower(10 * pokemon.stars, pokemon, 0, false);
                    pokemon.addAttackSpeed(10 * pokemon.stars, pokemon, 0, false);
                }
                let shieldBonus = 0;
                if (pokemon.effects.has(Effect_1.Effect.STAMINA)) {
                    shieldBonus = 15;
                }
                if (pokemon.effects.has(Effect_1.Effect.STRENGTH)) {
                    shieldBonus += 25;
                }
                if (pokemon.effects.has(Effect_1.Effect.ENDURE)) {
                    shieldBonus += 35;
                }
                if (pokemon.effects.has(Effect_1.Effect.PURE_POWER)) {
                    shieldBonus += 50;
                }
                if (shieldBonus >= 0) {
                    pokemon.addShield(shieldBonus, pokemon, 0, false);
                    const cells = this.board.getAdjacentCells(pokemon.positionX, pokemon.positionY);
                    cells.forEach((cell) => {
                        if (cell.value && pokemon.team == cell.value.team) {
                            cell.value.addShield(shieldBonus, pokemon, 0, false);
                        }
                    });
                }
                if (pokemon.items.has(Item_1.Item.LUCKY_EGG)) {
                    ;
                    [-1, 0, 1].forEach((offset) => {
                        const ally = this.board.getValue(pokemon.positionX + offset, pokemon.positionY);
                        if (ally && ally.team === pokemon.team) {
                            ally.addAbilityPower(40, pokemon, 0, false);
                        }
                    });
                }
                if (pokemon.items.has(Item_1.Item.CLEANSE_TAG)) {
                    ;
                    [-1, 0, 1].forEach((offset) => {
                        const ally = this.board.getValue(pokemon.positionX + offset, pokemon.positionY);
                        if (ally && ally.team === pokemon.team) {
                            ally.addShield(Math.ceil(0.2 * ally.hp), ally, 0, false);
                            ally.status.triggerRuneProtect(5000);
                        }
                    });
                }
                if (pokemon.items.has(Item_1.Item.GRACIDEA_FLOWER)) {
                    ;
                    [-1, 0, 1].forEach((offset) => {
                        const value = this.board.getValue(pokemon.positionX + offset, pokemon.positionY);
                        if (value) {
                            value.addAttackSpeed(20, pokemon, 0, false);
                        }
                    });
                }
                if (pokemon.items.has(Item_1.Item.EXP_SHARE)) {
                    ;
                    [-1, 1].forEach((offset) => {
                        const value = this.board.getValue(pokemon.positionX + offset, pokemon.positionY);
                        if (value) {
                            if (value.atk > pokemon.atk)
                                pokemon.atk = value.atk;
                            if (value.def > pokemon.def)
                                pokemon.def = value.def;
                            if (value.speDef > pokemon.speDef)
                                pokemon.speDef = value.speDef;
                            if (value.ap > pokemon.ap)
                                pokemon.ap = value.ap;
                        }
                    });
                }
                if (pokemon.passive === Passive_1.Passive.LUVDISC) {
                    const lovers = [-1, 1].map((offset) => this.board.getValue(pokemon.positionX + offset, pokemon.positionY));
                    if (lovers[0] && lovers[1]) {
                        const bestAtk = Math.max(lovers[0].atk, lovers[1].atk);
                        const bestDef = Math.max(lovers[0].def, lovers[1].def);
                        const bestSpeDef = Math.max(lovers[0].speDef, lovers[1].speDef);
                        const bestAP = Math.max(lovers[0].ap, lovers[1].ap);
                        lovers[0].atk = bestAtk;
                        lovers[1].atk = bestAtk;
                        lovers[0].def = bestDef;
                        lovers[1].def = bestDef;
                        lovers[0].speDef = bestSpeDef;
                        lovers[1].speDef = bestSpeDef;
                        lovers[0].ap = bestAP;
                        lovers[1].ap = bestAP;
                    }
                }
                if (pokemon.items.has(Item_1.Item.WHITE_FLUTE)) {
                    const wilds = precomputed_types_1.PRECOMPUTED_POKEMONS_PER_TYPE[Synergy_1.Synergy.WILD].map((p) => (0, precomputed_pokemon_data_1.getPokemonData)(p));
                    const spawns = [];
                    const pickWild = (rarity, tier) => {
                        const randomWild = (0, random_1.pickRandomIn)(wilds.filter((p) => p.rarity === rarity && p.stars === tier));
                        if (randomWild) {
                            spawns.push(randomWild);
                        }
                        else {
                            logger_1.logger.info("no pokemon found for white flute call", rarity, tier);
                        }
                    };
                    if (this.stageLevel <= 5) {
                        pickWild(Game_1.Rarity.COMMON, 1);
                        pickWild(Game_1.Rarity.COMMON, 1);
                        pickWild(Game_1.Rarity.UNCOMMON, 1);
                    }
                    else if (this.stageLevel <= 10) {
                        pickWild(Game_1.Rarity.COMMON, 2);
                        pickWild(Game_1.Rarity.COMMON, 1);
                        pickWild(Game_1.Rarity.UNCOMMON, 1);
                    }
                    else if (this.stageLevel <= 15) {
                        pickWild(Game_1.Rarity.UNCOMMON, 1);
                        pickWild(Game_1.Rarity.COMMON, 2);
                        pickWild(Game_1.Rarity.RARE, 1);
                    }
                    else if (this.stageLevel <= 20) {
                        pickWild(Game_1.Rarity.UNCOMMON, 2);
                        pickWild(Game_1.Rarity.RARE, 1);
                        pickWild(Game_1.Rarity.EPIC, 1);
                    }
                    else if (this.stageLevel <= 25) {
                        pickWild(Game_1.Rarity.UNCOMMON, 2);
                        pickWild(Game_1.Rarity.RARE, 2);
                        pickWild(Game_1.Rarity.EPIC, 1);
                    }
                    else if (this.stageLevel <= 30) {
                        pickWild(Game_1.Rarity.RARE, 2);
                        pickWild(Game_1.Rarity.EPIC, 1);
                        pickWild(Game_1.Rarity.EPIC, 2);
                    }
                    else if (this.stageLevel <= 35) {
                        pickWild(Game_1.Rarity.RARE, 2);
                        pickWild(Game_1.Rarity.EPIC, 2);
                        pickWild(Game_1.Rarity.UNIQUE, 3);
                    }
                    else {
                        pickWild(Game_1.Rarity.EPIC, 2);
                        pickWild(Game_1.Rarity.UNIQUE, 3);
                        pickWild(Game_1.Rarity.ULTRA, 2);
                    }
                    spawns.forEach((spawn) => {
                        const mon = pokemon_factory_1.default.createPokemonFromName(spawn.name);
                        const coord = this.getClosestAvailablePlaceOnBoardToPokemon(pokemon, pokemon.team);
                        this.addPokemon(mon, coord.x, coord.y, pokemon.team, true);
                    });
                }
                if (pokemon.items.has(Item_1.Item.COMET_SHARD)) {
                    pokemon.commands.push(new simulation_command_1.DelayedCommand(() => {
                        const farthestCoordinate = this.board.getFarthestTargetCoordinateAvailablePlace(pokemon);
                        if (farthestCoordinate) {
                            const target = farthestCoordinate.target;
                            pokemon.skydiveTo(farthestCoordinate.x, farthestCoordinate.y, this.board);
                            pokemon.targetX = target.positionX;
                            pokemon.targetY = target.positionY;
                            pokemon.status.triggerProtect(3000);
                            pokemon.commands.push(new simulation_command_1.DelayedCommand(() => {
                                pokemon.simulation.room.broadcast(types_1.Transfer.ABILITY, {
                                    id: pokemon.simulation.id,
                                    skill: "COMET_CRASH",
                                    positionX: farthestCoordinate.x,
                                    positionY: farthestCoordinate.y,
                                    targetX: target.positionX,
                                    targetY: target.positionY
                                });
                            }, 500));
                            pokemon.commands.push(new simulation_command_1.DelayedCommand(() => {
                                if ((target === null || target === void 0 ? void 0 : target.life) > 0) {
                                    const crit = (0, random_1.chance)(pokemon.critChance / 100);
                                    target.handleSpecialDamage(3 * pokemon.atk, this.board, Game_1.AttackType.SPECIAL, pokemon, crit);
                                    this.board
                                        .getAdjacentCells(target.positionX, target.positionY)
                                        .forEach((cell) => {
                                        if (cell.value && cell.value.team !== pokemon.team) {
                                            cell.value.handleSpecialDamage(pokemon.atk, this.board, Game_1.AttackType.SPECIAL, pokemon, crit);
                                        }
                                    });
                                }
                            }, 1000));
                        }
                    }, 100));
                }
                if (pokemon.passive === Passive_1.Passive.SPOT_PANDA) {
                    pokemon.effects.add(Effect_1.Effect.IMMUNITY_CONFUSION);
                }
            });
            const teamEffects = team === this.blueTeam ? this.blueEffects : this.redEffects;
            const opponentTeam = team === this.blueTeam ? Game_1.Team.RED_TEAM : Game_1.Team.BLUE_TEAM;
            if (teamEffects.has(Effect_1.Effect.CURSE_OF_VULNERABILITY) ||
                teamEffects.has(Effect_1.Effect.CURSE_OF_WEAKNESS) ||
                teamEffects.has(Effect_1.Effect.CURSE_OF_TORMENT) ||
                teamEffects.has(Effect_1.Effect.CURSE_OF_FATE)) {
                this.applyCurse(Effect_1.Effect.CURSE_OF_VULNERABILITY, opponentTeam);
            }
            if (teamEffects.has(Effect_1.Effect.CURSE_OF_WEAKNESS) ||
                teamEffects.has(Effect_1.Effect.CURSE_OF_TORMENT) ||
                teamEffects.has(Effect_1.Effect.CURSE_OF_FATE)) {
                this.applyCurse(Effect_1.Effect.CURSE_OF_WEAKNESS, opponentTeam);
            }
            if (teamEffects.has(Effect_1.Effect.CURSE_OF_TORMENT) ||
                teamEffects.has(Effect_1.Effect.CURSE_OF_FATE)) {
                this.applyCurse(Effect_1.Effect.CURSE_OF_TORMENT, opponentTeam);
            }
            if (teamEffects.has(Effect_1.Effect.CURSE_OF_FATE)) {
                this.applyCurse(Effect_1.Effect.CURSE_OF_FATE, opponentTeam);
            }
        });
    }
    applyEffects(pokemon, types, allyEffects, activeSynergies) {
        allyEffects.forEach((effect) => {
            switch (effect) {
                case Effect_1.Effect.HONE_CLAWS:
                    if (types.has(Synergy_1.Synergy.DARK)) {
                        pokemon.addCritChance(30, pokemon, 0, false);
                        pokemon.addCritPower(0.6, pokemon, 0, false);
                        pokemon.effects.add(Effect_1.Effect.HONE_CLAWS);
                    }
                    break;
                case Effect_1.Effect.ASSURANCE:
                    if (types.has(Synergy_1.Synergy.DARK)) {
                        pokemon.addCritChance(40, pokemon, 0, false);
                        pokemon.addCritPower(0.8, pokemon, 0, false);
                        pokemon.effects.add(Effect_1.Effect.ASSURANCE);
                    }
                    break;
                case Effect_1.Effect.BEAT_UP:
                    if (types.has(Synergy_1.Synergy.DARK)) {
                        pokemon.addCritChance(50, pokemon, 0, false);
                        pokemon.addCritPower(1.0, pokemon, 0, false);
                        pokemon.effects.add(Effect_1.Effect.BEAT_UP);
                    }
                    break;
                case Effect_1.Effect.ANCIENT_POWER:
                case Effect_1.Effect.ELDER_POWER:
                case Effect_1.Effect.FORGOTTEN_POWER:
                    if (types.has(Synergy_1.Synergy.FOSSIL)) {
                        pokemon.effects.add(effect);
                    }
                    break;
                case Effect_1.Effect.BLAZE:
                    if (types.has(Synergy_1.Synergy.FIRE)) {
                        pokemon.effects.add(Effect_1.Effect.BLAZE);
                    }
                    break;
                case Effect_1.Effect.VICTORY_STAR:
                    if (types.has(Synergy_1.Synergy.FIRE)) {
                        pokemon.effects.add(Effect_1.Effect.VICTORY_STAR);
                    }
                    break;
                case Effect_1.Effect.DROUGHT:
                    if (types.has(Synergy_1.Synergy.FIRE)) {
                        pokemon.effects.add(Effect_1.Effect.DROUGHT);
                    }
                    break;
                case Effect_1.Effect.DESOLATE_LAND:
                    if (types.has(Synergy_1.Synergy.FIRE)) {
                        pokemon.effects.add(Effect_1.Effect.DESOLATE_LAND);
                    }
                    break;
                case Effect_1.Effect.INGRAIN:
                    if (types.has(Synergy_1.Synergy.GRASS)) {
                        pokemon.effects.add(Effect_1.Effect.INGRAIN);
                    }
                    break;
                case Effect_1.Effect.GROWTH:
                    if (types.has(Synergy_1.Synergy.GRASS)) {
                        pokemon.effects.add(Effect_1.Effect.GROWTH);
                    }
                    break;
                case Effect_1.Effect.SPORE:
                    if (types.has(Synergy_1.Synergy.GRASS)) {
                        pokemon.effects.add(Effect_1.Effect.SPORE);
                    }
                    break;
                case Effect_1.Effect.RAIN_DANCE:
                    if (types.has(Synergy_1.Synergy.WATER)) {
                        pokemon.effects.add(Effect_1.Effect.RAIN_DANCE);
                    }
                    break;
                case Effect_1.Effect.DRIZZLE:
                    if (types.has(Synergy_1.Synergy.WATER)) {
                        pokemon.effects.add(Effect_1.Effect.DRIZZLE);
                    }
                    break;
                case Effect_1.Effect.PRIMORDIAL_SEA:
                    if (types.has(Synergy_1.Synergy.WATER)) {
                        pokemon.effects.add(Effect_1.Effect.PRIMORDIAL_SEA);
                    }
                    break;
                case Effect_1.Effect.STAMINA:
                    if (types.has(Synergy_1.Synergy.NORMAL)) {
                        pokemon.effects.add(Effect_1.Effect.STAMINA);
                    }
                    break;
                case Effect_1.Effect.STRENGTH:
                    if (types.has(Synergy_1.Synergy.NORMAL)) {
                        pokemon.effects.add(Effect_1.Effect.STRENGTH);
                    }
                    break;
                case Effect_1.Effect.ENDURE:
                    if (types.has(Synergy_1.Synergy.NORMAL)) {
                        pokemon.effects.add(Effect_1.Effect.ENDURE);
                    }
                    break;
                case Effect_1.Effect.PURE_POWER:
                    if (types.has(Synergy_1.Synergy.NORMAL)) {
                        pokemon.effects.add(Effect_1.Effect.PURE_POWER);
                    }
                    break;
                case Effect_1.Effect.RISING_VOLTAGE:
                case Effect_1.Effect.OVERDRIVE:
                case Effect_1.Effect.POWER_SURGE:
                    if (types.has(Synergy_1.Synergy.ELECTRIC)) {
                        pokemon.effects.add(effect);
                    }
                    break;
                case Effect_1.Effect.GUTS:
                case Effect_1.Effect.STURDY:
                case Effect_1.Effect.DEFIANT:
                case Effect_1.Effect.JUSTIFIED:
                    if (types.has(Synergy_1.Synergy.FIGHTING)) {
                        pokemon.effects.add(effect);
                    }
                    break;
                case Effect_1.Effect.STEEL_SURGE:
                case Effect_1.Effect.STEEL_SPIKE:
                case Effect_1.Effect.CORKSCREW_CRASH:
                case Effect_1.Effect.MAX_MELTDOWN:
                    if (types.has(Synergy_1.Synergy.STEEL)) {
                        pokemon.effects.add(effect);
                    }
                    break;
                case Effect_1.Effect.BULK_UP:
                    if (types.has(Synergy_1.Synergy.FIELD)) {
                        pokemon.effects.add(Effect_1.Effect.BULK_UP);
                    }
                    break;
                case Effect_1.Effect.RAGE:
                    if (types.has(Synergy_1.Synergy.FIELD)) {
                        pokemon.effects.add(Effect_1.Effect.RAGE);
                    }
                    break;
                case Effect_1.Effect.ANGER_POINT:
                    if (types.has(Synergy_1.Synergy.FIELD)) {
                        pokemon.effects.add(Effect_1.Effect.ANGER_POINT);
                    }
                    break;
                case Effect_1.Effect.PURSUIT:
                    if (types.has(Synergy_1.Synergy.MONSTER)) {
                        pokemon.effects.add(Effect_1.Effect.PURSUIT);
                    }
                    break;
                case Effect_1.Effect.BRUTAL_SWING:
                    if (types.has(Synergy_1.Synergy.MONSTER)) {
                        pokemon.effects.add(Effect_1.Effect.BRUTAL_SWING);
                    }
                    break;
                case Effect_1.Effect.POWER_TRIP:
                    if (types.has(Synergy_1.Synergy.MONSTER)) {
                        pokemon.effects.add(Effect_1.Effect.POWER_TRIP);
                    }
                    break;
                case Effect_1.Effect.AMNESIA:
                    if (types.has(Synergy_1.Synergy.PSYCHIC)) {
                        pokemon.effects.add(Effect_1.Effect.AMNESIA);
                        pokemon.addAbilityPower(50, pokemon, 0, false);
                    }
                    break;
                case Effect_1.Effect.LIGHT_SCREEN:
                    if (types.has(Synergy_1.Synergy.PSYCHIC)) {
                        pokemon.effects.add(Effect_1.Effect.LIGHT_SCREEN);
                        pokemon.addAbilityPower(100, pokemon, 0, false);
                    }
                    break;
                case Effect_1.Effect.EERIE_SPELL:
                    if (types.has(Synergy_1.Synergy.PSYCHIC)) {
                        pokemon.effects.add(Effect_1.Effect.EERIE_SPELL);
                        pokemon.addAbilityPower(150, pokemon, 0, false);
                    }
                    break;
                case Effect_1.Effect.MEDITATE:
                    pokemon.effects.add(Effect_1.Effect.MEDITATE);
                    break;
                case Effect_1.Effect.FOCUS_ENERGY:
                    pokemon.effects.add(Effect_1.Effect.FOCUS_ENERGY);
                    break;
                case Effect_1.Effect.CALM_MIND:
                    pokemon.effects.add(Effect_1.Effect.CALM_MIND);
                    break;
                case Effect_1.Effect.TAILWIND:
                    if (types.has(Synergy_1.Synergy.FLYING)) {
                        pokemon.flyingProtection = 1;
                        pokemon.effects.add(Effect_1.Effect.TAILWIND);
                    }
                    break;
                case Effect_1.Effect.FEATHER_DANCE:
                    if (types.has(Synergy_1.Synergy.FLYING)) {
                        pokemon.flyingProtection = 1;
                        pokemon.effects.add(Effect_1.Effect.FEATHER_DANCE);
                    }
                    break;
                case Effect_1.Effect.MAX_AIRSTREAM:
                    if (types.has(Synergy_1.Synergy.FLYING)) {
                        pokemon.flyingProtection = 2;
                        pokemon.effects.add(Effect_1.Effect.MAX_AIRSTREAM);
                    }
                    break;
                case Effect_1.Effect.SKYDIVE:
                    if (types.has(Synergy_1.Synergy.FLYING)) {
                        pokemon.flyingProtection = 2;
                        pokemon.effects.add(Effect_1.Effect.SKYDIVE);
                    }
                    break;
                case Effect_1.Effect.SWIFT_SWIM:
                case Effect_1.Effect.HYDRATION:
                case Effect_1.Effect.WATER_VEIL:
                    pokemon.effects.add(effect);
                    this.tidalwaveTimer = 8000;
                    break;
                case Effect_1.Effect.ODD_FLOWER:
                    if (types.has(Synergy_1.Synergy.FLORA)) {
                        pokemon.effects.add(Effect_1.Effect.ODD_FLOWER);
                    }
                    break;
                case Effect_1.Effect.GLOOM_FLOWER:
                    if (types.has(Synergy_1.Synergy.FLORA)) {
                        pokemon.effects.add(Effect_1.Effect.GLOOM_FLOWER);
                    }
                    break;
                case Effect_1.Effect.VILE_FLOWER:
                    if (types.has(Synergy_1.Synergy.FLORA)) {
                        pokemon.effects.add(Effect_1.Effect.VILE_FLOWER);
                    }
                    break;
                case Effect_1.Effect.SUN_FLOWER:
                    if (types.has(Synergy_1.Synergy.FLORA)) {
                        pokemon.effects.add(Effect_1.Effect.SUN_FLOWER);
                    }
                    break;
                case Effect_1.Effect.BATTLE_ARMOR:
                    if (types.has(Synergy_1.Synergy.ROCK)) {
                        pokemon.addDefense(5, pokemon, 0, false);
                        pokemon.effects.add(Effect_1.Effect.BATTLE_ARMOR);
                    }
                    break;
                case Effect_1.Effect.MOUTAIN_RESISTANCE:
                    if (types.has(Synergy_1.Synergy.ROCK)) {
                        pokemon.addDefense(15, pokemon, 0, false);
                        pokemon.effects.add(Effect_1.Effect.MOUTAIN_RESISTANCE);
                    }
                    break;
                case Effect_1.Effect.DIAMOND_STORM:
                    if (types.has(Synergy_1.Synergy.ROCK)) {
                        pokemon.addDefense(30, pokemon, 0, false);
                        pokemon.effects.add(Effect_1.Effect.DIAMOND_STORM);
                    }
                    break;
                case Effect_1.Effect.AROMATIC_MIST:
                case Effect_1.Effect.FAIRY_WIND:
                case Effect_1.Effect.STRANGE_STEAM:
                case Effect_1.Effect.MOON_FORCE:
                    if (types.has(Synergy_1.Synergy.FAIRY)) {
                        pokemon.effects.add(effect);
                    }
                    break;
                case Effect_1.Effect.DRAGON_ENERGY:
                case Effect_1.Effect.DRAGON_SCALES:
                case Effect_1.Effect.DRAGON_DANCE:
                    if (types.has(Synergy_1.Synergy.DRAGON)) {
                        pokemon.effects.add(effect);
                    }
                    break;
                case Effect_1.Effect.COOL_BREEZE:
                    pokemon.effects.add(Effect_1.Effect.COOL_BREEZE);
                    pokemon.addSpecialDefense(2, pokemon, 0, false);
                    break;
                case Effect_1.Effect.CHILLY:
                    pokemon.effects.add(Effect_1.Effect.FROSTY);
                    pokemon.addSpecialDefense(2, pokemon, 0, false);
                    break;
                case Effect_1.Effect.FROSTY:
                    pokemon.effects.add(Effect_1.Effect.FROSTY);
                    pokemon.addSpecialDefense(6, pokemon, 0, false);
                    break;
                case Effect_1.Effect.FREEZING:
                    pokemon.effects.add(Effect_1.Effect.FROSTY);
                    pokemon.addSpecialDefense(20, pokemon, 0, false);
                    break;
                case Effect_1.Effect.SHEER_COLD:
                    pokemon.effects.add(Effect_1.Effect.SHEER_COLD);
                    pokemon.addSpecialDefense(30, pokemon, 0, false);
                    break;
                case Effect_1.Effect.POISONOUS:
                case Effect_1.Effect.VENOMOUS:
                case Effect_1.Effect.TOXIC:
                    if (types.has(Synergy_1.Synergy.POISON)) {
                        pokemon.effects.add(effect);
                    }
                    break;
                case Effect_1.Effect.LARGO:
                case Effect_1.Effect.ALLEGRO:
                case Effect_1.Effect.PRESTO:
                    if (types.has(Synergy_1.Synergy.SOUND)) {
                        pokemon.effects.add(effect);
                    }
                    break;
                case Effect_1.Effect.COCOON:
                case Effect_1.Effect.INFESTATION:
                case Effect_1.Effect.HORDE:
                case Effect_1.Effect.HEART_OF_THE_SWARM:
                    if (types.has(Synergy_1.Synergy.BUG)) {
                        pokemon.effects.add(effect);
                    }
                    break;
                case Effect_1.Effect.TILLER:
                case Effect_1.Effect.DIGGER:
                case Effect_1.Effect.DRILLER:
                case Effect_1.Effect.DEEP_MINER:
                    if (types.has(Synergy_1.Synergy.GROUND)) {
                        pokemon.effects.add(effect);
                    }
                    break;
                case Effect_1.Effect.DUBIOUS_DISC:
                case Effect_1.Effect.LINK_CABLE:
                case Effect_1.Effect.GOOGLE_SPECS:
                    if (types.has(Synergy_1.Synergy.ARTIFICIAL) && pokemon.items.size > 0) {
                        const nbItems = pokemon.items.size + (pokemon.items.has(Item_1.Item.WONDER_BOX) ? 1 : 0);
                        const attackBoost = {
                            [Effect_1.Effect.DUBIOUS_DISC]: 0,
                            [Effect_1.Effect.LINK_CABLE]: (8 / 100) * pokemon.baseAtk,
                            [Effect_1.Effect.GOOGLE_SPECS]: (15 / 100) * pokemon.baseAtk
                        }[effect];
                        const apBoost = {
                            [Effect_1.Effect.DUBIOUS_DISC]: 0,
                            [Effect_1.Effect.LINK_CABLE]: 8,
                            [Effect_1.Effect.GOOGLE_SPECS]: 15
                        }[effect];
                        const shieldBoost = {
                            [Effect_1.Effect.DUBIOUS_DISC]: 0,
                            [Effect_1.Effect.LINK_CABLE]: (8 / 100) * pokemon.hp,
                            [Effect_1.Effect.GOOGLE_SPECS]: (15 / 100) * pokemon.hp
                        }[effect];
                        pokemon.addAttack(attackBoost * nbItems, pokemon, 0, false);
                        pokemon.addAbilityPower(apBoost * nbItems, pokemon, 0, false);
                        pokemon.addShield(shieldBoost * nbItems, pokemon, 0, false);
                        pokemon.effects.add(Effect_1.Effect.GOOGLE_SPECS);
                    }
                    break;
                case Effect_1.Effect.GRASSY_TERRAIN:
                    if (types.has(Synergy_1.Synergy.GRASS)) {
                        pokemon.status.grassField = true;
                        pokemon.effects.add(Effect_1.Effect.GRASSY_TERRAIN);
                    }
                    break;
                case Effect_1.Effect.PSYCHIC_TERRAIN:
                    if (types.has(Synergy_1.Synergy.PSYCHIC)) {
                        pokemon.addPsychicField();
                        pokemon.effects.add(Effect_1.Effect.PSYCHIC_TERRAIN);
                    }
                    break;
                case Effect_1.Effect.ELECTRIC_TERRAIN:
                    if (types.has(Synergy_1.Synergy.ELECTRIC)) {
                        pokemon.addElectricField();
                        pokemon.effects.add(Effect_1.Effect.ELECTRIC_TERRAIN);
                    }
                    break;
                case Effect_1.Effect.MISTY_TERRAIN:
                    if (types.has(Synergy_1.Synergy.FAIRY)) {
                        pokemon.status.fairyField = true;
                        pokemon.effects.add(Effect_1.Effect.MISTY_TERRAIN);
                    }
                    break;
                case Effect_1.Effect.SHINING_RAY:
                    if (pokemon.inLightCell || pokemon.items.has(Item_1.Item.SHINY_STONE)) {
                        pokemon.status.light = true;
                        pokemon.effects.add(Effect_1.Effect.SHINING_RAY);
                        pokemon.addAttack(Math.ceil(pokemon.atk * 0.2), pokemon, 0, false);
                        pokemon.addAbilityPower(20, pokemon, 0, false);
                    }
                    break;
                case Effect_1.Effect.LIGHT_PULSE:
                    if (pokemon.inLightCell || pokemon.items.has(Item_1.Item.SHINY_STONE)) {
                        pokemon.status.light = true;
                        pokemon.effects.add(Effect_1.Effect.LIGHT_PULSE);
                        pokemon.addAttack(Math.ceil(pokemon.atk * 0.2), pokemon, 0, false);
                        pokemon.addAbilityPower(20, pokemon, 0, false);
                    }
                    break;
                case Effect_1.Effect.ETERNAL_LIGHT:
                    if (pokemon.inLightCell || pokemon.items.has(Item_1.Item.SHINY_STONE)) {
                        pokemon.status.light = true;
                        pokemon.effects.add(Effect_1.Effect.ETERNAL_LIGHT);
                        pokemon.addAttack(Math.ceil(pokemon.atk * 0.2), pokemon, 0, false);
                        pokemon.addAbilityPower(20, pokemon, 0, false);
                        pokemon.status.triggerRuneProtect(10000);
                        pokemon.addDefense(0.5 * pokemon.baseDef, pokemon, 0, false);
                        pokemon.addSpecialDefense(0.5 * pokemon.baseSpeDef, pokemon, 0, false);
                    }
                    break;
                case Effect_1.Effect.MAX_ILLUMINATION:
                    if (pokemon.inLightCell || pokemon.items.has(Item_1.Item.SHINY_STONE)) {
                        pokemon.status.light = true;
                        pokemon.effects.add(Effect_1.Effect.MAX_ILLUMINATION);
                        pokemon.addAttack(Math.ceil(pokemon.atk * 0.2), pokemon, 0, false);
                        pokemon.addAbilityPower(20, pokemon, 0, false);
                        pokemon.status.triggerRuneProtect(10000);
                        pokemon.addDefense(0.5 * pokemon.baseDef, pokemon, 0, false);
                        pokemon.addSpecialDefense(0.5 * pokemon.baseSpeDef, pokemon, 0, false);
                        pokemon.addShield(100, pokemon, 0, false);
                        pokemon.status.resurection = true;
                    }
                    break;
                case Effect_1.Effect.QUICK_FEET:
                    if (types.has(Synergy_1.Synergy.WILD)) {
                        pokemon.effects.add(Effect_1.Effect.QUICK_FEET);
                        pokemon.addAttack(Math.ceil(0.3 * pokemon.baseAtk), pokemon, 0, false);
                    }
                    break;
                case Effect_1.Effect.RUN_AWAY:
                    if (types.has(Synergy_1.Synergy.WILD)) {
                        pokemon.effects.add(Effect_1.Effect.RUN_AWAY);
                        pokemon.addAttack(Math.ceil(0.5 * pokemon.baseAtk), pokemon, 0, false);
                    }
                    break;
                case Effect_1.Effect.HUSTLE:
                    if (types.has(Synergy_1.Synergy.WILD)) {
                        pokemon.effects.add(Effect_1.Effect.HUSTLE);
                        pokemon.addAttack(Math.ceil(0.8 * pokemon.baseAtk), pokemon, 0, false);
                    }
                    break;
                case Effect_1.Effect.BERSERK:
                    if (types.has(Synergy_1.Synergy.WILD)) {
                        pokemon.effects.add(Effect_1.Effect.BERSERK);
                        pokemon.addAttack(Math.ceil(1.0 * pokemon.baseAtk), pokemon, 0, false);
                        pokemon.status.enrageDelay -= 5000;
                    }
                    break;
                case Effect_1.Effect.FLUID: {
                    pokemon.addAttackSpeed(1 * activeSynergies, pokemon, 0, false);
                    pokemon.addMaxHP(4 * activeSynergies, pokemon, 0, false);
                    break;
                }
                case Effect_1.Effect.SHAPELESS: {
                    pokemon.effects.add(Effect_1.Effect.SHAPELESS);
                    pokemon.addAttackSpeed(3 * activeSynergies, pokemon, 0, false);
                    pokemon.addMaxHP(8 * activeSynergies, pokemon, 0, false);
                    break;
                }
                case Effect_1.Effect.ETHEREAL: {
                    pokemon.effects.add(Effect_1.Effect.ETHEREAL);
                    pokemon.addAttackSpeed(5 * activeSynergies, pokemon, 0, false);
                    pokemon.addMaxHP(12 * activeSynergies, pokemon, 0, false);
                    break;
                }
                default:
                    break;
            }
        });
    }
    update(dt) {
        if (this.blueTeam.size === 0 || this.redTeam.size === 0) {
            this.onFinish();
        }
        this.blueTeam.forEach((pkm, key) => {
            var _a;
            (_a = this.blueDpsMeter
                .get(key)) === null || _a === void 0 ? void 0 : _a.update(pkm.physicalDamage, pkm.specialDamage, pkm.trueDamage, pkm.physicalDamageReduced, pkm.specialDamageReduced, pkm.shieldDamageTaken, pkm.healDone, pkm.shieldDone);
            if ((!pkm.life || pkm.life <= 0) &&
                !pkm.status.resurecting &&
                !pkm.status.resurection) {
                this.blueTeam.delete(key);
            }
            else {
                pkm.update(dt, this.board, this.weather, this.bluePlayer);
            }
        });
        this.redTeam.forEach((pkm, key) => {
            var _a;
            (_a = this.redDpsMeter
                .get(key)) === null || _a === void 0 ? void 0 : _a.update(pkm.physicalDamage, pkm.specialDamage, pkm.trueDamage, pkm.physicalDamageReduced, pkm.specialDamageReduced, pkm.shieldDamageTaken, pkm.healDone, pkm.shieldDone);
            if ((!pkm.life || pkm.life <= 0) &&
                !pkm.status.resurecting &&
                !pkm.status.resurection) {
                this.redTeam.delete(key);
            }
            else {
                pkm.update(dt, this.board, this.weather, this.redPlayer);
            }
        });
        if (this.weather === Weather_1.Weather.STORM) {
            this.stormLightningTimer -= dt;
            if (this.stormLightningTimer <= 0 && !this.finished) {
                this.stormLightningTimer = (0, random_1.randomBetween)(4000, 8000);
                const x = (0, random_1.randomBetween)(0, this.board.columns - 1);
                const y = (0, random_1.randomBetween)(0, this.board.rows - 1);
                const pokemonOnCell = this.board.getValue(x, y);
                if (pokemonOnCell &&
                    pokemonOnCell.types.has(Synergy_1.Synergy.ELECTRIC) === false) {
                    pokemonOnCell.handleDamage({
                        damage: 100,
                        board: this.board,
                        attackType: Game_1.AttackType.SPECIAL,
                        attacker: null,
                        shouldTargetGainMana: false
                    });
                }
                this.room.broadcast(types_1.Transfer.BOARD_EVENT, {
                    simulationId: this.id,
                    type: Game_1.BoardEvent.LIGHTNING,
                    x,
                    y
                });
            }
        }
        if (this.tidalwaveTimer > 0) {
            this.tidalwaveTimer -= dt;
            if (this.tidalwaveTimer <= 0) {
                this.triggerTidalWave();
            }
        }
    }
    stop() {
        this.blueTeam.forEach((pokemon, key) => {
            this.blueTeam.delete(key);
        });
        this.redTeam.forEach((pokemon, key) => {
            this.redTeam.delete(key);
        });
        this.weather = Weather_1.Weather.NEUTRAL;
        this.winnerId = "";
        this.room.broadcast(types_1.Transfer.SIMULATION_STOP);
    }
    onFinish() {
        this.finished = true;
        if (this.blueTeam.size === 0 && this.redTeam.size > 0) {
            this.winnerId = this.redPlayerId;
        }
        else if (this.redTeam.size === 0 && this.blueTeam.size > 0) {
            this.winnerId = this.bluePlayerId;
        }
        const winningTeam = this.winnerId === this.redPlayerId
            ? this.redTeam
            : this.winnerId === this.bluePlayerId
                ? this.blueTeam
                : null;
        if (winningTeam) {
            winningTeam.forEach((p) => {
                p.status.clearNegativeStatus();
                p.action = Game_1.PokemonActionState.HOP;
            });
        }
        if (this.redPlayer && this.id === this.redPlayer.simulationId) {
            this.redPlayer.addBattleResult(this.redPlayer.opponentId, this.redPlayer.opponentName, this.winnerId === this.redPlayerId
                ? Game_1.BattleResult.WIN
                : this.winnerId === this.bluePlayerId
                    ? Game_1.BattleResult.DEFEAT
                    : Game_1.BattleResult.DRAW, this.redPlayer.opponentAvatar, this.weather);
            const client = this.room.clients.find((cli) => cli.auth.uid === this.redPlayerId);
            if (this.winnerId === this.redPlayerId) {
                if (this.bluePlayerId !== "pve") {
                    this.redPlayer.addMoney(1);
                    client === null || client === void 0 ? void 0 : client.send(types_1.Transfer.PLAYER_INCOME, 1);
                }
            }
            else {
                const playerDamage = this.room.computeRoundDamage(this.blueTeam, this.stageLevel);
                this.redPlayer.life -= playerDamage;
                if (playerDamage > 0) {
                    client === null || client === void 0 ? void 0 : client.send(types_1.Transfer.PLAYER_DAMAGE, playerDamage);
                }
                if (this.bluePlayer) {
                    this.bluePlayer.totalPlayerDamageDealt += playerDamage;
                }
            }
        }
        if (this.bluePlayer && this.id === this.bluePlayer.simulationId) {
            this.bluePlayer.addBattleResult(this.bluePlayer.opponentId, this.bluePlayer.opponentName, this.winnerId === this.bluePlayerId
                ? Game_1.BattleResult.WIN
                : this.winnerId === this.redPlayerId
                    ? Game_1.BattleResult.DEFEAT
                    : Game_1.BattleResult.DRAW, this.bluePlayer.opponentAvatar, this.weather);
            const client = this.room.clients.find((cli) => cli.auth.uid === this.bluePlayerId);
            if (this.winnerId === this.bluePlayerId) {
                if (this.redPlayerId !== "pve") {
                    this.bluePlayer.addMoney(1);
                    client === null || client === void 0 ? void 0 : client.send(types_1.Transfer.PLAYER_INCOME, 1);
                }
            }
            else {
                const playerDamage = this.room.computeRoundDamage(this.redTeam, this.stageLevel);
                this.bluePlayer.life -= playerDamage;
                if (playerDamage > 0) {
                    client === null || client === void 0 ? void 0 : client.send(types_1.Transfer.PLAYER_DAMAGE, playerDamage);
                }
                if (this.redPlayer) {
                    this.redPlayer.totalPlayerDamageDealt += playerDamage;
                }
            }
        }
        this.room.rankPlayers();
    }
    applyCurse(effect, opponentTeamNumber) {
        const opponentTeam = opponentTeamNumber === Game_1.Team.BLUE_TEAM ? this.blueTeam : this.redTeam;
        const opponentsCursable = (0, random_1.shuffleArray)([...opponentTeam.values()]).filter((p) => p.life > 0);
        if (effect === Effect_1.Effect.CURSE_OF_VULNERABILITY) {
            let enemyWithHighestDef = undefined;
            let highestDef = 0;
            opponentsCursable.forEach((enemy) => {
                if (enemy.def + enemy.speDef > highestDef) {
                    highestDef = enemy.def + enemy.speDef;
                    enemyWithHighestDef = enemy;
                }
            });
            if (enemyWithHighestDef) {
                enemyWithHighestDef = enemyWithHighestDef;
                enemyWithHighestDef.addDefense(-5, enemyWithHighestDef, 0, false);
                enemyWithHighestDef.addSpecialDefense(-5, enemyWithHighestDef, 0, false);
                enemyWithHighestDef.status.curseVulnerability = true;
                enemyWithHighestDef.status.triggerFlinch(30000, enemyWithHighestDef, undefined);
            }
        }
        if (effect === Effect_1.Effect.CURSE_OF_WEAKNESS) {
            let enemyWithHighestAtk = undefined;
            let highestATK = 0;
            opponentsCursable.forEach((enemy) => {
                if (enemy.atk > highestATK) {
                    highestATK = enemy.atk;
                    enemyWithHighestAtk = enemy;
                }
            });
            if (enemyWithHighestAtk) {
                enemyWithHighestAtk = enemyWithHighestAtk;
                enemyWithHighestAtk.addAttack(Math.round(-0.3 * enemyWithHighestAtk.atk), enemyWithHighestAtk, 0, false);
                enemyWithHighestAtk.status.curseWeakness = true;
                enemyWithHighestAtk.status.triggerParalysis(30000, enemyWithHighestAtk);
            }
        }
        if (effect === Effect_1.Effect.CURSE_OF_TORMENT) {
            let enemyWithHighestAP = undefined;
            let highestAP = 0;
            opponentsCursable.forEach((enemy) => {
                if (enemy.ap >= highestAP) {
                    highestAP = enemy.ap;
                    enemyWithHighestAP = enemy;
                }
            });
            if (enemyWithHighestAP) {
                enemyWithHighestAP = enemyWithHighestAP;
                enemyWithHighestAP.addAbilityPower(-50, enemyWithHighestAP, 0, false);
                enemyWithHighestAP.status.curseTorment = true;
                enemyWithHighestAP.status.triggerSilence(30000, enemyWithHighestAP, undefined);
            }
        }
        if (effect === Effect_1.Effect.CURSE_OF_FATE) {
            const strongestEnemy = (0, pokemon_entity_1.getStrongestUnit)(opponentsCursable);
            if (strongestEnemy) {
                strongestEnemy.status.curseFate = true;
                strongestEnemy.status.triggerCurse(6000);
            }
        }
    }
    triggerTidalWave() {
        if (this.redEffects.has(Effect_1.Effect.SWIFT_SWIM) ||
            this.redEffects.has(Effect_1.Effect.HYDRATION) ||
            this.redEffects.has(Effect_1.Effect.WATER_VEIL)) {
            const waveLevel = this.redEffects.has(Effect_1.Effect.WATER_VEIL)
                ? 3
                : this.redEffects.has(Effect_1.Effect.HYDRATION)
                    ? 2
                    : 1;
            this.room.broadcast(types_1.Transfer.ABILITY, {
                id: this.id,
                skill: "TIDAL_WAVE",
                positionX: 0,
                positionY: 0,
                targetX: 0,
                targetY: waveLevel - 1,
                orientation: Game_1.Orientation.DOWN
            });
            this.room.broadcast(types_1.Transfer.CLEAR_BOARD, {
                simulationId: this.id
            });
            for (let y = 0; y < this.board.rows; y++) {
                for (let x = 0; x < this.board.columns; x++) {
                    const cell = this.board.getValue(x, y);
                    this.board.effects[y * this.board.columns + x] = undefined;
                    if (cell) {
                        if (cell.team === Game_1.Team.RED_TEAM) {
                            cell.status.clearNegativeStatus();
                            if (cell.types.has(Synergy_1.Synergy.AQUATIC)) {
                                cell.handleHeal(waveLevel * 0.05 * cell.hp, cell, 0, false);
                            }
                        }
                        else {
                            cell.handleDamage({
                                damage: waveLevel * 0.05 * cell.hp,
                                board: this.board,
                                attackType: Game_1.AttackType.TRUE,
                                attacker: null,
                                shouldTargetGainMana: false
                            });
                            let newY = y;
                            while (newY > 0 &&
                                this.board.getValue(x, newY - 1) === undefined) {
                                newY--;
                            }
                            if (newY !== y) {
                                cell.moveTo(x, newY, this.board);
                                cell.cooldown = 500;
                            }
                        }
                    }
                }
            }
        }
        if (this.blueEffects.has(Effect_1.Effect.SWIFT_SWIM) ||
            this.blueEffects.has(Effect_1.Effect.HYDRATION) ||
            this.blueEffects.has(Effect_1.Effect.WATER_VEIL)) {
            const waveLevel = this.blueEffects.has(Effect_1.Effect.WATER_VEIL)
                ? 3
                : this.blueEffects.has(Effect_1.Effect.HYDRATION)
                    ? 2
                    : 1;
            this.room.broadcast(types_1.Transfer.ABILITY, {
                id: this.id,
                skill: "TIDAL_WAVE",
                positionX: 0,
                positionY: 0,
                targetX: 0,
                targetY: waveLevel - 1,
                orientation: Game_1.Orientation.UP
            });
            this.room.broadcast(types_1.Transfer.CLEAR_BOARD, {
                simulationId: this.id
            });
            for (let y = this.board.rows - 1; y > 0; y--) {
                for (let x = 0; x < this.board.columns; x++) {
                    const cell = this.board.getValue(x, y);
                    this.board.effects[y * this.board.columns + x] = undefined;
                    if (cell) {
                        if (cell.team === Game_1.Team.BLUE_TEAM) {
                            cell.status.clearNegativeStatus();
                            if (cell.types.has(Synergy_1.Synergy.AQUATIC)) {
                                cell.handleHeal(waveLevel * 0.1 * cell.hp, cell, 0, false);
                            }
                        }
                        else {
                            cell.handleDamage({
                                damage: waveLevel * 0.05 * cell.hp,
                                board: this.board,
                                attackType: Game_1.AttackType.TRUE,
                                attacker: null,
                                shouldTargetGainMana: false
                            });
                            let newY = y;
                            while (newY < this.board.rows - 1 &&
                                this.board.getValue(x, newY + 1) === undefined) {
                                newY++;
                            }
                            if (newY !== y) {
                                cell.moveTo(x, newY, this.board);
                                cell.cooldown = 500;
                            }
                        }
                    }
                }
            }
        }
    }
}
exports.default = Simulation;
__decorate([
    (0, schema_1.type)("string")
], Simulation.prototype, "weather", void 0);
__decorate([
    (0, schema_1.type)("string")
], Simulation.prototype, "winnerId", void 0);
__decorate([
    (0, schema_1.type)({ map: pokemon_entity_1.PokemonEntity })
], Simulation.prototype, "blueTeam", void 0);
__decorate([
    (0, schema_1.type)({ map: pokemon_entity_1.PokemonEntity })
], Simulation.prototype, "redTeam", void 0);
__decorate([
    (0, schema_1.type)({ map: dps_1.default })
], Simulation.prototype, "blueDpsMeter", void 0);
__decorate([
    (0, schema_1.type)({ map: dps_1.default })
], Simulation.prototype, "redDpsMeter", void 0);
__decorate([
    (0, schema_1.type)("string")
], Simulation.prototype, "id", void 0);
__decorate([
    (0, schema_1.type)("string")
], Simulation.prototype, "bluePlayerId", void 0);
__decorate([
    (0, schema_1.type)("string")
], Simulation.prototype, "redPlayerId", void 0);
//# sourceMappingURL=simulation.js.map