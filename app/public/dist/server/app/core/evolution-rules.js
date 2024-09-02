"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConditionBasedEvolutionRule = exports.HatchEvolutionRule = exports.ItemEvolutionRule = exports.CountEvolutionRule = exports.EvolutionRule = void 0;
const pokemon_factory_1 = __importDefault(require("../models/pokemon-factory"));
const Config_1 = require("../types/Config");
const Game_1 = require("../types/enum/Game");
const Item_1 = require("../types/enum/Item");
const Passive_1 = require("../types/enum/Passive");
const Pokemon_1 = require("../types/enum/Pokemon");
const logger_1 = require("../utils/logger");
const random_1 = require("../utils/random");
const schemas_1 = require("../utils/schemas");
class EvolutionRule {
    constructor(divergentEvolution) {
        if (divergentEvolution)
            this.divergentEvolution = divergentEvolution;
    }
    tryEvolve(pokemon, player, stageLevel) {
        if (this.canEvolve(pokemon, player, stageLevel)) {
            const pokemonEvolved = this.evolve(pokemon, player, stageLevel);
            this.afterEvolve(pokemonEvolved, player, stageLevel);
            return pokemonEvolved;
        }
    }
    afterEvolve(pokemonEvolved, player, stageLevel) {
        player.updateSynergies();
        pokemonEvolved.onAcquired(player);
        player.board.forEach((pokemon) => {
            if ((pokemon.passive === Passive_1.Passive.COSMOG ||
                pokemon.passive === Passive_1.Passive.COSMOEM) &&
                pokemonEvolved.passive !== Passive_1.Passive.COSMOG &&
                pokemonEvolved.passive !== Passive_1.Passive.COSMOEM) {
                pokemon.hp += 10;
                pokemon.evolutionRule.tryEvolve(pokemon, player, stageLevel);
            }
        });
    }
}
exports.EvolutionRule = EvolutionRule;
class CountEvolutionRule extends EvolutionRule {
    constructor(numberRequired, divergentEvolution) {
        super(divergentEvolution);
        this.numberRequired = numberRequired;
    }
    canEvolve(pokemon, player, stageLevel) {
        const copies = (0, schemas_1.values)(player.board).filter((p) => p.index === pokemon.index);
        if (pokemon.evolution === Pokemon_1.Pkm.DEFAULT ||
            copies.some((p) => p.items.has(Item_1.Item.EVIOLITE))) {
            return false;
        }
        return copies.length >= this.numberRequired;
    }
    canEvolveIfBuyingOne(pokemon, player) {
        const copies = (0, schemas_1.values)(player.board).filter((p) => p.index === pokemon.index);
        if (pokemon.evolution === Pokemon_1.Pkm.DEFAULT ||
            copies.some((p) => p.items.has(Item_1.Item.EVIOLITE))) {
            return false;
        }
        return copies.length >= this.numberRequired - 1;
    }
    evolve(pokemon, player, stageLevel) {
        let pokemonEvolutionName = pokemon.evolution;
        if (this.divergentEvolution) {
            pokemonEvolutionName = this.divergentEvolution(pokemon, player);
        }
        let coord;
        const itemsToAdd = new Array();
        const itemComponentsToAdd = new Array();
        const pokemonsBeforeEvolution = [];
        player.board.forEach((pkm, id) => {
            if (pkm.index == pokemon.index) {
                if (coord) {
                    if (pkm.positionY > coord.y) {
                        coord.x = pkm.positionX;
                        coord.y = pkm.positionY;
                    }
                }
                else {
                    if (pkm.positionX !== -1) {
                        coord = { x: pkm.positionX, y: pkm.positionY };
                    }
                }
                pkm.items.forEach((el) => {
                    if (Item_1.ItemComponents.includes(el)) {
                        itemComponentsToAdd.push(el);
                    }
                    else {
                        itemsToAdd.push(el);
                    }
                });
                player.board.delete(id);
                pokemonsBeforeEvolution.push(pkm);
            }
        });
        const pokemonEvolved = pokemon_factory_1.default.createPokemonFromName(pokemonEvolutionName, player);
        if (pokemon.onEvolve) {
            pokemon.onEvolve({ pokemonEvolved, pokemonsBeforeEvolution, player });
        }
        (0, random_1.shuffleArray)(itemsToAdd);
        for (const item of itemsToAdd) {
            if (pokemonEvolved.items.has(item) || pokemonEvolved.items.size >= 3) {
                player.items.push(item);
            }
            else {
                pokemonEvolved.items.add(item);
            }
        }
        (0, random_1.shuffleArray)(itemComponentsToAdd);
        for (const itemComponent of itemComponentsToAdd) {
            if (pokemonEvolved.items.has(itemComponent) ||
                pokemonEvolved.items.size >= 3) {
                player.items.push(itemComponent);
            }
            else {
                pokemonEvolved.items.add(itemComponent);
            }
        }
        if (coord) {
            pokemonEvolved.positionX = coord.x;
            pokemonEvolved.positionY = coord.y;
            player.board.set(pokemonEvolved.id, pokemonEvolved);
        }
        else {
            logger_1.logger.error("no coordinate found for new evolution");
        }
        return pokemonEvolved;
    }
}
exports.CountEvolutionRule = CountEvolutionRule;
class ItemEvolutionRule extends EvolutionRule {
    constructor(itemsTriggeringEvolution, divergentEvolution) {
        super(divergentEvolution);
        this.itemsTriggeringEvolution = itemsTriggeringEvolution;
    }
    canEvolve(pokemon, player, stageLevel) {
        if (pokemon.items.has(Item_1.Item.EVIOLITE))
            return false;
        const itemEvolution = (0, schemas_1.values)(pokemon.items).find((item) => this.itemsTriggeringEvolution.includes(item));
        let pokemonEvolutionName = pokemon.evolution;
        if (this.divergentEvolution && itemEvolution) {
            pokemonEvolutionName = this.divergentEvolution(pokemon, player, itemEvolution);
        }
        return itemEvolution != null && pokemonEvolutionName !== pokemon.name;
    }
    evolve(pokemon, player, stageLevel) {
        let pokemonEvolutionName = pokemon.evolution;
        if (this.divergentEvolution) {
            const itemEvolution = (0, schemas_1.values)(pokemon.items).find((item) => this.itemsTriggeringEvolution.includes(item));
            pokemonEvolutionName = this.divergentEvolution(pokemon, player, itemEvolution);
        }
        const pokemonEvolved = player.transformPokemon(pokemon, pokemonEvolutionName);
        return pokemonEvolved;
    }
}
exports.ItemEvolutionRule = ItemEvolutionRule;
class HatchEvolutionRule extends EvolutionRule {
    constructor(roundsRequired = Config_1.EvolutionTime.EVOLVE_HATCH, divergentEvolution) {
        super(divergentEvolution);
        this.evolutionTimer = roundsRequired;
    }
    updateHatch(pokemon, player, stageLevel) {
        var _a;
        this.evolutionTimer -= 1;
        const willHatch = this.canEvolve(pokemon, player, stageLevel);
        if (willHatch) {
            pokemon.action = Game_1.PokemonActionState.HOP;
            setTimeout(() => {
                pokemon.evolutionRule.tryEvolve(pokemon, player, stageLevel);
                if (pokemon.name === Pokemon_1.Pkm.EGG && pokemon.shiny) {
                    player.items.push((0, random_1.pickRandomIn)(Item_1.ShinyItems));
                }
            }, 2000);
        }
        else if (pokemon.name === Pokemon_1.Pkm.EGG) {
            pokemon.action =
                (_a = [
                    Game_1.PokemonActionState.HOP,
                    Game_1.PokemonActionState.EMOTE,
                    Game_1.PokemonActionState.IDLE
                ][this.evolutionTimer]) !== null && _a !== void 0 ? _a : Game_1.PokemonActionState.IDLE;
        }
    }
    canEvolve(pokemon, player, stageLevel) {
        if (pokemon.items.has(Item_1.Item.EVIOLITE))
            return false;
        return this.evolutionTimer === 0;
    }
    evolve(pokemon, player, stageLevel) {
        let pokemonEvolutionName = pokemon.evolution;
        if (this.divergentEvolution) {
            pokemonEvolutionName = this.divergentEvolution(pokemon, player);
        }
        const pokemonEvolved = player.transformPokemon(pokemon, pokemonEvolutionName);
        return pokemonEvolved;
    }
}
exports.HatchEvolutionRule = HatchEvolutionRule;
class ConditionBasedEvolutionRule extends EvolutionRule {
    constructor(condition, divergentEvolution) {
        super(divergentEvolution);
        this.condition = condition;
    }
    canEvolve(pokemon, player, stageLevel) {
        if (pokemon.items.has(Item_1.Item.EVIOLITE))
            return false;
        return this.condition(pokemon, player, stageLevel);
    }
    evolve(pokemon, player, stageLevel) {
        let pokemonEvolutionName = pokemon.evolution;
        if (this.divergentEvolution) {
            pokemonEvolutionName = this.divergentEvolution(pokemon, player);
        }
        const pokemonEvolved = player.transformPokemon(pokemon, pokemonEvolutionName);
        return pokemonEvolved;
    }
}
exports.ConditionBasedEvolutionRule = ConditionBasedEvolutionRule;
//# sourceMappingURL=evolution-rules.js.map