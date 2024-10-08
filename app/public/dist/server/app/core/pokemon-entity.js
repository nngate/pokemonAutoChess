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
exports.PokemonEntity = void 0;
exports.getStrongestUnit = getStrongestUnit;
exports.getUnitScore = getUnitScore;
exports.canSell = canSell;
exports.getMoveSpeed = getMoveSpeed;
const schema_1 = require("@colyseus/schema");
const nanoid_1 = require("nanoid");
const count_1 = __importDefault(require("../models/colyseus-models/count"));
const player_1 = __importDefault(require("../models/colyseus-models/player"));
const pokemon_1 = require("../models/colyseus-models/pokemon");
const status_1 = __importDefault(require("../models/colyseus-models/status"));
const pokemon_factory_1 = __importDefault(require("../models/pokemon-factory"));
const shop_1 = require("../models/shop");
const types_1 = require("../types");
const Config_1 = require("../types/Config");
const Ability_1 = require("../types/enum/Ability");
const Effect_1 = require("../types/enum/Effect");
const Game_1 = require("../types/enum/Game");
const Item_1 = require("../types/enum/Item");
const Passive_1 = require("../types/enum/Passive");
const Pokemon_1 = require("../types/enum/Pokemon");
const SpecialGameRule_1 = require("../types/enum/SpecialGameRule");
const Synergy_1 = require("../types/enum/Synergy");
const Weather_1 = require("../types/enum/Weather");
const distance_1 = require("../utils/distance");
const number_1 = require("../utils/number");
const random_1 = require("../utils/random");
const schemas_1 = require("../utils/schemas");
const attacking_state_1 = __importDefault(require("./attacking-state"));
const idle_state_1 = require("./idle-state");
const moving_state_1 = __importDefault(require("./moving-state"));
class PokemonEntity extends schema_1.Schema {
    constructor(pokemon, positionX, positionY, team, simulation) {
        super();
        this.action = Game_1.PokemonActionState.WALK;
        this.orientation = Game_1.Orientation.DOWNLEFT;
        this.pp = 0;
        this.shield = 0;
        this.targetX = -1;
        this.targetY = -1;
        this.effects = new schema_1.SetSchema();
        this.items = new schema_1.SetSchema();
        this.types = new schema_1.SetSchema();
        this.critChance = Config_1.DEFAULT_CRIT_CHANCE;
        this.critPower = Config_1.DEFAULT_CRIT_POWER;
        this.ap = 0;
        this.cooldown = 500;
        this.oneSecondCooldown = 1000;
        this.flyingProtection = 0;
        this.growGroundTimer = 3000;
        this.grassHealCooldown = 2000;
        this.sandstormDamageTimer = 0;
        this.fairySplashCooldown = 0;
        this.echo = 0;
        this.isClone = false;
        this.commands = new Array();
        this.state = new moving_state_1.default();
        this.effects = new schema_1.SetSchema();
        this.items = new schema_1.SetSchema();
        this.refToBoardPokemon = pokemon;
        pokemon.items.forEach((it) => {
            this.items.add(it);
        });
        this.status = new status_1.default();
        this.count = new count_1.default();
        this.simulation = simulation;
        this.id = (0, nanoid_1.nanoid)();
        this.rarity = pokemon.rarity;
        this.positionX = positionX;
        this.positionY = positionY;
        this.index = pokemon.index;
        this.name = pokemon.name;
        this.action = Game_1.PokemonActionState.WALK;
        this.orientation = Game_1.Orientation.DOWNLEFT;
        this.baseAtk = pokemon.atk;
        this.baseDef = pokemon.def;
        this.baseSpeDef = pokemon.speDef;
        this.baseRange = pokemon.range;
        this.atk = pokemon.atk;
        this.def = pokemon.def;
        this.speDef = pokemon.speDef;
        this.attackType = pokemon.attackType;
        this.hp = pokemon.hp;
        this.maxPP = pokemon.maxPP;
        this.life = pokemon.hp;
        this.atkSpeed = pokemon.atkSpeed;
        this.range = pokemon.range;
        this.team = team;
        this.attackSprite = pokemon.attackSprite;
        this.stars = pokemon.stars;
        this.skill = pokemon.skill;
        this.passive = pokemon.passive;
        this.shiny = pokemon.shiny;
        this.emotion = pokemon.emotion;
        this.ap = pokemon.ap;
        this.dodge = 0;
        this.physicalDamage = 0;
        this.specialDamage = 0;
        this.trueDamage = 0;
        this.physicalDamageReduced = 0;
        this.specialDamageReduced = 0;
        this.shieldDamageTaken = 0;
        this.healDone = 0;
        this.shieldDone = 0;
        pokemon.types.forEach((type) => {
            this.types.add(type);
        });
        if (this.passive === Passive_1.Passive.SLOW_START) {
            this.atkSpeed -= 0.25;
        }
    }
    update(dt, board, weather, player) {
        this.state.update(this, dt, board, weather, player);
    }
    getAttackDelay() {
        return 1000 / this.atkSpeed;
    }
    get canMove() {
        return (!this.status.freeze &&
            !this.status.sleep &&
            !this.status.resurecting &&
            !this.status.locked);
    }
    get isTargettable() {
        return !this.status.resurecting;
    }
    get player() {
        const player = this.team === Game_1.Team.BLUE_TEAM
            ? this.simulation.bluePlayer
            : this.simulation.redPlayer;
        if (player instanceof player_1.default) {
            return player;
        }
        else {
            return undefined;
        }
    }
    get inLightCell() {
        if (!this.player)
            return false;
        const { lightX, lightY } = this.player;
        if (this.team === Game_1.Team.BLUE_TEAM) {
            return this.positionX === lightX && this.positionY === lightY - 1;
        }
        else {
            return this.positionX === lightX && this.positionY === 5 - (lightY - 1);
        }
    }
    hasSynergyEffect(synergy) {
        return Synergy_1.SynergyEffects[synergy].some((effect) => this.effects.has(effect));
    }
    handleDamage(params) {
        return this.state.handleDamage(Object.assign({ target: this }, params));
    }
    handleSpecialDamage(damage, board, attackType, attacker, crit, apBoost = true) {
        var _a;
        if (this.status.protect ||
            this.status.skydiving ||
            this.status.magicBounce) {
            this.count.spellBlockedCount++;
            if (this.status.magicBounce &&
                attackType === Game_1.AttackType.SPECIAL &&
                damage > 0 &&
                attacker &&
                !attacker.items.has(Item_1.Item.PROTECTIVE_PADS)) {
                const bounceCrit = crit || (this.items.has(Item_1.Item.REAPER_CLOTH) && (0, random_1.chance)(this.critChance));
                const bounceDamage = Math.round(((_a = [0.5, 1][this.stars - 1]) !== null && _a !== void 0 ? _a : 1) *
                    damage *
                    (1 + this.ap / 100) *
                    (bounceCrit ? this.critPower : 1));
                attacker.handleDamage({
                    damage: bounceDamage,
                    board,
                    attackType: Game_1.AttackType.SPECIAL,
                    attacker: this,
                    shouldTargetGainMana: true
                });
            }
            return { death: false, takenDamage: 0 };
        }
        else {
            let specialDamage = damage + (damage * (attacker && apBoost ? attacker.ap : 0)) / 100;
            if (attacker && attacker.status.doubleDamage) {
                specialDamage *= 2;
                attacker.status.doubleDamage = false;
            }
            if (crit && attacker && this.items.has(Item_1.Item.ROCKY_HELMET) === false) {
                specialDamage = Math.round(specialDamage * attacker.critPower);
            }
            if (attacker &&
                attacker.items.has(Item_1.Item.POKEMONOMICON) &&
                attackType === Game_1.AttackType.SPECIAL) {
                this.status.triggerBurn(3000, this, attacker);
            }
            if (this.items.has(Item_1.Item.POWER_LENS) &&
                specialDamage >= 1 &&
                attacker &&
                !attacker.items.has(Item_1.Item.PROTECTIVE_PADS) &&
                attackType === Game_1.AttackType.SPECIAL) {
                attacker.handleDamage({
                    damage: Math.round(specialDamage / (1 + Config_1.ARMOR_FACTOR * this.speDef)),
                    board,
                    attackType: Game_1.AttackType.SPECIAL,
                    attacker: this,
                    shouldTargetGainMana: true
                });
            }
            return this.state.handleDamage({
                target: this,
                damage: specialDamage,
                board,
                attackType,
                attacker,
                shouldTargetGainMana: true
            });
        }
    }
    handleHeal(heal, caster, apBoost, crit) {
        return this.state.handleHeal(this, heal, caster, apBoost, crit);
    }
    addShield(shield, caster, apBoost, crit) {
        return this.state.addShield(this, shield, caster, apBoost, crit);
    }
    changeState(state) {
        this.state.onExit(this);
        this.state = state;
        this.state.onEnter(this);
    }
    toMovingState() {
        this.changeState(new moving_state_1.default());
    }
    toAttackingState() {
        this.changeState(new attacking_state_1.default());
    }
    toIdleState() {
        this.changeState(new idle_state_1.IdleState());
    }
    addPP(value, caster, apBoost, crit) {
        value = Math.round(value * (1 + (apBoost * caster.ap) / 100) * (crit ? caster.critPower : 1));
        if (!this.status.silence &&
            !this.status.protect &&
            !this.status.resurecting &&
            !(value < 0 && this.status.tree)) {
            this.pp = (0, number_1.clamp)(this.pp + value, 0, this.maxPP * 2 - 1);
        }
    }
    addCritChance(value, caster, apBoost, crit) {
        value =
            value * (1 + (apBoost * caster.ap) / 100) * (crit ? caster.critPower : 1);
        this.critChance += value;
        if (this.critChance > 100) {
            const overCritChance = Math.round(this.critChance - 100);
            this.addCritPower(overCritChance / 50, this, 0, false);
            this.critChance = 100;
        }
    }
    addCritPower(value, caster, apBoost, crit) {
        value =
            value * (1 + (apBoost * caster.ap) / 100) * (crit ? caster.critPower : 1);
        this.critPower = Math.max(0, (0, number_1.roundTo2Digits)(this.critPower + value));
    }
    addMaxHP(value, caster, apBoost, crit) {
        value =
            value * (1 + (apBoost * caster.ap) / 100) * (crit ? caster.critPower : 1);
        this.hp = (0, number_1.min)(1)(this.hp + value);
        this.life = (0, number_1.max)(this.hp)(this.life + value);
    }
    addDodgeChance(value, caster, apBoost, crit) {
        value = Math.round(value * (1 + (apBoost * caster.ap) / 100) * (crit ? caster.critPower : 1));
        this.dodge = (0, number_1.max)(0.9)(this.dodge + value);
    }
    addAbilityPower(value, caster, apBoost, crit) {
        value = Math.round(value * (1 + (apBoost * caster.ap) / 100) * (crit ? caster.critPower : 1));
        this.ap = (0, number_1.min)(-100)(this.ap + value);
    }
    addDefense(value, caster, apBoost, crit) {
        value = Math.round(value * (1 + (apBoost * caster.ap) / 100) * (crit ? caster.critPower : 1));
        this.def = (0, number_1.min)(0)(this.def + value);
    }
    addSpecialDefense(value, caster, apBoost, crit) {
        value = Math.round(value * (1 + (apBoost * caster.ap) / 100) * (crit ? caster.critPower : 1));
        this.speDef = (0, number_1.min)(0)(this.speDef + value);
    }
    addAttack(value, caster, apBoost, crit) {
        value = Math.round(value * (1 + (apBoost * caster.ap) / 100) * (crit ? caster.critPower : 1));
        this.atk = (0, number_1.min)(1)(this.atk + value);
    }
    addAttackSpeed(value, caster, apBoost, crit) {
        if (this.passive === Passive_1.Passive.MELMETAL) {
            this.addAttack(value * 0.3, caster, apBoost, crit);
        }
        else {
            value =
                value *
                    (1 + (apBoost * caster.ap) / 100) *
                    (crit ? caster.critPower : 1);
            const currentAtkSpeedBonus = 100 * (this.atkSpeed / 0.75 - 1);
            const atkSpeedBonus = currentAtkSpeedBonus + value;
            this.atkSpeed = (0, number_1.clamp)((0, number_1.roundTo2Digits)(0.75 * (1 + atkSpeedBonus / 100)), 0.4, 2.5);
        }
    }
    addPsychicField() {
        this.status.psychicField = true;
        if (this.passive === Passive_1.Passive.SURGE_SURFER) {
            this.addAttackSpeed(30, this, 0, false);
        }
    }
    removePsychicField() {
        this.status.psychicField = false;
        if (this.passive === Passive_1.Passive.SURGE_SURFER) {
            this.addAttackSpeed(-30, this, 0, false);
        }
    }
    addElectricField() {
        this.status.electricField = true;
        if (this.passive === Passive_1.Passive.SURGE_SURFER) {
            this.addAttackSpeed(30, this, 0, false);
        }
    }
    removeElectricField() {
        this.status.electricField = false;
        if (this.passive === Passive_1.Passive.SURGE_SURFER) {
            this.addAttackSpeed(-30, this, 0, false);
        }
    }
    moveTo(x, y, board) {
        board.swapValue(this.positionX, this.positionY, x, y);
        this.toMovingState();
        this.cooldown = 100;
    }
    skydiveTo(x, y, board) {
        board.swapValue(this.positionX, this.positionY, x, y);
        this.status.skydiving = true;
        this.toMovingState();
        this.cooldown = 1000;
    }
    onAttack({ target, board, physicalDamage, specialDamage, trueDamage, totalDamage }) {
        this.addPP(Config_1.ON_ATTACK_MANA, this, 0, false);
        if (this.items.has(Item_1.Item.BLUE_ORB)) {
            this.count.staticHolderCount++;
            if (this.count.staticHolderCount > 2) {
                this.count.staticHolderCount = 0;
                const nbBounces = 2;
                const closestEnemies = new Array();
                board.forEach((x, y, enemy) => {
                    if (enemy && this.team !== enemy.team) {
                        closestEnemies.push(enemy);
                    }
                });
                closestEnemies.sort((a, b) => {
                    const distanceA = (0, distance_1.distanceC)(a.positionX, a.positionY, this.positionX, this.positionY);
                    const distanceB = (0, distance_1.distanceC)(b.positionX, b.positionY, this.positionX, this.positionY);
                    return distanceA - distanceB;
                });
                let previousTg = this;
                let tg = target;
                for (let i = 0; i < nbBounces; i++) {
                    tg = closestEnemies[i];
                    if (tg) {
                        this.simulation.room.broadcast(types_1.Transfer.ABILITY, {
                            id: this.simulation.id,
                            skill: "LINK_CABLE_link",
                            positionX: previousTg.positionX,
                            positionY: previousTg.positionY,
                            targetX: tg.positionX,
                            targetY: tg.positionY
                        });
                        tg.handleSpecialDamage(10, board, Game_1.AttackType.SPECIAL, this, false);
                        tg.addPP(-20, this, 0, false);
                        tg.count.manaBurnCount++;
                        previousTg = tg;
                    }
                    else {
                        break;
                    }
                }
            }
        }
        if (this.status.stoneEdge) {
            const tg = board.getValue(target.positionX, target.positionY);
            if (tg) {
                tg.handleDamage({
                    damage: Math.round(this.def * (1 + this.ap / 100)),
                    board,
                    attackType: Game_1.AttackType.SPECIAL,
                    attacker: this,
                    shouldTargetGainMana: true
                });
            }
        }
        if (this.passive === Passive_1.Passive.DURANT) {
            const bugAllies = board.cells.filter((entity) => entity && entity.team === this.team && entity.types.has(Synergy_1.Synergy.BUG)).length - 1;
            if (bugAllies > 0) {
                target.handleDamage({
                    damage: bugAllies,
                    board,
                    attackType: Game_1.AttackType.TRUE,
                    attacker: this,
                    shouldTargetGainMana: true
                });
            }
        }
        if (this.name === Pokemon_1.Pkm.MINIOR_KERNEL_BLUE ||
            this.name === Pokemon_1.Pkm.MINIOR_KERNEL_GREEN ||
            this.name === Pokemon_1.Pkm.MINIOR_KERNEL_RED ||
            this.name === Pokemon_1.Pkm.MINIOR_KERNEL_ORANGE) {
            const cells = board.getAdjacentCells(target.positionX, target.positionY);
            const targets = cells
                .filter((cell) => cell.value && this.team != cell.value.team)
                .map((cell) => cell.value)
                .concat(target);
            targets.forEach((t) => {
                this.simulation.room.broadcast(types_1.Transfer.ABILITY, {
                    id: this.simulation.id,
                    skill: Ability_1.Ability.SHIELDS_DOWN,
                    targetX: t.positionX,
                    targetY: t.positionY
                });
                if (this.name === Pokemon_1.Pkm.MINIOR_KERNEL_BLUE) {
                    t.handleDamage({
                        damage: Math.ceil(physicalDamage * (1 + this.ap / 100)),
                        board,
                        attackType: Game_1.AttackType.SPECIAL,
                        attacker: this,
                        shouldTargetGainMana: false
                    });
                }
                if (this.name === Pokemon_1.Pkm.MINIOR_KERNEL_RED) {
                    t.handleDamage({
                        damage: Math.ceil(physicalDamage * 1.5 * (1 + this.ap / 100)),
                        board,
                        attackType: Game_1.AttackType.PHYSICAL,
                        attacker: this,
                        shouldTargetGainMana: false
                    });
                }
                if (this.name === Pokemon_1.Pkm.MINIOR_KERNEL_ORANGE) {
                    t.handleDamage({
                        damage: Math.ceil(physicalDamage * 0.5 * (1 + this.ap / 100)),
                        board,
                        attackType: Game_1.AttackType.TRUE,
                        attacker: this,
                        shouldTargetGainMana: false
                    });
                }
            });
            if (this.name === Pokemon_1.Pkm.MINIOR_KERNEL_GREEN) {
                cells.forEach((v) => {
                    if (v && v.value && v.value.team === this.team) {
                        v.value.handleHeal(physicalDamage, this, 1, false);
                    }
                });
            }
        }
        if (this.items.has(Item_1.Item.CHOICE_SCARF) && totalDamage > 0) {
            const cells = board.getAdjacentCells(target.positionX, target.positionY);
            const candidateTargets = cells
                .filter((cell) => cell.value && this.team != cell.value.team)
                .map((cell) => cell.value);
            candidateTargets.sort((a, b) => a.life - b.life);
            let targetCount = 1;
            candidateTargets.forEach((target) => {
                if (targetCount > 0) {
                    if (physicalDamage > 0) {
                        target.handleDamage({
                            damage: Math.ceil(0.5 * physicalDamage),
                            board,
                            attackType: Game_1.AttackType.PHYSICAL,
                            attacker: this,
                            shouldTargetGainMana: true
                        });
                    }
                    if (specialDamage > 0) {
                        target.handleDamage({
                            damage: Math.ceil(0.5 * specialDamage),
                            board,
                            attackType: Game_1.AttackType.SPECIAL,
                            attacker: this,
                            shouldTargetGainMana: true
                        });
                    }
                    if (trueDamage > 0) {
                        target.handleDamage({
                            damage: Math.ceil(0.5 * trueDamage),
                            board,
                            attackType: Game_1.AttackType.TRUE,
                            attacker: this,
                            shouldTargetGainMana: true
                        });
                    }
                    targetCount--;
                }
            });
        }
        if (this.items.has(Item_1.Item.MANA_SCARF)) {
            this.addPP(Config_1.MANA_SCARF_MANA, this, 0, false);
        }
        if (this.effects.has(Effect_1.Effect.TELEPORT_NEXT_ATTACK)) {
            const crit = this.items.has(Item_1.Item.REAPER_CLOTH) && (0, random_1.chance)(this.critChance / 100);
            target.handleSpecialDamage([15, 30, 60][this.stars - 1], board, Game_1.AttackType.SPECIAL, this, crit);
            this.effects.delete(Effect_1.Effect.TELEPORT_NEXT_ATTACK);
        }
        if (this.effects.has(Effect_1.Effect.SHADOW_PUNCH_NEXT_ATTACK)) {
            const crit = this.items.has(Item_1.Item.REAPER_CLOTH) && (0, random_1.chance)(this.critChance / 100);
            target.handleSpecialDamage([30, 60, 120][this.stars - 1], board, Game_1.AttackType.SPECIAL, this, crit);
            this.effects.delete(Effect_1.Effect.SHADOW_PUNCH_NEXT_ATTACK);
        }
        if (this.passive === Passive_1.Passive.SHARED_VISION) {
            board.forEach((x, y, ally) => {
                if (ally &&
                    ally.passive === Passive_1.Passive.SHARED_VISION &&
                    this.team === ally.team &&
                    !(this.targetX === ally.positionX && this.targetY === ally.positionY)) {
                    ally.targetX = this.targetX;
                    ally.targetY = this.targetY;
                }
            });
        }
    }
    onHit({ target, board, totalTakenDamage, physicalDamage, specialDamage, trueDamage }) {
        if (this.passive === Passive_1.Passive.BERRY_EATER) {
            for (const item of target.items.values()) {
                Item_1.Berries.includes(item) && this.eatBerry(item, target);
            }
        }
        if (target.passive === Passive_1.Passive.PSYDUCK && (0, random_1.chance)(0.1)) {
            target.status.triggerConfusion(3000, target);
        }
        if (this.name === Pokemon_1.Pkm.MINIOR) {
            this.addAttackSpeed(5, this, 1, false);
        }
        if (this.name === Pokemon_1.Pkm.MORPEKO) {
            target.status.triggerParalysis(2000, target);
        }
        if (this.name === Pokemon_1.Pkm.MORPEKO_HANGRY) {
            target.status.triggerWound(4000, target, this);
        }
        if (this.passive === Passive_1.Passive.DREAM_CATCHER && target.status.sleep) {
            const allies = board.cells.filter((p) => p && p.team === this.team && p.id !== this.id);
            const alliesHit = allies
                .sort((a, b) => (0, distance_1.distanceM)(a.positionX, a.positionY, this.targetX, this.targetY) -
                (0, distance_1.distanceM)(b.positionX, b.positionY, this.targetX, this.targetY))
                .slice(0, 2);
            alliesHit.forEach((ally) => {
                ally.addShield(10, ally, 1, false);
                ally.simulation.room.broadcast(types_1.Transfer.ABILITY, {
                    id: ally.simulation.id,
                    skill: Ability_1.Ability.MOON_DREAM,
                    positionX: ally.positionX,
                    positionY: ally.positionY
                });
            });
        }
        if (this.items.has(Item_1.Item.UPGRADE)) {
            this.addAttackSpeed(5, this, 0, false);
            this.count.upgradeCount++;
        }
        if (this.items.has(Item_1.Item.MAGMARIZER)) {
            this.addAttack(1, this, 0, false);
            target.status.triggerBurn(2000, target, this);
            this.count.magmarizerCount++;
        }
        if (this.items.has(Item_1.Item.ELECTIRIZER) && this.count.attackCount % 3 === 0) {
            target.addPP(-15, this, 0, false);
            target.count.manaBurnCount++;
            target.status.triggerParalysis(2000, target);
        }
        if (this.types.has(Synergy_1.Synergy.ICE)) {
            let freezeChance = 0;
            if (this.effects.has(Effect_1.Effect.CHILLY)) {
                freezeChance = 0.2;
            }
            else if (this.effects.has(Effect_1.Effect.FROSTY)) {
                freezeChance = 0.3;
            }
            else if (this.effects.has(Effect_1.Effect.FREEZING)) {
                freezeChance = 0.4;
            }
            else if (this.effects.has(Effect_1.Effect.SHEER_COLD)) {
                freezeChance = 0.5;
            }
            if ((0, random_1.chance)(freezeChance)) {
                target.status.triggerFreeze(2000, target);
            }
        }
        if (this.hasSynergyEffect(Synergy_1.Synergy.FIRE)) {
            let burnChance = 0;
            if (this.effects.has(Effect_1.Effect.BLAZE)) {
                burnChance = 0.3;
            }
            else if (this.effects.has(Effect_1.Effect.VICTORY_STAR)) {
                burnChance = 0.3;
                this.addAttack(1, this, 0, false);
            }
            else if (this.effects.has(Effect_1.Effect.DROUGHT)) {
                burnChance = 0.3;
                this.addAttack(2, this, 0, false);
            }
            else if (this.effects.has(Effect_1.Effect.DESOLATE_LAND)) {
                burnChance = 0.3;
                this.addAttack(3, this, 0, false);
            }
            if ((0, random_1.chance)(burnChance)) {
                target.status.triggerBurn(2000, target, this);
            }
        }
        if (this.hasSynergyEffect(Synergy_1.Synergy.MONSTER)) {
            let flinchChance = 0;
            if (this.effects.has(Effect_1.Effect.PURSUIT)) {
                flinchChance = 0.3;
            }
            else if (this.effects.has(Effect_1.Effect.BRUTAL_SWING)) {
                flinchChance = 0.4;
            }
            else if (this.effects.has(Effect_1.Effect.POWER_TRIP)) {
                flinchChance = 0.5;
            }
            if ((0, random_1.chance)(flinchChance)) {
                target.status.triggerFlinch(3000, target, this);
            }
        }
        if (this.hasSynergyEffect(Synergy_1.Synergy.GHOST)) {
            if ((0, random_1.chance)(0.25)) {
                target.status.triggerSilence(2000, target, this);
            }
        }
        let poisonChance = 0;
        if (this.effects.has(Effect_1.Effect.POISONOUS)) {
            poisonChance = 0.3;
        }
        if (this.effects.has(Effect_1.Effect.VENOMOUS)) {
            poisonChance = 0.6;
        }
        if (this.effects.has(Effect_1.Effect.TOXIC)) {
            poisonChance = 1.0;
        }
        if (poisonChance > 0 && (0, random_1.chance)(poisonChance)) {
            target.status.triggerPoison(4000, target, this);
        }
        if (this.types.has(Synergy_1.Synergy.WILD)) {
            const woundChance = 0.25;
            if ((0, random_1.chance)(woundChance)) {
                target.status.triggerWound(3000, target, this);
            }
        }
        if (target.status.spikeArmor &&
            (0, distance_1.distanceC)(this.positionX, this.positionY, target.positionX, target.positionY) === 1 &&
            !this.items.has(Item_1.Item.PROTECTIVE_PADS)) {
            const damage = Math.round(target.def * (1 + target.ap / 100));
            const crit = target.items.has(Item_1.Item.REAPER_CLOTH) && (0, random_1.chance)(target.critChance);
            this.status.triggerWound(2000, this, target);
            this.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, target, crit, true);
        }
        if (target.effects.has(Effect_1.Effect.SHELL_TRAP) && physicalDamage > 0) {
            const cells = board.getAdjacentCells(target.positionX, target.positionY);
            const crit = target.items.has(Item_1.Item.REAPER_CLOTH) && (0, random_1.chance)(target.critChance);
            target.effects.delete(Effect_1.Effect.SHELL_TRAP);
            this.simulation.room.broadcast(types_1.Transfer.ABILITY, {
                id: this.simulation.id,
                skill: "SHELL_TRAP_trigger",
                positionX: target.positionX,
                positionY: target.positionX,
                orientation: target.orientation
            });
            cells.forEach((cell) => {
                if (cell.value && cell.value.team !== target.team) {
                    cell.value.handleSpecialDamage(100, board, Game_1.AttackType.SPECIAL, target, crit, true);
                }
            });
        }
    }
    onDamageDealt({ target, damage }) {
        if (this.hasSynergyEffect(Synergy_1.Synergy.HUMAN)) {
            let lifesteal = 0;
            if (this.effects.has(Effect_1.Effect.MEDITATE)) {
                lifesteal = 0.15;
            }
            else if (this.effects.has(Effect_1.Effect.FOCUS_ENERGY)) {
                lifesteal = 0.3;
            }
            else if (this.effects.has(Effect_1.Effect.CALM_MIND)) {
                lifesteal = 0.6;
            }
            this.handleHeal(Math.ceil(lifesteal * damage), this, 0, false);
        }
        if (this.items.has(Item_1.Item.SHELL_BELL)) {
            this.handleHeal(Math.ceil(0.33 * damage), this, 0, false);
        }
    }
    onDamageReceived({ attacker, damage, board }) {
        if (this.items.has(Item_1.Item.DEFENSIVE_RIBBON) &&
            this.count.defensiveRibbonCount < 20 &&
            damage > 0) {
            this.count.defensiveRibbonCount++;
            if (this.count.defensiveRibbonCount % 2 === 0) {
                this.addAttack(1, this, 0, false);
                this.addDefense(1, this, 0, false);
                this.addAttackSpeed(5, this, 0, false);
            }
        }
        if (this.items.has(Item_1.Item.SMOKE_BALL) &&
            this.life > 0 &&
            this.life < 0.33 * this.hp) {
            const cells = board.getAdjacentCells(this.positionX, this.positionY);
            cells.forEach((cell) => {
                const index = cell.y * board.columns + cell.x;
                if (board.effects[index] !== Effect_1.Effect.GAS) {
                    board.effects[index] = Effect_1.Effect.GAS;
                    this.simulation.room.broadcast(types_1.Transfer.BOARD_EVENT, {
                        simulationId: this.simulation.id,
                        type: Game_1.BoardEvent.GAS,
                        x: cell.x,
                        y: cell.y
                    });
                }
                if (cell.value) {
                    cell.value.effects.add(Effect_1.Effect.GAS);
                    if (cell.value.team !== this.team) {
                        cell.value.status.triggerParalysis(3000, cell.value);
                    }
                }
            });
            this.items.delete(Item_1.Item.SMOKE_BALL);
            this.flyAway(board);
        }
        if (this.items.has(Item_1.Item.ABSORB_BULB) && this.life < 0.5 * this.hp) {
            const damage = this.physicalDamageReduced + this.specialDamageReduced;
            this.simulation.room.broadcast(types_1.Transfer.ABILITY, {
                id: this.simulation.id,
                skill: Ability_1.Ability.EXPLOSION,
                positionX: this.positionX,
                positionY: this.positionY
            });
            board.getAdjacentCells(this.positionX, this.positionY).forEach((cell) => {
                if (cell.value && cell.value.team !== this.team) {
                    cell.value.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, this, false, false);
                }
            });
            this.items.delete(Item_1.Item.ABSORB_BULB);
        }
        if (this.flyingProtection > 0 &&
            this.life > 0 &&
            this.canMove &&
            !this.status.paralysis) {
            const pcLife = this.life / this.hp;
            if (this.effects.has(Effect_1.Effect.TAILWIND) && pcLife < 0.2) {
                this.flyAway(board);
                this.flyingProtection--;
            }
            else if (this.effects.has(Effect_1.Effect.FEATHER_DANCE) && pcLife < 0.2) {
                this.status.triggerProtect(2000);
                this.flyAway(board);
                this.flyingProtection--;
            }
            else if (this.effects.has(Effect_1.Effect.MAX_AIRSTREAM)) {
                if ((this.flyingProtection === 2 && pcLife < 0.5) ||
                    (this.flyingProtection === 1 && pcLife < 0.2)) {
                    this.status.triggerProtect(2000);
                    this.flyAway(board);
                    this.flyingProtection--;
                }
            }
            else if (this.effects.has(Effect_1.Effect.SKYDIVE)) {
                if ((this.flyingProtection === 2 && pcLife < 0.5) ||
                    (this.flyingProtection === 1 && pcLife < 0.2)) {
                    const destination = board.getFarthestTargetCoordinateAvailablePlace(this);
                    if (destination) {
                        this.status.triggerProtect(2000);
                        this.simulation.room.broadcast(types_1.Transfer.ABILITY, {
                            id: this.simulation.id,
                            skill: "FLYING_TAKEOFF",
                            positionX: this.positionX,
                            positionY: this.positionY,
                            targetX: destination.target.positionX,
                            targetY: destination.target.positionY
                        });
                        this.skydiveTo(destination.x, destination.y, board);
                        this.targetX = destination.target.positionX;
                        this.targetY = destination.target.positionY;
                        this.flyingProtection--;
                        setTimeout(() => {
                            this.simulation.room.broadcast(types_1.Transfer.ABILITY, {
                                id: this.simulation.id,
                                skill: "FLYING_SKYDIVE",
                                positionX: destination.x,
                                positionY: destination.y,
                                targetX: destination.target.positionX,
                                targetY: destination.target.positionY
                            });
                        }, 500);
                        setTimeout(() => {
                            var _a;
                            if (((_a = destination.target) === null || _a === void 0 ? void 0 : _a.hp) > 0) {
                                destination.target.handleSpecialDamage(1.5 * this.atk, board, Game_1.AttackType.PHYSICAL, this, (0, random_1.chance)(this.critChance));
                            }
                        }, 1000);
                    }
                }
            }
        }
        if (this.count.fightingBlockCount > 0 &&
            this.count.fightingBlockCount % 10 === 0 &&
            (0, distance_1.distanceC)(this.positionX, this.positionY, this.targetX, this.targetY) ===
                1) {
            const targetAtContact = board.getValue(this.targetX, this.targetY);
            const destination = this.state.getNearestAvailablePlaceCoordinates(this, board, 4);
            if (destination && targetAtContact) {
                targetAtContact.shield = 0;
                targetAtContact.handleDamage({
                    damage: this.atk,
                    board,
                    attackType: Game_1.AttackType.PHYSICAL,
                    attacker: this,
                    shouldTargetGainMana: true
                });
                targetAtContact.moveTo(destination.x, destination.y, board);
            }
        }
        const berry = (0, schemas_1.values)(this.items).find((item) => Item_1.Berries.includes(item) || item === Item_1.Item.BERRY_JUICE);
        if (berry && this.life > 0 && this.life < 0.5 * this.hp) {
            this.eatBerry(berry);
        }
        if (this.status.sleepCooldown > 0) {
            this.status.sleepCooldown -= 300;
        }
        if (this.status.charmCooldown > 0 && attacker === this.status.charmOrigin) {
            this.status.charmCooldown -= 500;
        }
        if (this.passive === Passive_1.Passive.MIMIKYU && this.life / this.hp < 0.5) {
            this.index = Pokemon_1.PkmIndex[Pokemon_1.Pkm.MIMIKYU_BUSTED];
            this.name = Pokemon_1.Pkm.MIMIKYU_BUSTED;
            this.passive = Passive_1.Passive.MIMIKYU_BUSTED;
            this.addAttack(10, this, 0, false);
            this.status.triggerProtect(2000);
        }
    }
    onCriticalAttack({ target, board, damage }) {
        target.count.crit++;
        if (target.fairySplashCooldown === 0 && target.types.has(Synergy_1.Synergy.FAIRY)) {
            let shockDamageFactor = 0.3;
            if (target.effects.has(Effect_1.Effect.AROMATIC_MIST)) {
                shockDamageFactor += 0.15;
            }
            else if (target.effects.has(Effect_1.Effect.FAIRY_WIND)) {
                shockDamageFactor += 0.3;
            }
            else if (target.effects.has(Effect_1.Effect.STRANGE_STEAM)) {
                shockDamageFactor += 0.5;
            }
            else if (target.effects.has(Effect_1.Effect.MOON_FORCE)) {
                shockDamageFactor += 0.7;
            }
            const shockDamage = shockDamageFactor * damage;
            target.count.fairyCritCount++;
            target.fairySplashCooldown = 250;
            const distance = (0, distance_1.distanceC)(this.positionX, this.positionY, target.positionX, target.positionY);
            if (distance <= 1 && this.items.has(Item_1.Item.PROTECTIVE_PADS) === false) {
                this.handleSpecialDamage(shockDamage, board, Game_1.AttackType.SPECIAL, target, false);
            }
        }
        if (this.items.has(Item_1.Item.SCOPE_LENS)) {
            this.addPP(Config_1.SCOPE_LENS_MANA, this, 0, false);
            target.addPP(-Config_1.SCOPE_LENS_MANA, this, 0, false);
            target.count.manaBurnCount++;
        }
        if (this.items.has(Item_1.Item.RAZOR_FANG)) {
            target.status.triggerArmorReduction(4000, target);
        }
        if (target.items.has(Item_1.Item.BABIRI_BERRY)) {
            target.status.triggerProtect(2000);
            target.handleHeal(20, target, 0, false);
            target.items.delete(Item_1.Item.BABIRI_BERRY);
            target.refToBoardPokemon.items.delete(Item_1.Item.BABIRI_BERRY);
        }
    }
    onKill({ target, board }) {
        if (this.passive === Passive_1.Passive.SOUL_HEART) {
            this.addPP(10, this, 0, false);
            this.addAbilityPower(10, this, 0, false);
        }
        if (this.items.has(Item_1.Item.AMULET_COIN) && this.player) {
            this.player.addMoney(1, true, this);
            this.count.moneyCount += 1;
            this.count.amuletCoinCount += 1;
        }
        if (this.items.has(Item_1.Item.GOLD_BOTTLE_CAP) && this.player) {
            const isLastEnemy = board.cells.some((p) => p && p.team !== this.team && p.life > 0) ===
                false;
            const moneyGained = isLastEnemy ? 5 : 1;
            this.player.addMoney(moneyGained, true, this);
            this.count.moneyCount += moneyGained;
        }
        if (this.effects.has(Effect_1.Effect.PURSUIT) ||
            this.effects.has(Effect_1.Effect.BRUTAL_SWING) ||
            this.effects.has(Effect_1.Effect.POWER_TRIP)) {
            const isPursuit = this.effects.has(Effect_1.Effect.PURSUIT);
            const isBrutalSwing = this.effects.has(Effect_1.Effect.BRUTAL_SWING);
            const isPowerTrip = this.effects.has(Effect_1.Effect.POWER_TRIP);
            if (isPursuit || isBrutalSwing || isPowerTrip) {
                let lifeBoost = 0, attackBoost = 0, apBoost = 0;
                if (isPursuit) {
                    lifeBoost = 30;
                    attackBoost = 3;
                    apBoost = 10;
                }
                else if (isBrutalSwing) {
                    lifeBoost = 60;
                    attackBoost = 6;
                    apBoost = 20;
                }
                else if (isPowerTrip) {
                    lifeBoost = 100;
                    attackBoost = 10;
                    apBoost = 30;
                }
                if (this.life > 0) {
                    this.addMaxHP(lifeBoost, this, 0, false);
                    this.addAttack(attackBoost, this, 0, false);
                    this.addAbilityPower(apBoost, this, 0, false);
                }
            }
        }
        if (this.passive === Passive_1.Passive.BEAST_BOOST_ATK) {
            this.addAttack(5, this, 0, false);
        }
        if (this.passive === Passive_1.Passive.BEAST_BOOST_AP) {
            this.addAbilityPower(10, this, 0, false);
        }
        board.forEach((x, y, v) => v &&
            v.passive === Passive_1.Passive.MOXIE &&
            v.team === this.team &&
            v.addAttack(target.stars, v, 0, false));
        if (target.effects.has(Effect_1.Effect.ODD_FLOWER) ||
            target.effects.has(Effect_1.Effect.GLOOM_FLOWER) ||
            target.effects.has(Effect_1.Effect.VILE_FLOWER) ||
            target.effects.has(Effect_1.Effect.SUN_FLOWER)) {
            if (!target.simulation.flowerSpawn[target.team]) {
                target.simulation.flowerSpawn[target.team] = true;
                const spawnSpot = board.getFarthestTargetCoordinateAvailablePlace(target);
                if (spawnSpot) {
                    let flowerSpawnName = Pokemon_1.Pkm.ODDISH;
                    if (target.effects.has(Effect_1.Effect.GLOOM_FLOWER)) {
                        flowerSpawnName = Pokemon_1.Pkm.GLOOM;
                    }
                    else if (target.effects.has(Effect_1.Effect.VILE_FLOWER)) {
                        flowerSpawnName = Pokemon_1.Pkm.VILEPLUME;
                    }
                    else if (target.effects.has(Effect_1.Effect.SUN_FLOWER)) {
                        flowerSpawnName = Pokemon_1.Pkm.BELLOSSOM;
                    }
                    target.simulation.addPokemon(pokemon_factory_1.default.createPokemonFromName(flowerSpawnName, target.player), spawnSpot.x, spawnSpot.y, target.team, true);
                }
            }
            const floraSpawn = board.cells.find((entity) => entity &&
                entity.team === target.team &&
                [Pokemon_1.Pkm.ODDISH, Pokemon_1.Pkm.GLOOM, Pokemon_1.Pkm.VILEPLUME, Pokemon_1.Pkm.BELLOSSOM].includes(entity.name));
            const randomItem = (0, random_1.pickRandomIn)((0, schemas_1.values)(target.items).filter((item) => item !== Item_1.Item.COMFEY));
            if (floraSpawn && randomItem && floraSpawn.items.size < 3) {
                floraSpawn.items.add(randomItem);
                floraSpawn.simulation.applyItemEffect(floraSpawn, randomItem);
                target.items.delete(randomItem);
            }
        }
        if (target.items.has(Item_1.Item.COMFEY)) {
            const nearestAvailableCoordinate = this.state.getNearestAvailablePlaceCoordinates(target, board, 2);
            if (nearestAvailableCoordinate) {
                target.simulation.addPokemon(pokemon_factory_1.default.createPokemonFromName(Pokemon_1.Pkm.COMFEY, target.player), nearestAvailableCoordinate.x, nearestAvailableCoordinate.y, target.team);
            }
        }
        if (this.passive === Passive_1.Passive.GRIM_NEIGH) {
            this.addAbilityPower(30, this, 0, false);
        }
    }
    onDeath({ board }) {
        const isWorkUp = this.effects.has(Effect_1.Effect.BULK_UP);
        const isRage = this.effects.has(Effect_1.Effect.RAGE);
        const isAngerPoint = this.effects.has(Effect_1.Effect.ANGER_POINT);
        if (isWorkUp || isRage || isAngerPoint) {
            const heal = 30;
            let speedBoost = 0;
            if (isWorkUp) {
                speedBoost = 20;
            }
            else if (isRage) {
                speedBoost = 25;
            }
            else if (isAngerPoint) {
                speedBoost = 30;
            }
            const _pokemon = this;
            this.simulation.room.clock.setTimeout(() => {
                board.forEach((x, y, value) => {
                    if (value &&
                        value.team == _pokemon.team &&
                        value.types.has(Synergy_1.Synergy.FIELD)) {
                        value.count.fieldCount++;
                        value.handleHeal(heal, _pokemon, 0, false);
                        value.addAttackSpeed(speedBoost, value, 0, false);
                    }
                });
            }, 16);
        }
        if (this.status.curseVulnerability) {
            this.simulation.applyCurse(Effect_1.Effect.CURSE_OF_VULNERABILITY, this.team);
        }
        if (this.status.curseWeakness) {
            this.simulation.applyCurse(Effect_1.Effect.CURSE_OF_WEAKNESS, this.team);
        }
        if (this.status.curseTorment) {
            this.simulation.applyCurse(Effect_1.Effect.CURSE_OF_TORMENT, this.team);
        }
        if (this.status.curseFate) {
            this.simulation.applyCurse(Effect_1.Effect.CURSE_OF_FATE, this.team);
        }
        if (this.passive === Passive_1.Passive.PYUKUMUKU) {
            this.simulation.room.broadcast(types_1.Transfer.ABILITY, {
                id: this.simulation.id,
                skill: Ability_1.Ability.EXPLOSION,
                positionX: this.positionX,
                positionY: this.positionY
            });
            const adjcells = board.getAdjacentCells(this.positionX, this.positionY);
            adjcells.forEach((cell) => {
                if (cell.value && this.team != cell.value.team) {
                    cell.value.handleSpecialDamage(100, board, Game_1.AttackType.SPECIAL, this, false);
                }
            });
        }
        const player = this.player;
        if (this.passive === Passive_1.Passive.CORSOLA && player instanceof player_1.default) {
            const galarCorsola = this.refToBoardPokemon.evolutionRule.evolve(this.refToBoardPokemon, player, this.simulation.stageLevel);
            galarCorsola.evolutionRule.tryEvolve(galarCorsola, player, this.simulation.stageLevel);
        }
    }
    flyAway(board) {
        const flyAwayCell = board.getFlyAwayCell(this.positionX, this.positionY);
        if (flyAwayCell) {
            this.moveTo(flyAwayCell.x, flyAwayCell.y, board);
        }
    }
    applyStat(stat, value) {
        switch (stat) {
            case Game_1.Stat.ATK:
                this.addAttack(value, this, 0, false);
                break;
            case Game_1.Stat.DEF:
                this.addDefense(value, this, 0, false);
                break;
            case Game_1.Stat.SPE_DEF:
                this.addSpecialDefense(value, this, 0, false);
                break;
            case Game_1.Stat.AP:
                this.addAbilityPower(value, this, 0, false);
                break;
            case Game_1.Stat.PP:
                this.addPP(value, this, 0, false);
                break;
            case Game_1.Stat.ATK_SPEED:
                this.addAttackSpeed(value, this, 0, false);
                break;
            case Game_1.Stat.CRIT_CHANCE:
                this.addCritChance(value, this, 0, false);
                break;
            case Game_1.Stat.CRIT_POWER:
                this.addCritPower(value, this, 0, false);
                break;
            case Game_1.Stat.SHIELD:
                this.addShield(value, this, 0, false);
                break;
            case Game_1.Stat.HP:
                this.addMaxHP(value, this, 0, false);
                break;
        }
    }
    resurrect() {
        this.life = this.refToBoardPokemon.hp;
        this.shield = 0;
        this.pp = 0;
        this.ap = 0;
        this.atk = this.refToBoardPokemon.atk;
        this.def = this.refToBoardPokemon.def;
        this.speDef = this.refToBoardPokemon.speDef;
        this.atkSpeed = this.refToBoardPokemon.atkSpeed;
        this.critChance = Config_1.DEFAULT_CRIT_CHANCE;
        this.critPower = Config_1.DEFAULT_CRIT_POWER;
        this.count = new count_1.default();
        this.status.clearNegativeStatus();
        this.effects.clear();
        if (this.items.has(Item_1.Item.SACRED_ASH) && this.player) {
            const team = this.simulation.getTeam(this.player.id);
            if (team) {
                const alliesAlive = (0, schemas_1.values)(team)
                    .filter((e) => e.life > 0)
                    .map((e) => e.refToBoardPokemon.id);
                const koAllies = (0, schemas_1.values)(this.player.board).filter((p) => p.id !== this.refToBoardPokemon.id &&
                    !(0, pokemon_1.isOnBench)(p) &&
                    alliesAlive.includes(p.id) === false);
                const spawns = (0, random_1.pickNRandomIn)(koAllies, 3);
                spawns.forEach((spawn) => {
                    const mon = pokemon_factory_1.default.createPokemonFromName(spawn.name, {
                        selectedEmotion: spawn.emotion,
                        selectedShiny: spawn.shiny
                    });
                    const coord = this.simulation.getClosestAvailablePlaceOnBoardToPokemon(this, this.team);
                    this.simulation.addPokemon(mon, coord.x, coord.y, this.team, true);
                });
            }
        }
        this.items.delete(Item_1.Item.DYNAMAX_BAND);
        this.items.delete(Item_1.Item.SACRED_ASH);
        this.simulation.applySynergyEffects(this);
        this.simulation.applyItemsEffects(this);
        this.simulation.applyWeatherEffects(this);
        this.status.resurection = false;
        this.shield = 0;
        this.flyingProtection = 0;
        Synergy_1.SynergyEffects[Synergy_1.Synergy.FOSSIL].forEach((fossilResurectEffect) => this.effects.delete(fossilResurectEffect));
    }
    eatBerry(berry, stealedFrom) {
        var _a;
        switch (berry) {
            case Item_1.Item.AGUAV_BERRY:
                this.handleHeal(this.hp - this.life, this, 0, false);
                this.status.triggerConfusion(3000, this);
                break;
            case Item_1.Item.APICOT_BERRY:
                this.handleHeal(20, this, 0, false);
                this.addSpecialDefense(20, this, 0, false);
                break;
            case Item_1.Item.ASPEAR_BERRY:
                this.status.freeze = false;
                this.status.freezeCooldown = 0;
                this.effects.add(Effect_1.Effect.IMMUNITY_FREEZE);
                this.handleHeal(20, this, 0, false);
                this.addAttackSpeed(15, this, 0, false);
                break;
            case Item_1.Item.CHERI_BERRY:
                this.status.healParalysis(this);
                this.effects.add(Effect_1.Effect.IMMUNITY_PARALYSIS);
                this.handleHeal(20, this, 0, false);
                this.addAttack(10, this, 0, false);
                break;
            case Item_1.Item.CHESTO_BERRY:
                this.status.sleep = false;
                this.status.sleepCooldown = 0;
                this.effects.add(Effect_1.Effect.IMMUNITY_SLEEP);
                this.handleHeal(20, this, 0, false);
                this.addAbilityPower(15, this, 0, false);
                break;
            case Item_1.Item.GANLON_BERRY:
                this.handleHeal(20, this, 0, false);
                this.addDefense(20, this, 0, false);
                break;
            case Item_1.Item.JABOCA_BERRY:
                this.handleHeal(20, this, 0, false);
                this.status.triggerSpikeArmor(10000);
                break;
            case Item_1.Item.LANSAT_BERRY:
                this.handleHeal(20, this, 0, false);
                this.addCritChance(50, this, 0, false);
                break;
            case Item_1.Item.LEPPA_BERRY:
                this.handleHeal(20, this, 0, false);
                this.addPP(50, this, 0, false);
                break;
            case Item_1.Item.LIECHI_BERRY:
                this.handleHeal(20, this, 0, false);
                this.addAttack(15, this, 0, false);
                break;
            case Item_1.Item.LUM_BERRY:
                this.handleHeal(20, this, 0, false);
                this.status.clearNegativeStatus();
                this.status.triggerRuneProtect(5000);
                break;
            case Item_1.Item.ORAN_BERRY:
                this.handleHeal(20, this, 0, false);
                this.addShield(80, this, 0, false);
                break;
            case Item_1.Item.PECHA_BERRY:
                this.handleHeal(50, this, 0, false);
                this.status.poisonOrigin = undefined;
                this.status.poisonStacks = 0;
                this.status.poisonDamageCooldown = 0;
                this.effects.add(Effect_1.Effect.IMMUNITY_POISON);
                break;
            case Item_1.Item.PERSIM_BERRY:
                this.status.confusion = false;
                this.status.confusionCooldown = 0;
                this.effects.add(Effect_1.Effect.IMMUNITY_CONFUSION);
                this.handleHeal(20, this, 0, false);
                this.addSpecialDefense(10, this, 0, false);
                break;
            case Item_1.Item.PETAYA_BERRY:
                this.handleHeal(20, this, 0, false);
                this.addAbilityPower(80, this, 0, false);
                break;
            case Item_1.Item.ROWAP_BERRY:
                this.handleHeal(20, this, 0, false);
                this.status.triggerMagicBounce(10000);
                break;
            case Item_1.Item.RAWST_BERRY:
                this.status.healBurn(this);
                this.effects.add(Effect_1.Effect.IMMUNITY_BURN);
                this.handleHeal(20, this, 0, false);
                this.addDefense(10, this, 0, false);
                break;
            case Item_1.Item.SALAC_BERRY:
                this.handleHeal(20, this, 0, false);
                this.addAttackSpeed(50, this, 0, false);
                break;
            case Item_1.Item.SITRUS_BERRY:
                this.effects.add(Effect_1.Effect.BUFF_HEAL_RECEIVED);
                this.handleHeal(20, this, 0, false);
                break;
            case Item_1.Item.BERRY_JUICE:
                this.handleHeal(this.hp - this.life, this, 0, false);
                break;
        }
        if (stealedFrom) {
            stealedFrom.items.delete(berry);
            stealedFrom.refToBoardPokemon.items.delete(berry);
        }
        else {
            this.items.delete(berry);
            this.refToBoardPokemon.items.delete(berry);
        }
        if (this.passive === Passive_1.Passive.GLUTTON) {
            this.refToBoardPokemon.hp += 20;
            if (this.refToBoardPokemon.hp > 750) {
                (_a = this.player) === null || _a === void 0 ? void 0 : _a.titles.add(types_1.Title.GLUTTON);
            }
        }
        if (this.passive === Passive_1.Passive.SHUCKLE &&
            Item_1.Berries.includes(berry) &&
            this.player) {
            this.player.items.push(Item_1.Item.BERRY_JUICE);
        }
    }
}
exports.PokemonEntity = PokemonEntity;
__decorate([
    (0, schema_1.type)("boolean")
], PokemonEntity.prototype, "shiny", void 0);
__decorate([
    (0, schema_1.type)("uint8")
], PokemonEntity.prototype, "positionX", void 0);
__decorate([
    (0, schema_1.type)("uint8")
], PokemonEntity.prototype, "positionY", void 0);
__decorate([
    (0, schema_1.type)("string")
], PokemonEntity.prototype, "action", void 0);
__decorate([
    (0, schema_1.type)("string")
], PokemonEntity.prototype, "index", void 0);
__decorate([
    (0, schema_1.type)("string")
], PokemonEntity.prototype, "id", void 0);
__decorate([
    (0, schema_1.type)("string")
], PokemonEntity.prototype, "orientation", void 0);
__decorate([
    (0, schema_1.type)("uint16")
], PokemonEntity.prototype, "hp", void 0);
__decorate([
    (0, schema_1.type)("uint8")
], PokemonEntity.prototype, "pp", void 0);
__decorate([
    (0, schema_1.type)("uint8")
], PokemonEntity.prototype, "maxPP", void 0);
__decorate([
    (0, schema_1.type)("uint16")
], PokemonEntity.prototype, "atk", void 0);
__decorate([
    (0, schema_1.type)("uint16")
], PokemonEntity.prototype, "def", void 0);
__decorate([
    (0, schema_1.type)("uint16")
], PokemonEntity.prototype, "speDef", void 0);
__decorate([
    (0, schema_1.type)("uint8")
], PokemonEntity.prototype, "attackType", void 0);
__decorate([
    (0, schema_1.type)("uint16")
], PokemonEntity.prototype, "life", void 0);
__decorate([
    (0, schema_1.type)("uint16")
], PokemonEntity.prototype, "shield", void 0);
__decorate([
    (0, schema_1.type)("uint8")
], PokemonEntity.prototype, "team", void 0);
__decorate([
    (0, schema_1.type)("uint8")
], PokemonEntity.prototype, "range", void 0);
__decorate([
    (0, schema_1.type)("float32")
], PokemonEntity.prototype, "atkSpeed", void 0);
__decorate([
    (0, schema_1.type)("int8")
], PokemonEntity.prototype, "targetX", void 0);
__decorate([
    (0, schema_1.type)("int8")
], PokemonEntity.prototype, "targetY", void 0);
__decorate([
    (0, schema_1.type)("string")
], PokemonEntity.prototype, "attackSprite", void 0);
__decorate([
    (0, schema_1.type)("string")
], PokemonEntity.prototype, "rarity", void 0);
__decorate([
    (0, schema_1.type)("string")
], PokemonEntity.prototype, "name", void 0);
__decorate([
    (0, schema_1.type)({ set: "string" })
], PokemonEntity.prototype, "effects", void 0);
__decorate([
    (0, schema_1.type)({ set: "string" })
], PokemonEntity.prototype, "items", void 0);
__decorate([
    (0, schema_1.type)({ set: "string" })
], PokemonEntity.prototype, "types", void 0);
__decorate([
    (0, schema_1.type)("uint8")
], PokemonEntity.prototype, "stars", void 0);
__decorate([
    (0, schema_1.type)("string")
], PokemonEntity.prototype, "skill", void 0);
__decorate([
    (0, schema_1.type)("string")
], PokemonEntity.prototype, "passive", void 0);
__decorate([
    (0, schema_1.type)(status_1.default)
], PokemonEntity.prototype, "status", void 0);
__decorate([
    (0, schema_1.type)(count_1.default)
], PokemonEntity.prototype, "count", void 0);
__decorate([
    (0, schema_1.type)("uint8")
], PokemonEntity.prototype, "critChance", void 0);
__decorate([
    (0, schema_1.type)("float32")
], PokemonEntity.prototype, "critPower", void 0);
__decorate([
    (0, schema_1.type)("int16")
], PokemonEntity.prototype, "ap", void 0);
__decorate([
    (0, schema_1.type)("uint16")
], PokemonEntity.prototype, "healDone", void 0);
__decorate([
    (0, schema_1.type)("string")
], PokemonEntity.prototype, "emotion", void 0);
function getStrongestUnit(pokemons) {
    let strongest, bestScore = 0;
    pokemons.forEach((pokemon) => {
        const score = getUnitScore(pokemon);
        if (score > bestScore) {
            bestScore = score;
            strongest = pokemon;
        }
    });
    return strongest;
}
function getUnitScore(pokemon) {
    let score = 0;
    score += 100 * pokemon.items.size;
    score += 10 * pokemon.stars;
    score += (0, shop_1.getSellPrice)(pokemon);
    return score;
}
function canSell(pkm, specialGameRule) {
    if (specialGameRule === SpecialGameRule_1.SpecialGameRule.DITTO_PARTY && pkm === Pokemon_1.Pkm.DITTO) {
        return false;
    }
    return true;
}
function getMoveSpeed(pokemon, weather) {
    let moveSpeed = 1;
    if (weather === Weather_1.Weather.SNOW) {
        moveSpeed -= 0.25;
    }
    if (pokemon.status.paralysis) {
        moveSpeed -= 0.4;
    }
    if (pokemon.effects.has(Effect_1.Effect.QUICK_FEET)) {
        moveSpeed += 0.3;
    }
    else if (pokemon.effects.has(Effect_1.Effect.RUN_AWAY)) {
        moveSpeed += 0.5;
    }
    else if (pokemon.effects.has(Effect_1.Effect.HUSTLE)) {
        moveSpeed += 0.8;
    }
    else if (pokemon.effects.has(Effect_1.Effect.BERSERK)) {
        moveSpeed += 1.0;
    }
    return moveSpeed;
}
//# sourceMappingURL=pokemon-entity.js.map