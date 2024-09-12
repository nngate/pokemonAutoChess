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
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LiquidationStrategy = exports.ClangorousSoulStrategy = exports.ExplosionStrategy = exports.PoisonJabStrategy = exports.UTurnStrategy = exports.KingShieldStrategy = exports.HypnosisStrategy = exports.OverheatStrategy = exports.DarkVoidStrategy = exports.TwistingNetherStrategy = exports.RazorWindStrategy = exports.PsychUpStrategy = exports.LockOnStrategy = exports.LeechSeedStrategy = exports.FlameChargeStrategy = exports.FireTrickStrategy = exports.ElectroWebStrategy = exports.SchoolingStrategy = exports.AquaJetStrategy = exports.TimeTravelStrategy = exports.AuroraVeilStrategy = exports.ElectroBoostStrategy = exports.DynamicPunchStrategy = exports.DynamaxCannonStrategy = exports.DracoEnergyStrategy = exports.DiamondStormStrategy = exports.CrabHammerStrategy = exports.CorruptedNatureStrategy = exports.ChatterStrategy = exports.PsychicStrategy = exports.GrassySurgeStrategy = exports.MistySurgeStrategy = exports.PsychicSurgeStrategy = exports.ElectricSurgeStrategy = exports.JudgementStrategy = exports.IllusionStrategy = exports.WonderGuardStrategy = exports.KnowledgeThiefStrategy = exports.ConfusingMindStrategy = exports.SlackOffStrategy = exports.SongOfDesireStrategy = exports.EarthquakeStrategy = exports.TeaTimeStrategy = exports.SoftBoiledStrategy = exports.MindBlownStrategy = exports.PickupStrategy = exports.PaydayStrategy = exports.BeatUpStrategy = exports.FusionBoltStrategy = exports.BlueFlareStrategy = void 0;
exports.CosmicPowerStrategy = exports.CalmMindStrategy = exports.NaturalGiftStrategy = exports.LunarBlessingStrategy = exports.WishStrategy = exports.BlazeKickStrategy = exports.DracoMeteorStrategy = exports.ThunderStrategy = exports.SolarBeamStrategy = exports.HydroPumpStrategy = exports.HeatWaveStrategy = exports.InfernalParadeStrategy = exports.WheelOfFireStrategy = exports.RockSlideStrategy = exports.GuillotineStrategy = exports.SeismicTossStrategy = exports.FireBlastStrategy = exports.ConfusionStrategy = exports.SleepStrategy = exports.ProtectStrategy = exports.BlizzardStrategy = exports.PoisonStrategy = exports.BurnStrategy = exports.NightmareStrategy = exports.SeedFlareStrategy = exports.OriginPulseStrategy = exports.SpikeArmorStrategy = exports.HealBlockStrategy = exports.RoarOfTimeStrategy = exports.RockTombStrategy = exports.RockSmashStrategy = exports.DoubleEdgeStrategy = exports.HeadSmashStrategy = exports.NuzzleStrategy = exports.AccelerockStrategy = exports.VoltSwitchStrategy = exports.ShadowCloneStrategy = exports.HyperVoiceStrategy = exports.PetalDanceStrategy = exports.FutureSightStrategy = exports.EchoStrategy = exports.TriAttackStrategy = exports.GrassWhistleStrategy = exports.HighJumpKickStrategy = exports.DisarmingVoiceStrategy = exports.FairyWindStrategy = exports.RelicSongStrategy = exports.GrowlStrategy = exports.AuroraBeamStrategy = exports.BonemerangStrategy = void 0;
exports.FakeTearsStrategy = exports.SpringtideStormStrategy = exports.BleakwindStormStrategy = exports.WildboltStormStrategy = exports.SandsearStormStrategy = exports.FleurCannonStrategy = exports.HurricaneStrategy = exports.MeteorMashStrategy = exports.StunSporeStrategy = exports.KnockOffStrategy = exports.ThiefStrategy = exports.SpectralThiefStrategy = exports.TakeHeartStrategy = exports.NastyPlotStrategy = exports.TeleportStrategy = exports.HappyHourStrategy = exports.LeechLifeStrategy = exports.PoisonStingStrategy = exports.EntanglingThreadStrategy = exports.StringShotStrategy = exports.BugBuzzStrategy = exports.ShadowBallStrategy = exports.PaybackStrategy = exports.StompStrategy = exports.TormentStrategy = exports.RootStrategy = exports.SteamEruptionStrategy = exports.IcicleCrashStrategy = exports.DragonBreathStrategy = exports.AquaTailStrategy = exports.DragonTailStrategy = exports.XScissorStrategy = exports.WaterfallStrategy = exports.LeafBladeStrategy = exports.SacredSwordStrategy = exports.PresentStrategy = exports.PsybeamStrategy = exports.AppleAcidStrategy = exports.BiteStrategy = exports.SmokeScreenStrategy = exports.DiveStrategy = exports.DischargeStrategy = exports.SludgeWaveStrategy = exports.SludgeStrategy = exports.ChargeStrategy = exports.BlastBurnStrategy = exports.IronTailStrategy = exports.SoakStrategy = exports.IronDefenseStrategy = exports.DefenseCurlStrategy = void 0;
exports.HelpingHandStrategy = exports.ShellSmashStrategy = exports.MagicBounceStrategy = exports.LinkCableStrategy = exports.MudBubbleStrategy = exports.LusterPurgeStrategy = exports.MistBallStrategy = exports.HailStrategy = exports.EruptionStrategy = exports.FellStingerStrategy = exports.FakeOutStrategy = exports.DireClawStrategy = exports.SlashingClawStrategy = exports.MagmaStormStrategy = exports.ThrashStrategy = exports.RolloutStrategy = exports.AbsorbStrategy = exports.AcrobaticsStrategy = exports.GigatonHammerStrategy = exports.IcyWindStrategy = exports.SilverWindStrategy = exports.PoisonPowderStrategy = exports.CounterStrategy = exports.SplashStrategy = exports.PeckStrategy = exports.SearingShotStrategy = exports.FireSpinStrategy = exports.DigStrategy = exports.ShellTrapStrategy = exports.HealOrderStrategy = exports.GrowthStrategy = exports.HexStrategy = exports.MimicStrategy = exports.DeathWingStrategy = exports.GeomancyStrategy = exports.TripleKickStrategy = exports.MawashiGeriStrategy = exports.UppercutStrategy = exports.MachPunchStrategy = exports.ForecastStrategy = exports.PlasmaFistStrategy = exports.ShadowSneakStrategy = exports.WaterShurikenStrategy = exports.SpiritShackleStrategy = exports.AgilityStrategy = exports.FlyingPressStrategy = exports.SkyAttackStrategy = exports.MetronomeStrategy = exports.DragonDartsStrategy = exports.SparklingAriaStrategy = void 0;
exports.OutrageStrategy = exports.SlashStrategy = exports.RetaliateStrategy = exports.MagicPowderStrategy = exports.FloralHealingStrategy = exports.BarbBarrageStrategy = exports.VineWhipStrategy = exports.BodySlamStrategy = exports.EggsplosionStrategy = exports.AirSlashStrategy = exports.SnipeShotStrategy = exports.HyperSpaceFury = exports.UnboundStrategy = exports.EmptyLightStrategy = exports.WhirlwindStrategy = exports.SandTombStrategy = exports.ScreechStrategy = exports.PopulationBombStrategy = exports.ChargeBeamStrategy = exports.NightShadeStrategy = exports.PrismaticLaserStrategy = exports.TailGlowStrategy = exports.QuiverDanceStrategy = exports.StruggleBugStrategy = exports.StickyWebStrategy = exports.SpikesStrategy = exports.StealthRocksStrategy = exports.MagicalLeafStrategy = exports.BraveBirdStrategy = exports.PoisonGasStrategy = exports.LungeStrategy = exports.AquaRingStrategy = exports.AssuranceStrategy = exports.FissureStrategy = exports.AssistStrategy = exports.CloseCombatStrategy = exports.TeeterDanceStrategy = exports.SuperFangStrategy = exports.ParabolicChargeStrategy = exports.AerialAceStrategy = exports.PlayRoughStrategy = exports.WaterPulseStrategy = exports.AttractStrategy = exports.MagnetRiseStrategy = exports.ShelterStrategy = exports.SmogStrategy = exports.AnchorShotStrategy = exports.WhirlpoolStrategy = exports.PyroBallStrategy = exports.AstralBarrageStrategy = void 0;
exports.ThunderFangStrategy = exports.IceFangStrategy = exports.FireFangStrategy = exports.CrossPoisonStrategy = exports.CrunchStrategy = exports.SparkStrategy = exports.DreamEaterStrategy = exports.PsystrikeStrategy = exports.PollenPuffStrategy = exports.PsychoBoostStrategy = exports.ExtremeSpeedStrategy = exports.FacadeStrategy = exports.IceHammerStrategy = exports.ZapCannonStrategy = exports.SheerColdStrategy = exports.SpiritBreakStrategy = exports.MantisBladesStrategy = exports.BloodMoonStrategy = exports.MoongeistBeamStrategy = exports.SunsteelStrikeStrategy = exports.PetalBlizzardStrategy = exports.MultiAttackStrategy = exports.SpacialRendStrategy = exports.DetectStrategy = exports.AromatherapyStrategy = exports.TickleStrategy = exports.FurySwipesStrategy = exports.LickStrategy = exports.AuraWheelStrategy = exports.ShieldsUpStrategy = exports.ShieldsDownStrategy = exports.KowtowCleaveStrategy = exports.NightSlashStrategy = exports.MagnetBombStrategy = exports.ShadowPunchStrategy = exports.ShedTailStrategy = exports.PsychicFangsStrategy = exports.TransformStrategy = exports.OverdriveStrategy = exports.LovelyKissStrategy = exports.SketchStrategy = exports.AuraSphereStrategy = exports.CrushGripStrategy = exports.PoltergeistStrategy = exports.DoomDesireStrategy = exports.CurseStrategy = exports.RecoverStrategy = exports.MakeItRainStrategy = exports.GoldRushStrategy = exports.FishiousRendStrategy = void 0;
exports.AbilityStrategies = exports.OktzookaStrategy = exports.EntrainmentStrategy = exports.CharmStrategy = exports.PastelVeilStrategy = exports.PurifyStrategy = exports.DoubleShockStrategy = exports.GulpMissileStrategy = exports.GravityStrategy = exports.FairyLockStrategy = exports.DrainPunchStrategy = exports.FireLashStrategy = exports.CrushClawStrategy = exports.RockHeadStrategy = exports.CameraFlashStrategy = exports.StoneAxeStrategy = exports.MoonDreamStrategy = exports.MuddyWaterStrategy = exports.AncientPowerStrategy = exports.GunkShotStrategy = exports.BounceStrategy = exports.RapidSpinStrategy = exports.HeavySlamStrategy = exports.PsyShockStrategy = exports.DarkHarvestStrategy = exports.PowerWhipStrategy = exports.TorchSongStrategy = exports.PsyshieldBashStrategy = exports.TailWhipStrategy = void 0;
const Ability_1 = require("../../types/enum/Ability");
const ability_strategy_1 = require("./ability-strategy");
const hidden_power_1 = require("./hidden-power");
const types_1 = require("../../types");
const Config_1 = require("../../types/Config");
const Effect_1 = require("../../types/enum/Effect");
const Game_1 = require("../../types/enum/Game");
const Item_1 = require("../../types/enum/Item");
const Pokemon_1 = require("../../types/enum/Pokemon");
const Synergy_1 = require("../../types/enum/Synergy");
const Weather_1 = require("../../types/enum/Weather");
const egg_factory_1 = require("../../models/egg-factory");
const pokemon_factory_1 = __importDefault(require("../../models/pokemon-factory"));
const pokemon_entity_1 = require("../pokemon-entity");
const pokemon_1 = require("../../models/colyseus-models/pokemon");
const board_1 = require("../../utils/board");
const distance_1 = require("../../utils/distance");
const function_1 = require("../../utils/function");
const logger_1 = require("../../utils/logger");
const number_1 = require("../../utils/number");
const orientation_1 = require("../../utils/orientation");
const random_1 = require("../../utils/random");
const schemas_1 = require("../../utils/schemas");
const simulation_command_1 = require("../simulation-command");
class BlueFlareStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        super.process(pokemon, state, board, target, crit);
        let damage = 50;
        let multiplier = 0;
        if (pokemon.effects.has(Effect_1.Effect.BLAZE)) {
            multiplier = 1;
        }
        else if (pokemon.effects.has(Effect_1.Effect.VICTORY_STAR)) {
            multiplier = 2;
        }
        else if (pokemon.effects.has(Effect_1.Effect.DROUGHT)) {
            multiplier = 3;
        }
        else if (pokemon.effects.has(Effect_1.Effect.DESOLATE_LAND)) {
            multiplier = 4;
        }
        damage += multiplier * 20;
        const cells = board.getAdjacentCells(target.positionX, target.positionY, true);
        cells.forEach((cell) => {
            if (cell.value && cell.value.team !== pokemon.team) {
                cell.value.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
            }
        });
    }
}
exports.BlueFlareStrategy = BlueFlareStrategy;
class FusionBoltStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        super.process(pokemon, state, board, target, crit);
        let damage = 50;
        let multiplier = 0;
        if (pokemon.effects.has(Effect_1.Effect.RISING_VOLTAGE)) {
            multiplier = 1;
        }
        else if (pokemon.effects.has(Effect_1.Effect.OVERDRIVE)) {
            multiplier = 2;
        }
        else if (pokemon.effects.has(Effect_1.Effect.POWER_SURGE)) {
            multiplier = 3;
        }
        damage += multiplier * 40;
        const cells = board.getAdjacentCells(target.positionX, target.positionY, true);
        cells.forEach((cell) => {
            if (cell.value && cell.value.team !== pokemon.team) {
                cell.value.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
            }
        });
    }
}
exports.FusionBoltStrategy = FusionBoltStrategy;
class BeatUpStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        super.process(pokemon, state, board, target, crit);
        for (let i = 0; i < pokemon.stars; i++) {
            const houndour = pokemon_factory_1.default.createPokemonFromName(Pokemon_1.Pkm.HOUNDOUR, pokemon.player);
            const coord = pokemon.simulation.getClosestAvailablePlaceOnBoardToPokemon(pokemon, pokemon.team);
            const entity = pokemon.simulation.addPokemon(houndour, coord.x, coord.y, pokemon.team, true);
            entity.hp = Math.round(houndour.hp * (1 + pokemon.ap / 100));
            entity.life = Math.round(houndour.hp * (1 + pokemon.ap / 100));
        }
    }
}
exports.BeatUpStrategy = BeatUpStrategy;
class PaydayStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        var _a;
        super.process(pokemon, state, board, target, crit);
        const damage = (_a = [30, 60, 120][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 30;
        const { death } = target.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
        if (death && pokemon.player) {
            pokemon.player.addMoney(pokemon.stars);
            pokemon.count.moneyCount += pokemon.stars;
        }
    }
}
exports.PaydayStrategy = PaydayStrategy;
class PickupStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        var _a;
        super.process(pokemon, state, board, target, crit);
        const damage = (_a = [30, 60, 120][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 30;
        if (target.items.size > 0 && pokemon.items.size < 3) {
            const item = target.items.values().next().value;
            target.items.delete(item);
            if (item === Item_1.Item.MAX_REVIVE && target.status.resurection) {
                target.status.resurection = false;
            }
            pokemon.items.add(item);
            pokemon.simulation.applyItemEffect(pokemon, item);
        }
        else {
            if (target.player) {
                const moneyStolen = (0, number_1.max)(target.player.money)(pokemon.stars);
                target.player.money -= moneyStolen;
                if (pokemon.player) {
                    pokemon.player.addMoney(moneyStolen);
                    pokemon.count.moneyCount += moneyStolen;
                }
            }
        }
        target.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
    }
}
exports.PickupStrategy = PickupStrategy;
class MindBlownStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        super.process(pokemon, state, board, target, crit);
        target.count.mindBlownCount++;
        target.handleSpecialDamage(pokemon.life / 2, board, Game_1.AttackType.SPECIAL, pokemon, crit);
    }
}
exports.MindBlownStrategy = MindBlownStrategy;
class SoftBoiledStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        var _a;
        super.process(pokemon, state, board, target, crit);
        const shield = (_a = [30, 60, 120][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 120;
        board.forEach((x, y, tg) => {
            if (tg && pokemon.team == tg.team) {
                pokemon.simulation.room.broadcast(types_1.Transfer.ABILITY, {
                    id: pokemon.simulation.id,
                    skill: pokemon.skill,
                    positionX: tg.positionX,
                    positionY: tg.positionX,
                    orientation: pokemon.orientation
                });
                tg.addShield(shield, pokemon, 1, crit);
                tg.status.clearNegativeStatus();
            }
        });
    }
}
exports.SoftBoiledStrategy = SoftBoiledStrategy;
class TeaTimeStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        var _a;
        super.process(pokemon, state, board, target, crit);
        const heal = (_a = [20, 40, 80][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 80;
        board.forEach((x, y, tg) => {
            if (tg && pokemon.team == tg.team) {
                pokemon.simulation.room.broadcast(types_1.Transfer.ABILITY, {
                    id: pokemon.simulation.id,
                    skill: pokemon.skill,
                    positionX: tg.positionX,
                    positionY: tg.positionX,
                    orientation: pokemon.orientation
                });
                tg.handleHeal(heal, pokemon, 1, crit);
                const berry = (0, schemas_1.values)(tg.items).find((item) => Item_1.Berries.includes(item));
                if (berry) {
                    tg.eatBerry(berry);
                }
            }
        });
    }
}
exports.TeaTimeStrategy = TeaTimeStrategy;
class EarthquakeStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        super.process(pokemon, state, board, target, crit);
        const damage = 120;
        board.forEach((x, y, tg) => {
            if ((tg && pokemon.team !== tg.team && pokemon.positionY === y) ||
                (tg && pokemon.team !== tg.team && pokemon.positionX === x)) {
                tg.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
                tg.count.earthquakeCount++;
            }
        });
    }
}
exports.EarthquakeStrategy = EarthquakeStrategy;
class SongOfDesireStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        super.process(pokemon, state, board, target, crit);
        const rank = new Array();
        board.forEach((x, y, tg) => {
            if (tg && pokemon.team != tg.team) {
                rank.push(tg);
            }
        });
        rank.sort((a, b) => {
            if (a.team === Game_1.Team.BLUE_TEAM) {
                return a.positionY - b.positionY;
            }
            else {
                return b.positionY - a.positionY;
            }
        });
        const duration = 3000;
        const count = 2;
        for (let i = 0; i < count; i++) {
            const targetCharmed = rank[i];
            if (targetCharmed) {
                targetCharmed.status.triggerCharm(duration, targetCharmed, pokemon, true);
                targetCharmed.addAttack(-3, pokemon, 1, crit);
            }
        }
    }
}
exports.SongOfDesireStrategy = SongOfDesireStrategy;
class SlackOffStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        super.process(pokemon, state, board, target, crit);
        pokemon.status.clearNegativeStatus();
        const healFactor = pokemon.stars === 3 ? 0.5 : pokemon.stars === 2 ? 0.4 : 0.3;
        pokemon.handleHeal(pokemon.hp * healFactor, pokemon, 0.5, crit);
        pokemon.status.triggerSleep(5000, pokemon);
    }
}
exports.SlackOffStrategy = SlackOffStrategy;
class ConfusingMindStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        super.process(pokemon, state, board, target, crit);
        const rank = new Array();
        board.forEach((x, y, tg) => {
            if (tg && pokemon.team != tg.team) {
                rank.push(tg);
            }
        });
        rank.sort((a, b) => {
            if (a.team === Game_1.Team.BLUE_TEAM) {
                return a.positionY - b.positionY;
            }
            else {
                return b.positionY - a.positionY;
            }
        });
        const duration = 3000;
        const count = 2;
        for (let i = 0; i < count; i++) {
            const targetConfused = rank[i];
            if (targetConfused) {
                targetConfused.status.triggerConfusion(duration, targetConfused);
            }
        }
    }
}
exports.ConfusingMindStrategy = ConfusingMindStrategy;
class KnowledgeThiefStrategy extends ability_strategy_1.AbilityStrategy {
    constructor() {
        super(...arguments);
        this.copyable = false;
    }
    process(pokemon, state, board, target, crit) {
        super.process(pokemon, state, board, target, crit);
        if (exports.AbilityStrategies[target.skill].copyable) {
            exports.AbilityStrategies[target.skill].process(pokemon, state, board, target, crit);
        }
        if (pokemon.player) {
            pokemon.player.experienceManager.addExperience(1);
        }
    }
}
exports.KnowledgeThiefStrategy = KnowledgeThiefStrategy;
class WonderGuardStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        super.process(pokemon, state, board, target, crit);
        const cells = board.getAdjacentCells(pokemon.positionX, pokemon.positionY);
        let damage = 30;
        if (pokemon.stars == 2) {
            damage = 60;
        }
        if (pokemon.stars == 3) {
            damage = 120;
        }
        cells.forEach((cell) => {
            if (cell.value && pokemon.team != cell.value.team) {
                cell.value.status.triggerParalysis(3000, cell.value);
                cell.value.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
            }
        });
    }
}
exports.WonderGuardStrategy = WonderGuardStrategy;
class IllusionStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        super.process(pokemon, state, board, target, crit);
        const heal = pokemon.stars === 3 ? 70 : pokemon.stars === 2 ? 50 : 30;
        pokemon.handleHeal(heal, pokemon, 0.5, crit);
        if (target) {
            pokemon.index = target.index;
            pokemon.atk = Math.max(pokemon.atk, target.atk);
            pokemon.range = target.range + (pokemon.items.has(Item_1.Item.WIDE_LENS) ? 2 : 0);
            pokemon.def = Math.max(pokemon.def, target.def);
            pokemon.speDef = Math.max(pokemon.speDef, target.speDef);
        }
    }
}
exports.IllusionStrategy = IllusionStrategy;
class JudgementStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        var _a;
        super.process(pokemon, state, board, target, crit);
        let synergyLevelsCount = 0;
        const synergies = (_a = pokemon.player) === null || _a === void 0 ? void 0 : _a.synergies;
        if (synergies) {
            pokemon.types.forEach((type) => {
                var _a;
                synergyLevelsCount += (_a = synergies.get(type)) !== null && _a !== void 0 ? _a : 0;
            });
        }
        const damage = 10 * synergyLevelsCount;
        target.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
    }
}
exports.JudgementStrategy = JudgementStrategy;
class ElectricSurgeStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        super.process(pokemon, state, board, target, crit);
        const buff = 10;
        board.forEach((x, y, ally) => {
            if (ally &&
                pokemon.team == ally.team &&
                ally.types.has(Synergy_1.Synergy.ELECTRIC)) {
                ally.addAttackSpeed(buff, pokemon, 1, crit);
            }
        });
    }
}
exports.ElectricSurgeStrategy = ElectricSurgeStrategy;
class PsychicSurgeStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        super.process(pokemon, state, board, target, crit);
        const buff = 5;
        board.forEach((x, y, ally) => {
            if (ally &&
                ally !== pokemon &&
                pokemon.team == ally.team &&
                ally.types.has(Synergy_1.Synergy.PSYCHIC)) {
                ally.addAbilityPower(buff, pokemon, 1, crit);
            }
        });
    }
}
exports.PsychicSurgeStrategy = PsychicSurgeStrategy;
class MistySurgeStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        super.process(pokemon, state, board, target, crit, true);
        const ppGain = 30;
        const hpGain = 30;
        board.forEach((x, y, ally) => {
            if (ally &&
                ally.id !== pokemon.id &&
                pokemon.team == ally.team &&
                ally.types.has(Synergy_1.Synergy.FAIRY)) {
                ally.addPP(ppGain, pokemon, 1, crit);
                ally.handleHeal(hpGain, pokemon, 1, crit);
            }
        });
    }
}
exports.MistySurgeStrategy = MistySurgeStrategy;
class GrassySurgeStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        super.process(pokemon, state, board, target, crit);
        const buff = 5;
        board.forEach((x, y, ally) => {
            if (ally && pokemon.team == ally.team && ally.types.has(Synergy_1.Synergy.GRASS)) {
                ally.addAttack(buff, pokemon, 1, crit);
            }
        });
    }
}
exports.GrassySurgeStrategy = GrassySurgeStrategy;
class PsychicStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        var _a;
        super.process(pokemon, state, board, target, crit);
        const damage = (_a = [40, 80, 160][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 160;
        const cells = board.getAdjacentCells(target.positionX, target.positionY, true);
        cells.forEach((cell) => {
            if (cell.value && cell.value.team !== pokemon.team) {
                cell.value.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
                cell.value.addPP(-15, pokemon, 0, false);
                cell.value.count.manaBurnCount++;
            }
        });
    }
}
exports.PsychicStrategy = PsychicStrategy;
class ChatterStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        super.process(pokemon, state, board, target, crit);
        const damage = 20;
        const confusionChance = 0.5;
        board.forEach((x, y, tg) => {
            if (tg && pokemon.team != tg.team) {
                tg.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
                if ((0, random_1.chance)(confusionChance)) {
                    tg.status.triggerConfusion(1000, tg);
                }
            }
        });
    }
}
exports.ChatterStrategy = ChatterStrategy;
class CorruptedNatureStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        super.process(pokemon, state, board, target, crit);
        let damage = 20;
        if (pokemon.stars == 2) {
            damage = 40;
        }
        else if (pokemon.stars == 3) {
            damage = 80;
        }
        const cells = board.getAdjacentCells(pokemon.positionX, pokemon.positionY);
        cells.forEach((cell) => {
            if (cell.value && cell.value.team !== pokemon.team) {
                cell.value.status.triggerWound(5000, cell.value, pokemon);
                cell.value.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
            }
        });
    }
}
exports.CorruptedNatureStrategy = CorruptedNatureStrategy;
class CrabHammerStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        super.process(pokemon, state, board, target, crit);
        let damage = 40;
        if (pokemon.stars == 2) {
            damage = 80;
        }
        else if (pokemon.stars == 3) {
            damage = 120;
        }
        if (pokemon.items.has(Item_1.Item.REAPER_CLOTH)) {
            crit = (0, random_1.chance)((3 * pokemon.critChance) / 100);
        }
        let attackType = Game_1.AttackType.SPECIAL;
        if (target.life / target.hp < 0.3) {
            damage = target.life;
            attackType = Game_1.AttackType.TRUE;
        }
        target.handleSpecialDamage(damage, board, attackType, pokemon, crit);
    }
}
exports.CrabHammerStrategy = CrabHammerStrategy;
class DiamondStormStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        super.process(pokemon, state, board, target, crit);
        const damage = Math.round(2 * pokemon.def * (1 + pokemon.ap / 100));
        const cells = board.getAdjacentCells(pokemon.positionX, pokemon.positionY);
        cells.forEach((cell) => {
            if (cell.value && cell.value.team !== pokemon.team) {
                cell.value.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
            }
        });
    }
}
exports.DiamondStormStrategy = DiamondStormStrategy;
class DracoEnergyStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        super.process(pokemon, state, board, target, crit);
        target.handleSpecialDamage(pokemon.life, board, Game_1.AttackType.SPECIAL, pokemon, crit);
    }
}
exports.DracoEnergyStrategy = DracoEnergyStrategy;
class DynamaxCannonStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        super.process(pokemon, state, board, target, crit);
        (0, orientation_1.effectInLine)(board, pokemon, target, (targetInLine) => {
            if (targetInLine != null && targetInLine.team !== pokemon.team) {
                targetInLine.handleSpecialDamage(Math.ceil(targetInLine.hp * 0.5), board, Game_1.AttackType.SPECIAL, pokemon, crit);
            }
        });
    }
}
exports.DynamaxCannonStrategy = DynamaxCannonStrategy;
class DynamicPunchStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        super.process(pokemon, state, board, target, crit);
        let duration = 1500;
        let damage = 20;
        if (pokemon.stars == 2) {
            damage = 40;
            duration = 3000;
        }
        else if (pokemon.stars == 3) {
            damage = 80;
            duration = 6000;
        }
        target.status.triggerConfusion(duration, target);
        target.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
    }
}
exports.DynamicPunchStrategy = DynamicPunchStrategy;
class ElectroBoostStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        super.process(pokemon, state, board, target, crit);
        board.forEach((x, y, tg) => {
            if (tg && pokemon.team == tg.team && tg.types.has(Synergy_1.Synergy.ELECTRIC)) {
                tg.status.triggerRuneProtect(5000);
            }
        });
    }
}
exports.ElectroBoostStrategy = ElectroBoostStrategy;
class AuroraVeilStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        var _a;
        super.process(pokemon, state, board, target, crit);
        const runeProtectDuration = 500;
        const shield = (_a = [5, 10, 15][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 15;
        board.forEach((x, y, tg) => {
            if (tg && pokemon.team == tg.team) {
                tg.addShield(shield, pokemon, 1, crit);
                tg.status.triggerRuneProtect(runeProtectDuration);
            }
        });
    }
}
exports.AuroraVeilStrategy = AuroraVeilStrategy;
class TimeTravelStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        super.process(pokemon, state, board, target, crit);
        board.forEach((x, y, ally) => {
            if (ally && pokemon.team == ally.team) {
                ally.handleHeal(25, pokemon, 1, crit);
                ally.status.clearNegativeStatus();
            }
        });
        if (pokemon.player && pokemon.player.canRegainLife) {
            pokemon.player.life = (0, number_1.max)(100)(pokemon.player.life + 1);
        }
    }
}
exports.TimeTravelStrategy = TimeTravelStrategy;
class AquaJetStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        super.process(pokemon, state, board, target, crit);
        let damage = 20;
        if (pokemon.stars === 2) {
            damage = 40;
        }
        if (pokemon.stars === 3) {
            damage = 80;
        }
        const farthestCoordinate = board.getFarthestTargetCoordinateAvailablePlace(pokemon);
        if (farthestCoordinate) {
            const cells = board.getCellsBetween(pokemon.positionX, pokemon.positionY, farthestCoordinate.x, farthestCoordinate.y);
            cells.forEach((cell) => {
                if (cell.value && cell.value.team != pokemon.team) {
                    cell.value.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
                }
            });
            pokemon.moveTo(farthestCoordinate.x, farthestCoordinate.y, board);
        }
    }
}
exports.AquaJetStrategy = AquaJetStrategy;
class SchoolingStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        super.process(pokemon, state, board, target, crit);
        const damage = 0.1 * pokemon.hp;
        const cells = board.getAdjacentCells(pokemon.positionX, pokemon.positionY);
        cells.forEach((cell) => {
            if (cell.value && cell.value.team !== pokemon.team) {
                cell.value.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
            }
        });
        if (pokemon.player) {
            pokemon.player.board.forEach((ally, id) => {
                if (ally && ally.name === Pokemon_1.Pkm.WISHIWASHI && (0, pokemon_1.isOnBench)(ally)) {
                    pokemon.addMaxHP(50, pokemon, 0, false);
                    pokemon.refToBoardPokemon.hp += 50;
                    pokemon.player.board.delete(id);
                }
            });
        }
    }
}
exports.SchoolingStrategy = SchoolingStrategy;
class ElectroWebStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        var _a, _b;
        super.process(pokemon, state, board, target, crit);
        const steal = (_a = [15, 30, 60][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 60;
        const damage = (_b = [15, 30, 60][pokemon.stars - 1]) !== null && _b !== void 0 ? _b : 80;
        board
            .getAdjacentCells(pokemon.positionX, pokemon.positionY)
            .forEach((cell) => {
            if (cell.value && cell.value.team !== pokemon.team) {
                cell.value.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
                cell.value.addAttackSpeed(-steal, pokemon, 1, crit);
                pokemon.addAttackSpeed(steal, pokemon, 1, crit);
            }
        });
    }
}
exports.ElectroWebStrategy = ElectroWebStrategy;
class FireTrickStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        super.process(pokemon, state, board, target, crit);
        let damage = 20;
        if (pokemon.stars == 2) {
            damage = 40;
        }
        else if (pokemon.stars == 3) {
            damage = 80;
        }
        target.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
        const teleportationCell = board.getTeleportationCell(target.positionX, target.positionY);
        if (teleportationCell) {
            target.moveTo(teleportationCell.x, teleportationCell.y, board);
        }
    }
}
exports.FireTrickStrategy = FireTrickStrategy;
class FlameChargeStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        var _a;
        super.process(pokemon, state, board, target, crit, true);
        const damage = (_a = [20, 40, 80][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 80;
        const farthestCoordinate = board.getFarthestTargetCoordinateAvailablePlace(pokemon);
        if (farthestCoordinate) {
            const cells = board.getCellsBetween(pokemon.positionX, pokemon.positionY, farthestCoordinate.x, farthestCoordinate.y);
            cells.forEach((cell) => {
                if (cell.value && cell.value.team != pokemon.team) {
                    cell.value.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
                }
            });
            pokemon.simulation.room.broadcast(types_1.Transfer.ABILITY, {
                id: pokemon.simulation.id,
                skill: pokemon.skill,
                positionX: pokemon.positionX,
                positionY: pokemon.positionY,
                targetX: farthestCoordinate.x,
                targetY: farthestCoordinate.y,
                orientation: pokemon.orientation
            });
            pokemon.moveTo(farthestCoordinate.x, farthestCoordinate.y, board);
        }
    }
}
exports.FlameChargeStrategy = FlameChargeStrategy;
class LeechSeedStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        super.process(pokemon, state, board, target, crit);
        let duration = 3000;
        let heal = 20;
        if (pokemon.stars == 2) {
            duration = 6000;
            heal = 40;
        }
        else if (pokemon.stars == 3) {
            duration = 6000;
            heal = 80;
        }
        pokemon.handleHeal(heal, pokemon, 1, crit);
        target.status.triggerPoison(duration, target, pokemon);
    }
}
exports.LeechSeedStrategy = LeechSeedStrategy;
class LockOnStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        super.process(pokemon, state, board, target, crit);
        pokemon.effects.add(Effect_1.Effect.LOCK_ON);
    }
}
exports.LockOnStrategy = LockOnStrategy;
class PsychUpStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        super.process(pokemon, state, board, target, crit);
        let damage = 10;
        let duration = 2000;
        if (pokemon.stars == 2) {
            damage = 20;
            duration = 4000;
        }
        else if (pokemon.stars == 3) {
            damage = 80;
            duration = 8000;
        }
        target.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
        const cells = board.getAdjacentCells(target.positionX, target.positionY, true);
        cells.forEach((cell) => {
            if (cell && cell.value && cell.value.team !== pokemon.team) {
                cell.value.status.triggerSilence(duration, cell.value, pokemon);
            }
        });
    }
}
exports.PsychUpStrategy = PsychUpStrategy;
class RazorWindStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        super.process(pokemon, state, board, target, crit);
        const damage = pokemon.stars === 3 ? 80 : pokemon.stars === 2 ? 40 : 20;
        target.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
        const cells = board.getAdjacentCells(target.positionX, target.positionY, true);
        cells.forEach((cell) => {
            if (cell && cell.value && cell.value.team !== pokemon.team) {
                cell.value.status.triggerParalysis(7000, cell.value);
            }
        });
    }
}
exports.RazorWindStrategy = RazorWindStrategy;
class TwistingNetherStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        super.process(pokemon, state, board, target, crit);
        const cells = board.getCellsInRadius(target.positionX, target.positionY, 2);
        cells.forEach((cell) => {
            if (cell && cell.value && cell.value.team !== pokemon.team) {
                cell.value.handleSpecialDamage(80, board, Game_1.AttackType.SPECIAL, pokemon, crit);
                const teleportationCell = board.getTeleportationCell(cell.value.positionX, cell.value.positionY);
                if (teleportationCell) {
                    cell.value.moveTo(teleportationCell.x, teleportationCell.y, board);
                }
                else {
                    logger_1.logger.error("unable to teleport pokemon", cell.value);
                }
            }
        });
    }
}
exports.TwistingNetherStrategy = TwistingNetherStrategy;
class DarkVoidStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        super.process(pokemon, state, board, target, crit);
        const damage = 30;
        board.forEach((x, y, tg) => {
            if (tg && pokemon.team != tg.team) {
                tg.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
                if (tg.status.silence) {
                    tg.status.triggerSleep(2000, tg);
                }
            }
        });
    }
}
exports.DarkVoidStrategy = DarkVoidStrategy;
class OverheatStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        super.process(pokemon, state, board, target, crit);
        board.forEach((x, y, tg) => {
            if (tg && pokemon.team != tg.team) {
                let damage = 40;
                if (tg.status.burn) {
                    damage = Math.round(damage * 1.3);
                }
                tg.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
            }
        });
    }
}
exports.OverheatStrategy = OverheatStrategy;
class HypnosisStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        var _a, _b;
        const farthestTarget = (_a = state.getFarthestTarget(pokemon, board)) !== null && _a !== void 0 ? _a : target;
        super.process(pokemon, state, board, farthestTarget, crit);
        if (farthestTarget) {
            const duration = Math.round(((_b = [2000, 4000, 6000][pokemon.stars - 1]) !== null && _b !== void 0 ? _b : 2000) * (1 + pokemon.ap / 200));
            farthestTarget.status.triggerSleep(duration, farthestTarget);
        }
    }
}
exports.HypnosisStrategy = HypnosisStrategy;
class KingShieldStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        var _a;
        super.process(pokemon, state, board, target, crit);
        const duration = 1500;
        const shield = (_a = [10, 20, 30][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 30;
        pokemon.status.triggerProtect(duration);
        pokemon.addShield(shield, pokemon, 1, crit);
        const farthestTarget = state.getFarthestTarget(pokemon, board);
        if (farthestTarget) {
            pokemon.moveTo(farthestTarget.positionX, farthestTarget.positionY, board);
        }
    }
}
exports.KingShieldStrategy = KingShieldStrategy;
class UTurnStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        var _a;
        super.process(pokemon, state, board, target, crit);
        const shield = (_a = [15, 30, 50][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 30;
        pokemon.moveTo(target.positionX, target.positionY, board);
        pokemon.addShield(shield, pokemon, 1, crit);
        target.status.triggerCharm(1000, target, pokemon, false);
    }
}
exports.UTurnStrategy = UTurnStrategy;
class PoisonJabStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        var _a, _b;
        const damage = (_a = [30, 60, 90][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 30;
        const farthestTarget = (_b = state.getFarthestTarget(pokemon, board)) !== null && _b !== void 0 ? _b : target;
        super.process(pokemon, state, board, farthestTarget, crit);
        if (farthestTarget) {
            farthestTarget.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
            farthestTarget.status.triggerPoison(3000, farthestTarget, pokemon);
            pokemon.status.triggerPoison(3000, pokemon, pokemon);
            pokemon.moveTo(farthestTarget.positionX, farthestTarget.positionY, board);
        }
    }
}
exports.PoisonJabStrategy = PoisonJabStrategy;
class ExplosionStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        super.process(pokemon, state, board, target, crit);
        let damage = 0;
        switch (pokemon.stars) {
            case 1:
                damage = 50;
                break;
            case 2:
                damage = 100;
                break;
            case 3:
                damage = 200;
                break;
            default:
                break;
        }
        const cells = board.getAdjacentCells(pokemon.positionX, pokemon.positionY);
        cells.forEach((cell) => {
            if (cell.value && pokemon.team != cell.value.team) {
                cell.value.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
            }
        });
        pokemon.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
    }
}
exports.ExplosionStrategy = ExplosionStrategy;
class ClangorousSoulStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        var _a;
        super.process(pokemon, state, board, target, crit);
        const buff = (_a = [1, 2, 4][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 1;
        const cells = board.getAdjacentCells(pokemon.positionX, pokemon.positionY, true);
        cells.forEach((cell) => {
            if (cell.value && pokemon.team == cell.value.team) {
                cell.value.addAttack(buff, pokemon, 1, crit);
                cell.value.addDefense(buff, pokemon, 1, crit);
                cell.value.addSpecialDefense(buff, pokemon, 1, crit);
            }
        });
    }
}
exports.ClangorousSoulStrategy = ClangorousSoulStrategy;
class LiquidationStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        super.process(pokemon, state, board, target, crit);
        let damage = 0;
        let reduce = 0;
        switch (pokemon.stars) {
            case 1:
                damage = 20;
                reduce = 2;
                break;
            case 2:
                damage = 40;
                reduce = 4;
                break;
            case 3:
                damage = 80;
                reduce = 8;
                break;
            default:
                break;
        }
        target.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
        target.addDefense(-reduce, pokemon, 1, crit);
    }
}
exports.LiquidationStrategy = LiquidationStrategy;
class BonemerangStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        super.process(pokemon, state, board, target, crit);
        let damage = 0;
        switch (pokemon.stars) {
            case 1:
                damage = 30;
                break;
            case 2:
                damage = 60;
                break;
            case 3:
                damage = 90;
                break;
            default:
                break;
        }
        board.forEach((x, y, tg) => {
            if (tg && pokemon.team != tg.team && x == target.positionX) {
                tg.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
            }
        });
    }
}
exports.BonemerangStrategy = BonemerangStrategy;
class AuroraBeamStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        super.process(pokemon, state, board, target, crit);
        let damage = 0;
        switch (pokemon.stars) {
            case 1:
                damage = 25;
                break;
            case 2:
                damage = 50;
                break;
            case 3:
                damage = 100;
                break;
            default:
                break;
        }
        (0, orientation_1.effectInLine)(board, pokemon, target, (targetInLine) => {
            if (targetInLine != null && targetInLine.team !== pokemon.team) {
                targetInLine.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
                let freezeChance = 0;
                if (pokemon.effects.has(Effect_1.Effect.CHILLY)) {
                    freezeChance = 0.4;
                }
                else if (pokemon.effects.has(Effect_1.Effect.FROSTY)) {
                    freezeChance = 0.6;
                }
                else if (pokemon.effects.has(Effect_1.Effect.FREEZING)) {
                    freezeChance = 0.8;
                }
                else if (pokemon.effects.has(Effect_1.Effect.SHEER_COLD)) {
                    freezeChance = 1.0;
                }
                if ((0, random_1.chance)(freezeChance)) {
                    targetInLine.status.triggerFreeze(2000, target);
                }
            }
        });
    }
}
exports.AuroraBeamStrategy = AuroraBeamStrategy;
class GrowlStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        var _a;
        super.process(pokemon, state, board, target, crit);
        const atkDebuff = (_a = [3, 5, 7][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 7;
        board
            .getAdjacentCells(pokemon.positionX, pokemon.positionY)
            .forEach((cell) => {
            if (cell.value && cell.value.team !== pokemon.team) {
                cell.value.status.triggerFlinch(3000, cell.value, pokemon);
                cell.value.addAttack(-atkDebuff, pokemon, 1, crit);
            }
        });
    }
}
exports.GrowlStrategy = GrowlStrategy;
class RelicSongStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        super.process(pokemon, state, board, target, crit);
        if (pokemon.count.ult % 3 === 0) {
            const duration = Math.round(2000 * (1 + pokemon.ap / 200));
            board.forEach((x, y, tg) => {
                if (tg && pokemon.team != tg.team) {
                    tg.status.triggerSleep(duration, tg);
                    pokemon.simulation.room.broadcast(types_1.Transfer.ABILITY, {
                        id: pokemon.simulation.id,
                        skill: pokemon.skill,
                        positionX: tg.positionX,
                        positionY: tg.positionX,
                        orientation: tg.orientation
                    });
                }
            });
        }
    }
}
exports.RelicSongStrategy = RelicSongStrategy;
class FairyWindStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        var _a;
        super.process(pokemon, state, board, target, crit);
        const ppGain = (_a = [5, 10, 20][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 0;
        board.forEach((x, y, tg) => {
            if (tg && pokemon.team === tg.team && tg.id !== pokemon.id) {
                tg.addPP(ppGain, pokemon, 1, crit);
                pokemon.simulation.room.broadcast(types_1.Transfer.ABILITY, {
                    id: pokemon.simulation.id,
                    skill: pokemon.skill,
                    positionX: tg.positionX,
                    positionY: tg.positionY,
                    orientation: tg.orientation
                });
            }
        });
    }
}
exports.FairyWindStrategy = FairyWindStrategy;
class DisarmingVoiceStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        super.process(pokemon, state, board, target, crit);
        const cells = board.getCellsInRadius(pokemon.positionX, pokemon.positionY, 2);
        cells.forEach((cell) => {
            if (cell.value && pokemon.team != cell.value.team) {
                cell.value.status.triggerCharm(1000, target, pokemon, true);
            }
        });
    }
}
exports.DisarmingVoiceStrategy = DisarmingVoiceStrategy;
class HighJumpKickStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        var _a;
        super.process(pokemon, state, board, target, crit);
        const damage = (_a = [50, 100, 200][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 200;
        pokemon.addPP(target.pp, pokemon, 0, false);
        target.addPP(-target.pp, pokemon, 0, false);
        target.count.manaBurnCount++;
        target.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
    }
}
exports.HighJumpKickStrategy = HighJumpKickStrategy;
class GrassWhistleStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        super.process(pokemon, state, board, target, crit);
        let n = 0;
        switch (pokemon.stars) {
            case 1:
                n = 1;
                break;
            case 2:
                n = 2;
                break;
            case 3:
                n = 4;
                break;
            default:
                break;
        }
        board.forEach((x, y, tg) => {
            if (tg && pokemon.team != tg.team && n > 0) {
                tg.status.triggerSleep(2000, tg);
                n--;
            }
        });
    }
}
exports.GrassWhistleStrategy = GrassWhistleStrategy;
class TriAttackStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        var _a;
        super.process(pokemon, state, board, target, crit);
        const damage = (_a = [30, 60][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 60;
        target.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
        const effect = (0, random_1.randomBetween)(1, 3);
        switch (effect) {
            case 1:
                target.status.triggerFreeze(2000, target);
                break;
            case 2:
                target.status.triggerBurn(5000, target, pokemon);
                break;
            case 3:
                target.status.triggerParalysis(5000, target);
                break;
        }
    }
}
exports.TriAttackStrategy = TriAttackStrategy;
class EchoStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        super.process(pokemon, state, board, target, crit);
        let damage = 0;
        let additional = 0;
        switch (pokemon.stars) {
            case 1:
                damage = 3;
                additional = 3;
                break;
            case 2:
                damage = 6;
                additional = 6;
                break;
            case 3:
                damage = 9;
                additional = 9;
                break;
            default:
                break;
        }
        board.forEach((x, y, tg) => {
            if (tg && pokemon.team != tg.team) {
                tg.handleSpecialDamage(damage + pokemon.echo * additional, board, Game_1.AttackType.SPECIAL, pokemon, crit);
            }
        });
        pokemon.echo++;
    }
}
exports.EchoStrategy = EchoStrategy;
class FutureSightStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        super.process(pokemon, state, board, target, crit, true);
        let damage = 0;
        let count = 0;
        switch (pokemon.stars) {
            case 1:
                damage = 15;
                count = 5;
                break;
            case 2:
                damage = 30;
                count = 5;
                break;
            case 3:
                damage = 60;
                count = 5;
                break;
            default:
                break;
        }
        board.forEach((x, y, tg) => {
            if (tg && pokemon.team != tg.team && count > 0) {
                tg.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
                count--;
                tg.count.futureSightCount++;
            }
        });
    }
}
exports.FutureSightStrategy = FutureSightStrategy;
class PetalDanceStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        var _a, _b;
        super.process(pokemon, state, board, target, crit, true);
        const damage = (_a = [20, 30, 50][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 50;
        const count = (_b = [3, 4, 5][pokemon.stars - 1]) !== null && _b !== void 0 ? _b : 5;
        const enemies = board.cells.filter((p) => p && p.team !== pokemon.team);
        const enemiesHit = enemies
            .sort((a, b) => (0, distance_1.distanceM)(a.positionX, a.positionY, pokemon.positionX, pokemon.positionY) -
            (0, distance_1.distanceM)(b.positionX, b.positionY, pokemon.positionX, pokemon.positionY))
            .slice(0, count);
        enemiesHit.forEach((enemy) => {
            enemy.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
            enemy.count.petalDanceCount++;
        });
    }
}
exports.PetalDanceStrategy = PetalDanceStrategy;
class HyperVoiceStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        var _a, _b;
        super.process(pokemon, state, board, target, crit);
        const damage = (_a = [40, 80, 200][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 200;
        const confusionDuration = (_b = [1000, 2000, 3000][pokemon.stars - 1]) !== null && _b !== void 0 ? _b : 3;
        board.forEach((x, y, tg) => {
            if (tg && pokemon.team != tg.team && target.positionY == y) {
                tg.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
                tg.status.triggerConfusion(confusionDuration, tg);
            }
        });
    }
}
exports.HyperVoiceStrategy = HyperVoiceStrategy;
class ShadowCloneStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        super.process(pokemon, state, board, target, crit);
        const farthestCoordinate = board.getFarthestTargetCoordinateAvailablePlace(pokemon);
        if (farthestCoordinate) {
            const p = pokemon_factory_1.default.createPokemonFromName(pokemon.name);
            if (pokemon.items.size > 0) {
                const itemGiven = (0, random_1.pickRandomIn)((0, schemas_1.values)(pokemon.items));
                p.items.add(itemGiven);
                pokemon.items.delete(itemGiven);
                if (itemGiven === Item_1.Item.MAX_REVIVE && pokemon.status.resurection) {
                    pokemon.status.resurection = false;
                }
            }
            const clone = pokemon.simulation.addPokemon(p, farthestCoordinate.x, farthestCoordinate.y, pokemon.team);
            clone.hp = (0, number_1.min)(1)(Math.ceil(0.5 * pokemon.hp * (1 + pokemon.ap / 100)));
            clone.life = clone.hp;
            clone.isClone = true;
        }
    }
}
exports.ShadowCloneStrategy = ShadowCloneStrategy;
class VoltSwitchStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        var _a;
        super.process(pokemon, state, board, target, crit);
        const damage = (_a = [30, 60, 120][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 120;
        const farthestCoordinate = board.getFarthestTargetCoordinateAvailablePlace(pokemon);
        if (farthestCoordinate) {
            const cells = board.getCellsBetween(pokemon.positionX, pokemon.positionY, farthestCoordinate.x, farthestCoordinate.y);
            cells.forEach((cell) => {
                if (cell.value && cell.value.team != pokemon.team) {
                    cell.value.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
                }
            });
            pokemon.moveTo(farthestCoordinate.x, farthestCoordinate.y, board);
        }
    }
}
exports.VoltSwitchStrategy = VoltSwitchStrategy;
class AccelerockStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        super.process(pokemon, state, board, target, crit);
        const farthestCoordinate = board.getFarthestTargetCoordinateAvailablePlace(pokemon);
        if (farthestCoordinate) {
            pokemon.moveTo(farthestCoordinate.x, farthestCoordinate.y, board);
            const targetCoordinates = state.getNearestTargetAtRangeCoordinates(pokemon, board);
            if (targetCoordinates) {
                pokemon.targetX = targetCoordinates.x;
                pokemon.targetY = targetCoordinates.y;
                const target = board.getValue(targetCoordinates.x, targetCoordinates.y);
                if (target) {
                    target.handleSpecialDamage(pokemon.atk, board, Game_1.AttackType.SPECIAL, pokemon, crit, true);
                }
            }
        }
        const defLost = (0, number_1.max)(pokemon.def)(Math.round(5 * (1 + pokemon.ap / 100)));
        pokemon.addDefense(-defLost, pokemon, 0, false);
        pokemon.addAttackSpeed(defLost * 5, pokemon, 0, false);
        pokemon.cooldown = 0;
    }
}
exports.AccelerockStrategy = AccelerockStrategy;
class NuzzleStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        var _a, _b, _c;
        const farthestTarget = (_a = state.getFarthestTarget(pokemon, board)) !== null && _a !== void 0 ? _a : target;
        super.process(pokemon, state, board, farthestTarget, crit);
        const farthestCoordinate = board.getFarthestTargetCoordinateAvailablePlace(pokemon);
        if (farthestTarget && farthestCoordinate) {
            const damage = (_b = [30, 60, 120][pokemon.stars - 1]) !== null && _b !== void 0 ? _b : 120;
            const duration = (_c = [3000, 4000, 5000][pokemon.stars - 1]) !== null && _c !== void 0 ? _c : 5000;
            farthestTarget.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit, true);
            farthestTarget.status.triggerParalysis(duration, farthestTarget);
            pokemon.moveTo(farthestCoordinate.x, farthestCoordinate.y, board);
        }
    }
}
exports.NuzzleStrategy = NuzzleStrategy;
class HeadSmashStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        super.process(pokemon, state, board, target, crit);
        let damage, recoil;
        if (pokemon.stars === 3) {
            damage = 150;
            recoil = 15;
        }
        else if (pokemon.stars === 2) {
            damage = 80;
            recoil = 10;
        }
        else {
            damage = 40;
            recoil = 5;
        }
        if (target.status.sleep || target.status.freeze) {
            target.handleSpecialDamage(target.life, board, Game_1.AttackType.TRUE, pokemon, crit);
        }
        else {
            target.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
        }
        pokemon.handleSpecialDamage(recoil, board, Game_1.AttackType.TRUE, pokemon, crit);
    }
}
exports.HeadSmashStrategy = HeadSmashStrategy;
class DoubleEdgeStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        var _a, _b;
        super.process(pokemon, state, board, target, crit);
        const damage = (_a = [55, 110, 220][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 220;
        const recoil = (_b = [20, 40, 60][pokemon.stars - 1]) !== null && _b !== void 0 ? _b : 60;
        target.handleSpecialDamage(damage, board, Game_1.AttackType.PHYSICAL, pokemon, crit);
        pokemon.handleSpecialDamage(recoil, board, Game_1.AttackType.PHYSICAL, pokemon, crit);
    }
}
exports.DoubleEdgeStrategy = DoubleEdgeStrategy;
class RockSmashStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        super.process(pokemon, state, board, target, crit);
        let d = 0;
        let s = 0;
        switch (pokemon.stars) {
            case 1:
                d = 20;
                s = 3000;
                break;
            case 2:
                d = 40;
                s = 6000;
                break;
            case 3:
                d = 80;
                s = 9000;
                break;
            default:
                break;
        }
        target.handleSpecialDamage(d, board, Game_1.AttackType.SPECIAL, pokemon, crit);
        target.status.triggerSilence(s, target, pokemon);
    }
}
exports.RockSmashStrategy = RockSmashStrategy;
class RockTombStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        var _a, _b;
        super.process(pokemon, state, board, target, crit);
        const damage = (_a = [30, 60, 120][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 120;
        const debuff = (_b = [10, 20, 40][pokemon.stars - 1]) !== null && _b !== void 0 ? _b : 40;
        target.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
        target.addAttackSpeed(-debuff, pokemon, 0, false);
    }
}
exports.RockTombStrategy = RockTombStrategy;
class RoarOfTimeStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        super.process(pokemon, state, board, target, crit);
        const atkSpeedBuff = 20;
        const candidates = board.cells.filter((cell) => cell && cell.team === pokemon.team && !cell.status.resurection);
        const strongest = (0, pokemon_entity_1.getStrongestUnit)(candidates);
        if (strongest) {
            strongest.status.resurection = true;
            strongest.addAttackSpeed(atkSpeedBuff, pokemon, 1, true);
        }
    }
}
exports.RoarOfTimeStrategy = RoarOfTimeStrategy;
class HealBlockStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        var _a;
        super.process(pokemon, state, board, target, crit);
        const damage = (_a = [20, 40, 80][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 80;
        const cells = board.getAdjacentCells(pokemon.positionX, pokemon.positionY);
        cells.forEach((cell) => {
            if (cell.value && pokemon.team != cell.value.team) {
                cell.value.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit, true);
                cell.value.status.triggerWound(5000, cell.value, pokemon);
            }
        });
    }
}
exports.HealBlockStrategy = HealBlockStrategy;
class SpikeArmorStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        super.process(pokemon, state, board, target, crit);
        const duration = pokemon.stars === 3 ? 10000 : pokemon.stars === 2 ? 5000 : 3000;
        pokemon.status.triggerSpikeArmor(duration);
    }
}
exports.SpikeArmorStrategy = SpikeArmorStrategy;
class OriginPulseStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        super.process(pokemon, state, board, target, crit);
        const damage = 100;
        board.forEach((x, y, tg) => {
            if (tg && pokemon.team != tg.team && target.positionY == y) {
                tg.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
            }
        });
    }
}
exports.OriginPulseStrategy = OriginPulseStrategy;
class SeedFlareStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        super.process(pokemon, state, board, target, crit);
        const damage = 30;
        board
            .getCellsInRadius(pokemon.positionX, pokemon.positionY, 5)
            .forEach((cell) => {
            if (cell.value && pokemon.team !== cell.value.team) {
                cell.value.addSpecialDefense(-2, pokemon, 0, false);
                cell.value.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
            }
        });
    }
}
exports.SeedFlareStrategy = SeedFlareStrategy;
class NightmareStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        var _a, _b;
        super.process(pokemon, state, board, target, crit);
        const duration = (_a = [1500, 3000, 8000][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 8000;
        const damage = (_b = [25, 50, 100][pokemon.stars - 1]) !== null && _b !== void 0 ? _b : 100;
        board.forEach((x, y, enemy) => {
            if (enemy && pokemon.team != enemy.team) {
                if (enemy.status.flinch || enemy.status.sleep || enemy.status.silence) {
                    enemy.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit, true);
                }
                enemy.status.triggerSilence(duration, enemy, pokemon);
            }
        });
    }
}
exports.NightmareStrategy = NightmareStrategy;
class BurnStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        super.process(pokemon, state, board, target, crit);
        let duration = 5000;
        if (pokemon.stars === 2) {
            duration = 10000;
        }
        if (pokemon.stars === 3) {
            duration = 20000;
        }
        board.forEach((x, y, value) => {
            if (value && pokemon.team != value.team) {
                value.status.triggerBurn(duration, value, pokemon);
            }
        });
    }
}
exports.BurnStrategy = BurnStrategy;
class PoisonStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        super.process(pokemon, state, board, target, crit);
        let duration = 0;
        let count = 1;
        switch (pokemon.stars) {
            case 1:
                duration = 3000;
                count = 1;
                break;
            case 2:
                duration = 6000;
                count = 2;
                break;
            case 3:
                duration = 9000;
                count = 3;
                break;
            default:
                break;
        }
        duration = Math.round(duration * (1 + pokemon.ap / 200));
        const closestEnemies = new Array();
        board.forEach((x, y, enemy) => {
            if (enemy && pokemon.team !== enemy.team) {
                closestEnemies.push(enemy);
            }
        });
        closestEnemies.sort((a, b) => {
            const distanceA = (0, distance_1.distanceC)(a.positionX, a.positionY, pokemon.positionX, pokemon.positionY);
            const distanceB = (0, distance_1.distanceC)(b.positionX, b.positionY, pokemon.positionX, pokemon.positionY);
            return distanceA - distanceB;
        });
        for (let i = 0; i < count; i++) {
            const enemy = closestEnemies[i];
            if (enemy) {
                enemy.status.triggerPoison(duration, enemy, pokemon);
            }
        }
    }
}
exports.PoisonStrategy = PoisonStrategy;
class BlizzardStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        var _a;
        super.process(pokemon, state, board, target, crit);
        const freezeDuration = 2000;
        const damage = (_a = [5, 10, 15][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 15;
        board.forEach((x, y, enemy) => {
            if (enemy && pokemon.team != enemy.team) {
                enemy.status.triggerFreeze(freezeDuration, enemy);
                enemy.handleSpecialDamage(enemy.status.freeze ? damage * 2 : damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
            }
        });
    }
}
exports.BlizzardStrategy = BlizzardStrategy;
class ProtectStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        var _a;
        super.process(pokemon, state, board, target, crit);
        const duration = Math.round(((_a = [1000, 3000, 5000][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 5000) * (1 + pokemon.ap / 200));
        pokemon.status.triggerProtect(duration);
    }
}
exports.ProtectStrategy = ProtectStrategy;
class SleepStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        super.process(pokemon, state, board, target, crit);
        const timer = Math.round(2000 * (1 + pokemon.ap / 100));
        const count = pokemon.stars;
        const rank = new Array();
        board.forEach((x, y, tg) => {
            if (tg && pokemon.team != tg.team) {
                rank.push(tg);
            }
        });
        rank.sort((a, b) => {
            if (a.team === Game_1.Team.BLUE_TEAM) {
                return a.positionY - b.positionY;
            }
            else {
                return b.positionY - a.positionY;
            }
        });
        for (let i = 0; i < count; i++) {
            const tg = rank[i];
            if (tg) {
                tg.status.triggerSleep(timer, tg);
            }
        }
    }
}
exports.SleepStrategy = SleepStrategy;
class ConfusionStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        super.process(pokemon, state, board, target, crit);
        let timer = 0, damage = 0;
        switch (pokemon.stars) {
            case 1:
                timer = 3000;
                damage = 75;
                break;
            case 2:
                timer = 5000;
                damage = 150;
                break;
            case 3:
                timer = 7000;
                damage = 300;
                break;
            default:
                break;
        }
        if (target.status.confusion) {
            target.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
        }
        else {
            target.status.triggerSilence(timer, target, pokemon);
            target.status.triggerConfusion(timer, target);
        }
    }
}
exports.ConfusionStrategy = ConfusionStrategy;
class FireBlastStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        super.process(pokemon, state, board, target, crit);
        let damage = 30;
        if (pokemon.stars === 2) {
            damage = 60;
        }
        if (pokemon.stars === 3) {
            damage = 120;
        }
        target.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
    }
}
exports.FireBlastStrategy = FireBlastStrategy;
class SeismicTossStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        super.process(pokemon, state, board, target, crit);
        let damage = 7;
        if (pokemon.stars === 2) {
            damage = 14;
        }
        if (pokemon.stars === 3) {
            damage = 28;
        }
        let totalDamage = 0;
        board.forEach((x, y, value) => {
            if (value && pokemon.team == value.team) {
                totalDamage += damage;
            }
        });
        target.handleSpecialDamage(totalDamage, board, Game_1.AttackType.TRUE, pokemon, crit);
    }
}
exports.SeismicTossStrategy = SeismicTossStrategy;
class GuillotineStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        super.process(pokemon, state, board, target, crit);
        const damage = pokemon.atk * pokemon.stars;
        const { death } = target.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
        if (death) {
            pokemon.addPP(pokemon.maxPP, pokemon, 0, false);
        }
    }
}
exports.GuillotineStrategy = GuillotineStrategy;
class RockSlideStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        super.process(pokemon, state, board, target, crit);
        let damage = 30;
        if (pokemon.stars === 2) {
            damage = 60;
        }
        if (pokemon.stars === 3) {
            damage = 120;
        }
        if (target.types.has(Synergy_1.Synergy.FLYING)) {
            damage = damage * 2;
        }
        target.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
    }
}
exports.RockSlideStrategy = RockSlideStrategy;
class WheelOfFireStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        var _a, _b;
        const damage = (_a = [10, 20, 30][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 30;
        const farthestTarget = (_b = state.getFarthestTarget(pokemon, board)) !== null && _b !== void 0 ? _b : target;
        super.process(pokemon, state, board, farthestTarget, crit);
        const cells = board.getCellsBetween(pokemon.positionX, pokemon.positionY, farthestTarget.positionX, farthestTarget.positionY);
        cells.forEach((cell) => {
            if (cell.value && cell.value.team != pokemon.team) {
                pokemon.simulation.room.broadcast(types_1.Transfer.ABILITY, {
                    id: pokemon.simulation.id,
                    skill: "FLAME_HIT",
                    positionX: cell.value.positionX,
                    positionY: cell.value.positionY
                });
                cell.value.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
                cell.value.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
            }
        });
    }
}
exports.WheelOfFireStrategy = WheelOfFireStrategy;
class InfernalParadeStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        var _a;
        const farthestTarget = (_a = state.getFarthestTarget(pokemon, board)) !== null && _a !== void 0 ? _a : target;
        super.process(pokemon, state, board, farthestTarget, crit);
        const cells = board.getCellsBetween(pokemon.positionX, pokemon.positionY, farthestTarget.positionX, farthestTarget.positionY);
        cells.forEach((cell) => {
            if (cell.value && cell.value.team != pokemon.team) {
                const enemy = cell.value;
                pokemon.simulation.room.broadcast(types_1.Transfer.ABILITY, {
                    id: pokemon.simulation.id,
                    skill: "FLAME_HIT",
                    positionX: enemy.positionX,
                    positionY: enemy.positionY
                });
                if (Math.random() > 0.5) {
                    enemy.status.triggerBurn(3000, cell.value, pokemon);
                }
                (0, function_1.repeat)(2)(() => enemy.handleSpecialDamage(30, board, Game_1.AttackType.SPECIAL, pokemon, crit));
            }
        });
    }
}
exports.InfernalParadeStrategy = InfernalParadeStrategy;
class HeatWaveStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        super.process(pokemon, state, board, target, crit);
        let damage = 0;
        switch (pokemon.stars) {
            case 1:
                damage = 20;
                break;
            case 2:
                damage = 40;
                break;
            case 3:
                damage = 80;
                break;
            default:
                break;
        }
        (0, orientation_1.effectInLine)(board, pokemon, target, (targetInLine) => {
            if (targetInLine != null && targetInLine.team != pokemon.team) {
                targetInLine.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
            }
        });
    }
}
exports.HeatWaveStrategy = HeatWaveStrategy;
class HydroPumpStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        super.process(pokemon, state, board, target, crit);
        let damage = 0;
        switch (pokemon.stars) {
            case 1:
                damage = 25;
                break;
            case 2:
                damage = 50;
                break;
            case 3:
                damage = 100;
                break;
            default:
                break;
        }
        (0, orientation_1.effectInLine)(board, pokemon, target, (targetInLine) => {
            if (targetInLine != null && targetInLine.team !== pokemon.team) {
                targetInLine.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
            }
        });
    }
}
exports.HydroPumpStrategy = HydroPumpStrategy;
class SolarBeamStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        super.process(pokemon, state, board, target, crit);
        let damage = pokemon.stars === 3 ? 120 : pokemon.stars === 2 ? 60 : 30;
        if (pokemon.simulation.weather === Weather_1.Weather.SUN) {
            damage = damage * 2;
            pokemon.addPP(40, pokemon, 0, false);
        }
        (0, orientation_1.effectInLine)(board, pokemon, target, (targetInLine) => {
            if (targetInLine != null && targetInLine.team !== pokemon.team) {
                if (pokemon.simulation.weather === Weather_1.Weather.SUN) {
                    targetInLine.status.triggerBurn(3000, targetInLine, pokemon);
                }
                targetInLine.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
            }
        });
    }
}
exports.SolarBeamStrategy = SolarBeamStrategy;
class ThunderStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        super.process(pokemon, state, board, target, crit);
        let damage = 0;
        switch (pokemon.stars) {
            case 1:
                damage = 30;
                break;
            case 2:
                damage = 60;
                break;
            case 3:
                damage = 120;
                break;
            default:
                break;
        }
        target.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
    }
}
exports.ThunderStrategy = ThunderStrategy;
class DracoMeteorStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        super.process(pokemon, state, board, target, crit);
        const damage = 50;
        board.forEach((x, y, tg) => {
            if (tg && pokemon.team != tg.team) {
                tg.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
            }
        });
    }
}
exports.DracoMeteorStrategy = DracoMeteorStrategy;
class BlazeKickStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        var _a;
        super.process(pokemon, state, board, target, crit);
        let damage = (_a = [30, 60, 120][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 120;
        if (target.status.burn) {
            damage = Math.round(damage * 1.3);
        }
        else {
            target.status.triggerBurn(2000, target, pokemon);
        }
        target.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
    }
}
exports.BlazeKickStrategy = BlazeKickStrategy;
class WishStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        super.process(pokemon, state, board, target, crit);
        const heal = 50;
        let count = pokemon.stars;
        board.forEach((x, y, ally) => {
            if (ally &&
                pokemon.team == ally.team &&
                count > 0 &&
                ally.life < ally.hp) {
                ally.handleHeal(heal, pokemon, 1, crit);
                count -= 1;
            }
        });
    }
}
exports.WishStrategy = WishStrategy;
class LunarBlessingStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        super.process(pokemon, state, board, target, crit);
        board.forEach((x, y, ally) => {
            if (ally && pokemon.team == ally.team && ally.life < ally.hp) {
                ally.handleHeal(0.25 * pokemon.hp, pokemon, 1, crit);
                ally.status.clearNegativeStatus();
            }
        });
    }
}
exports.LunarBlessingStrategy = LunarBlessingStrategy;
class NaturalGiftStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        super.process(pokemon, state, board, target, crit, true);
        const lowestHealthAlly = board.cells.filter((cell) => cell && cell.team === pokemon.team).sort((a, b) => a.life / a.hp - b.life / b.hp)[0];
        if (lowestHealthAlly) {
            lowestHealthAlly.handleHeal(pokemon.stars === 3 ? 120 : pokemon.stars === 2 ? 60 : 30, pokemon, 1, crit);
            lowestHealthAlly.status.triggerRuneProtect(pokemon.stars * 1000);
            pokemon.simulation.room.broadcast(types_1.Transfer.ABILITY, {
                id: pokemon.simulation.id,
                skill: Ability_1.Ability.NATURAL_GIFT,
                positionX: pokemon.positionX,
                positionY: pokemon.positionY,
                targetX: lowestHealthAlly.positionX,
                targetY: lowestHealthAlly.positionY
            });
        }
    }
}
exports.NaturalGiftStrategy = NaturalGiftStrategy;
class CalmMindStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        super.process(pokemon, state, board, target, crit);
        const buff = 1;
        pokemon.addAttack(buff * pokemon.baseAtk, pokemon, 1, crit);
    }
}
exports.CalmMindStrategy = CalmMindStrategy;
class CosmicPowerStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        super.process(pokemon, state, board, target, crit);
        const apGain = 20;
        board.forEach((x, y, ally) => {
            if (ally && ally.id !== pokemon.id && ally.team === pokemon.team) {
                ally.addAbilityPower(apGain, pokemon, 1, crit);
            }
        });
    }
}
exports.CosmicPowerStrategy = CosmicPowerStrategy;
class DefenseCurlStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        super.process(pokemon, state, board, target, crit);
        let buff = 3;
        if (pokemon.stars === 2) {
            buff = 6;
        }
        if (pokemon.stars === 3) {
            buff = 12;
        }
        pokemon.addDefense(buff, pokemon, 1, crit);
        pokemon.addSpecialDefense(buff, pokemon, 1, crit);
    }
}
exports.DefenseCurlStrategy = DefenseCurlStrategy;
class IronDefenseStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        var _a;
        super.process(pokemon, state, board, target, crit);
        const shield = (_a = [20, 40, 80][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 80;
        board.forEach((x, y, ally) => {
            if (ally && pokemon.team == ally.team && y === pokemon.positionY) {
                ally.addShield(shield, pokemon, 1, crit);
            }
        });
    }
}
exports.IronDefenseStrategy = IronDefenseStrategy;
class SoakStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        var _a;
        super.process(pokemon, state, board, target, crit);
        const damage = (_a = [20, 40, 80][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 80;
        target.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
        board.forEach((x, y, ally) => {
            if (ally && pokemon.team == ally.team) {
                ally.addPP(10, pokemon, 0, false);
            }
        });
    }
}
exports.SoakStrategy = SoakStrategy;
class IronTailStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        super.process(pokemon, state, board, target, crit);
        let damage = 20;
        let buff = 1;
        if (pokemon.stars === 2) {
            damage = 40;
            buff = 3;
        }
        if (pokemon.stars === 3) {
            damage = 80;
            buff = 5;
        }
        pokemon.addDefense(buff, pokemon, 0, false);
        target.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
    }
}
exports.IronTailStrategy = IronTailStrategy;
class BlastBurnStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        super.process(pokemon, state, board, target, crit);
        let damage = 0;
        switch (pokemon.stars) {
            case 1:
                damage = 30;
                break;
            case 2:
                damage = 60;
                break;
            case 3:
                damage = 120;
                break;
            default:
                break;
        }
        const cells = board.getAdjacentCells(pokemon.positionX, pokemon.positionY);
        cells.forEach((cell) => {
            if (cell.value && pokemon.team != cell.value.team) {
                cell.value.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
            }
        });
    }
}
exports.BlastBurnStrategy = BlastBurnStrategy;
class ChargeStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        super.process(pokemon, state, board, target, crit);
        const buff = 0.25;
        board.forEach((x, y, ally) => {
            if (ally &&
                pokemon.team == ally.team &&
                ally.types.has(Synergy_1.Synergy.ELECTRIC)) {
                ally.addAttack(ally.baseAtk * buff, pokemon, 1, crit);
                ally.addAttackSpeed(buff * 100, pokemon, 1, crit);
            }
        });
    }
}
exports.ChargeStrategy = ChargeStrategy;
class SludgeStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        super.process(pokemon, state, board, target, crit);
        const nbStacks = pokemon.stars === 1 ? 2 : pokemon.stars === 2 ? 3 : 4;
        const duration = Math.round(3000 * (1 + pokemon.ap / 100) * (crit ? pokemon.critPower : 1));
        const cells = board.getCellsInFront(pokemon, target);
        cells.forEach((cell) => {
            if (cell.value && pokemon.team != cell.value.team) {
                for (let i = 0; i < nbStacks; i++) {
                    cell.value.status.triggerPoison(duration, cell.value, pokemon);
                }
            }
        });
    }
}
exports.SludgeStrategy = SludgeStrategy;
class SludgeWaveStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        super.process(pokemon, state, board, target, crit, true);
        const duration = pokemon.stars === 3 ? 6000 : pokemon.stars === 2 ? 4000 : 2000;
        const damage = pokemon.stars === 3 ? 30 : pokemon.stars === 2 ? 20 : 10;
        const potentials = board.cells
            .filter((p) => p && p.team !== pokemon.team)
            .sort((a, b) => b.life - a.life);
        const mostHpEnnemy = potentials[0];
        if (mostHpEnnemy) {
            pokemon.simulation.room.broadcast(types_1.Transfer.ABILITY, {
                id: pokemon.simulation.id,
                skill: pokemon.skill,
                positionX: pokemon.positionX,
                positionY: pokemon.positionY,
                targetX: mostHpEnnemy.positionX,
                targetY: mostHpEnnemy.positionY,
                orientation: pokemon.orientation
            });
            const cells = board.getCellsBetween(pokemon.positionX, pokemon.positionY, mostHpEnnemy.positionX, mostHpEnnemy.positionY);
            cells.forEach((cell) => {
                if (cell.value && cell.value.team != pokemon.team) {
                    cell.value.status.triggerPoison(duration, cell.value, pokemon);
                    cell.value.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
                }
            });
        }
    }
}
exports.SludgeWaveStrategy = SludgeWaveStrategy;
class DischargeStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        super.process(pokemon, state, board, target, crit);
        let damage = 0;
        switch (pokemon.stars) {
            case 1:
                damage = 25;
                break;
            case 2:
                damage = 50;
                break;
            case 3:
                damage = 75;
                break;
            default:
                break;
        }
        const cells = board.getAdjacentCells(pokemon.positionX, pokemon.positionY);
        cells.forEach((cell) => {
            if (cell.value && pokemon.team != cell.value.team) {
                cell.value.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
                cell.value.status.triggerParalysis(5000, cell.value);
            }
        });
    }
}
exports.DischargeStrategy = DischargeStrategy;
class DiveStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        var _a, _b;
        super.process(pokemon, state, board, target, crit);
        const damage = (_a = [10, 20, 40][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 40;
        const shield = (_b = [10, 20, 40][pokemon.stars - 1]) !== null && _b !== void 0 ? _b : 40;
        const freezeDuration = 1000;
        const mostSurroundedCoordinate = state.getMostSurroundedCoordinateAvailablePlace(pokemon, board);
        pokemon.addShield(shield, pokemon, 1, crit);
        if (mostSurroundedCoordinate) {
            pokemon.moveTo(mostSurroundedCoordinate.x, mostSurroundedCoordinate.y, board);
            const cells = board.getAdjacentCells(pokemon.positionX, pokemon.positionY);
            cells.forEach((cell) => {
                if (cell.value && cell.value.team !== pokemon.team) {
                    cell.value.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
                    cell.value.status.triggerFreeze(freezeDuration, cell.value);
                }
            });
        }
    }
}
exports.DiveStrategy = DiveStrategy;
class SmokeScreenStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        super.process(pokemon, state, board, target, crit, true);
        const damage = pokemon.stars === 3 ? 40 : pokemon.stars === 2 ? 20 : 10;
        const mostSurroundedCoordinate = state.getMostSurroundedCoordinateAvailablePlace(pokemon, board);
        if (mostSurroundedCoordinate) {
            pokemon.moveTo(mostSurroundedCoordinate.x, mostSurroundedCoordinate.y, board);
            const backRow = mostSurroundedCoordinate.y <= 2 ? 0 : 5;
            const midRow = mostSurroundedCoordinate.y <= 2 ? 1 : 4;
            const frontRow = mostSurroundedCoordinate.y <= 2 ? 2 : 3;
            let chosenRowForSmoke = frontRow;
            const cells = board.getAdjacentCells(pokemon.positionX, pokemon.positionY);
            pokemon.simulation.room.broadcast(types_1.Transfer.ABILITY, {
                id: pokemon.simulation.id,
                skill: pokemon.skill,
                positionX: pokemon.positionX,
                positionY: pokemon.positionY,
                targetX: pokemon.positionX,
                targetY: pokemon.positionY,
                orientation: pokemon.orientation
            });
            cells.forEach((cell) => {
                if (cell.value && cell.value.team !== pokemon.team) {
                    cell.value.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
                    pokemon.simulation.room.broadcast(types_1.Transfer.ABILITY, {
                        id: pokemon.simulation.id,
                        skill: pokemon.skill,
                        positionX: pokemon.positionX,
                        positionY: pokemon.positionY,
                        targetX: cell.x,
                        targetY: cell.y,
                        orientation: pokemon.orientation
                    });
                    if (cell.y === backRow)
                        chosenRowForSmoke = backRow;
                    if (cell.y === midRow && chosenRowForSmoke !== backRow)
                        chosenRowForSmoke = midRow;
                }
            });
            const smokeCells = [
                [pokemon.positionX - 1, chosenRowForSmoke],
                [pokemon.positionX, chosenRowForSmoke],
                [pokemon.positionX + 1, chosenRowForSmoke]
            ].filter(([x, y]) => y >= 0 &&
                y < board.rows &&
                x >= 0 &&
                x < board.columns &&
                !(x === pokemon.positionX && y === pokemon.positionY));
            smokeCells.forEach(([x, y]) => {
                const index = y * board.columns + x;
                if (board.effects[index] !== Effect_1.Effect.GAS) {
                    board.effects[index] = Effect_1.Effect.GAS;
                    pokemon.simulation.room.broadcast(types_1.Transfer.BOARD_EVENT, {
                        simulationId: pokemon.simulation.id,
                        type: Game_1.BoardEvent.GAS,
                        x,
                        y
                    });
                }
                const enemy = board.getValue(x, y);
                if (enemy) {
                    enemy.effects.add(Effect_1.Effect.GAS);
                }
            });
        }
    }
}
exports.SmokeScreenStrategy = SmokeScreenStrategy;
class BiteStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        var _a;
        super.process(pokemon, state, board, target, crit);
        const damage = (_a = [40, 80, 120][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 120;
        const { takenDamage } = target.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
        pokemon.handleHeal(Math.ceil(0.3 * takenDamage), pokemon, 1, crit);
        if (takenDamage > 0)
            target.status.triggerFlinch(5000, target, pokemon);
    }
}
exports.BiteStrategy = BiteStrategy;
class AppleAcidStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        var _a;
        super.process(pokemon, state, board, target, crit);
        const cells = board.getCellsInFront(pokemon, target);
        const damage = (_a = [15, 30, 60][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 60;
        cells.forEach((cell) => {
            if (cell.value && cell.value.team !== pokemon.team) {
                cell.value.addDefense(-5, pokemon, 1, crit);
                cell.value.addSpecialDefense(-5, pokemon, 1, crit);
                cell.value.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
            }
        });
    }
}
exports.AppleAcidStrategy = AppleAcidStrategy;
class PsybeamStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        var _a;
        super.process(pokemon, state, board, target, crit);
        const damage = (_a = [25, 50, 100][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 25;
        (0, orientation_1.effectInLine)(board, pokemon, target, (targetInLine) => {
            if (targetInLine != null && targetInLine.team !== pokemon.team) {
                targetInLine.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
                if ((0, random_1.chance)(0.5)) {
                    targetInLine.status.triggerConfusion(4000, targetInLine);
                }
            }
        });
    }
}
exports.PsybeamStrategy = PsybeamStrategy;
class PresentStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        super.process(pokemon, state, board, target, crit);
        const chance = Math.random();
        if (chance < 0.1) {
            target.handleHeal(50, pokemon, 0, false);
        }
        else if (chance < 0.5) {
            target.handleSpecialDamage(80, board, Game_1.AttackType.SPECIAL, pokemon, crit);
        }
        else if (chance < 0.8) {
            target.handleSpecialDamage(150, board, Game_1.AttackType.SPECIAL, pokemon, crit);
        }
        else {
            target.handleSpecialDamage(300, board, Game_1.AttackType.SPECIAL, pokemon, crit);
        }
    }
}
exports.PresentStrategy = PresentStrategy;
class SacredSwordStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        super.process(pokemon, state, board, target, crit);
        const damage = 100;
        target.handleSpecialDamage(damage, board, Game_1.AttackType.TRUE, pokemon, crit);
    }
}
exports.SacredSwordStrategy = SacredSwordStrategy;
class LeafBladeStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        super.process(pokemon, state, board, target, true);
        const damage = Math.round(pokemon.atk * (1 + pokemon.ap / 100));
        target.handleSpecialDamage(damage, board, Game_1.AttackType.TRUE, pokemon, true, false);
    }
}
exports.LeafBladeStrategy = LeafBladeStrategy;
class WaterfallStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        super.process(pokemon, state, board, target, crit);
        const shield = pokemon.stars === 3 ? 120 : pokemon.stars === 2 ? 60 : 30;
        pokemon.addShield(shield, pokemon, 1, crit);
        pokemon.status.clearNegativeStatus();
        board.effects[pokemon.positionY * board.columns + pokemon.positionX] =
            undefined;
        pokemon.simulation.room.broadcast(types_1.Transfer.BOARD_EVENT, {
            simulationId: pokemon.simulation.id,
            type: "clear",
            x: pokemon.positionX,
            y: pokemon.positionY
        });
    }
}
exports.WaterfallStrategy = WaterfallStrategy;
class XScissorStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        var _a;
        super.process(pokemon, state, board, target, crit);
        const damage = (_a = [10, 20, 40, 80][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 80;
        target.handleSpecialDamage(damage, board, Game_1.AttackType.TRUE, pokemon, crit);
        target.handleSpecialDamage(damage, board, Game_1.AttackType.TRUE, pokemon, crit);
    }
}
exports.XScissorStrategy = XScissorStrategy;
class DragonTailStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        var _a, _b;
        super.process(pokemon, state, board, target, crit);
        const damage = (_a = [30, 60, 100][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 100;
        const buff = (_b = [1, 2, 3][pokemon.stars - 1]) !== null && _b !== void 0 ? _b : 3;
        target.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
        pokemon.addDefense(buff, pokemon, 1, crit);
        pokemon.addSpecialDefense(buff, pokemon, 1, crit);
    }
}
exports.DragonTailStrategy = DragonTailStrategy;
class AquaTailStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        var _a, _b;
        super.process(pokemon, state, board, target, crit);
        const damage = (_a = [30, 60, 100][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 100;
        const shield = (_b = [30, 60, 100][pokemon.stars - 1]) !== null && _b !== void 0 ? _b : 100;
        target.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
        pokemon.addShield(shield, pokemon, 1, crit);
    }
}
exports.AquaTailStrategy = AquaTailStrategy;
class DragonBreathStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        var _a;
        super.process(pokemon, state, board, target, crit);
        const damage = (_a = [25, 50, 100][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 100;
        target.handleSpecialDamage(damage, board, Game_1.AttackType.TRUE, pokemon, crit);
        const secondTarget = board.getValue(target.positionX, target.positionY + 1);
        if (secondTarget && secondTarget != pokemon) {
            secondTarget.handleSpecialDamage(damage, board, Game_1.AttackType.TRUE, pokemon, crit);
        }
    }
}
exports.DragonBreathStrategy = DragonBreathStrategy;
class IcicleCrashStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        super.process(pokemon, state, board, target, crit);
        let damage = 20;
        if (pokemon.stars === 2) {
            damage = 40;
        }
        if (pokemon.stars === 3) {
            damage = 80;
        }
        board
            .getAdjacentCells(target.positionX, target.positionY, true)
            .forEach((cell) => {
            if (cell.value && pokemon.team != cell.value.team) {
                cell.value.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
            }
        });
    }
}
exports.IcicleCrashStrategy = IcicleCrashStrategy;
class SteamEruptionStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        super.process(pokemon, state, board, target, crit);
        const damage = 80;
        const burnDuration = 3000;
        const cells = board.getAdjacentCells(target.positionX, target.positionY, true);
        cells.forEach((cell) => {
            if (cell.value && pokemon.team != cell.value.team) {
                cell.value.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
                cell.value.status.triggerBurn(burnDuration, cell.value, pokemon);
            }
        });
    }
}
exports.SteamEruptionStrategy = SteamEruptionStrategy;
class RootStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        var _a, _b;
        super.process(pokemon, state, board, target, crit);
        const heal = (_a = [10, 20, 40][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 10;
        const damage = (_b = [10, 20, 40][pokemon.stars - 1]) !== null && _b !== void 0 ? _b : 10;
        const lockedDuration = 4000;
        const cells = board.getAdjacentCells(pokemon.positionX, pokemon.positionY, true);
        cells.forEach((cell) => {
            if (cell.value && pokemon.team == cell.value.team) {
                cell.value.handleHeal(heal, pokemon, 1, crit);
            }
            else if (cell.value && pokemon.team !== cell.value.team) {
                cell.value.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
                cell.value.status.triggerLocked(lockedDuration, cell.value);
            }
        });
    }
}
exports.RootStrategy = RootStrategy;
class TormentStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        var _a;
        super.process(pokemon, state, board, target, crit);
        const boost = (_a = [20, 40, 60][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 60;
        pokemon.addAttackSpeed(boost, pokemon, 1, crit);
        pokemon.cooldown = 500 / pokemon.atkSpeed;
    }
}
exports.TormentStrategy = TormentStrategy;
class StompStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        super.process(pokemon, state, board, target, crit);
        let damageFactor = 3;
        if (pokemon.stars === 2) {
            damageFactor = 4;
        }
        else if (pokemon.stars === 3) {
            damageFactor = 5;
        }
        const damage = pokemon.atk * damageFactor;
        target.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
    }
}
exports.StompStrategy = StompStrategy;
class PaybackStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        super.process(pokemon, state, board, target, crit);
        let damage = 0;
        switch (pokemon.stars) {
            case 1:
                damage = 15;
                break;
            case 2:
                damage = 30;
                break;
            case 3:
                damage = 60;
                break;
            default:
                break;
        }
        if (pokemon.life < 0.5 * pokemon.hp) {
            damage *= 2;
        }
        target.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
    }
}
exports.PaybackStrategy = PaybackStrategy;
class ShadowBallStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        var _a;
        super.process(pokemon, state, board, target, crit);
        const damage = (_a = [40, 60, 100][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 100;
        target.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
        board.forEach((x, y, v) => {
            if (v && pokemon.team != v.team) {
                v.addSpecialDefense(-1, pokemon, 0, false);
            }
        });
    }
}
exports.ShadowBallStrategy = ShadowBallStrategy;
class BugBuzzStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        super.process(pokemon, state, board, target, crit);
        let damage = 0;
        switch (pokemon.stars) {
            case 1:
                damage = 20;
                break;
            case 2:
                damage = 40;
                break;
            case 3:
                damage = 80;
                break;
            default:
                break;
        }
        if (target.status.paralysis) {
            damage *= 2;
        }
        target.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
    }
}
exports.BugBuzzStrategy = BugBuzzStrategy;
class StringShotStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        super.process(pokemon, state, board, target, crit);
        let damage = 0;
        switch (pokemon.stars) {
            case 1:
                damage = 10;
                break;
            case 2:
                damage = 20;
                break;
            case 3:
                damage = 50;
                break;
            default:
                break;
        }
        target.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
        target.status.triggerParalysis(5000, target);
    }
}
exports.StringShotStrategy = StringShotStrategy;
class EntanglingThreadStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        super.process(pokemon, state, board, target, crit);
        let damage = 0;
        switch (pokemon.stars) {
            case 1:
                damage = 10;
                break;
            case 2:
                damage = 20;
                break;
            case 3:
                damage = 40;
                break;
            default:
                break;
        }
        const cells = board.getAdjacentCells(pokemon.positionX, pokemon.positionY, true);
        cells.forEach((cell) => {
            if (cell.value && pokemon.team !== cell.value.team) {
                cell.value.status.triggerParalysis(4000, target);
                cell.value.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
            }
        });
    }
}
exports.EntanglingThreadStrategy = EntanglingThreadStrategy;
class PoisonStingStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        super.process(pokemon, state, board, target, crit);
        let damage = 30;
        if (pokemon.stars === 2) {
            damage = 60;
        }
        if (pokemon.stars === 3) {
            damage = 120;
        }
        if (pokemon.status.poisonStacks > 0) {
            damage = damage * 2;
        }
        target.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
    }
}
exports.PoisonStingStrategy = PoisonStingStrategy;
class LeechLifeStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        super.process(pokemon, state, board, target, crit);
        let damage = 0;
        switch (pokemon.stars) {
            case 1:
                damage = 20;
                break;
            case 2:
                damage = 40;
                break;
            case 3:
                damage = 80;
                break;
            default:
                break;
        }
        target.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
        pokemon.handleHeal(damage, pokemon, 1, crit);
    }
}
exports.LeechLifeStrategy = LeechLifeStrategy;
class HappyHourStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        var _a;
        super.process(pokemon, state, board, target, crit);
        const buff = (_a = [2, 5, 8][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 8;
        board.forEach((x, y, ally) => {
            if (ally && pokemon.team == ally.team) {
                ally.addAttack(buff, pokemon, 1, crit);
            }
        });
    }
}
exports.HappyHourStrategy = HappyHourStrategy;
class TeleportStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        super.process(pokemon, state, board, target, false);
        const potentialCells = [
            [0, 0],
            [0, board.rows - 1],
            [board.columns - 1, board.rows - 1],
            [board.columns - 1, 0]
        ];
        (0, random_1.shuffleArray)(potentialCells);
        for (let i = 0; i < potentialCells.length; i++) {
            const entity = board.getValue(potentialCells[i][0], potentialCells[i][1]);
            if (entity === undefined) {
                pokemon.moveTo(potentialCells[i][0], potentialCells[i][1], board);
                pokemon.effects.add(Effect_1.Effect.TELEPORT_NEXT_ATTACK);
                break;
            }
        }
    }
}
exports.TeleportStrategy = TeleportStrategy;
class NastyPlotStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        super.process(pokemon, state, board, target, crit);
        const buff = 10;
        pokemon.addAttack(buff, pokemon, 1, crit);
        pokemon.cooldown = 250;
    }
}
exports.NastyPlotStrategy = NastyPlotStrategy;
class TakeHeartStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        super.process(pokemon, state, board, target, crit);
        pokemon.addAttack(8, pokemon, 1, crit);
        pokemon.addSpecialDefense(4, pokemon, 1, crit);
        pokemon.status.clearNegativeStatus();
        pokemon.cooldown = 100;
    }
}
exports.TakeHeartStrategy = TakeHeartStrategy;
class SpectralThiefStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        super.process(pokemon, state, board, target, crit);
        const farthestCoordinate = board.getFarthestTargetCoordinateAvailablePlace(pokemon);
        const damage = 80;
        if (farthestCoordinate) {
            target.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
            pokemon.moveTo(farthestCoordinate.x, farthestCoordinate.y, board);
            const boostAtk = (0, number_1.min)(0)(target.atk - target.baseAtk);
            const boostAtkSpeed = (0, number_1.min)(0)(target.atkSpeed - Config_1.DEFAULT_ATK_SPEED);
            const boostDef = (0, number_1.min)(0)(target.def - target.baseSpeDef);
            const boostSpeDef = (0, number_1.min)(0)(target.speDef - target.baseSpeDef);
            const boostAP = target.ap;
            target.atk = target.baseAtk;
            target.def = target.baseDef;
            target.speDef = target.baseSpeDef;
            pokemon.addAttack(boostAtk, pokemon, 0, false);
            pokemon.addDefense(boostDef, pokemon, 0, false);
            pokemon.addSpecialDefense(boostSpeDef, pokemon, 0, false);
            pokemon.addAbilityPower(boostAP, pokemon, 0, false);
            pokemon.addAttackSpeed(boostAtkSpeed, pokemon, 0, false);
        }
    }
}
exports.SpectralThiefStrategy = SpectralThiefStrategy;
class ThiefStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        super.process(pokemon, state, board, target, crit);
        let damage = 15;
        if (pokemon.stars === 2) {
            damage = 30;
        }
        if (pokemon.stars === 3) {
            damage = 60;
        }
        const l = target.items.size;
        target.items.forEach((item) => {
            if (pokemon.items.size < 3) {
                pokemon.items.add(item);
                pokemon.simulation.applyItemEffect(pokemon, item);
            }
            target.items.delete(item);
            if (item === Item_1.Item.MAX_REVIVE && target.status.resurection) {
                target.status.resurection = false;
            }
        });
        target.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
    }
}
exports.ThiefStrategy = ThiefStrategy;
class KnockOffStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        super.process(pokemon, state, board, target, crit);
        const damage = 90 + target.items.size * 30;
        target.items.forEach((item) => {
            target.items.delete(item);
            if (item === Item_1.Item.MAX_REVIVE && target.status.resurection) {
                target.status.resurection = false;
            }
        });
        target.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
    }
}
exports.KnockOffStrategy = KnockOffStrategy;
class StunSporeStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        var _a;
        super.process(pokemon, state, board, target, crit);
        const damage = (_a = [10, 20, 40][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 20;
        board
            .getAdjacentCells(target.positionX, target.positionY, true)
            .forEach((cell) => {
            if (cell.value && cell.value.team !== pokemon.team) {
                cell.value.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
                cell.value.status.triggerParalysis(5000, cell.value);
            }
        });
    }
}
exports.StunSporeStrategy = StunSporeStrategy;
class MeteorMashStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        var _a;
        super.process(pokemon, state, board, target, crit);
        const nbHits = 3;
        const damage = (_a = [15, 30, 60][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 60;
        pokemon.addAttack(2, pokemon, 1, crit);
        for (let n = 0; n < nbHits; n++) {
            target.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
        }
    }
}
exports.MeteorMashStrategy = MeteorMashStrategy;
class HurricaneStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        var _a;
        super.process(pokemon, state, board, target, crit);
        const damage = (_a = [25, 50, 100][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 25;
        (0, orientation_1.effectInLine)(board, pokemon, target, (targetInLine) => {
            if (targetInLine != null && targetInLine.team !== pokemon.team) {
                targetInLine.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
                targetInLine.status.triggerParalysis(4000, targetInLine);
            }
        });
    }
}
exports.HurricaneStrategy = HurricaneStrategy;
class FleurCannonStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        super.process(pokemon, state, board, target, crit);
        const damage = 120;
        (0, orientation_1.effectInLine)(board, pokemon, target, (targetInLine) => {
            if (targetInLine != null && targetInLine.team !== pokemon.team) {
                targetInLine.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
            }
        });
        pokemon.addAbilityPower(-20, pokemon, 0, false);
    }
}
exports.FleurCannonStrategy = FleurCannonStrategy;
class SandsearStormStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        super.process(pokemon, state, board, target, crit);
        const damage = 80;
        (0, orientation_1.effectInLine)(board, pokemon, target, (targetInLine) => {
            if (targetInLine != null && targetInLine.team !== pokemon.team) {
                targetInLine.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
                targetInLine.status.triggerBurn(2000, targetInLine, pokemon);
            }
        });
    }
}
exports.SandsearStormStrategy = SandsearStormStrategy;
class WildboltStormStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        super.process(pokemon, state, board, target, crit);
        const damage = 80;
        (0, orientation_1.effectInLine)(board, pokemon, target, (targetInLine) => {
            if (targetInLine != null && targetInLine.team !== pokemon.team) {
                targetInLine.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
                targetInLine.status.triggerParalysis(4000, targetInLine);
            }
        });
    }
}
exports.WildboltStormStrategy = WildboltStormStrategy;
class BleakwindStormStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        super.process(pokemon, state, board, target, crit);
        const damage = 80;
        (0, orientation_1.effectInLine)(board, pokemon, target, (targetInLine) => {
            if (targetInLine != null && targetInLine.team !== pokemon.team) {
                targetInLine.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
                targetInLine.status.triggerFreeze(2000, targetInLine);
            }
        });
    }
}
exports.BleakwindStormStrategy = BleakwindStormStrategy;
class SpringtideStormStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        super.process(pokemon, state, board, target, crit);
        const damage = 80;
        (0, orientation_1.effectInLine)(board, pokemon, target, (targetInLine) => {
            if (targetInLine != null && targetInLine.team !== pokemon.team) {
                targetInLine.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
                targetInLine.status.triggerCharm(4000, targetInLine, pokemon);
            }
        });
    }
}
exports.SpringtideStormStrategy = SpringtideStormStrategy;
class FakeTearsStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        var _a;
        super.process(pokemon, state, board, target, crit);
        const damage = (_a = [3, 6, 9][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 3;
        board.forEach((x, y, value) => {
            if (value && pokemon.team != value.team) {
                value.status.triggerArmorReduction(3000, value);
                pokemon.simulation.room.broadcast(types_1.Transfer.ABILITY, {
                    id: pokemon.simulation.id,
                    skill: pokemon.skill,
                    positionX: value.positionX,
                    positionY: value.positionX,
                    orientation: value.orientation
                });
                value.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
            }
        });
    }
}
exports.FakeTearsStrategy = FakeTearsStrategy;
class SparklingAriaStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        super.process(pokemon, state, board, target, crit);
        const damage = pokemon.stars === 3 ? 60 : pokemon.stars === 2 ? 30 : 15;
        const cells = board.getAdjacentCells(target.positionX, target.positionY);
        target.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
        cells.forEach((cell) => {
            if (cell.value && cell.value.team !== pokemon.team) {
                cell.value.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
            }
            else if (cell.value &&
                cell.value.team === pokemon.team &&
                cell.value.status.burn) {
                cell.value.status.healBurn(cell.value);
            }
        });
    }
}
exports.SparklingAriaStrategy = SparklingAriaStrategy;
class DragonDartsStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        var _a;
        super.process(pokemon, state, board, target, crit);
        const damage = (_a = [10, 20, 40][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 10;
        for (let n = 0; n < 3; n++) {
            target.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
        }
        if (target.life <= 0) {
            pokemon.addPP(40, pokemon, 0, false);
        }
    }
}
exports.DragonDartsStrategy = DragonDartsStrategy;
class MetronomeStrategy extends ability_strategy_1.AbilityStrategy {
    constructor() {
        super(...arguments);
        this.copyable = false;
    }
    process(pokemon, state, board, target, crit) {
        super.process(pokemon, state, board, target, crit);
        const skill = (0, random_1.pickRandomIn)(Object.keys(Ability_1.Ability).filter((a) => exports.AbilityStrategies[a].copyable));
        pokemon.simulation.room.broadcast(types_1.Transfer.ABILITY, {
            id: pokemon.simulation.id,
            skill: skill,
            positionX: pokemon.positionX,
            positionY: pokemon.positionY,
            targetX: target.positionX,
            targetY: target.positionY,
            orientation: pokemon.orientation
        });
        exports.AbilityStrategies[skill].process(pokemon, state, board, target, crit);
    }
}
exports.MetronomeStrategy = MetronomeStrategy;
class SkyAttackStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        super.process(pokemon, state, board, target, crit, true);
        const destination = board.getFarthestTargetCoordinateAvailablePlace(pokemon);
        if (destination) {
            pokemon.skydiveTo(destination.x, destination.y, board);
            pokemon.commands.push(new simulation_command_1.DelayedCommand(() => {
                pokemon.simulation.room.broadcast(types_1.Transfer.ABILITY, {
                    id: pokemon.simulation.id,
                    skill: Ability_1.Ability.SKY_ATTACK,
                    positionX: destination.x,
                    positionY: destination.y,
                    targetX: destination.target.positionX,
                    targetY: destination.target.positionY
                });
            }, 500));
            pokemon.commands.push(new simulation_command_1.DelayedCommand(() => {
                var _a;
                if (((_a = destination.target) === null || _a === void 0 ? void 0 : _a.life) > 0) {
                    const damage = 120;
                    destination.target.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
                }
            }, 1000));
        }
    }
}
exports.SkyAttackStrategy = SkyAttackStrategy;
class FlyingPressStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        super.process(pokemon, state, board, target, crit, true);
        const destination = board.getFarthestTargetCoordinateAvailablePlace(pokemon);
        if (destination) {
            pokemon.skydiveTo(destination.x, destination.y, board);
            pokemon.commands.push(new simulation_command_1.DelayedCommand(() => {
                pokemon.simulation.room.broadcast(types_1.Transfer.ABILITY, {
                    id: pokemon.simulation.id,
                    skill: Ability_1.Ability.FLYING_PRESS,
                    positionX: destination.x,
                    positionY: destination.y,
                    targetX: destination.target.positionX,
                    targetY: destination.target.positionY
                });
            }, 500));
            pokemon.commands.push(new simulation_command_1.DelayedCommand(() => {
                if (destination.target && destination.target.life > 0) {
                    const damage = 0.3 * pokemon.hp;
                    destination.target.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
                }
            }, 1000));
        }
    }
}
exports.FlyingPressStrategy = FlyingPressStrategy;
class AgilityStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        var _a;
        super.process(pokemon, state, board, target, crit);
        const boost = (_a = [10, 20, 30][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 30;
        pokemon.addAttackSpeed(boost, pokemon, 1, crit);
        pokemon.cooldown = 0;
    }
}
exports.AgilityStrategy = AgilityStrategy;
class SpiritShackleStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        super.process(pokemon, state, board, target, crit);
        let damage = 0;
        switch (pokemon.stars) {
            case 1:
                damage = 30;
                break;
            case 2:
                damage = 60;
                break;
            case 3:
                damage = 90;
                break;
            default:
                break;
        }
        (0, orientation_1.effectInLine)(board, pokemon, target, (targetInLine) => {
            if (targetInLine != null && targetInLine.team !== pokemon.team) {
                targetInLine.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
                targetInLine.status.triggerWound(4000, targetInLine, pokemon);
            }
        });
    }
}
exports.SpiritShackleStrategy = SpiritShackleStrategy;
class WaterShurikenStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        super.process(pokemon, state, board, target, crit);
        let damage = 0;
        switch (pokemon.stars) {
            case 1:
                damage = 20;
                break;
            case 2:
                damage = 40;
                break;
            case 3:
                damage = 60;
                break;
            default:
                break;
        }
        pokemon.orientation = board.orientation(pokemon.positionX, pokemon.positionY, target.positionX, target.positionY, pokemon, target);
        const orientations = [
            pokemon.orientation,
            orientation_1.OrientationArray[(orientation_1.OrientationArray.indexOf(pokemon.orientation) + 1) % 8],
            orientation_1.OrientationArray[(orientation_1.OrientationArray.indexOf(pokemon.orientation) + 7) % 8]
        ];
        orientations.forEach((orientation) => {
            (0, orientation_1.effectInLine)(board, pokemon, orientation, (targetInLine) => {
                if (targetInLine.team !== pokemon.team) {
                    targetInLine.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
                }
            });
        });
    }
}
exports.WaterShurikenStrategy = WaterShurikenStrategy;
class ShadowSneakStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        super.process(pokemon, state, board, target, crit);
        const damage = 50;
        const damageType = target.status.silence
            ? Game_1.AttackType.TRUE
            : Game_1.AttackType.SPECIAL;
        target.handleSpecialDamage(damage, board, damageType, pokemon, crit);
    }
}
exports.ShadowSneakStrategy = ShadowSneakStrategy;
class PlasmaFistStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        super.process(pokemon, state, board, target, crit);
        const damage = 120;
        target.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
        pokemon.handleHeal(damage * 0.25, pokemon, 1, crit);
    }
}
exports.PlasmaFistStrategy = PlasmaFistStrategy;
class ForecastStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        super.process(pokemon, state, board, target, crit);
        board.forEach((x, y, p) => {
            if (p && pokemon.team === p.team) {
                p.addShield(10, pokemon, 1, crit);
                if (pokemon.name === Pokemon_1.Pkm.CASTFORM_SUN) {
                    p.addAttack(3, pokemon, 1, crit);
                }
                if (pokemon.name === Pokemon_1.Pkm.CASTFORM_RAIN) {
                    p.addPP(5, pokemon, 1, crit);
                }
                if (pokemon.name === Pokemon_1.Pkm.CASTFORM_HAIL) {
                    p.addDefense(2, pokemon, 1, crit);
                    p.addSpecialDefense(2, pokemon, 1, crit);
                }
            }
        });
    }
}
exports.ForecastStrategy = ForecastStrategy;
class MachPunchStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        super.process(pokemon, state, board, target, crit);
        const damage = 50;
        target.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
        pokemon.cooldown = 100;
    }
}
exports.MachPunchStrategy = MachPunchStrategy;
class UppercutStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        super.process(pokemon, state, board, target, crit);
        let damage = 60;
        if (pokemon.def > target.def)
            damage *= 2;
        target.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
    }
}
exports.UppercutStrategy = UppercutStrategy;
class MawashiGeriStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        super.process(pokemon, state, board, target, crit);
        let damage = 60;
        if (pokemon.atk > target.atk)
            damage *= 2;
        target.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
    }
}
exports.MawashiGeriStrategy = MawashiGeriStrategy;
class TripleKickStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        super.process(pokemon, state, board, target, crit);
        const damage = 60;
        const cells = board.getAdjacentCells(pokemon.positionX, pokemon.positionY);
        let count = 0;
        cells.forEach((cell) => {
            if (cell.value && pokemon.team !== cell.value.team) {
                count++;
                if (count <= 3) {
                    cell.value.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit, true);
                }
            }
        });
    }
}
exports.TripleKickStrategy = TripleKickStrategy;
class GeomancyStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        super.process(pokemon, state, board, target, crit);
        pokemon.addAttack(15, pokemon, 1, crit);
        pokemon.addSpecialDefense(5, pokemon, 1, crit);
        pokemon.addAttackSpeed(20, pokemon, 0, false);
    }
}
exports.GeomancyStrategy = GeomancyStrategy;
class DeathWingStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        super.process(pokemon, state, board, target, crit);
        const damage = 150;
        const { takenDamage } = target.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
        if (takenDamage > 0) {
            pokemon.handleHeal(Math.round(0.75 * takenDamage), pokemon, 0, false);
        }
    }
}
exports.DeathWingStrategy = DeathWingStrategy;
class MimicStrategy extends ability_strategy_1.AbilityStrategy {
    constructor() {
        super(...arguments);
        this.copyable = false;
    }
    process(pokemon, state, board, target, crit) {
        super.process(pokemon, state, board, target, crit);
        if (exports.AbilityStrategies[target.skill].copyable) {
            exports.AbilityStrategies[target.skill].process(pokemon, state, board, target, crit);
        }
    }
}
exports.MimicStrategy = MimicStrategy;
class HexStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        super.process(pokemon, state, board, target, crit);
        let damage = pokemon.stars === 3 ? 80 : pokemon.stars === 2 ? 40 : 20;
        if (target.status.hasNegativeStatus()) {
            damage = damage * 2;
        }
        target.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
    }
}
exports.HexStrategy = HexStrategy;
class GrowthStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        var _a;
        super.process(pokemon, state, board, target, crit);
        let attackBuff = 5;
        let hpBuff = (_a = [10, 20, 30][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 30;
        if (pokemon.simulation.weather === Weather_1.Weather.SUN) {
            attackBuff *= 2;
            hpBuff *= 2;
        }
        pokemon.addAttack(attackBuff, pokemon, 1, crit);
        pokemon.addMaxHP(hpBuff, pokemon, 1, crit);
    }
}
exports.GrowthStrategy = GrowthStrategy;
class HealOrderStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        super.process(pokemon, state, board, target, crit);
        const cells = board.getAdjacentCells(pokemon.positionX, pokemon.positionY);
        const damage = pokemon.stars === 3 ? 65 : pokemon.stars === 2 ? 45 : 25;
        cells.forEach((cell) => {
            if (cell.value) {
                if (cell.value.team !== pokemon.team) {
                    cell.value.count.attackOrderCount++;
                    cell.value.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
                }
                else {
                    cell.value.count.healOrderCount++;
                    cell.value.handleHeal(damage, pokemon, 1, crit);
                }
            }
        });
    }
}
exports.HealOrderStrategy = HealOrderStrategy;
class ShellTrapStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        super.process(pokemon, state, board, target, crit);
        pokemon.effects.add(Effect_1.Effect.SHELL_TRAP);
    }
}
exports.ShellTrapStrategy = ShellTrapStrategy;
class DigStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        super.process(pokemon, state, board, target, crit);
        const damage = pokemon.stars === 3 ? 40 : pokemon.stars === 2 ? 20 : 10;
        const farthestCoordinate = board.getFarthestTargetCoordinateAvailablePlace(pokemon);
        if (farthestCoordinate) {
            const cells = board.getCellsBetween(pokemon.positionX, pokemon.positionY, farthestCoordinate.x, farthestCoordinate.y);
            cells.forEach((cell) => {
                if (cell.value && cell.value.team != pokemon.team) {
                    cell.value.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
                }
            });
            pokemon.moveTo(farthestCoordinate.x, farthestCoordinate.y, board);
        }
    }
}
exports.DigStrategy = DigStrategy;
class FireSpinStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        var _a;
        super.process(pokemon, state, board, target, crit);
        const damage = (_a = [20, 40, 80][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 80;
        const cells = board.getAdjacentCells(target.positionX, target.positionY, true);
        cells.forEach((cell) => {
            if (cell.value && pokemon.team != cell.value.team) {
                cell.value.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
                cell.value.status.triggerBurn(3000, target, pokemon);
            }
        });
    }
}
exports.FireSpinStrategy = FireSpinStrategy;
class SearingShotStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        super.process(pokemon, state, board, target, crit);
        const damage = 40;
        const cells = board.getCellsInRadius(pokemon.positionX, pokemon.positionY, 2);
        cells.forEach((cell) => {
            if (cell.value && pokemon.team != cell.value.team) {
                cell.value.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
                cell.value.status.triggerBurn(3000, target, pokemon);
            }
        });
    }
}
exports.SearingShotStrategy = SearingShotStrategy;
class PeckStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        var _a;
        super.process(pokemon, state, board, target, crit);
        const damage = (_a = [10, 20, 30][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 30;
        target.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
    }
}
exports.PeckStrategy = PeckStrategy;
class SplashStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        super.process(pokemon, state, board, target, crit);
    }
}
exports.SplashStrategy = SplashStrategy;
class CounterStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        super.process(pokemon, state, board, target, crit);
        const damage = Math.max(0, pokemon.hp - pokemon.life);
        const cells = board.getAdjacentCells(pokemon.positionX, pokemon.positionY);
        cells.forEach((cell) => {
            if (cell.value && cell.value.team !== pokemon.team) {
                cell.value.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
            }
        });
    }
}
exports.CounterStrategy = CounterStrategy;
class PoisonPowderStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        super.process(pokemon, state, board, target, crit);
        let damage = 30;
        if (pokemon.stars === 2) {
            damage = 60;
        }
        if (pokemon.stars === 3) {
            damage = 120;
        }
        const farthestCoordinate = board.getFarthestTargetCoordinateAvailablePlace(pokemon);
        if (farthestCoordinate) {
            const cells = board.getCellsBetween(pokemon.positionX, pokemon.positionY, farthestCoordinate.x, farthestCoordinate.y);
            cells.forEach((cell) => {
                if (cell.value && cell.value.team != pokemon.team) {
                    cell.value.status.triggerPoison(5000, target, pokemon);
                    cell.value.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
                }
            });
            pokemon.moveTo(farthestCoordinate.x, farthestCoordinate.y, board);
        }
    }
}
exports.PoisonPowderStrategy = PoisonPowderStrategy;
class SilverWindStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        super.process(pokemon, state, board, target, crit);
        let damage = 30;
        if (pokemon.stars === 2) {
            damage = 60;
        }
        if (pokemon.stars === 3) {
            damage = 120;
        }
        const farthestCoordinate = board.getFarthestTargetCoordinateAvailablePlace(pokemon);
        pokemon.addAttack(1, pokemon, 0, false);
        pokemon.addDefense(1, pokemon, 0, false);
        pokemon.addSpecialDefense(1, pokemon, 0, false);
        pokemon.addAttackSpeed(10, pokemon, 0, false);
        pokemon.addAbilityPower(10, pokemon, 0, false);
        if (farthestCoordinate) {
            const cells = board.getCellsBetween(pokemon.positionX, pokemon.positionY, farthestCoordinate.x, farthestCoordinate.y);
            cells.forEach((cell) => {
                if (cell.value && cell.value.team != pokemon.team) {
                    cell.value.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
                }
            });
            pokemon.moveTo(farthestCoordinate.x, farthestCoordinate.y, board);
        }
    }
}
exports.SilverWindStrategy = SilverWindStrategy;
class IcyWindStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        var _a, _b;
        super.process(pokemon, state, board, target, crit);
        const damage = (_a = [30, 60, 120][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 120;
        const attackSpeedDebuff = (_b = [10, 20, 40][pokemon.stars - 1]) !== null && _b !== void 0 ? _b : 40;
        (0, orientation_1.effectInLine)(board, pokemon, target, (targetInLine) => {
            if (targetInLine != null && targetInLine.team !== pokemon.team) {
                targetInLine.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
                targetInLine.addAttackSpeed(-attackSpeedDebuff, pokemon, 0, false);
            }
        });
    }
}
exports.IcyWindStrategy = IcyWindStrategy;
class GigatonHammerStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        super.process(pokemon, state, board, target, crit);
        let damage = 100;
        if (pokemon.stars === 2) {
            damage = 200;
        }
        if (pokemon.stars === 3) {
            damage = 400;
        }
        pokemon.status.triggerSilence(6000, pokemon, pokemon);
        target.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
    }
}
exports.GigatonHammerStrategy = GigatonHammerStrategy;
class AcrobaticsStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        super.process(pokemon, state, board, target, crit);
        let damage = 20;
        if (pokemon.stars === 2) {
            damage = 40;
        }
        if (pokemon.stars === 3) {
            damage = 80;
        }
        if (pokemon.items.size === 0) {
            damage *= 2;
        }
        target.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
    }
}
exports.AcrobaticsStrategy = AcrobaticsStrategy;
class AbsorbStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        super.process(pokemon, state, board, target, crit);
        let damage = 30;
        if (pokemon.stars === 2) {
            damage = 60;
        }
        if (pokemon.stars === 3) {
            damage = 120;
        }
        target.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
        const cells = board.getAdjacentCells(pokemon.positionX, pokemon.positionY, true);
        cells.forEach((cell) => {
            if (cell.value && cell.value.team === pokemon.team) {
                cell.value.handleHeal(damage * 0.1, pokemon, 1, crit);
            }
        });
    }
}
exports.AbsorbStrategy = AbsorbStrategy;
class RolloutStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        super.process(pokemon, state, board, target, crit);
        const multiplier = 5;
        const defenseBoost = 5;
        pokemon.addDefense(defenseBoost, pokemon, 1, crit);
        target.handleSpecialDamage(multiplier * pokemon.def, board, Game_1.AttackType.SPECIAL, pokemon, crit);
    }
}
exports.RolloutStrategy = RolloutStrategy;
class ThrashStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        super.process(pokemon, state, board, target, crit);
        pokemon.addAttack(pokemon.baseAtk, pokemon, 1, crit);
        pokemon.status.triggerConfusion(3000, pokemon);
    }
}
exports.ThrashStrategy = ThrashStrategy;
class MagmaStormStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        super.process(pokemon, state, board, target, crit);
        target.status.triggerMagmaStorm(target, pokemon);
    }
}
exports.MagmaStormStrategy = MagmaStormStrategy;
class SlashingClawStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        super.process(pokemon, state, board, target, crit);
        let damage = pokemon.stars === 3 ? 60 : pokemon.stars === 2 ? 30 : 15;
        if (target.status.wound) {
            damage = Math.ceil(damage * 1.3);
        }
        target.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
        target.status.triggerWound(5000, target, pokemon);
    }
}
exports.SlashingClawStrategy = SlashingClawStrategy;
class DireClawStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        var _a;
        super.process(pokemon, state, board, target, crit);
        const damage = (_a = [15, 30, 60][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 60;
        target.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
        const status = (0, random_1.pickRandomIn)(["poison", "sleep", "paralysis"]);
        switch (status) {
            case "poison":
                target.status.triggerPoison(3000, target, pokemon);
                break;
            case "sleep":
                target.status.triggerSleep(3000, target);
                break;
            case "paralysis":
                target.status.triggerParalysis(3000, target);
                break;
        }
    }
}
exports.DireClawStrategy = DireClawStrategy;
class FakeOutStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        var _a;
        super.process(pokemon, state, board, target, crit);
        const damage = (_a = [50, 100, 150][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 150;
        if (pokemon.ap >= 0)
            target.status.triggerFlinch(3000, target);
        target.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
        pokemon.addAbilityPower(-30, pokemon, 0, false);
    }
}
exports.FakeOutStrategy = FakeOutStrategy;
class FellStingerStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        var _a;
        super.process(pokemon, state, board, target, crit);
        const damage = (_a = [20, 40, 70][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 30;
        const victim = target.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
        if (victim.death && !pokemon.isClone) {
            pokemon.addAbilityPower(5, pokemon, 0, false);
            pokemon.addAttack(1, pokemon, 0, false);
            pokemon.addMaxHP(10, pokemon, 0, false);
            pokemon.handleHeal(10, pokemon, 0, false);
            pokemon.refToBoardPokemon.atk += 1;
            pokemon.refToBoardPokemon.ap += 5;
            pokemon.refToBoardPokemon.hp += 10;
        }
    }
}
exports.FellStingerStrategy = FellStingerStrategy;
class EruptionStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        var _a;
        super.process(pokemon, state, board, target, crit);
        const damage = (_a = [30, 50, 70][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 30;
        const numberOfProjectiles = pokemon.stars === 1 ? 20 : pokemon.stars === 2 ? 30 : 45;
        for (let i = 0; i < numberOfProjectiles; i++) {
            pokemon.commands.push(new simulation_command_1.DelayedCommand(() => {
                const x = (0, random_1.randomBetween)(0, Config_1.BOARD_WIDTH - 1);
                const y = (0, random_1.randomBetween)(0, Config_1.BOARD_HEIGHT - 1);
                const value = board.getValue(x, y);
                if (value && value.team !== pokemon.team) {
                    value.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
                }
                pokemon.simulation.room.broadcast(types_1.Transfer.ABILITY, {
                    id: pokemon.simulation.id,
                    skill: Ability_1.Ability.ERUPTION,
                    positionX: pokemon.positionX,
                    positionY: pokemon.positionY,
                    targetX: x,
                    targetY: y
                });
            }, i * 100));
        }
    }
}
exports.EruptionStrategy = EruptionStrategy;
class HailStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        var _a;
        super.process(pokemon, state, board, target, crit);
        const damage = 50;
        const numberOfProjectiles = (_a = [10, 20, 30][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 30;
        for (let i = 0; i < numberOfProjectiles; i++) {
            const x = (0, random_1.randomBetween)(0, Config_1.BOARD_WIDTH - 1);
            const y = target.positionY >= 3
                ? (0, random_1.randomBetween)(3, Config_1.BOARD_HEIGHT - 1)
                : (0, random_1.randomBetween)(0, 3);
            const enemyHit = board.getValue(x, y);
            if (enemyHit && enemyHit.team !== pokemon.team) {
                enemyHit.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
                enemyHit.effects.add(Effect_1.Effect.HAIL);
                enemyHit.status.triggerFreeze(1000, enemyHit);
            }
            pokemon.simulation.room.broadcast(types_1.Transfer.ABILITY, {
                id: pokemon.simulation.id,
                skill: "HAIL_PROJECTILE",
                positionX: pokemon.positionX,
                positionY: pokemon.positionY,
                targetX: x,
                targetY: y
            });
            const index = y * board.columns + x;
            if (board.effects[index] !== Effect_1.Effect.HAIL) {
                board.effects[index] = Effect_1.Effect.HAIL;
                pokemon.simulation.room.broadcast(types_1.Transfer.BOARD_EVENT, {
                    simulationId: pokemon.simulation.id,
                    type: Game_1.BoardEvent.HAIL,
                    x,
                    y
                });
            }
        }
    }
}
exports.HailStrategy = HailStrategy;
class MistBallStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        super.process(pokemon, state, board, target, crit);
        const damage = 30;
        (0, orientation_1.effectInLine)(board, pokemon, target, (targetInLine) => {
            if (targetInLine != null &&
                targetInLine.team !== pokemon.team &&
                (0, distance_1.distanceC)(pokemon.positionX, pokemon.positionY, targetInLine.positionX, targetInLine.positionY) <= 4) {
                targetInLine.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
                targetInLine.addAbilityPower(-30, pokemon, 0, false);
            }
        });
        pokemon.commands.push(new simulation_command_1.DelayedCommand(() => {
            (0, orientation_1.effectInLine)(board, pokemon, target, (targetInLine) => {
                if (targetInLine != null && targetInLine.team !== pokemon.team) {
                    targetInLine.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
                    targetInLine.addAbilityPower(-30, pokemon, 0, false);
                }
            });
        }, 1000));
    }
}
exports.MistBallStrategy = MistBallStrategy;
class LusterPurgeStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        super.process(pokemon, state, board, target, crit);
        const damage = 30;
        (0, orientation_1.effectInLine)(board, pokemon, target, (targetInLine) => {
            if (targetInLine != null &&
                targetInLine.team !== pokemon.team &&
                (0, distance_1.distanceC)(pokemon.positionX, pokemon.positionY, targetInLine.positionX, targetInLine.positionY) <= 4) {
                targetInLine.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
                targetInLine.addSpecialDefense(-3, pokemon, 0, false);
            }
        });
        pokemon.commands.push(new simulation_command_1.DelayedCommand(() => {
            (0, orientation_1.effectInLine)(board, pokemon, target, (targetInLine) => {
                if (targetInLine != null && targetInLine.team !== pokemon.team) {
                    targetInLine.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
                    targetInLine.addSpecialDefense(-3, pokemon, 0, false);
                }
            });
        }, 1000));
    }
}
exports.LusterPurgeStrategy = LusterPurgeStrategy;
class MudBubbleStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        super.process(pokemon, state, board, target, crit);
        const heal = pokemon.stars === 3 ? 40 : pokemon.stars === 2 ? 20 : 10;
        pokemon.handleHeal(heal, pokemon, 1, crit);
    }
}
exports.MudBubbleStrategy = MudBubbleStrategy;
class LinkCableStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        super.process(pokemon, state, board, target, crit);
        const farthestTarget = state.getFarthestTarget(pokemon, board);
        const farthestCoordinate = board.getFarthestTargetCoordinateAvailablePlace(pokemon);
        if (farthestCoordinate && farthestTarget) {
            pokemon.moveTo(farthestCoordinate.x, farthestCoordinate.y, board);
            pokemon.targetX = farthestTarget.positionX;
            pokemon.targetY = farthestTarget.positionY;
        }
        pokemon.commands.push(new simulation_command_1.DelayedCommand(() => {
            if (pokemon.life <= 0)
                return;
            const partner = board.find((x, y, entity) => entity.skill === Ability_1.Ability.LINK_CABLE &&
                entity.id !== pokemon.id &&
                entity.team === pokemon.team);
            if (partner) {
                const damage = 50;
                const targetsHit = new Set();
                (0, orientation_1.effectInLine)(board, pokemon, partner, (targetInLine) => {
                    if (targetInLine != null && targetInLine.team !== pokemon.team) {
                        targetsHit.add(targetInLine);
                    }
                });
                board
                    .getAdjacentCells(pokemon.positionX, pokemon.positionY)
                    .forEach((cell) => {
                    if (cell.value && cell.value.team !== pokemon.team) {
                        targetsHit.add(cell.value);
                    }
                });
                board
                    .getAdjacentCells(partner.positionX, partner.positionY)
                    .forEach((cell) => {
                    if (cell.value && cell.value.team !== pokemon.team) {
                        targetsHit.add(cell.value);
                    }
                });
                targetsHit.forEach((target) => {
                    target.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
                });
                pokemon.simulation.room.broadcast(types_1.Transfer.ABILITY, {
                    id: pokemon.simulation.id,
                    skill: "LINK_CABLE_link",
                    positionX: pokemon.positionX,
                    positionY: pokemon.positionY,
                    targetX: partner.positionX,
                    targetY: partner.positionY
                });
                pokemon.simulation.room.broadcast(types_1.Transfer.ABILITY, {
                    id: pokemon.simulation.id,
                    skill: "LINK_CABLE_discharge",
                    positionX: pokemon.positionX,
                    positionY: pokemon.positionY,
                    targetX: pokemon.targetX,
                    targetY: pokemon.targetY
                });
                pokemon.simulation.room.broadcast(types_1.Transfer.ABILITY, {
                    id: pokemon.simulation.id,
                    skill: "LINK_CABLE_discharge",
                    positionX: partner.positionX,
                    positionY: partner.positionY,
                    targetX: partner.targetX,
                    targetY: partner.targetY
                });
            }
            else {
                const damage = 50;
                const cells = board.getAdjacentCells(pokemon.positionX, pokemon.positionY);
                cells.forEach((cell) => {
                    if (cell.value && cell.value.team !== pokemon.team) {
                        cell.value.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
                    }
                });
                pokemon.simulation.room.broadcast(types_1.Transfer.ABILITY, {
                    id: pokemon.simulation.id,
                    skill: "LINK_CABLE_discharge",
                    positionX: pokemon.positionX,
                    positionY: pokemon.positionY,
                    targetX: pokemon.targetX,
                    targetY: pokemon.targetY
                });
            }
        }, 300));
    }
}
exports.LinkCableStrategy = LinkCableStrategy;
class MagicBounceStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        super.process(pokemon, state, board, target, crit);
        pokemon.status.triggerMagicBounce(5000);
    }
}
exports.MagicBounceStrategy = MagicBounceStrategy;
class ShellSmashStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        super.process(pokemon, state, board, target, crit);
        const damage = pokemon.stars === 1 ? 15 : 30;
        const cells = board.getAdjacentCells(pokemon.positionX, pokemon.positionY);
        cells.forEach((cell) => {
            if (cell && cell.value && cell.value.team !== pokemon.team) {
                cell.value.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
            }
        });
        pokemon.addAbilityPower(20, pokemon, 0, false);
        pokemon.addAttack(2, pokemon, 0, false);
        pokemon.addAttackSpeed(20, pokemon, 0, false);
        pokemon.addDefense(-1, pokemon, 0, false);
        pokemon.addSpecialDefense(-1, pokemon, 0, false);
    }
}
exports.ShellSmashStrategy = ShellSmashStrategy;
class HelpingHandStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        var _a, _b;
        super.process(pokemon, state, board, target, crit);
        const nbAlliesBuffed = 2;
        const shield = (_a = [30, 60, 100][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 100;
        const allies = new Array();
        board.forEach((x, y, cell) => {
            if (cell && cell.team === pokemon.team && pokemon.id !== cell.id) {
                allies.push({
                    pkm: cell,
                    distance: (0, distance_1.distanceM)(pokemon.positionX, pokemon.positionY, cell.positionX, cell.positionY)
                });
            }
        });
        allies.sort((a, b) => a.distance - b.distance);
        for (let i = 0; i < nbAlliesBuffed; i++) {
            const ally = (_b = allies[i]) === null || _b === void 0 ? void 0 : _b.pkm;
            if (ally) {
                ally.status.doubleDamage = true;
                ally.addShield(shield, pokemon, 1, crit);
                ally.simulation.room.broadcast(types_1.Transfer.ABILITY, {
                    id: pokemon.simulation.id,
                    skill: Ability_1.Ability.HELPING_HAND,
                    positionX: ally.positionX,
                    positionY: ally.positionY
                });
            }
        }
    }
}
exports.HelpingHandStrategy = HelpingHandStrategy;
class AstralBarrageStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        super.process(pokemon, state, board, target, crit);
        const damagePerGhost = 20;
        const enemies = [];
        board.forEach((x, y, tg) => {
            if (tg && pokemon.team != tg.team) {
                enemies.push(tg);
            }
        });
        const nbGhosts = 3 * (1 + (2 * pokemon.ap) / 100);
        for (let i = 0; i < nbGhosts; i++) {
            const randomTarget = (0, random_1.pickRandomIn)(enemies);
            pokemon.commands.push(new simulation_command_1.DelayedCommand(() => {
                pokemon.simulation.room.broadcast(types_1.Transfer.ABILITY, {
                    id: pokemon.simulation.id,
                    skill: Ability_1.Ability.ASTRAL_BARRAGE,
                    positionX: pokemon.positionX,
                    positionY: pokemon.positionY,
                    targetX: randomTarget.positionX,
                    targetY: randomTarget.positionY,
                    orientation: pokemon.orientation
                });
                if ((randomTarget === null || randomTarget === void 0 ? void 0 : randomTarget.life) > 0) {
                    randomTarget.handleSpecialDamage(damagePerGhost, board, Game_1.AttackType.SPECIAL, pokemon, crit);
                }
            }, 100 * i));
        }
    }
}
exports.AstralBarrageStrategy = AstralBarrageStrategy;
class PyroBallStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        var _a;
        super.process(pokemon, state, board, target, crit, true);
        const damage = pokemon.stars === 3 ? 40 : pokemon.stars === 2 ? 20 : 10;
        const farthestTarget = (_a = state.getFarthestTarget(pokemon, board)) !== null && _a !== void 0 ? _a : target;
        pokemon.simulation.room.broadcast(types_1.Transfer.ABILITY, {
            id: pokemon.simulation.id,
            skill: pokemon.skill,
            positionX: pokemon.positionX,
            positionY: pokemon.positionY,
            targetX: farthestTarget.positionX,
            targetY: farthestTarget.positionY,
            orientation: pokemon.orientation
        });
        const cells = board.getCellsBetween(pokemon.positionX, pokemon.positionY, farthestTarget.positionX, farthestTarget.positionY);
        cells.forEach((cell) => {
            if (cell.value && cell.value.team != pokemon.team) {
                cell.value.status.triggerBurn(2000, cell.value, pokemon);
                cell.value.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
            }
        });
    }
}
exports.PyroBallStrategy = PyroBallStrategy;
class WhirlpoolStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        var _a;
        const farthestTarget = (_a = state.getFarthestTarget(pokemon, board)) !== null && _a !== void 0 ? _a : target;
        super.process(pokemon, state, board, farthestTarget, crit, true);
        const cells = board.getCellsBetween(pokemon.positionX, pokemon.positionY, farthestTarget.positionX, farthestTarget.positionY);
        for (let i = 0; i < cells.length; i++) {
            const cell = cells[i];
            if (cell && cell.value && cell.value.team !== pokemon.team) {
                pokemon.simulation.room.broadcast(types_1.Transfer.ABILITY, {
                    id: pokemon.simulation.id,
                    skill: pokemon.skill,
                    positionX: pokemon.positionX,
                    positionY: pokemon.positionY,
                    targetX: cell.x,
                    targetY: cell.y,
                    orientation: pokemon.orientation
                });
                for (let i = 0; i < 4; i++) {
                    cell.value.handleSpecialDamage(Math.ceil(pokemon.atk * 1.25), board, Game_1.AttackType.SPECIAL, pokemon, crit);
                }
                break;
            }
        }
    }
}
exports.WhirlpoolStrategy = WhirlpoolStrategy;
class AnchorShotStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        var _a;
        const damage = pokemon.stars === 3 ? 80 : pokemon.stars === 2 ? 40 : 20;
        const farthestTarget = (_a = state.getFarthestTarget(pokemon, board)) !== null && _a !== void 0 ? _a : target;
        super.process(pokemon, state, board, farthestTarget, crit, true);
        const adjacentCells = board.getAdjacentCells(pokemon.positionX, pokemon.positionY);
        const emptyCellsAround = (0, random_1.shuffleArray)(adjacentCells
            .filter((v) => v.value === undefined)
            .map((v) => ({ x: v.x, y: v.y })));
        if (emptyCellsAround.length > 0) {
            const destination = emptyCellsAround[0];
            pokemon.simulation.room.broadcast(types_1.Transfer.ABILITY, {
                id: pokemon.simulation.id,
                skill: Ability_1.Ability.ANCHOR_SHOT,
                targetX: farthestTarget.positionX,
                targetY: farthestTarget.positionY
            });
            farthestTarget.moveTo(destination.x, destination.y, board);
            farthestTarget.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
            farthestTarget.cooldown = (0, number_1.min)(500)(farthestTarget.cooldown);
        }
    }
}
exports.AnchorShotStrategy = AnchorShotStrategy;
class SmogStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        super.process(pokemon, state, board, target, crit);
        const cells = board.getCellsInFront(pokemon, target);
        const damage = pokemon.stars === 1 ? 10 : pokemon.stars === 2 ? 20 : 40;
        cells.forEach((cell) => {
            const index = cell.y * board.columns + cell.x;
            if (board.effects[index] !== Effect_1.Effect.GAS) {
                board.effects[index] = Effect_1.Effect.GAS;
                pokemon.simulation.room.broadcast(types_1.Transfer.BOARD_EVENT, {
                    simulationId: pokemon.simulation.id,
                    type: Game_1.BoardEvent.GAS,
                    x: cell.x,
                    y: cell.y
                });
            }
            if (cell.value) {
                cell.value.effects.add(Effect_1.Effect.GAS);
                if (cell.value.team !== pokemon.team) {
                    cell.value.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
                }
            }
        });
    }
}
exports.SmogStrategy = SmogStrategy;
class ShelterStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        var _a;
        super.process(pokemon, state, board, target, crit);
        const defGain = (_a = [3, 6, 12][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 12;
        pokemon.addDefense(defGain, pokemon, 1, crit);
        const cells = board.getCellsInFront(pokemon, target);
        cells.forEach((cell) => {
            const index = cell.y * board.columns + cell.x;
            if (board.effects[index] !== Effect_1.Effect.GAS) {
                board.effects[index] = Effect_1.Effect.GAS;
                pokemon.simulation.room.broadcast(types_1.Transfer.BOARD_EVENT, {
                    simulationId: pokemon.simulation.id,
                    type: Game_1.BoardEvent.GAS,
                    x: cell.x,
                    y: cell.y
                });
            }
            if (cell.value) {
                cell.value.effects.add(Effect_1.Effect.GAS);
            }
        });
    }
}
exports.ShelterStrategy = ShelterStrategy;
class MagnetRiseStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        var _a;
        super.process(pokemon, state, board, target, crit, true);
        const nbAlliesBuffed = (_a = [2, 4, 6][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 6;
        const alliesBuffed = board
            .getAdjacentCells(pokemon.positionX, pokemon.positionY)
            .map((cell) => cell.value)
            .filter((mon) => mon && mon.team === pokemon.team)
            .sort((a, b) => a.life - b.life)
            .slice(0, nbAlliesBuffed);
        alliesBuffed.push(pokemon);
        alliesBuffed.forEach((ally) => {
            ally.status.triggerProtect(2000);
            ally.addDodgeChance(0.1, pokemon, 1, crit);
            pokemon.simulation.room.broadcast(types_1.Transfer.ABILITY, {
                id: ally.simulation.id,
                skill: Ability_1.Ability.MAGNET_RISE,
                positionX: ally.positionX,
                positionY: ally.positionY
            });
        });
    }
}
exports.MagnetRiseStrategy = MagnetRiseStrategy;
class AttractStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        super.process(pokemon, state, board, target, crit, true);
        const targets = (0, random_1.pickNRandomIn)(board.cells.filter((v) => v && v.team !== pokemon.team), pokemon.stars);
        targets === null || targets === void 0 ? void 0 : targets.forEach((t) => {
            if (t) {
                pokemon.simulation.room.broadcast(types_1.Transfer.ABILITY, {
                    id: pokemon.simulation.id,
                    skill: Ability_1.Ability.ATTRACT,
                    positionX: t.positionX,
                    positionY: t.positionY
                });
                t === null || t === void 0 ? void 0 : t.status.triggerCharm(1000, t, pokemon, true);
            }
        });
    }
}
exports.AttractStrategy = AttractStrategy;
class WaterPulseStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        var _a;
        super.process(pokemon, state, board, target, crit);
        const damage = (_a = [75, 150][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 75;
        board
            .getAdjacentCells(target.positionX, target.positionY)
            .map((v) => v.value)
            .filter((v) => (v === null || v === void 0 ? void 0 : v.team) === target.team)
            .concat(target)
            .forEach((v) => {
            if (v) {
                v.status.triggerConfusion(2000, v);
                v.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
            }
        });
    }
}
exports.WaterPulseStrategy = WaterPulseStrategy;
class PlayRoughStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        super.process(pokemon, state, board, target, crit);
        target.status.triggerCharm(2500, target, pokemon, false);
        target.handleSpecialDamage(pokemon.stars === 3 ? 120 : pokemon.stars === 2 ? 60 : 30, board, Game_1.AttackType.SPECIAL, pokemon, crit);
    }
}
exports.PlayRoughStrategy = PlayRoughStrategy;
class AerialAceStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        var _a;
        super.process(pokemon, state, board, target, crit);
        const damage = (_a = [25, 50, 100][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 100;
        target.handleSpecialDamage(damage, board, Game_1.AttackType.TRUE, pokemon, crit);
    }
}
exports.AerialAceStrategy = AerialAceStrategy;
class ParabolicChargeStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        super.process(pokemon, state, board, target, crit);
        const heal = pokemon.stars > 1 ? 50 : 25;
        const overHeal = Math.max(0, heal + pokemon.life - pokemon.hp);
        pokemon.handleHeal(heal, pokemon, 0, false);
        target.handleSpecialDamage((pokemon.stars === 3 ? 100 : pokemon.stars === 2 ? 50 : 25) + overHeal, board, Game_1.AttackType.SPECIAL, pokemon, crit);
    }
}
exports.ParabolicChargeStrategy = ParabolicChargeStrategy;
class SuperFangStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        super.process(pokemon, state, board, target, crit);
        let damage = pokemon.stars === 3 ? 90 : pokemon.stars === 2 ? 60 : 30;
        if (target.types.has(Synergy_1.Synergy.GRASS)) {
            damage *= 2;
        }
        target.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
    }
}
exports.SuperFangStrategy = SuperFangStrategy;
class TeeterDanceStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        super.process(pokemon, state, board, target, crit);
        pokemon.addAttackSpeed(20, pokemon, 1, crit);
        board.cells
            .filter((v) => v !== undefined)
            .forEach((v) => v && v.status.triggerConfusion(3000, v));
    }
}
exports.TeeterDanceStrategy = TeeterDanceStrategy;
class CloseCombatStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        super.process(pokemon, state, board, target, crit);
        pokemon.addDefense(-3, pokemon, 0, false);
        pokemon.addSpecialDefense(-3, pokemon, 0, false);
        target.handleSpecialDamage(130, board, Game_1.AttackType.SPECIAL, pokemon, crit);
    }
}
exports.CloseCombatStrategy = CloseCombatStrategy;
class AssistStrategy extends ability_strategy_1.AbilityStrategy {
    constructor() {
        super(...arguments);
        this.copyable = false;
    }
    process(pokemon, state, board, target, crit) {
        super.process(pokemon, state, board, target, crit, true);
        const skill = (0, random_1.pickRandomIn)(board.cells
            .filter((v) => v &&
            v.team === pokemon.team &&
            v.skill &&
            exports.AbilityStrategies[v.skill].copyable)
            .map((v) => v === null || v === void 0 ? void 0 : v.skill));
        if (skill) {
            pokemon.simulation.room.broadcast(types_1.Transfer.ABILITY, {
                id: pokemon.simulation.id,
                skill: skill,
                positionX: pokemon.positionX,
                positionY: pokemon.positionY,
                targetX: target.positionX,
                targetY: target.positionY,
                orientation: pokemon.orientation
            });
            exports.AbilityStrategies[skill].process(pokemon, state, board, target, crit);
        }
    }
}
exports.AssistStrategy = AssistStrategy;
class FissureStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        super.process(pokemon, state, board, target, crit, true);
        const numberOfRifts = pokemon.stars === 3 ? 4 : pokemon.stars === 2 ? 3 : 2;
        for (let i = 0; i < numberOfRifts; i++) {
            const x_ = (0, random_1.randomBetween)(0, Config_1.BOARD_WIDTH - 1);
            const y_ = (0, random_1.randomBetween)(0, Config_1.BOARD_HEIGHT - 1);
            const cells = board.getAdjacentCells(x_, y_);
            cells.push({ x: x_, y: y_, value: board.getValue(x_, y_) });
            cells.forEach((cell) => {
                if (cell && cell.value && cell.value.team !== pokemon.team) {
                    cell.value.handleSpecialDamage(pokemon.stars === 3 ? 75 : pokemon.stars === 2 ? 50 : 25, board, Game_1.AttackType.SPECIAL, pokemon, crit);
                }
                pokemon.simulation.room.broadcast(types_1.Transfer.ABILITY, {
                    id: pokemon.simulation.id,
                    skill: Ability_1.Ability.FISSURE,
                    positionX: pokemon.positionX,
                    positionY: pokemon.positionY,
                    targetX: cell.x,
                    targetY: cell.y
                });
            });
        }
    }
}
exports.FissureStrategy = FissureStrategy;
class AssuranceStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        super.process(pokemon, state, board, target, crit);
        const damage = pokemon.stars === 3 ? 100 : pokemon.stars === 2 ? 50 : 25;
        target.handleSpecialDamage(pokemon.life / pokemon.hp < 0.5 ? damage * 2 : damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
    }
}
exports.AssuranceStrategy = AssuranceStrategy;
class AquaRingStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        super.process(pokemon, state, board, target, crit);
        const mostSurroundedCoordinate = state.getMostSurroundedCoordinateAvailablePlace(target, board);
        if (mostSurroundedCoordinate) {
            pokemon.moveTo(mostSurroundedCoordinate.x, mostSurroundedCoordinate.y, board);
            const cells = board.getAdjacentCells(mostSurroundedCoordinate.x, mostSurroundedCoordinate.y);
            cells.push({
                x: mostSurroundedCoordinate.x,
                y: mostSurroundedCoordinate.y,
                value: board.getValue(mostSurroundedCoordinate.x, mostSurroundedCoordinate.y)
            });
            cells.forEach((cell) => {
                if (cell.value && cell.value.team === pokemon.team) {
                    cell.value.status.clearNegativeStatus();
                    cell.value.handleHeal(pokemon.stars === 3 ? 50 : pokemon.stars === 2 ? 30 : 20, pokemon, 1, crit);
                }
            });
        }
    }
}
exports.AquaRingStrategy = AquaRingStrategy;
class LungeStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        super.process(pokemon, state, board, target, crit);
        const enemiesSortedByAttack = board.cells
            .filter((enemy) => enemy && enemy.team !== pokemon.team)
            .sort((a, b) => b.atk - a.atk);
        let cellToGo;
        let enemy;
        while (cellToGo == null && enemiesSortedByAttack.length > 0) {
            enemy = enemiesSortedByAttack.shift();
            if (enemy) {
                cellToGo = board
                    .getAdjacentCells(enemy.positionX, enemy.positionY)
                    .find((cell) => cell.value == null);
            }
        }
        if (cellToGo) {
            pokemon.moveTo(cellToGo.x, cellToGo.y, board);
            if (enemy) {
                enemy.addAttack(-5, pokemon, 1, crit);
                enemy.handleSpecialDamage(50, board, Game_1.AttackType.SPECIAL, pokemon, crit, true);
            }
        }
    }
}
exports.LungeStrategy = LungeStrategy;
class PoisonGasStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        var _a;
        super.process(pokemon, state, board, target, crit);
        const damage = (_a = [15, 30, 60][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 60;
        const cells = board.getAdjacentCells(pokemon.positionX, pokemon.positionY);
        cells.forEach((cell) => {
            const index = cell.y * board.columns + cell.x;
            if (board.effects[index] !== Effect_1.Effect.POISON_GAS) {
                board.effects[index] = Effect_1.Effect.POISON_GAS;
                pokemon.simulation.room.broadcast(types_1.Transfer.BOARD_EVENT, {
                    simulationId: pokemon.simulation.id,
                    type: Game_1.BoardEvent.POISON_GAS,
                    x: cell.x,
                    y: cell.y
                });
            }
            if (cell.value) {
                cell.value.effects.add(Effect_1.Effect.POISON_GAS);
                if (cell.value.team !== pokemon.team) {
                    cell.value.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
                    cell.value.status.triggerPoison(3000, cell.value, pokemon);
                }
            }
        });
    }
}
exports.PoisonGasStrategy = PoisonGasStrategy;
class BraveBirdStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        super.process(pokemon, state, board, target, crit);
        const flyAwayCell = board.getFlyAwayCell(pokemon.positionX, pokemon.positionY);
        if (flyAwayCell) {
            pokemon.moveTo(flyAwayCell.x, flyAwayCell.y, board);
            const adjacentEmptyCells = board
                .getAdjacentCells(flyAwayCell.x, flyAwayCell.y)
                .filter((v) => v.value === undefined);
            if (adjacentEmptyCells.length > 0) {
                const cell = adjacentEmptyCells[0];
                target.moveTo(cell.x, cell.y, board);
                target.handleSpecialDamage(pokemon.stars === 3 ? 90 : pokemon.stars === 2 ? 60 : 30, board, Game_1.AttackType.SPECIAL, pokemon, crit);
            }
        }
    }
}
exports.BraveBirdStrategy = BraveBirdStrategy;
class MagicalLeafStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        var _a;
        const damage = pokemon.stars === 3 ? 40 : pokemon.stars === 2 ? 20 : 10;
        const farthestTarget = (_a = state.getFarthestTarget(pokemon, board)) !== null && _a !== void 0 ? _a : target;
        super.process(pokemon, state, board, farthestTarget, crit);
        const cells = board.getCellsBetween(pokemon.positionX, pokemon.positionY, farthestTarget.positionX, farthestTarget.positionY);
        cells.forEach((cell) => {
            if (cell.value && cell.value.team != pokemon.team) {
                cell.value.status.triggerArmorReduction(3000, cell.value);
                cell.value.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
            }
        });
    }
}
exports.MagicalLeafStrategy = MagicalLeafStrategy;
class StealthRocksStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        super.process(pokemon, state, board, target, crit);
        const cells = board.getCellsInFront(pokemon, target, 2);
        const damage = 50;
        cells.forEach((cell) => {
            const index = cell.y * board.columns + cell.x;
            if (board.effects[index] !== Effect_1.Effect.STEALTH_ROCKS) {
                board.effects[index] = Effect_1.Effect.STEALTH_ROCKS;
                pokemon.simulation.room.broadcast(types_1.Transfer.BOARD_EVENT, {
                    simulationId: pokemon.simulation.id,
                    type: Game_1.BoardEvent.STEALTH_ROCKS,
                    x: cell.x,
                    y: cell.y
                });
            }
            pokemon.simulation.room.broadcast(types_1.Transfer.ABILITY, {
                id: pokemon.simulation.id,
                skill: Ability_1.Ability.STEALTH_ROCKS,
                positionX: cell.x,
                positionY: cell.y
            });
            if (cell.value && cell.value.team !== pokemon.team) {
                cell.value.effects.add(Effect_1.Effect.STEALTH_ROCKS);
                cell.value.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
            }
        });
    }
}
exports.StealthRocksStrategy = StealthRocksStrategy;
class SpikesStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        var _a;
        super.process(pokemon, state, board, target, crit, true);
        const nbSpikes = Math.round(6 * (1 + pokemon.ap / 100));
        const cells = (0, random_1.pickNRandomIn)(board.getCellsInFront(pokemon, target, 3), nbSpikes);
        const damage = (_a = [25, 50, 100][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 100;
        cells.forEach((cell) => {
            const index = cell.y * board.columns + cell.x;
            if (board.effects[index] !== Effect_1.Effect.SPIKES) {
                board.effects[index] = Effect_1.Effect.SPIKES;
                pokemon.simulation.room.broadcast(types_1.Transfer.BOARD_EVENT, {
                    simulationId: pokemon.simulation.id,
                    type: Game_1.BoardEvent.SPIKES,
                    x: cell.x,
                    y: cell.y
                });
            }
            pokemon.simulation.room.broadcast(types_1.Transfer.ABILITY, {
                id: pokemon.simulation.id,
                skill: Ability_1.Ability.SPIKES,
                positionX: pokemon.positionX,
                positionY: pokemon.positionY,
                targetX: cell.x,
                targetY: cell.y
            });
            if (cell.value && cell.value.team !== pokemon.team) {
                cell.value.effects.add(Effect_1.Effect.SPIKES);
                cell.value.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
            }
        });
    }
}
exports.SpikesStrategy = SpikesStrategy;
class StickyWebStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        super.process(pokemon, state, board, target, crit);
        const cells = board.getCellsInFront(pokemon, target, 2);
        const damage = pokemon.stars === 3 ? 70 : pokemon.stars === 2 ? 35 : 20;
        cells.forEach((cell) => {
            const index = cell.y * board.columns + cell.x;
            if (board.effects[index] !== Effect_1.Effect.STICKY_WEB) {
                board.effects[index] = Effect_1.Effect.STICKY_WEB;
                pokemon.simulation.room.broadcast(types_1.Transfer.BOARD_EVENT, {
                    simulationId: pokemon.simulation.id,
                    type: Game_1.BoardEvent.STICKY_WEB,
                    x: cell.x,
                    y: cell.y
                });
            }
            pokemon.simulation.room.broadcast(types_1.Transfer.ABILITY, {
                id: pokemon.simulation.id,
                skill: Ability_1.Ability.STICKY_WEB,
                positionX: cell.x,
                positionY: cell.y
            });
            if (cell.value && cell.value.team !== pokemon.team) {
                cell.value.effects.add(Effect_1.Effect.STICKY_WEB);
                cell.value.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
            }
        });
    }
}
exports.StickyWebStrategy = StickyWebStrategy;
class StruggleBugStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        super.process(pokemon, state, board, target, crit);
        const cells = board.getAdjacentCells(pokemon.positionX, pokemon.positionY);
        cells.forEach((cell) => {
            if (cell.value && cell.value.team !== pokemon.team) {
                cell.value.addAbilityPower(-50, pokemon, 0, false);
                cell.value.handleSpecialDamage(30, board, Game_1.AttackType.SPECIAL, pokemon, crit);
            }
        });
    }
}
exports.StruggleBugStrategy = StruggleBugStrategy;
class QuiverDanceStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        super.process(pokemon, state, board, target, crit);
        pokemon.addAttack(5, pokemon, 1, crit);
        pokemon.addSpecialDefense(5, pokemon, 1, crit);
        pokemon.addAttackSpeed(20, pokemon, 1, crit);
        pokemon.addAbilityPower(20, pokemon, 0, false);
    }
}
exports.QuiverDanceStrategy = QuiverDanceStrategy;
class TailGlowStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        super.process(pokemon, state, board, target, crit);
        const cells = board.getAdjacentCells(pokemon.positionX, pokemon.positionY);
        pokemon.addAbilityPower(50, pokemon, 0, false);
        cells.forEach((cell) => {
            if (cell.value && cell.value.team !== pokemon.team) {
                cell.value.handleSpecialDamage(30, board, Game_1.AttackType.SPECIAL, pokemon, crit);
            }
        });
    }
}
exports.TailGlowStrategy = TailGlowStrategy;
class PrismaticLaserStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        super.process(pokemon, state, board, target, crit);
        const affectedCells = board.cells.filter((v) => v &&
            v.team !== pokemon.team &&
            (v.positionX === pokemon.positionX ||
                v.positionX === pokemon.positionX - 1 ||
                v.positionX === pokemon.positionX + 1));
        affectedCells.forEach((tg) => {
            if (tg) {
                tg.handleSpecialDamage(80, board, Game_1.AttackType.SPECIAL, pokemon, crit);
                const teleportationCell = board.getTeleportationCell(tg.positionX, tg.positionY);
                if (teleportationCell) {
                    tg.moveTo(teleportationCell.x, teleportationCell.y, board);
                }
                else {
                    logger_1.logger.error("unable to teleport pokemon", tg);
                }
            }
        });
    }
}
exports.PrismaticLaserStrategy = PrismaticLaserStrategy;
class NightShadeStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        var _a;
        super.process(pokemon, state, board, target, crit);
        const damage = Math.ceil(((_a = [0.25, 0.33, 0.5][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 0.5) *
            target.hp *
            (1 + (0.5 * pokemon.ap) / 100));
        target.handleSpecialDamage(damage, board, Game_1.AttackType.TRUE, pokemon, crit);
    }
}
exports.NightShadeStrategy = NightShadeStrategy;
class ChargeBeamStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        var _a;
        super.process(pokemon, state, board, target, crit, false);
        const chain = [target];
        const NB_MAX_TARGETS = 3;
        for (let n = 1, x = target.positionX, y = target.positionY; n < NB_MAX_TARGETS; n++) {
            const nextCell = board
                .getAdjacentCells(x, y)
                .find((cell) => cell.value &&
                cell.value.team === target.team &&
                !chain.includes(cell.value));
            if (nextCell) {
                chain.push(nextCell.value);
                x = nextCell.x;
                y = nextCell.y;
            }
        }
        for (let i = 0; i < chain.length; i++) {
            const damage = (_a = [15, 30, 60][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 60;
            chain[i].handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
            const previous = i === 0 ? pokemon : chain[i - 1];
            pokemon.simulation.room.broadcast(types_1.Transfer.ABILITY, {
                id: pokemon.simulation.id,
                skill: "LINK_CABLE_link",
                positionX: previous.positionX,
                positionY: previous.positionY,
                targetX: chain[i].positionX,
                targetY: chain[i].positionY
            });
        }
    }
}
exports.ChargeBeamStrategy = ChargeBeamStrategy;
class PopulationBombStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        var _a;
        super.process(pokemon, state, board, target, crit);
        const damage = 10;
        const numberOfAttacks = Math.round(((_a = [4, 8, 12, 16][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 8) * (1 + pokemon.ap / 100));
        for (let i = 0; i < numberOfAttacks; i++) {
            target.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit, false);
        }
    }
}
exports.PopulationBombStrategy = PopulationBombStrategy;
class ScreechStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        super.process(pokemon, state, board, target, crit, true);
        const debuff = pokemon.stars === 3 ? -4 : pokemon.stars === 2 ? -2 : -1;
        const cells = board.getAdjacentCells(pokemon.positionX, pokemon.positionY, true);
        cells.forEach((cell) => {
            if (cell.value && cell.value.team !== pokemon.team) {
                cell.value.addDefense(debuff, pokemon, 1, crit);
                cell.value.simulation.room.broadcast(types_1.Transfer.ABILITY, {
                    id: pokemon.simulation.id,
                    skill: Ability_1.Ability.SCREECH,
                    targetX: cell.value.positionX,
                    targetY: cell.value.positionY
                });
            }
        });
    }
}
exports.ScreechStrategy = ScreechStrategy;
class SandTombStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        super.process(pokemon, state, board, target, crit);
        target.status.triggerParalysis(pokemon.stars === 3 ? 8000 : pokemon.stars === 2 ? 5000 : 3000, target);
        target.status.triggerSilence(pokemon.stars === 3 ? 8000 : pokemon.stars === 2 ? 5000 : 3000, target, pokemon);
        target.handleSpecialDamage(pokemon.stars === 3 ? 40 : pokemon.stars === 2 ? 20 : 10, board, Game_1.AttackType.SPECIAL, pokemon, crit, false);
    }
}
exports.SandTombStrategy = SandTombStrategy;
class WhirlwindStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        super.process(pokemon, state, board, target, crit, true);
        const x = target.positionX;
        const y = target.positionY;
        target.flyAway(board);
        pokemon.simulation.room.broadcast(types_1.Transfer.ABILITY, {
            id: pokemon.simulation.id,
            skill: Ability_1.Ability.WHIRLWIND,
            positionX: x,
            positionY: y,
            targetX: target.positionX,
            targetY: target.positionY
        });
        target.handleSpecialDamage(pokemon.stars === 3 ? 120 : pokemon.stars === 2 ? 80 : 40, board, Game_1.AttackType.SPECIAL, pokemon, crit, false);
    }
}
exports.WhirlwindStrategy = WhirlwindStrategy;
class EmptyLightStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        super.process(pokemon, state, board, target, crit, true);
        let tg = target;
        const affectedTargetsIds = new Array();
        for (let i = 0; i < 5; i++) {
            if (tg) {
                pokemon.simulation.room.broadcast(types_1.Transfer.ABILITY, {
                    id: pokemon.simulation.id,
                    skill: Ability_1.Ability.EMPTY_LIGHT,
                    positionX: pokemon.positionX,
                    positionY: pokemon.positionY,
                    targetX: tg.positionX,
                    targetY: tg.positionY
                });
                tg.addSpecialDefense(-3, pokemon, 0, false);
                tg.handleSpecialDamage(33, board, Game_1.AttackType.SPECIAL, pokemon, crit);
                affectedTargetsIds.push(tg.id);
                const cells = board.getAdjacentCells(tg.positionX, tg.positionY);
                tg = cells
                    .filter((v) => v.value &&
                    v.value.team !== pokemon.team &&
                    !affectedTargetsIds.includes(v.value.id))
                    .map((v) => v.value)[0];
            }
            else {
                break;
            }
        }
    }
}
exports.EmptyLightStrategy = EmptyLightStrategy;
class UnboundStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        super.process(pokemon, state, board, target, crit);
        pokemon.index = Pokemon_1.PkmIndex[Pokemon_1.Pkm.HOOPA_UNBOUND];
        pokemon.skill = Ability_1.Ability.HYPERSPACE_FURY;
        pokemon.addAttack(10, pokemon, 0, false);
        pokemon.addMaxHP(100, pokemon, 0, false);
        pokemon.toMovingState();
    }
}
exports.UnboundStrategy = UnboundStrategy;
class HyperSpaceFury extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        super.process(pokemon, state, board, target, crit, true);
        const nbHits = 4 * (1 + pokemon.ap / 100);
        for (let i = 0; i < nbHits; i++) {
            target.addDefense(-1, pokemon, 0, false);
            target.handleSpecialDamage(15, board, Game_1.AttackType.SPECIAL, pokemon, crit, true);
        }
        pokemon.simulation.room.broadcast(types_1.Transfer.ABILITY, {
            id: pokemon.simulation.id,
            skill: Ability_1.Ability.HYPERSPACE_FURY,
            positionX: pokemon.positionX,
            positionY: pokemon.positionY,
            targetX: target.positionX,
            targetY: target.positionY,
            orientation: nbHits
        });
    }
}
exports.HyperSpaceFury = HyperSpaceFury;
class SnipeShotStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        var _a, _b;
        const damage = (_a = [50, 100, 200][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 200;
        const farthestTarget = (_b = state.getFarthestTarget(pokemon, board)) !== null && _b !== void 0 ? _b : target;
        super.process(pokemon, state, board, farthestTarget, crit);
        if (farthestTarget) {
            const cells = board.getCellsBetween(pokemon.positionX, pokemon.positionY, farthestTarget.positionX, farthestTarget.positionY);
            cells.forEach((cell) => {
                if (cell.value && cell.value.team != pokemon.team) {
                    cell.value.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
                }
            });
        }
    }
}
exports.SnipeShotStrategy = SnipeShotStrategy;
class AirSlashStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        super.process(pokemon, state, board, target, crit);
        const damage = pokemon.stars === 3 ? 100 : pokemon.stars === 2 ? 50 : 25;
        target.status.triggerFlinch(7000, target, pokemon);
        target.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
    }
}
exports.AirSlashStrategy = AirSlashStrategy;
class EggsplosionStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        super.process(pokemon, state, board, target, crit);
        const damage = pokemon.stars === 3 ? 140 : pokemon.stars === 2 ? 80 : 40;
        const kill = target.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
        if (kill.death && Math.random() < 0.3) {
            const egg = (0, egg_factory_1.createRandomEgg)(false);
            const player = pokemon.player;
            if (player) {
                const x = (0, board_1.getFirstAvailablePositionInBench)(player.board);
                if (x !== undefined) {
                    egg.positionX = x;
                    egg.positionY = 0;
                    egg.evolutionRule.evolutionTimer = Config_1.EvolutionTime.EGG_HATCH;
                    player.board.set(egg.id, egg);
                }
            }
        }
        board
            .getAdjacentCells(target.positionX, target.positionY)
            .map((v) => v.value)
            .filter((v) => (v === null || v === void 0 ? void 0 : v.team) === target.team)
            .concat(target)
            .forEach((v) => {
            if (v) {
                v.status.triggerArmorReduction(4000, v);
            }
        });
    }
}
exports.EggsplosionStrategy = EggsplosionStrategy;
class BodySlamStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        super.process(pokemon, state, board, target, crit);
        const damage = Math.round(0.3 * pokemon.hp * (1 + pokemon.hp / 100));
        target.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit, false);
    }
}
exports.BodySlamStrategy = BodySlamStrategy;
class VineWhipStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        super.process(pokemon, state, board, target, crit);
        board
            .getAdjacentCells(target.positionX, target.positionY)
            .map((v) => v.value)
            .filter((v) => (v === null || v === void 0 ? void 0 : v.team) === target.team)
            .concat(target)
            .forEach((v) => {
            if (v) {
                v.status.triggerFlinch(3000, v, pokemon);
            }
        });
        target.handleSpecialDamage(100, board, Game_1.AttackType.SPECIAL, pokemon, crit);
    }
}
exports.VineWhipStrategy = VineWhipStrategy;
class BarbBarrageStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        super.process(pokemon, state, board, target, crit, true);
        const mostSurroundedCoordinate = state.getMostSurroundedCoordinateAvailablePlace(pokemon, board);
        if (mostSurroundedCoordinate) {
            pokemon.moveTo(mostSurroundedCoordinate.x, mostSurroundedCoordinate.y, board);
            board
                .getAdjacentCells(target.positionX, target.positionY)
                .map((v) => v.value)
                .filter((v) => (v === null || v === void 0 ? void 0 : v.team) === target.team)
                .concat(target)
                .forEach((v) => {
                if (v) {
                    v.status.triggerPoison(3000, v, pokemon);
                    pokemon.simulation.room.broadcast(types_1.Transfer.ABILITY, {
                        id: pokemon.simulation.id,
                        skill: Ability_1.Ability.BARB_BARRAGE,
                        positionX: pokemon.positionX,
                        positionY: pokemon.positionY,
                        targetX: v.positionX,
                        targetY: v.positionY,
                        orientation: v.orientation
                    });
                }
            });
            target.handleSpecialDamage(pokemon.stars === 3 ? 60 : pokemon.stars === 2 ? 30 : 15, board, Game_1.AttackType.SPECIAL, pokemon, crit);
        }
    }
}
exports.BarbBarrageStrategy = BarbBarrageStrategy;
class FloralHealingStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        pokemon.handleHeal(pokemon.maxPP, pokemon, 0, false);
    }
}
exports.FloralHealingStrategy = FloralHealingStrategy;
class MagicPowderStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        var _a, _b;
        super.process(pokemon, state, board, target, crit);
        const shield = (_a = [10, 20, 40][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 40;
        const silenceDuration = (_b = [2000, 3000, 4000][pokemon.stars - 1]) !== null && _b !== void 0 ? _b : 4000;
        pokemon.addShield(shield, pokemon, 1, crit);
        board
            .getAdjacentCells(pokemon.positionX, pokemon.positionY)
            .forEach((cell) => {
            if (cell.value && cell.value.team !== pokemon.team) {
                cell.value.status.triggerSilence(silenceDuration, cell.value, pokemon);
            }
        });
    }
}
exports.MagicPowderStrategy = MagicPowderStrategy;
class RetaliateStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        var _a, _b, _c, _d;
        super.process(pokemon, state, board, target, crit);
        const nbAlliesAlive = board.cells.filter((entity) => entity && entity.team === pokemon.team).length;
        const nbFallenAllies = ((_b = (_a = pokemon.player) === null || _a === void 0 ? void 0 : _a.boardSize) !== null && _b !== void 0 ? _b : nbAlliesAlive) - nbAlliesAlive;
        const damage = ((_c = [15, 30, 60][pokemon.stars - 1]) !== null && _c !== void 0 ? _c : 60) +
            ((_d = [10, 15, 25][pokemon.stars - 1]) !== null && _d !== void 0 ? _d : 15) * nbFallenAllies;
        target.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit, true);
    }
}
exports.RetaliateStrategy = RetaliateStrategy;
class SlashStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        super.process(pokemon, state, board, target, crit);
        const damage = pokemon.stars === 3 ? 40 : pokemon.stars === 2 ? 20 : 10;
        const increasedCrit = crit
            ? crit
            : pokemon.stars === 3
                ? (0, random_1.chance)(0.9)
                : pokemon.stars === 2
                    ? (0, random_1.chance)(0.6)
                    : (0, random_1.chance)(0.3);
        target.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, increasedCrit);
    }
}
exports.SlashStrategy = SlashStrategy;
class OutrageStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        var _a;
        super.process(pokemon, state, board, target, crit, true);
        pokemon.status.triggerConfusion(2000, pokemon);
        const damage = Math.round(((_a = [1, 1.5, 2][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 2) * pokemon.atk);
        board
            .getAdjacentCells(pokemon.positionX, pokemon.positionY)
            .map((v) => v.value)
            .filter((v) => (v === null || v === void 0 ? void 0 : v.team) === target.team)
            .concat(target)
            .forEach((v) => {
            if (v) {
                pokemon.simulation.room.broadcast(types_1.Transfer.ABILITY, {
                    id: pokemon.simulation.id,
                    skill: Ability_1.Ability.OUTRAGE,
                    targetX: v.positionX,
                    targetY: v.positionY
                });
                v.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
            }
        });
    }
}
exports.OutrageStrategy = OutrageStrategy;
class FishiousRendStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        super.process(pokemon, state, board, target, crit, true);
        const damage = 80 * (pokemon.atkSpeed > target.atkSpeed ? 2 : 1);
        target.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit, true);
    }
}
exports.FishiousRendStrategy = FishiousRendStrategy;
class GoldRushStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        var _a, _b;
        super.process(pokemon, state, board, target, crit, true);
        const goldDamage = ((_a = pokemon.player) === null || _a === void 0 ? void 0 : _a.money) ? (_b = pokemon.player) === null || _b === void 0 ? void 0 : _b.money : 0;
        const damage = 20 + goldDamage;
        if (pokemon.player) {
            pokemon.player.addMoney(2);
        }
        target.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit, true);
    }
}
exports.GoldRushStrategy = GoldRushStrategy;
class MakeItRainStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        var _a, _b;
        super.process(pokemon, state, board, target, crit, true);
        const goldDamage = ((_a = pokemon.player) === null || _a === void 0 ? void 0 : _a.money) ? (_b = pokemon.player) === null || _b === void 0 ? void 0 : _b.money : 0;
        const damage = 100 + goldDamage;
        target.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit, true);
    }
}
exports.MakeItRainStrategy = MakeItRainStrategy;
class RecoverStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        super.process(pokemon, state, board, target, crit, true);
        pokemon.handleHeal(0.25 * pokemon.hp, pokemon, 1, crit);
    }
}
exports.RecoverStrategy = RecoverStrategy;
class CurseStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        var _a;
        super.process(pokemon, state, board, target, crit, true);
        const enemies = board.cells.filter((p) => p && p.team !== pokemon.team);
        enemies.sort((a, b) => (a.status.curse ? +1 : b.hp - a.hp));
        const enemyWithHighestHP = enemies[0];
        const curseDelay = ((_a = [8000, 4000][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 4000) * (1 - (0.2 * pokemon.ap) / 100);
        enemyWithHighestHP.status.triggerCurse(curseDelay);
    }
}
exports.CurseStrategy = CurseStrategy;
class DoomDesireStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        super.process(pokemon, state, board, target, crit, true);
        pokemon.commands.push(new simulation_command_1.DelayedCommand(() => {
            if (target && target.life > 0) {
                pokemon.simulation.room.broadcast(types_1.Transfer.ABILITY, {
                    id: pokemon.simulation.id,
                    skill: Ability_1.Ability.JUDGEMENT,
                    positionX: pokemon.positionX,
                    positionY: pokemon.positionY,
                    targetX: target.positionX,
                    targetY: target.positionY
                });
                target.handleSpecialDamage(150, board, Game_1.AttackType.SPECIAL, pokemon, crit, true);
            }
            else {
                pokemon.addPP(60, pokemon, 0, false);
            }
        }, 2000));
    }
}
exports.DoomDesireStrategy = DoomDesireStrategy;
class PoltergeistStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        super.process(pokemon, state, board, target, crit);
        let damage = pokemon.stars === 3 ? 120 : pokemon.stars === 2 ? 60 : 30;
        target.items.forEach((item) => (damage += Item_1.ArtificialItems.includes(item) ? 40 : 20));
        target.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
    }
}
exports.PoltergeistStrategy = PoltergeistStrategy;
class CrushGripStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        super.process(pokemon, state, board, target, crit);
        const damage = Math.round(20 + (pokemon.life / pokemon.hp) * 180);
        target.handleSpecialDamage(damage, board, Game_1.AttackType.PHYSICAL, pokemon, crit, true);
    }
}
exports.CrushGripStrategy = CrushGripStrategy;
class AuraSphereStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        var _a;
        super.process(pokemon, state, board, target, crit);
        const damage = (_a = [25, 50, 100][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 25;
        (0, orientation_1.effectInLine)(board, pokemon, target, (targetInLine) => {
            if (targetInLine != null && targetInLine.team !== pokemon.team) {
                targetInLine.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
                targetInLine.status.triggerSilence(3000, targetInLine, pokemon);
            }
        });
    }
}
exports.AuraSphereStrategy = AuraSphereStrategy;
class SketchStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        super.process(pokemon, state, board, target, crit);
    }
}
exports.SketchStrategy = SketchStrategy;
class LovelyKissStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        var _a, _b;
        super.process(pokemon, state, board, target, crit);
        if (target.status.sleep) {
            const damage = (_a = [50, 100, 150][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 50;
            target.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
        }
        else {
            const duration = Math.round(((_b = [2000, 4000, 6000][pokemon.stars - 1]) !== null && _b !== void 0 ? _b : 2000) * (1 + pokemon.ap / 100));
            target.status.triggerSleep(duration, target);
        }
    }
}
exports.LovelyKissStrategy = LovelyKissStrategy;
class OverdriveStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        super.process(pokemon, state, board, target, crit);
        const cells = board.getCellsInRadius(target.positionX, target.positionY, 3);
        cells.forEach((cell) => {
            if (cell && cell.value && cell.value.team !== pokemon.team) {
                const distance = (0, distance_1.distanceC)(cell.x, cell.y, pokemon.positionX, pokemon.positionY);
                const damage = pokemon.atk * (1.2 - 0.2 * (distance - 1));
                cell.value.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit, true);
            }
        });
    }
}
exports.OverdriveStrategy = OverdriveStrategy;
class TransformStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        super.process(pokemon, state, board, target, crit);
        if (target) {
            pokemon.index = target.index;
            pokemon.rarity = target.rarity;
            pokemon.stars = target.stars;
            pokemon.skill = target.skill;
            pokemon.passive = target.passive;
            pokemon.baseAtk = target.atk;
            pokemon.baseDef = target.def;
            pokemon.baseSpeDef = target.speDef;
            pokemon.baseRange = target.baseRange;
            pokemon.atk = target.atk;
            pokemon.atkSpeed = target.atkSpeed;
            pokemon.def = target.def;
            pokemon.speDef = target.speDef;
            pokemon.attackType = target.attackType;
            pokemon.ap = target.ap;
            pokemon.maxPP = target.maxPP;
            pokemon.atkSpeed = target.atkSpeed;
            pokemon.critChance = target.critChance;
            pokemon.critPower = target.critPower;
            pokemon.range = target.range;
            pokemon.attackSprite = target.attackSprite;
            pokemon.shiny = target.shiny;
            pokemon.emotion = target.emotion;
            pokemon.dodge = target.dodge;
        }
    }
}
exports.TransformStrategy = TransformStrategy;
class PsychicFangsStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        super.process(pokemon, state, board, target, crit);
        target.handleSpecialDamage(100, board, Game_1.AttackType.PHYSICAL, pokemon, crit, true);
        target.atk = Math.min(target.atk, target.baseAtk);
        target.def = Math.min(target.def, target.baseDef);
        target.speDef = Math.min(target.speDef, target.baseSpeDef);
    }
}
exports.PsychicFangsStrategy = PsychicFangsStrategy;
class ShedTailStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        super.process(pokemon, state, board, target, crit);
        const x = pokemon.positionX;
        const y = pokemon.positionY;
        const lowestHealthAlly = board.cells.filter((cell) => cell && cell.team === pokemon.team).sort((a, b) => a.life / a.hp - b.life / b.hp)[0];
        if (lowestHealthAlly) {
            lowestHealthAlly.addShield(80, pokemon, 1, crit);
            const substitute = pokemon_factory_1.default.createPokemonFromName(Pokemon_1.Pkm.SUBSTITUTE, pokemon.player);
            const coord = pokemon.simulation.getClosestAvailablePlaceOnBoardToPokemon(lowestHealthAlly, lowestHealthAlly.team);
            pokemon.moveTo(coord.x, coord.y, board);
            pokemon.simulation.addPokemon(substitute, x, y, pokemon.team, true);
        }
    }
}
exports.ShedTailStrategy = ShedTailStrategy;
class ShadowPunchStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        super.process(pokemon, state, board, target, crit);
        const x = pokemon.positionX;
        const y = pokemon.positionY;
        const lowestHealthEnemy = board.cells.filter((cell) => cell && cell.team !== pokemon.team).sort((a, b) => a.life / a.hp - b.life / b.hp)[0];
        if (lowestHealthEnemy) {
            const coord = pokemon.simulation.getClosestAvailablePlaceOnBoardToPokemon(lowestHealthEnemy, (lowestHealthEnemy.team + 1) % 2);
            pokemon.orientation = board.orientation(coord.x, coord.y, pokemon.positionX, pokemon.positionY, pokemon, lowestHealthEnemy);
            pokemon.moveTo(coord.x, coord.y, board);
            pokemon.effects.add(Effect_1.Effect.SHADOW_PUNCH_NEXT_ATTACK);
        }
    }
}
exports.ShadowPunchStrategy = ShadowPunchStrategy;
class MagnetBombStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        var _a, _b;
        super.process(pokemon, state, board, target, crit);
        const damage = (_a = [10, 20, 40][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 40;
        const centerDamage = (_b = [20, 40, 80][pokemon.stars - 1]) !== null && _b !== void 0 ? _b : 80;
        target.handleSpecialDamage(centerDamage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
        const cells = board.getAdjacentCells(target.positionX, target.positionY, false);
        cells.forEach((cell) => {
            if (cell.value && pokemon.team != cell.value.team) {
                cell.value.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
            }
        });
        const mappingAttractCell = [
            {
                to: [target.positionX - 1, target.positionY],
                from: [[target.positionX - 2, target.positionY]]
            },
            {
                to: [target.positionX + 1, target.positionY],
                from: [[target.positionX + 2, target.positionY]]
            },
            {
                to: [target.positionX, target.positionY - 1],
                from: [[target.positionX, target.positionY - 2]]
            },
            {
                to: [target.positionX, target.positionY + 1],
                from: [[target.positionX, target.positionY + 2]]
            },
            {
                to: [target.positionX - 1, target.positionY - 1],
                from: [
                    [target.positionX - 2, target.positionY - 1],
                    [target.positionX - 2, target.positionY - 2],
                    [target.positionX - 1, target.positionY - 2]
                ]
            },
            {
                to: [target.positionX + 1, target.positionY - 1],
                from: [
                    [target.positionX + 2, target.positionY - 1],
                    [target.positionX + 2, target.positionY - 2],
                    [target.positionX + 1, target.positionY - 2]
                ]
            },
            {
                to: [target.positionX - 1, target.positionY + 1],
                from: [
                    [target.positionX - 2, target.positionY + 1],
                    [target.positionX - 2, target.positionY + 2],
                    [target.positionX - 1, target.positionY + 2]
                ]
            },
            {
                to: [target.positionX + 1, target.positionY + 1],
                from: [
                    [target.positionX + 2, target.positionY + 1],
                    [target.positionX + 2, target.positionY + 2],
                    [target.positionX + 1, target.positionY + 2]
                ]
            }
        ];
        mappingAttractCell.forEach((cell) => {
            const attractedEnemies = cell.from
                .map(([x, y]) => board.getValue(x, y))
                .filter((enemy) => enemy && enemy.team === target.team);
            const [destX, destY] = cell.to;
            if (attractedEnemies.length > 0 &&
                board.getValue(destX, destY) === undefined) {
                const attractedEnemy = (0, random_1.pickRandomIn)(attractedEnemies);
                attractedEnemy.moveTo(destX, destY, board);
            }
        });
    }
}
exports.MagnetBombStrategy = MagnetBombStrategy;
class NightSlashStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        var _a;
        super.process(pokemon, state, board, target, crit);
        const damage = (_a = [15, 30, 60][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 60;
        crit = crit || (0, random_1.chance)(pokemon.critChance / 100);
        target.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
    }
}
exports.NightSlashStrategy = NightSlashStrategy;
class KowtowCleaveStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        var _a, _b;
        crit = (0, random_1.chance)(pokemon.critChance / 100);
        super.process(pokemon, state, board, target, crit);
        const nbAllies = board.cells.filter((p) => p && p.team === pokemon.team).length - 1;
        const nbFallenAllies = (0, number_1.min)(0)(((_b = (_a = pokemon.player) === null || _a === void 0 ? void 0 : _a.experienceManager.level) !== null && _b !== void 0 ? _b : 0) - nbAllies);
        const damage = Math.round(pokemon.atk * (1.5 + nbFallenAllies * 0.2 * (1 + pokemon.ap / 100)));
        target.handleSpecialDamage(damage, board, Game_1.AttackType.TRUE, pokemon, crit, false);
    }
}
exports.KowtowCleaveStrategy = KowtowCleaveStrategy;
class ShieldsDownStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        super.process(pokemon, state, board, target, crit, true);
        pokemon.simulation.room.broadcast(types_1.Transfer.ABILITY, {
            id: pokemon.simulation.id,
            skill: Ability_1.Ability.SHIELDS_UP,
            positionX: pokemon.positionX,
            positionY: pokemon.positionY
        });
        const pkm = (0, random_1.pickRandomIn)([
            Pokemon_1.Pkm.MINIOR_KERNEL_BLUE,
            Pokemon_1.Pkm.MINIOR_KERNEL_GREEN,
            Pokemon_1.Pkm.MINIOR_KERNEL_ORANGE,
            Pokemon_1.Pkm.MINIOR_KERNEL_RED
        ]);
        pokemon.index = Pokemon_1.PkmIndex[pkm];
        pokemon.name = pkm;
        pokemon.skill = Ability_1.Ability.SHIELDS_UP;
    }
}
exports.ShieldsDownStrategy = ShieldsDownStrategy;
class ShieldsUpStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        super.process(pokemon, state, board, target, crit, true);
        pokemon.simulation.room.broadcast(types_1.Transfer.ABILITY, {
            id: pokemon.simulation.id,
            skill: Ability_1.Ability.SHIELDS_UP,
            positionX: pokemon.positionX,
            positionY: pokemon.positionX
        });
        pokemon.index = Pokemon_1.PkmIndex[Pokemon_1.Pkm.MINIOR];
        pokemon.name = Pokemon_1.Pkm.MINIOR;
        pokemon.skill = Ability_1.Ability.SHIELDS_DOWN;
    }
}
exports.ShieldsUpStrategy = ShieldsUpStrategy;
class AuraWheelStrategy extends ability_strategy_1.AbilityStrategy {
    constructor() {
        super(...arguments);
        this.copyable = false;
    }
    process(pokemon, state, board, target, crit) {
        super.process(pokemon, state, board, target, crit);
        if (pokemon.name === Pokemon_1.Pkm.MORPEKO) {
            pokemon.name = Pokemon_1.Pkm.MORPEKO_HANGRY;
            pokemon.index = Pokemon_1.PkmIndex[Pokemon_1.Pkm.MORPEKO_HANGRY];
        }
        else {
            pokemon.name = Pokemon_1.Pkm.MORPEKO;
            pokemon.index = Pokemon_1.PkmIndex[Pokemon_1.Pkm.MORPEKO];
        }
        pokemon.addAttackSpeed(10, pokemon, 1, crit);
        target.handleSpecialDamage(60, board, Game_1.AttackType.SPECIAL, pokemon, crit, true);
    }
}
exports.AuraWheelStrategy = AuraWheelStrategy;
class LickStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        super.process(pokemon, state, board, target, crit);
        const damage = pokemon.stars === 3 ? 120 : pokemon.stars === 2 ? 60 : 30;
        target.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit, true);
        target.status.triggerConfusion(3000, target);
        target.status.triggerParalysis(3000, target);
    }
}
exports.LickStrategy = LickStrategy;
class FurySwipesStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        super.process(pokemon, state, board, target, crit);
        const nbAttacks = (0, random_1.randomBetween)(Math.round(2 * (1 + pokemon.ap / 100)), Math.round(5 * (1 + pokemon.ap / 100)));
        for (let n = 0; n < nbAttacks; n++) {
            target.handleSpecialDamage(Math.ceil(pokemon.atk), board, Game_1.AttackType.PHYSICAL, pokemon, crit);
        }
    }
}
exports.FurySwipesStrategy = FurySwipesStrategy;
class TickleStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        var _a;
        super.process(pokemon, state, board, target, crit);
        const attackLost = 3;
        const defLost = 3;
        const nbMaxEnemiesHit = (_a = [1, 2][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 2;
        let nbEnemiesHit = 0;
        board
            .getAdjacentCells(pokemon.positionX, pokemon.positionY)
            .forEach((cell) => {
            if (cell.value &&
                cell.value.team !== pokemon.team &&
                nbEnemiesHit < nbMaxEnemiesHit) {
                nbEnemiesHit++;
                cell.value.addAttack(-attackLost, pokemon, 1, true);
                cell.value.addDefense(-defLost, pokemon, 1, true);
            }
        });
    }
}
exports.TickleStrategy = TickleStrategy;
class AromatherapyStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        var _a;
        super.process(pokemon, state, board, target, crit);
        const heal = (_a = [20, 40, 80][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 20;
        board
            .getAdjacentCells(pokemon.positionX, pokemon.positionY)
            .forEach((cell) => {
            if (cell.value && cell.value.team === pokemon.team) {
                cell.value.status.clearNegativeStatus();
                cell.value.handleHeal(heal, pokemon, 1, crit);
            }
        });
    }
}
exports.AromatherapyStrategy = AromatherapyStrategy;
class DetectStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        super.process(pokemon, state, board, target, crit);
        let nbAdjacentEnemies = 0;
        const adjacentAllies = [];
        board
            .getAdjacentCells(pokemon.positionX, pokemon.positionY)
            .forEach((cell) => {
            if (cell.value && cell.value.team !== pokemon.team) {
                nbAdjacentEnemies++;
            }
            else if (cell.value && cell.value.team === pokemon.team) {
                adjacentAllies.push(cell.value);
            }
        });
        adjacentAllies.forEach((ally) => ally.status.triggerProtect(Math.round(500 * nbAdjacentEnemies * (1 + pokemon.ap / 100))));
    }
}
exports.DetectStrategy = DetectStrategy;
class SpacialRendStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        super.process(pokemon, state, board, target, crit);
        const damage = 100;
        const enemies = board.cells.filter((p) => p && p.team !== pokemon.team);
        const n = enemies.length;
        for (let i = 0; i < Math.floor(n / 2); i++) {
            board.swapValue(enemies[i].positionX, enemies[i].positionY, enemies[n - 1 - i].positionX, enemies[n - 1 - i].positionY);
        }
        const y = (0, number_1.clamp)(target.positionY, 2, Config_1.BOARD_HEIGHT - 2);
        for (let x = 0; x < Config_1.BOARD_WIDTH; x++) {
            const targetHit = board.getValue(x, y);
            if (targetHit && targetHit.team !== pokemon.team) {
                targetHit.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
            }
        }
    }
}
exports.SpacialRendStrategy = SpacialRendStrategy;
class MultiAttackStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        var _a;
        super.process(pokemon, state, board, target, crit);
        const silvallyType = (0, schemas_1.values)(pokemon.types).at(-1);
        const synergies = (_a = pokemon.player) === null || _a === void 0 ? void 0 : _a.synergies;
        let synergyLevelCount = 0;
        if (synergies && silvallyType && synergies.has(silvallyType)) {
            synergyLevelCount = synergies.get(silvallyType);
        }
        const damage = 15 * synergyLevelCount;
        board
            .getAdjacentCells(pokemon.positionX, pokemon.positionY)
            .map((v) => v.value)
            .forEach((v) => {
            if (v && v.team !== pokemon.team) {
                v.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
            }
        });
    }
}
exports.MultiAttackStrategy = MultiAttackStrategy;
class PetalBlizzardStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        super.process(pokemon, state, board, target, crit);
        board
            .getCellsInRange(pokemon.positionX, pokemon.positionY, 1)
            .forEach((cell) => {
            if (cell.value && cell.value.team !== pokemon.team) {
                cell.value.handleSpecialDamage(30, board, Game_1.AttackType.SPECIAL, pokemon, crit, true);
            }
        });
        pokemon.addAbilityPower(10, pokemon, 0, false);
    }
}
exports.PetalBlizzardStrategy = PetalBlizzardStrategy;
class SunsteelStrikeStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        super.process(pokemon, state, board, target, crit, true);
        const mostSurroundedCoordinate = state.getMostSurroundedCoordinateAvailablePlace(pokemon, board);
        if (mostSurroundedCoordinate) {
            pokemon.skydiveTo(mostSurroundedCoordinate.x, mostSurroundedCoordinate.y, board);
            pokemon.commands.push(new simulation_command_1.DelayedCommand(() => {
                pokemon.simulation.room.broadcast(types_1.Transfer.ABILITY, {
                    id: pokemon.simulation.id,
                    skill: Ability_1.Ability.SUNSTEEL_STRIKE,
                    positionX: mostSurroundedCoordinate.x,
                    positionY: mostSurroundedCoordinate.y,
                    targetX: mostSurroundedCoordinate.x,
                    targetY: mostSurroundedCoordinate.y
                });
            }, 500));
            pokemon.commands.push(new simulation_command_1.DelayedCommand(() => {
                const cells = board.getAdjacentCells(mostSurroundedCoordinate.x, mostSurroundedCoordinate.y);
                pokemon.simulation.room.broadcast(types_1.Transfer.ABILITY, {
                    id: pokemon.simulation.id,
                    skill: Ability_1.Ability.SEARING_SHOT,
                    positionX: mostSurroundedCoordinate.x,
                    positionY: mostSurroundedCoordinate.y,
                    targetX: mostSurroundedCoordinate.x,
                    targetY: mostSurroundedCoordinate.y
                });
                cells.forEach((cell) => {
                    if (cell.value && cell.value.team !== pokemon.team) {
                        cell.value.handleSpecialDamage(80, board, Game_1.AttackType.SPECIAL, pokemon, crit);
                        cell.value.status.triggerBurn(3000, cell.value, pokemon);
                    }
                });
            }, 1000));
        }
    }
}
exports.SunsteelStrikeStrategy = SunsteelStrikeStrategy;
class MoongeistBeamStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        super.process(pokemon, state, board, target, crit);
        (0, orientation_1.effectInLine)(board, pokemon, target, (targetInLine) => {
            if (targetInLine != null) {
                if (targetInLine.team !== pokemon.team) {
                    targetInLine.handleSpecialDamage(100, board, Game_1.AttackType.SPECIAL, pokemon, crit);
                    targetInLine.status.triggerParalysis(3000, targetInLine);
                }
                else {
                    targetInLine.addShield(100, pokemon, 1, crit);
                }
            }
        });
    }
}
exports.MoongeistBeamStrategy = MoongeistBeamStrategy;
class BloodMoonStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        super.process(pokemon, state, board, target, crit);
        const damage = Math.round(2 * pokemon.atk);
        (0, orientation_1.effectInLine)(board, pokemon, target, (targetInLine) => {
            if (targetInLine != null) {
                if (targetInLine.team !== pokemon.team) {
                    targetInLine.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
                    targetInLine.status.triggerWound(3000, targetInLine, pokemon);
                }
            }
        });
    }
}
exports.BloodMoonStrategy = BloodMoonStrategy;
class MantisBladesStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        super.process(pokemon, state, board, target, crit);
        const damage = pokemon.stars === 1 ? 30 : pokemon.stars === 2 ? 60 : 120;
        target.handleSpecialDamage(damage, board, Game_1.AttackType.PHYSICAL, pokemon, crit, true);
        target.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit, true);
        target.handleSpecialDamage(damage, board, Game_1.AttackType.TRUE, pokemon, crit, true);
    }
}
exports.MantisBladesStrategy = MantisBladesStrategy;
class SpiritBreakStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        var _a;
        super.process(pokemon, state, board, target, crit);
        const damage = (_a = [20, 40, 80][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 80;
        target.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit, true);
        const apDebuff = -20;
        target.addAbilityPower(apDebuff, pokemon, 1, crit);
    }
}
exports.SpiritBreakStrategy = SpiritBreakStrategy;
class SheerColdStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        var _a;
        super.process(pokemon, state, board, target, crit);
        let executeChance = (0, number_1.clamp)(0, 0.3 * (1 + pokemon.ap / 100) +
            (0, number_1.min)(0)((pokemon.life - target.life) / target.life), 1);
        if (target.types.has(Synergy_1.Synergy.ICE))
            executeChance = 0;
        else if (target.status.freeze)
            executeChance = 1;
        let damage = (_a = [50, 100, 200][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 200;
        if ((0, random_1.chance)(executeChance))
            damage = 9999;
        target.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit, true);
    }
}
exports.SheerColdStrategy = SheerColdStrategy;
class ZapCannonStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        super.process(pokemon, state, board, target, crit);
        const damage = pokemon.stars === 3 ? 100 : pokemon.stars === 2 ? 50 : 25;
        const duration = pokemon.stars === 3 ? 4000 : pokemon.stars === 2 ? 2000 : 1000;
        target.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit, true);
        target.status.triggerArmorReduction(duration, target);
        target.status.triggerParalysis(duration, target);
    }
}
exports.ZapCannonStrategy = ZapCannonStrategy;
class IceHammerStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        super.process(pokemon, state, board, target, crit);
        const damage = pokemon.stars === 2 ? 100 : 50;
        target.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit, true);
        target.status.triggerFreeze(3000, target);
        pokemon.status.triggerParalysis(3000, pokemon);
    }
}
exports.IceHammerStrategy = IceHammerStrategy;
class FacadeStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        super.process(pokemon, state, board, target, crit);
        let damage = pokemon.stars === 3 ? 80 : pokemon.stars === 2 ? 40 : 20;
        if (pokemon.status.hasNegativeStatus()) {
            damage *= 2;
        }
        target.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit, true);
    }
}
exports.FacadeStrategy = FacadeStrategy;
class ExtremeSpeedStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        super.process(pokemon, state, board, target, crit, true);
        const damage = 40;
        const farthestCoordinate = board.getFarthestTargetCoordinateAvailablePlace(pokemon);
        if (farthestCoordinate) {
            pokemon.simulation.room.broadcast(types_1.Transfer.ABILITY, {
                id: pokemon.simulation.id,
                skill: Ability_1.Ability.EXTREME_SPEED,
                positionX: pokemon.positionX,
                positionY: pokemon.positionY,
                targetX: farthestCoordinate.x,
                targetY: farthestCoordinate.y
            });
            const cells = board.getCellsBetween(pokemon.positionX, pokemon.positionY, farthestCoordinate.x, farthestCoordinate.y);
            cells.forEach((cell) => {
                if (cell.value && cell.value.team != pokemon.team) {
                    cell.value.handleSpecialDamage(damage, board, Game_1.AttackType.PHYSICAL, pokemon, crit);
                }
            });
            pokemon.moveTo(farthestCoordinate.x, farthestCoordinate.y, board);
        }
    }
}
exports.ExtremeSpeedStrategy = ExtremeSpeedStrategy;
class PsychoBoostStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        super.process(pokemon, state, board, target, crit, true);
        const damage = 140;
        [target.positionX - 1, target.positionX, target.positionX + 1].forEach((positionX) => {
            const tg = board.getValue(positionX, target.positionY);
            if (tg && tg.team !== pokemon.team) {
                pokemon.simulation.room.broadcast(types_1.Transfer.ABILITY, {
                    id: pokemon.simulation.id,
                    skill: Ability_1.Ability.PSYCHO_BOOST,
                    positionX: tg.positionX,
                    positionY: tg.positionY
                });
                tg.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit, true);
                pokemon.addAbilityPower(-20, pokemon, 0, false);
            }
        });
    }
}
exports.PsychoBoostStrategy = PsychoBoostStrategy;
class PollenPuffStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        super.process(pokemon, state, board, target, crit, true);
        const lowestHealthAlly = board.cells.filter((cell) => cell && cell.team === pokemon.team).sort((a, b) => a.life - b.life)[0];
        if (lowestHealthAlly) {
            lowestHealthAlly.handleHeal(pokemon.stars === 3 ? 120 : pokemon.stars === 2 ? 60 : 30, pokemon, 1, crit);
            pokemon.simulation.room.broadcast(types_1.Transfer.ABILITY, {
                id: pokemon.simulation.id,
                skill: Ability_1.Ability.POLLEN_PUFF,
                positionX: pokemon.positionX,
                positionY: pokemon.positionY,
                targetX: lowestHealthAlly.positionX,
                targetY: lowestHealthAlly.positionY
            });
        }
    }
}
exports.PollenPuffStrategy = PollenPuffStrategy;
class PsystrikeStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        super.process(pokemon, state, board, target, crit, true);
        const furthestTarget = state.getFarthestTarget(pokemon, board);
        if (furthestTarget) {
            pokemon.simulation.room.broadcast(types_1.Transfer.ABILITY, {
                id: pokemon.simulation.id,
                skill: Ability_1.Ability.PSYSTRIKE,
                positionX: pokemon.positionX,
                positionY: pokemon.positionY,
                targetX: furthestTarget.positionX,
                targetY: furthestTarget.positionY
            });
            const cells = board.getCellsBetween(pokemon.positionX, pokemon.positionY, furthestTarget.positionX, furthestTarget.positionY);
            cells.forEach((cell) => {
                if (cell.value && cell.value.team != pokemon.team) {
                    cell.value.handleSpecialDamage(100, board, Game_1.AttackType.PHYSICAL, pokemon, crit);
                    const teleportationCell = board.getTeleportationCell(cell.value.positionX, cell.value.positionY);
                    if (teleportationCell) {
                        cell.value.moveTo(teleportationCell.x, teleportationCell.y, board);
                    }
                    else {
                        logger_1.logger.error("unable to teleport pokemon", cell.value);
                    }
                }
            });
        }
    }
}
exports.PsystrikeStrategy = PsystrikeStrategy;
class DreamEaterStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        super.process(pokemon, state, board, target, crit, true);
        const damage = pokemon.stars === 1 ? 45 : 90;
        const duration = pokemon.stars === 1 ? 2500 : 5000;
        const sleepingTarget = board.find((x, y, entity) => entity.status.sleep && entity.team !== pokemon.team);
        if (sleepingTarget) {
            pokemon.simulation.room.broadcast(types_1.Transfer.ABILITY, {
                id: pokemon.simulation.id,
                skill: Ability_1.Ability.DREAM_EATER,
                targetX: sleepingTarget.positionX,
                targetY: sleepingTarget.positionY
            });
            const coord = state.getNearestAvailablePlaceCoordinates(sleepingTarget, board, 1);
            if (coord) {
                pokemon.moveTo(coord.x, coord.y, board);
            }
            const { takenDamage } = sleepingTarget.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit, true);
            pokemon.handleHeal(takenDamage, pokemon, 1, crit);
        }
        else {
            target.status.triggerSleep(duration, target);
            pokemon.simulation.room.broadcast(types_1.Transfer.ABILITY, {
                id: pokemon.simulation.id,
                skill: Ability_1.Ability.DREAM_EATER,
                targetX: target.positionX,
                targetY: target.positionY
            });
        }
    }
}
exports.DreamEaterStrategy = DreamEaterStrategy;
class SparkStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        super.process(pokemon, state, board, target, crit, true);
        let damage = pokemon.stars === 1 ? 40 : 80;
        target.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit, true);
        pokemon.simulation.room.broadcast(types_1.Transfer.ABILITY, {
            id: pokemon.simulation.id,
            skill: Ability_1.Ability.SPARK,
            targetX: target.positionX,
            targetY: target.positionY,
            positionX: pokemon.positionX,
            positionY: pokemon.positionY
        });
        let previousTarget = target;
        let n = 0;
        while (n <= 4) {
            const bounceTarget = board
                .getAdjacentCells(target.positionX, target.positionY)
                .filter((cell) => cell.value && cell.value.team === target.team)
                .map((c) => c.value)[0];
            if (bounceTarget) {
                pokemon.simulation.room.broadcast(types_1.Transfer.ABILITY, {
                    id: pokemon.simulation.id,
                    skill: Ability_1.Ability.SPARK,
                    targetX: bounceTarget.positionX,
                    targetY: bounceTarget.positionY,
                    positionX: previousTarget.positionX,
                    positionY: previousTarget.positionY,
                    delay: n
                });
                bounceTarget.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit, true);
                previousTarget = bounceTarget;
                damage /= 2;
                n++;
            }
            else {
                n = 999;
            }
        }
    }
}
exports.SparkStrategy = SparkStrategy;
class CrunchStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        var _a;
        super.process(pokemon, state, board, target, crit);
        const damage = (_a = [40, 80, 150][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 150;
        const { death } = target.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit, true);
        if (death) {
            pokemon.handleHeal(Math.ceil(0.5 * target.hp), pokemon, 0, crit);
        }
    }
}
exports.CrunchStrategy = CrunchStrategy;
class CrossPoisonStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        var _a;
        super.process(pokemon, state, board, target, crit);
        const damage = (_a = [30, 60, 120][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 120;
        board
            .getAdjacentCells(target.positionX, target.positionY, true)
            .forEach((cell) => {
            if (cell.value && cell.value.team !== pokemon.team) {
                cell.value.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit, true);
                cell.value.status.triggerPoison(2000, cell.value, pokemon);
            }
        });
    }
}
exports.CrossPoisonStrategy = CrossPoisonStrategy;
class FireFangStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        var _a;
        super.process(pokemon, state, board, target, crit);
        const damage = (_a = [30, 60, 120][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 120;
        target.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit, true);
        target.status.triggerBurn(2000, target, pokemon);
    }
}
exports.FireFangStrategy = FireFangStrategy;
class IceFangStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        var _a;
        super.process(pokemon, state, board, target, crit);
        const damage = (_a = [30, 60, 120][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 120;
        target.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit, true);
        target.status.triggerFreeze(1000, target);
    }
}
exports.IceFangStrategy = IceFangStrategy;
class ThunderFangStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        var _a;
        super.process(pokemon, state, board, target, crit);
        const damage = (_a = [30, 60, 120][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 120;
        target.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit, true);
        target.status.triggerParalysis(3000, target);
    }
}
exports.ThunderFangStrategy = ThunderFangStrategy;
class TailWhipStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        super.process(pokemon, state, board, target, crit);
        const defLoss = -0.3 * target.def;
        target.addDefense(defLoss, pokemon, 1, crit);
    }
}
exports.TailWhipStrategy = TailWhipStrategy;
class PsyshieldBashStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        super.process(pokemon, state, board, target, crit);
        const damage = 60;
        const farthestCoordinate = board.getFarthestTargetCoordinateAvailablePlace(pokemon);
        if (farthestCoordinate) {
            pokemon.simulation.room.broadcast(types_1.Transfer.ABILITY, {
                id: pokemon.simulation.id,
                skill: Ability_1.Ability.PSYSHIELD_BASH,
                positionX: pokemon.positionX,
                positionY: pokemon.positionY,
                targetX: farthestCoordinate.x,
                targetY: farthestCoordinate.y
            });
            const cells = board.getCellsBetween(pokemon.positionX, pokemon.positionY, farthestCoordinate.x, farthestCoordinate.y);
            cells.forEach((cell) => {
                if (cell.value && cell.value.team != pokemon.team) {
                    cell.value.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
                }
            });
            pokemon.moveTo(farthestCoordinate.x, farthestCoordinate.y, board);
            pokemon.status.triggerProtect(1000);
        }
    }
}
exports.PsyshieldBashStrategy = PsyshieldBashStrategy;
class TorchSongStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        super.process(pokemon, state, board, target, crit, true);
        const damage = pokemon.stars === 3 ? 30 : pokemon.stars === 2 ? 20 : 10;
        const count = pokemon.stars;
        const apBoost = 10;
        const scorchedEnnemiesId = new Set();
        const enemies = board.cells.filter((p) => p && p.team !== pokemon.team);
        const enemiesHit = enemies
            .sort((a, b) => b.items.size - a.items.size)
            .slice(0, count);
        enemiesHit.forEach((enemy) => {
            pokemon.simulation.room.broadcast(types_1.Transfer.ABILITY, {
                id: pokemon.simulation.id,
                skill: "TORCH_SONG_CAST",
                positionX: pokemon.positionX,
                positionY: pokemon.positionY,
                targetX: enemy.positionX,
                targetY: enemy.positionY
            });
            const cells = board
                .getAdjacentCells(enemy.positionX, enemy.positionY, true)
                .concat({ x: enemy.positionX, y: enemy.positionY, value: enemy });
            cells.forEach((cell) => {
                if (cell.value && cell.value.team !== pokemon.team) {
                    pokemon.simulation.room.broadcast(types_1.Transfer.ABILITY, {
                        id: pokemon.simulation.id,
                        skill: Ability_1.Ability.TORCH_SONG,
                        positionX: cell.value.positionX,
                        positionY: cell.value.positionY
                    });
                    cell.value.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
                    if (cell.value.status.burn ||
                        cell.value.status.curse ||
                        cell.value.status.silence) {
                        scorchedEnnemiesId.add(cell.value.id);
                    }
                }
            });
        });
        pokemon.addAbilityPower(scorchedEnnemiesId.size * apBoost, pokemon, 0, false);
    }
}
exports.TorchSongStrategy = TorchSongStrategy;
class PowerWhipStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        var _a;
        super.process(pokemon, state, board, target, crit, true);
        const damage = (_a = [30, 60][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 60;
        const furthestTarget = state.getFarthestTarget(pokemon, board);
        if (furthestTarget) {
            pokemon.simulation.room.broadcast(types_1.Transfer.ABILITY, {
                id: pokemon.simulation.id,
                skill: Ability_1.Ability.POWER_WHIP,
                positionX: pokemon.positionX,
                positionY: pokemon.positionY
            });
            const cells = board.getCellsBetween(pokemon.positionX, pokemon.positionY, furthestTarget.positionX, furthestTarget.positionY);
            cells.forEach((cell) => {
                if (cell.value && cell.value.team != pokemon.team) {
                    pokemon.simulation.room.broadcast(types_1.Transfer.ABILITY, {
                        id: pokemon.simulation.id,
                        skill: "POWER_WHIP/hit",
                        positionX: cell.value.positionX,
                        positionY: cell.value.positionY
                    });
                    cell.value.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
                }
            });
        }
    }
}
exports.PowerWhipStrategy = PowerWhipStrategy;
class DarkHarvestStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        super.process(pokemon, state, board, target, crit, true);
        const mostSurroundedCoordinate = state.getMostSurroundedCoordinateAvailablePlace(pokemon, board);
        if (mostSurroundedCoordinate) {
            pokemon.moveTo(mostSurroundedCoordinate.x, mostSurroundedCoordinate.y, board);
            pokemon.status.triggerDarkHarvest(3200);
            pokemon.status.triggerSilence(3200, pokemon, pokemon);
        }
    }
}
exports.DarkHarvestStrategy = DarkHarvestStrategy;
class PsyShockStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        var _a;
        super.process(pokemon, state, board, target, crit, true);
        const ppBurn = (_a = [20, 40, 80][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 80;
        const ppStolen = (0, number_1.max)(target.pp)(ppBurn);
        const extraPP = ppBurn - ppStolen;
        target.addPP(-ppStolen, pokemon, 1, crit);
        pokemon.addShield(ppBurn, pokemon, 1, crit);
        if (extraPP > 0) {
            target.handleSpecialDamage(extraPP, board, Game_1.AttackType.SPECIAL, pokemon, crit, true);
        }
    }
}
exports.PsyShockStrategy = PsyShockStrategy;
class HeavySlamStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        super.process(pokemon, state, board, target, crit);
        let damage = pokemon.stars === 3 ? 40 : pokemon.stars === 2 ? 20 : 10;
        if (pokemon.hp > target.hp) {
            damage = Math.round(damage * (1 + (pokemon.hp - target.hp) / target.hp));
        }
        pokemon.addShield(damage, pokemon, 1, crit);
        board
            .getAdjacentCells(pokemon.positionX, pokemon.positionY, false)
            .forEach((cell) => {
            if (cell.value && pokemon.team != cell.value.team) {
                cell.value.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
            }
        });
    }
}
exports.HeavySlamStrategy = HeavySlamStrategy;
class RapidSpinStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        super.process(pokemon, state, board, target, crit);
        const damage = pokemon.stars === 2 ? 50 : 20;
        const statBuff = pokemon.stars === 2 ? 0.3 : 0.2;
        const buffAmount = Math.round(statBuff * pokemon.atk);
        target.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
        pokemon.addDefense(buffAmount, pokemon, 1, true);
        pokemon.addSpecialDefense(buffAmount, pokemon, 1, true);
    }
}
exports.RapidSpinStrategy = RapidSpinStrategy;
class BounceStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        super.process(pokemon, state, board, target, crit, true);
        const nbBounces = Math.round([1, 2, 3][pokemon.stars - 1] * (1 + pokemon.ap / 100));
        for (let i = 0; i < nbBounces; i++) {
            pokemon.commands.push(new simulation_command_1.DelayedCommand(() => {
                const destination = board.getFarthestTargetCoordinateAvailablePlace(pokemon);
                if (destination && pokemon.hp > 0) {
                    pokemon.simulation.room.broadcast(types_1.Transfer.ABILITY, {
                        id: pokemon.simulation.id,
                        skill: Ability_1.Ability.BOUNCE,
                        positionX: pokemon.positionX,
                        positionY: pokemon.positionY
                    });
                    pokemon.moveTo(destination.x, destination.y, board);
                    const adjacentCells = board.getAdjacentCells(destination.x, destination.y);
                    adjacentCells.forEach((cell) => {
                        if (cell.value && cell.value.team !== pokemon.team) {
                            const damage = 10;
                            cell.value.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
                        }
                    });
                }
            }, i * 400));
        }
    }
}
exports.BounceStrategy = BounceStrategy;
class GunkShotStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        super.process(pokemon, state, board, target, crit);
        const damage = pokemon.stars === 2 ? 100 : 50;
        const baseDuration = pokemon.stars === 2 ? 4000 : 2000;
        const duration = Math.round(baseDuration * (1 + pokemon.ap / 100));
        target.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
        target.status.triggerPoison(duration, target, pokemon);
    }
}
exports.GunkShotStrategy = GunkShotStrategy;
class AncientPowerStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        super.process(pokemon, state, board, target, crit);
        const damage = pokemon.stars === 2 ? 80 : 40;
        target.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
        pokemon.addAbilityPower(25, pokemon, 1, crit);
    }
}
exports.AncientPowerStrategy = AncientPowerStrategy;
class MuddyWaterStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        super.process(pokemon, state, board, target, crit, true);
        const cells = board.getCellsInFront(pokemon, target);
        const damage = pokemon.stars === 2 ? 80 : 40;
        cells.forEach((cell) => {
            if (cell.value && cell.value.team !== pokemon.team) {
                pokemon.simulation.room.broadcast(types_1.Transfer.ABILITY, {
                    id: pokemon.simulation.id,
                    skill: pokemon.skill,
                    targetX: cell.value.positionX,
                    targetY: cell.value.positionY
                });
                cell.value.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
                cell.value.status.triggerArmorReduction(4000, cell.value);
                cell.value.status.triggerWound(4000, cell.value, pokemon);
            }
        });
    }
}
exports.MuddyWaterStrategy = MuddyWaterStrategy;
class MoonDreamStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        var _a;
        super.process(pokemon, state, board, target, crit, true);
        const duration = pokemon.stars === 1 ? 3000 : pokemon.stars === 2 ? 6000 : 9000;
        const shield = (_a = [10, 20, 30][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 30;
        const count = 3;
        const allies = board.cells.filter((p) => p && p.team === pokemon.team && p.id !== pokemon.id);
        const alliesHit = allies
            .sort((a, b) => (0, distance_1.distanceM)(a.positionX, a.positionY, pokemon.targetX, pokemon.targetY) -
            (0, distance_1.distanceM)(b.positionX, b.positionY, pokemon.targetX, pokemon.targetY))
            .slice(0, count);
        alliesHit.forEach((ally) => {
            ally.addShield(shield, pokemon, 1, crit);
            pokemon.simulation.room.broadcast(types_1.Transfer.ABILITY, {
                id: pokemon.simulation.id,
                skill: Ability_1.Ability.MOON_DREAM,
                positionX: ally.positionX,
                positionY: ally.positionY
            });
        });
        target.status.triggerSleep(duration, target);
    }
}
exports.MoonDreamStrategy = MoonDreamStrategy;
class StoneAxeStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        super.process(pokemon, state, board, target, crit);
        const cells = board.getAdjacentCells(target.positionX, target.positionY);
        const damage = 50;
        target.handleSpecialDamage(damage, board, Game_1.AttackType.TRUE, pokemon, crit);
        cells.forEach((cell) => {
            const index = cell.y * board.columns + cell.x;
            if (board.effects[index] !== Effect_1.Effect.STEALTH_ROCKS) {
                board.effects[index] = Effect_1.Effect.STEALTH_ROCKS;
                pokemon.simulation.room.broadcast(types_1.Transfer.BOARD_EVENT, {
                    simulationId: pokemon.simulation.id,
                    type: Game_1.BoardEvent.STEALTH_ROCKS,
                    x: cell.x,
                    y: cell.y
                });
            }
            pokemon.simulation.room.broadcast(types_1.Transfer.ABILITY, {
                id: pokemon.simulation.id,
                skill: Ability_1.Ability.STEALTH_ROCKS,
                positionX: cell.x,
                positionY: cell.y
            });
            if (cell.value && cell.value.team !== pokemon.team) {
                cell.value.effects.add(Effect_1.Effect.STEALTH_ROCKS);
            }
        });
    }
}
exports.StoneAxeStrategy = StoneAxeStrategy;
class CameraFlashStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        super.process(pokemon, state, board, target, crit);
        target.status.triggerParalysis(2000, target);
    }
}
exports.CameraFlashStrategy = CameraFlashStrategy;
class RockHeadStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        super.process(pokemon, state, board, target, crit);
        const damage = Math.round(1.2 * (pokemon.atk + pokemon.def));
        target.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit, true);
    }
}
exports.RockHeadStrategy = RockHeadStrategy;
class CrushClawStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        var _a;
        super.process(pokemon, state, board, target, crit);
        const defLoss = (_a = [-3, -6][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : -6;
        target.addDefense(defLoss, pokemon, 0, false);
        for (let i = 0; i < 2; i++) {
            target.handleSpecialDamage(pokemon.atk, board, Game_1.AttackType.PHYSICAL, pokemon, crit, true);
        }
    }
}
exports.CrushClawStrategy = CrushClawStrategy;
class FireLashStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        super.process(pokemon, state, board, target, crit);
        target.status.triggerArmorReduction(4000, target);
        target.handleSpecialDamage(120, board, Game_1.AttackType.SPECIAL, pokemon, crit, true);
    }
}
exports.FireLashStrategy = FireLashStrategy;
class DrainPunchStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        super.process(pokemon, state, board, target, crit);
        const result = target.handleSpecialDamage(pokemon.atk * 2, board, Game_1.AttackType.SPECIAL, pokemon, crit, true);
        pokemon.handleHeal(result.takenDamage * 4, pokemon, 0, false);
    }
}
exports.DrainPunchStrategy = DrainPunchStrategy;
class FairyLockStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        super.process(pokemon, state, board, target, crit);
        const cells = board
            .getAdjacentCells(target.positionX, target.positionY, true)
            .filter((cell) => cell && cell.value && cell.value.team !== pokemon.team);
        cells.forEach((cell) => {
            var _a, _b, _c;
            pokemon.simulation.room.broadcast(types_1.Transfer.ABILITY, {
                id: pokemon.simulation.id,
                skill: pokemon.skill,
                targetX: (_a = cell.value) === null || _a === void 0 ? void 0 : _a.positionX,
                targetY: (_b = cell.value) === null || _b === void 0 ? void 0 : _b.positionY
            });
            (_c = cell.value) === null || _c === void 0 ? void 0 : _c.handleSpecialDamage(Math.round(90 / cells.length), board, Game_1.AttackType.SPECIAL, pokemon, crit);
        });
        target.status.triggerLocked(5000, target);
    }
}
exports.FairyLockStrategy = FairyLockStrategy;
class GravityStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        super.process(pokemon, state, board, target, crit);
        const lockDuration = 2000 * (1 + pokemon.ap / 100);
        board.forEach((x, y, unitOnCell) => {
            if (unitOnCell && unitOnCell.team !== pokemon.team) {
                unitOnCell.status.triggerLocked(lockDuration, target);
            }
        });
    }
}
exports.GravityStrategy = GravityStrategy;
class GulpMissileStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        super.process(pokemon, state, board, target, crit);
        let missilePkm = Pokemon_1.Pkm.ARROKUDA;
        let missilePkmString = "arrokuda";
        const damage = 55;
        if ((0, random_1.chance)(0.3)) {
            missilePkm = Pokemon_1.Pkm.PIKACHU;
            missilePkmString = "pikachu";
        }
        pokemon.simulation.room.broadcast(types_1.Transfer.ABILITY, {
            id: pokemon.simulation.id,
            skill: `GULP_MISSILE/${missilePkmString}`,
            positionX: pokemon.positionX,
            positionY: pokemon.positionY,
            targetX: target.positionX,
            targetY: target.positionY
        });
        const missile = pokemon_factory_1.default.createPokemonFromName(missilePkm, pokemon.player);
        pokemon.commands.push(new simulation_command_1.DelayedCommand(() => {
            const coord = state.getNearestAvailablePlaceCoordinates(target, board);
            if (coord) {
                const entity = pokemon.simulation.addPokemon(missile, coord.x, coord.y, pokemon.team, true);
                entity.pp = entity.maxPP;
                const cells = board.getAdjacentCells(target.positionX, target.positionY, true);
                cells.forEach((cell) => {
                    if (cell.value && cell.value.team !== pokemon.team) {
                        cell.value.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
                    }
                });
            }
        }, (0, distance_1.distanceM)(target.positionX, target.positionY, pokemon.positionX, pokemon.positionY) *
            150 -
            30));
    }
}
exports.GulpMissileStrategy = GulpMissileStrategy;
class DoubleShockStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        super.process(pokemon, state, board, target, crit);
        const damage = pokemon.stars === 3 ? 200 : pokemon.stars === 2 ? 100 : 50;
        target.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
        pokemon.status.triggerParalysis(3000, pokemon);
    }
}
exports.DoubleShockStrategy = DoubleShockStrategy;
class PurifyStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        var _a;
        super.process(pokemon, state, board, target, crit);
        const heal = (_a = [15, 30, 60][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 60;
        pokemon.handleHeal(heal, pokemon, 1, crit);
        pokemon.status.clearNegativeStatus();
    }
}
exports.PurifyStrategy = PurifyStrategy;
class PastelVeilStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        var _a;
        super.process(pokemon, state, board, target, crit, true);
        const shield = (_a = [20, 40, 80][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 80;
        const farthestCoordinate = board.getFarthestTargetCoordinateAvailablePlace(pokemon, true);
        if (farthestCoordinate) {
            const cells = board.getCellsBetween(pokemon.positionX, pokemon.positionY, farthestCoordinate.x, farthestCoordinate.y);
            cells.forEach((cell) => {
                if (cell.value && cell.value.team === pokemon.team) {
                    cell.value.status.clearNegativeStatus();
                    cell.value.addShield(shield, pokemon, 1, crit);
                }
            });
            pokemon.simulation.room.broadcast(types_1.Transfer.ABILITY, {
                id: pokemon.simulation.id,
                skill: pokemon.skill,
                positionX: pokemon.positionX,
                positionY: pokemon.positionY,
                targetX: farthestCoordinate.x,
                targetY: farthestCoordinate.y,
                orientation: pokemon.orientation
            });
            pokemon.moveTo(farthestCoordinate.x, farthestCoordinate.y, board);
        }
    }
}
exports.PastelVeilStrategy = PastelVeilStrategy;
class CharmStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        var _a;
        super.process(pokemon, state, board, target, crit);
        const attackReduce = (_a = [2, 3, 4][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 4;
        target.addAttack(-attackReduce, pokemon, 1, crit);
        target.status.triggerCharm(3000, target, pokemon, false);
    }
}
exports.CharmStrategy = CharmStrategy;
class EntrainmentStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        super.process(pokemon, state, board, target, crit);
        const ppGained = 10;
        pokemon.addPP(ppGained, pokemon, 1, crit);
        if (target.skill !== Ability_1.Ability.ENTRAINMENT) {
            target.skill = Ability_1.Ability.ENTRAINMENT;
        }
        else {
            const potentialTargets = [];
            board.forEach((x, y, value) => {
                if (value && value.team === pokemon.team && value.life > 0) {
                    potentialTargets.push({ x, y, value });
                }
            });
            potentialTargets.sort((a, b) => (0, distance_1.distanceC)(pokemon.positionX, pokemon.positionY, a.x, a.y) -
                (0, distance_1.distanceC)(pokemon.positionX, pokemon.positionY, b.x, b.y));
            if (potentialTargets.length > 0) {
                target.skill = Ability_1.Ability.ENTRAINMENT;
            }
        }
    }
}
exports.EntrainmentStrategy = EntrainmentStrategy;
class OktzookaStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, state, board, target, crit) {
        super.process(pokemon, state, board, target, crit);
        const damage = Math.ceil(pokemon.atk * 1.5);
        pokemon.count.attackCount++;
        target.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, false);
        target.effects.add(Effect_1.Effect.GAS);
        const index = target.positionY * board.columns + target.positionX;
        if (board.effects[index] !== Effect_1.Effect.GAS) {
            board.effects[index] = Effect_1.Effect.GAS;
            pokemon.simulation.room.broadcast(types_1.Transfer.BOARD_EVENT, {
                simulationId: pokemon.simulation.id,
                type: Game_1.BoardEvent.GAS,
                x: target.positionX,
                y: target.positionY
            });
        }
    }
}
exports.OktzookaStrategy = OktzookaStrategy;
__exportStar(require("./hidden-power"), exports);
exports.AbilityStrategies = {
    [Ability_1.Ability.SONG_OF_DESIRE]: new SongOfDesireStrategy(),
    [Ability_1.Ability.CONFUSING_MIND]: new ConfusingMindStrategy(),
    [Ability_1.Ability.KNOWLEDGE_THIEF]: new KnowledgeThiefStrategy(),
    [Ability_1.Ability.WONDER_GUARD]: new WonderGuardStrategy(),
    [Ability_1.Ability.CORRUPTED_NATURE]: new CorruptedNatureStrategy(),
    [Ability_1.Ability.CRABHAMMER]: new CrabHammerStrategy(),
    [Ability_1.Ability.KING_SHIELD]: new KingShieldStrategy(),
    [Ability_1.Ability.U_TURN]: new UTurnStrategy(),
    [Ability_1.Ability.EXPLOSION]: new ExplosionStrategy(),
    [Ability_1.Ability.NIGHTMARE]: new NightmareStrategy(),
    [Ability_1.Ability.CLANGOROUS_SOUL]: new ClangorousSoulStrategy(),
    [Ability_1.Ability.BONEMERANG]: new BonemerangStrategy(),
    [Ability_1.Ability.GROWL]: new GrowlStrategy(),
    [Ability_1.Ability.RELIC_SONG]: new RelicSongStrategy(),
    [Ability_1.Ability.FAIRY_WIND]: new FairyWindStrategy(),
    [Ability_1.Ability.DISARMING_VOICE]: new DisarmingVoiceStrategy(),
    [Ability_1.Ability.HIGH_JUMP_KICK]: new HighJumpKickStrategy(),
    [Ability_1.Ability.GRASS_WHISTLE]: new GrassWhistleStrategy(),
    [Ability_1.Ability.TRI_ATTACK]: new TriAttackStrategy(),
    [Ability_1.Ability.ECHO]: new EchoStrategy(),
    [Ability_1.Ability.PETAL_DANCE]: new PetalDanceStrategy(),
    [Ability_1.Ability.HYPER_VOICE]: new HyperVoiceStrategy(),
    [Ability_1.Ability.SHADOW_CLONE]: new ShadowCloneStrategy(),
    [Ability_1.Ability.VOLT_SWITCH]: new VoltSwitchStrategy(),
    [Ability_1.Ability.NUZZLE]: new NuzzleStrategy(),
    [Ability_1.Ability.FIRE_BLAST]: new FireBlastStrategy(),
    [Ability_1.Ability.WHEEL_OF_FIRE]: new WheelOfFireStrategy(),
    [Ability_1.Ability.SEISMIC_TOSS]: new SeismicTossStrategy(),
    [Ability_1.Ability.GUILLOTINE]: new GuillotineStrategy(),
    [Ability_1.Ability.ROCK_SLIDE]: new RockSlideStrategy(),
    [Ability_1.Ability.HEAT_WAVE]: new HeatWaveStrategy(),
    [Ability_1.Ability.THUNDER]: new ThunderStrategy(),
    [Ability_1.Ability.HYDRO_PUMP]: new HydroPumpStrategy(),
    [Ability_1.Ability.DRACO_METEOR]: new DracoMeteorStrategy(),
    [Ability_1.Ability.BLAZE_KICK]: new BlazeKickStrategy(),
    [Ability_1.Ability.WISH]: new WishStrategy(),
    [Ability_1.Ability.LUNAR_BLESSING]: new LunarBlessingStrategy(),
    [Ability_1.Ability.CALM_MIND]: new CalmMindStrategy(),
    [Ability_1.Ability.IRON_DEFENSE]: new IronDefenseStrategy(),
    [Ability_1.Ability.DEFENSE_CURL]: new DefenseCurlStrategy(),
    [Ability_1.Ability.METRONOME]: new MetronomeStrategy(),
    [Ability_1.Ability.SOAK]: new SoakStrategy(),
    [Ability_1.Ability.IRON_TAIL]: new IronTailStrategy(),
    [Ability_1.Ability.BLAST_BURN]: new BlastBurnStrategy(),
    [Ability_1.Ability.CHARGE]: new ChargeStrategy(),
    [Ability_1.Ability.DISCHARGE]: new DischargeStrategy(),
    [Ability_1.Ability.BITE]: new BiteStrategy(),
    [Ability_1.Ability.DRAGON_TAIL]: new DragonTailStrategy(),
    [Ability_1.Ability.DRAGON_BREATH]: new DragonBreathStrategy(),
    [Ability_1.Ability.ICICLE_CRASH]: new IcicleCrashStrategy(),
    [Ability_1.Ability.ROOT]: new RootStrategy(),
    [Ability_1.Ability.TORMENT]: new TormentStrategy(),
    [Ability_1.Ability.STOMP]: new StompStrategy(),
    [Ability_1.Ability.PAYBACK]: new PaybackStrategy(),
    [Ability_1.Ability.NIGHT_SLASH]: new NightSlashStrategy(),
    [Ability_1.Ability.KOWTOW_CLEAVE]: new KowtowCleaveStrategy(),
    [Ability_1.Ability.BUG_BUZZ]: new BugBuzzStrategy(),
    [Ability_1.Ability.STRING_SHOT]: new StringShotStrategy(),
    [Ability_1.Ability.ENTANGLING_THREAD]: new EntanglingThreadStrategy(),
    [Ability_1.Ability.VENOSHOCK]: new PoisonStingStrategy(),
    [Ability_1.Ability.LEECH_LIFE]: new LeechLifeStrategy(),
    [Ability_1.Ability.HAPPY_HOUR]: new HappyHourStrategy(),
    [Ability_1.Ability.TELEPORT]: new TeleportStrategy(),
    [Ability_1.Ability.NASTY_PLOT]: new NastyPlotStrategy(),
    [Ability_1.Ability.THIEF]: new ThiefStrategy(),
    [Ability_1.Ability.STUN_SPORE]: new StunSporeStrategy(),
    [Ability_1.Ability.METEOR_MASH]: new MeteorMashStrategy(),
    [Ability_1.Ability.HURRICANE]: new HurricaneStrategy(),
    [Ability_1.Ability.BURN]: new BurnStrategy(),
    [Ability_1.Ability.SLEEP]: new SleepStrategy(),
    [Ability_1.Ability.CONFUSION]: new ConfusionStrategy(),
    [Ability_1.Ability.BLIZZARD]: new BlizzardStrategy(),
    [Ability_1.Ability.PROTECT]: new ProtectStrategy(),
    [Ability_1.Ability.POISON]: new PoisonStrategy(),
    [Ability_1.Ability.ORIGIN_PULSE]: new OriginPulseStrategy(),
    [Ability_1.Ability.SEED_FLARE]: new SeedFlareStrategy(),
    [Ability_1.Ability.HEAL_BLOCK]: new HealBlockStrategy(),
    [Ability_1.Ability.ROAR_OF_TIME]: new RoarOfTimeStrategy(),
    [Ability_1.Ability.ROCK_TOMB]: new RockTombStrategy(),
    [Ability_1.Ability.ROCK_SMASH]: new RockSmashStrategy(),
    [Ability_1.Ability.HEAD_SMASH]: new HeadSmashStrategy(),
    [Ability_1.Ability.DOUBLE_EDGE]: new DoubleEdgeStrategy(),
    [Ability_1.Ability.DEFAULT]: new ability_strategy_1.AbilityStrategy(),
    [Ability_1.Ability.DIAMOND_STORM]: new DiamondStormStrategy(),
    [Ability_1.Ability.DRACO_ENERGY]: new DracoEnergyStrategy(),
    [Ability_1.Ability.DYNAMAX_CANNON]: new DynamaxCannonStrategy(),
    [Ability_1.Ability.DYNAMIC_PUNCH]: new DynamicPunchStrategy(),
    [Ability_1.Ability.ELECTRO_BOOST]: new ElectroBoostStrategy(),
    [Ability_1.Ability.ELECTRO_WEB]: new ElectroWebStrategy(),
    [Ability_1.Ability.FIRE_TRICK]: new FireTrickStrategy(),
    [Ability_1.Ability.FLAME_CHARGE]: new FlameChargeStrategy(),
    [Ability_1.Ability.LEECH_SEED]: new LeechSeedStrategy(),
    [Ability_1.Ability.LOCK_ON]: new LockOnStrategy(),
    [Ability_1.Ability.PSYCH_UP]: new PsychUpStrategy(),
    [Ability_1.Ability.RAZOR_WIND]: new RazorWindStrategy(),
    [Ability_1.Ability.TWISTING_NETHER]: new TwistingNetherStrategy(),
    [Ability_1.Ability.EARTHQUAKE]: new EarthquakeStrategy(),
    [Ability_1.Ability.SOFT_BOILED]: new SoftBoiledStrategy(),
    [Ability_1.Ability.ELECTRIC_SURGE]: new ElectricSurgeStrategy(),
    [Ability_1.Ability.PSYCHIC_SURGE]: new PsychicSurgeStrategy(),
    [Ability_1.Ability.MIND_BLOWN]: new MindBlownStrategy(),
    [Ability_1.Ability.PAYDAY]: new PaydayStrategy(),
    [Ability_1.Ability.PICKUP]: new PickupStrategy(),
    [Ability_1.Ability.BEAT_UP]: new BeatUpStrategy(),
    [Ability_1.Ability.BLUE_FLARE]: new BlueFlareStrategy(),
    [Ability_1.Ability.FUSION_BOLT]: new FusionBoltStrategy(),
    [Ability_1.Ability.AURORA_VEIL]: new AuroraVeilStrategy(),
    [Ability_1.Ability.AQUA_JET]: new AquaJetStrategy(),
    [Ability_1.Ability.JUDGEMENT]: new JudgementStrategy(),
    [Ability_1.Ability.CHATTER]: new ChatterStrategy(),
    [Ability_1.Ability.LIQUIDATION]: new LiquidationStrategy(),
    [Ability_1.Ability.STEAM_ERUPTION]: new SteamEruptionStrategy(),
    [Ability_1.Ability.APPLE_ACID]: new AppleAcidStrategy(),
    [Ability_1.Ability.SHADOW_BALL]: new ShadowBallStrategy(),
    [Ability_1.Ability.DIVE]: new DiveStrategy(),
    [Ability_1.Ability.SPIKE_ARMOR]: new SpikeArmorStrategy(),
    [Ability_1.Ability.FUTURE_SIGHT]: new FutureSightStrategy(),
    [Ability_1.Ability.FAKE_TEARS]: new FakeTearsStrategy(),
    [Ability_1.Ability.SPARKLING_ARIA]: new SparklingAriaStrategy(),
    [Ability_1.Ability.DRAGON_DARTS]: new DragonDartsStrategy(),
    [Ability_1.Ability.GRASSY_SURGE]: new GrassySurgeStrategy(),
    [Ability_1.Ability.MISTY_SURGE]: new MistySurgeStrategy(),
    [Ability_1.Ability.SKY_ATTACK]: new SkyAttackStrategy(),
    [Ability_1.Ability.ILLUSION]: new IllusionStrategy(),
    [Ability_1.Ability.SLUDGE]: new SludgeStrategy(),
    [Ability_1.Ability.SLUDGE_WAVE]: new SludgeWaveStrategy(),
    [Ability_1.Ability.AURORA_BEAM]: new AuroraBeamStrategy(),
    [Ability_1.Ability.AGILITY]: new AgilityStrategy(),
    [Ability_1.Ability.SPIRIT_SHACKLE]: new SpiritShackleStrategy(),
    [Ability_1.Ability.WATER_SHURIKEN]: new WaterShurikenStrategy(),
    [Ability_1.Ability.SHADOW_SNEAK]: new ShadowSneakStrategy(),
    [Ability_1.Ability.MACH_PUNCH]: new MachPunchStrategy(),
    [Ability_1.Ability.UPPERCUT]: new UppercutStrategy(),
    [Ability_1.Ability.TRIPLE_KICK]: new TripleKickStrategy(),
    [Ability_1.Ability.MAWASHI_GERI]: new MawashiGeriStrategy(),
    [Ability_1.Ability.FORECAST]: new ForecastStrategy(),
    [Ability_1.Ability.SACRED_SWORD]: new SacredSwordStrategy(),
    [Ability_1.Ability.X_SCISSOR]: new XScissorStrategy(),
    [Ability_1.Ability.PLASMA_FIST]: new PlasmaFistStrategy(),
    [Ability_1.Ability.SPECTRAL_THIEF]: new SpectralThiefStrategy(),
    [Ability_1.Ability.GEOMANCY]: new GeomancyStrategy(),
    [Ability_1.Ability.DEATH_WING]: new DeathWingStrategy(),
    [Ability_1.Ability.SLACK_OFF]: new SlackOffStrategy(),
    [Ability_1.Ability.DARK_VOID]: new DarkVoidStrategy(),
    [Ability_1.Ability.OVERHEAT]: new OverheatStrategy(),
    [Ability_1.Ability.HYPNOSIS]: new HypnosisStrategy(),
    [Ability_1.Ability.MIMIC]: new MimicStrategy(),
    [Ability_1.Ability.HEX]: new HexStrategy(),
    [Ability_1.Ability.GROWTH]: new GrowthStrategy(),
    [Ability_1.Ability.HEAL_ORDER]: new HealOrderStrategy(),
    [Ability_1.Ability.SHELL_TRAP]: new ShellTrapStrategy(),
    [Ability_1.Ability.DIG]: new DigStrategy(),
    [Ability_1.Ability.FIRE_SPIN]: new FireSpinStrategy(),
    [Ability_1.Ability.SEARING_SHOT]: new SearingShotStrategy(),
    [Ability_1.Ability.PECK]: new PeckStrategy(),
    [Ability_1.Ability.SPLASH]: new SplashStrategy(),
    [Ability_1.Ability.COUNTER]: new CounterStrategy(),
    [Ability_1.Ability.COSMIC_POWER]: new CosmicPowerStrategy(),
    [Ability_1.Ability.POISON_POWDER]: new PoisonPowderStrategy(),
    [Ability_1.Ability.SILVER_WIND]: new SilverWindStrategy(),
    [Ability_1.Ability.ICY_WIND]: new IcyWindStrategy(),
    [Ability_1.Ability.GIGATON_HAMMER]: new GigatonHammerStrategy(),
    [Ability_1.Ability.ACROBATICS]: new AcrobaticsStrategy(),
    [Ability_1.Ability.ABSORB]: new AbsorbStrategy(),
    [Ability_1.Ability.ROLLOUT]: new RolloutStrategy(),
    [Ability_1.Ability.THRASH]: new ThrashStrategy(),
    [Ability_1.Ability.SOLAR_BEAM]: new SolarBeamStrategy(),
    [Ability_1.Ability.MAGMA_STORM]: new MagmaStormStrategy(),
    [Ability_1.Ability.SLASHING_CLAW]: new SlashingClawStrategy(),
    [Ability_1.Ability.ERUPTION]: new EruptionStrategy(),
    [Ability_1.Ability.MIST_BALL]: new MistBallStrategy(),
    [Ability_1.Ability.LUSTER_PURGE]: new LusterPurgeStrategy(),
    [Ability_1.Ability.MUD_BUBBLE]: new MudBubbleStrategy(),
    [Ability_1.Ability.LINK_CABLE]: new LinkCableStrategy(),
    [Ability_1.Ability.MAGIC_BOUNCE]: new MagicBounceStrategy(),
    [Ability_1.Ability.HIDDEN_POWER_A]: new hidden_power_1.HiddenPowerAStrategy(),
    [Ability_1.Ability.HIDDEN_POWER_B]: new hidden_power_1.HiddenPowerBStrategy(),
    [Ability_1.Ability.HIDDEN_POWER_C]: new hidden_power_1.HiddenPowerCStrategy(),
    [Ability_1.Ability.HIDDEN_POWER_D]: new hidden_power_1.HiddenPowerDStrategy(),
    [Ability_1.Ability.HIDDEN_POWER_E]: new hidden_power_1.HiddenPowerEStrategy(),
    [Ability_1.Ability.HIDDEN_POWER_F]: new hidden_power_1.HiddenPowerFStrategy(),
    [Ability_1.Ability.HIDDEN_POWER_G]: new hidden_power_1.HiddenPowerGStrategy(),
    [Ability_1.Ability.HIDDEN_POWER_H]: new hidden_power_1.HiddenPowerHStrategy(),
    [Ability_1.Ability.HIDDEN_POWER_I]: new hidden_power_1.HiddenPowerIStrategy(),
    [Ability_1.Ability.HIDDEN_POWER_J]: new hidden_power_1.HiddenPowerJStrategy(),
    [Ability_1.Ability.HIDDEN_POWER_K]: new hidden_power_1.HiddenPowerKStrategy(),
    [Ability_1.Ability.HIDDEN_POWER_L]: new hidden_power_1.HiddenPowerLStrategy(),
    [Ability_1.Ability.HIDDEN_POWER_M]: new hidden_power_1.HiddenPowerMStrategy(),
    [Ability_1.Ability.HIDDEN_POWER_N]: new hidden_power_1.HiddenPowerNStrategy(),
    [Ability_1.Ability.HIDDEN_POWER_O]: new hidden_power_1.HiddenPowerOStrategy(),
    [Ability_1.Ability.HIDDEN_POWER_P]: new hidden_power_1.HiddenPowerPStrategy(),
    [Ability_1.Ability.HIDDEN_POWER_Q]: new hidden_power_1.HiddenPowerQStrategy(),
    [Ability_1.Ability.HIDDEN_POWER_R]: new hidden_power_1.HiddenPowerRStrategy(),
    [Ability_1.Ability.HIDDEN_POWER_S]: new hidden_power_1.HiddenPowerSStrategy(),
    [Ability_1.Ability.HIDDEN_POWER_T]: new hidden_power_1.HiddenPowerTStrategy(),
    [Ability_1.Ability.HIDDEN_POWER_U]: new hidden_power_1.HiddenPowerUStrategy(),
    [Ability_1.Ability.HIDDEN_POWER_V]: new hidden_power_1.HiddenPowerVStrategy(),
    [Ability_1.Ability.HIDDEN_POWER_W]: new hidden_power_1.HiddenPowerWStrategy(),
    [Ability_1.Ability.HIDDEN_POWER_X]: new hidden_power_1.HiddenPowerXStrategy(),
    [Ability_1.Ability.HIDDEN_POWER_Y]: new hidden_power_1.HiddenPowerYStrategy(),
    [Ability_1.Ability.HIDDEN_POWER_Z]: new hidden_power_1.HiddenPowerZStrategy(),
    [Ability_1.Ability.HIDDEN_POWER_QM]: new hidden_power_1.HiddenPowerQMStrategy(),
    [Ability_1.Ability.HIDDEN_POWER_EM]: new hidden_power_1.HiddenPowerEMStrategy(),
    [Ability_1.Ability.POISON_JAB]: new PoisonJabStrategy(),
    [Ability_1.Ability.SHELL_SMASH]: new ShellSmashStrategy(),
    [Ability_1.Ability.HELPING_HAND]: new HelpingHandStrategy(),
    [Ability_1.Ability.ASTRAL_BARRAGE]: new AstralBarrageStrategy(),
    [Ability_1.Ability.WATERFALL]: new WaterfallStrategy(),
    [Ability_1.Ability.PYRO_BALL]: new PyroBallStrategy(),
    [Ability_1.Ability.WHIRLPOOL]: new WhirlpoolStrategy(),
    [Ability_1.Ability.SMOKE_SCREEN]: new SmokeScreenStrategy(),
    [Ability_1.Ability.PRESENT]: new PresentStrategy(),
    [Ability_1.Ability.LEAF_BLADE]: new LeafBladeStrategy(),
    [Ability_1.Ability.ANCHOR_SHOT]: new AnchorShotStrategy(),
    [Ability_1.Ability.SMOG]: new SmogStrategy(),
    [Ability_1.Ability.PSYCHIC]: new PsychicStrategy(),
    [Ability_1.Ability.PSYBEAM]: new PsybeamStrategy(),
    [Ability_1.Ability.MAGNET_RISE]: new MagnetRiseStrategy(),
    [Ability_1.Ability.ATTRACT]: new AttractStrategy(),
    [Ability_1.Ability.WATER_PULSE]: new WaterPulseStrategy(),
    [Ability_1.Ability.PLAY_ROUGH]: new PlayRoughStrategy(),
    [Ability_1.Ability.AERIAL_ACE]: new AerialAceStrategy(),
    [Ability_1.Ability.PARABOLIC_CHARGE]: new ParabolicChargeStrategy(),
    [Ability_1.Ability.SUPER_FANG]: new SuperFangStrategy(),
    [Ability_1.Ability.TEETER_DANCE]: new TeeterDanceStrategy(),
    [Ability_1.Ability.CLOSE_COMBAT]: new CloseCombatStrategy(),
    [Ability_1.Ability.ASSIST]: new AssistStrategy(),
    [Ability_1.Ability.FISSURE]: new FissureStrategy(),
    [Ability_1.Ability.ASSURANCE]: new AssuranceStrategy(),
    [Ability_1.Ability.AQUA_RING]: new AquaRingStrategy(),
    [Ability_1.Ability.POISON_GAS]: new PoisonGasStrategy(),
    [Ability_1.Ability.BRAVE_BIRD]: new BraveBirdStrategy(),
    [Ability_1.Ability.MAGICAL_LEAF]: new MagicalLeafStrategy(),
    [Ability_1.Ability.STEALTH_ROCKS]: new StealthRocksStrategy(),
    [Ability_1.Ability.TAIL_GLOW]: new TailGlowStrategy(),
    [Ability_1.Ability.STRUGGLE_BUG]: new StruggleBugStrategy(),
    [Ability_1.Ability.PRISMATIC_LASER]: new PrismaticLaserStrategy(),
    [Ability_1.Ability.NATURAL_GIFT]: new NaturalGiftStrategy(),
    [Ability_1.Ability.NIGHT_SHADE]: new NightShadeStrategy(),
    [Ability_1.Ability.CHARGE_BEAM]: new ChargeBeamStrategy(),
    [Ability_1.Ability.POPULATION_BOMB]: new PopulationBombStrategy(),
    [Ability_1.Ability.SCREECH]: new ScreechStrategy(),
    [Ability_1.Ability.SAND_TOMB]: new SandTombStrategy(),
    [Ability_1.Ability.WHIRLWIND]: new WhirlwindStrategy(),
    [Ability_1.Ability.EMPTY_LIGHT]: new EmptyLightStrategy(),
    [Ability_1.Ability.UNBOUND]: new UnboundStrategy(),
    [Ability_1.Ability.HYPERSPACE_FURY]: new HyperSpaceFury(),
    [Ability_1.Ability.SNIPE_SHOT]: new SnipeShotStrategy(),
    [Ability_1.Ability.AIR_SLASH]: new AirSlashStrategy(),
    [Ability_1.Ability.EGGSPLOSION]: new EggsplosionStrategy(),
    [Ability_1.Ability.BODY_SLAM]: new BodySlamStrategy(),
    [Ability_1.Ability.FLORAL_HEALING]: new FloralHealingStrategy(),
    [Ability_1.Ability.VINE_WHIP]: new VineWhipStrategy(),
    [Ability_1.Ability.BARB_BARRAGE]: new BarbBarrageStrategy(),
    [Ability_1.Ability.INFERNAL_PARADE]: new InfernalParadeStrategy(),
    [Ability_1.Ability.MAGIC_POWDER]: new MagicPowderStrategy(),
    [Ability_1.Ability.RETALIATE]: new RetaliateStrategy(),
    [Ability_1.Ability.SLASH]: new SlashStrategy(),
    [Ability_1.Ability.OUTRAGE]: new OutrageStrategy(),
    [Ability_1.Ability.LUNGE]: new LungeStrategy(),
    [Ability_1.Ability.KNOCK_OFF]: new KnockOffStrategy(),
    [Ability_1.Ability.FISHIOUS_REND]: new FishiousRendStrategy(),
    [Ability_1.Ability.RECOVER]: new RecoverStrategy(),
    [Ability_1.Ability.CURSE]: new CurseStrategy(),
    [Ability_1.Ability.GOLD_RUSH]: new GoldRushStrategy(),
    [Ability_1.Ability.MAKE_IT_RAIN]: new MakeItRainStrategy(),
    [Ability_1.Ability.TIME_TRAVEL]: new TimeTravelStrategy(),
    [Ability_1.Ability.POLTERGEIST]: new PoltergeistStrategy(),
    [Ability_1.Ability.CRUSH_GRIP]: new CrushGripStrategy(),
    [Ability_1.Ability.AURASPHERE]: new AuraSphereStrategy(),
    [Ability_1.Ability.SKETCH]: new SketchStrategy(),
    [Ability_1.Ability.OVERDRIVE]: new OverdriveStrategy(),
    [Ability_1.Ability.LOVELY_KISS]: new LovelyKissStrategy(),
    [Ability_1.Ability.TRANSFORM]: new TransformStrategy(),
    [Ability_1.Ability.PSYCHIC_FANGS]: new PsychicFangsStrategy(),
    [Ability_1.Ability.SHED_TAIL]: new ShedTailStrategy(),
    [Ability_1.Ability.SHIELDS_DOWN]: new ShieldsDownStrategy(),
    [Ability_1.Ability.SHIELDS_UP]: new ShieldsUpStrategy(),
    [Ability_1.Ability.SANDSEAR_STORM]: new SandsearStormStrategy(),
    [Ability_1.Ability.WILDBOLT_STORM]: new WildboltStormStrategy(),
    [Ability_1.Ability.BLEAKWIND_STORM]: new BleakwindStormStrategy(),
    [Ability_1.Ability.SPRINGTIDE_STORM]: new SpringtideStormStrategy(),
    [Ability_1.Ability.AURA_WHEEL]: new AuraWheelStrategy(),
    [Ability_1.Ability.LICK]: new LickStrategy(),
    [Ability_1.Ability.FURY_SWIPES]: new FurySwipesStrategy(),
    [Ability_1.Ability.TICKLE]: new TickleStrategy(),
    [Ability_1.Ability.AROMATHERAPY]: new AromatherapyStrategy(),
    [Ability_1.Ability.DETECT]: new DetectStrategy(),
    [Ability_1.Ability.SPACIAL_REND]: new SpacialRendStrategy(),
    [Ability_1.Ability.MULTI_ATTACK]: new MultiAttackStrategy(),
    [Ability_1.Ability.STICKY_WEB]: new StickyWebStrategy(),
    [Ability_1.Ability.ACCELEROCK]: new AccelerockStrategy(),
    [Ability_1.Ability.PETAL_BLIZZARD]: new PetalBlizzardStrategy(),
    [Ability_1.Ability.SUNSTEEL_STRIKE]: new SunsteelStrikeStrategy(),
    [Ability_1.Ability.MOONGEIST_BEAM]: new MoongeistBeamStrategy(),
    [Ability_1.Ability.MANTIS_BLADES]: new MantisBladesStrategy(),
    [Ability_1.Ability.FLEUR_CANNON]: new FleurCannonStrategy(),
    [Ability_1.Ability.DOOM_DESIRE]: new DoomDesireStrategy(),
    [Ability_1.Ability.SPIRIT_BREAK]: new SpiritBreakStrategy(),
    [Ability_1.Ability.SHEER_COLD]: new SheerColdStrategy(),
    [Ability_1.Ability.PSYCHO_BOOST]: new PsychoBoostStrategy(),
    [Ability_1.Ability.ZAP_CANNON]: new ZapCannonStrategy(),
    [Ability_1.Ability.EXTREME_SPEED]: new ExtremeSpeedStrategy(),
    [Ability_1.Ability.ICE_HAMMER]: new IceHammerStrategy(),
    [Ability_1.Ability.POLLEN_PUFF]: new PollenPuffStrategy(),
    [Ability_1.Ability.PSYSTRIKE]: new PsystrikeStrategy(),
    [Ability_1.Ability.FACADE]: new FacadeStrategy(),
    [Ability_1.Ability.DREAM_EATER]: new DreamEaterStrategy(),
    [Ability_1.Ability.SPARK]: new SparkStrategy(),
    [Ability_1.Ability.CRUNCH]: new CrunchStrategy(),
    [Ability_1.Ability.CROSS_POISON]: new CrossPoisonStrategy(),
    [Ability_1.Ability.SHELTER]: new ShelterStrategy(),
    [Ability_1.Ability.FIRE_FANG]: new FireFangStrategy(),
    [Ability_1.Ability.ICE_FANG]: new IceFangStrategy(),
    [Ability_1.Ability.THUNDER_FANG]: new ThunderFangStrategy(),
    [Ability_1.Ability.TAIL_WHIP]: new TailWhipStrategy(),
    [Ability_1.Ability.PSYSHIELD_BASH]: new PsyshieldBashStrategy(),
    [Ability_1.Ability.QUIVER_DANCE]: new QuiverDanceStrategy(),
    [Ability_1.Ability.TORCH_SONG]: new TorchSongStrategy(),
    [Ability_1.Ability.POWER_WHIP]: new PowerWhipStrategy(),
    [Ability_1.Ability.DARK_HARVEST]: new DarkHarvestStrategy(),
    [Ability_1.Ability.PSYSHOCK]: new PsyShockStrategy(),
    [Ability_1.Ability.HEAVY_SLAM]: new HeavySlamStrategy(),
    [Ability_1.Ability.AQUA_TAIL]: new AquaTailStrategy(),
    [Ability_1.Ability.HAIL]: new HailStrategy(),
    [Ability_1.Ability.RAPID_SPIN]: new RapidSpinStrategy(),
    [Ability_1.Ability.BOUNCE]: new BounceStrategy(),
    [Ability_1.Ability.GUNK_SHOT]: new GunkShotStrategy(),
    [Ability_1.Ability.BLOOD_MOON]: new BloodMoonStrategy(),
    [Ability_1.Ability.TEA_TIME]: new TeaTimeStrategy(),
    [Ability_1.Ability.SPIKES]: new SpikesStrategy(),
    [Ability_1.Ability.SHADOW_PUNCH]: new ShadowPunchStrategy(),
    [Ability_1.Ability.MAGNET_BOMB]: new MagnetBombStrategy(),
    [Ability_1.Ability.MUDDY_WATER]: new MuddyWaterStrategy(),
    [Ability_1.Ability.ANCIENT_POWER]: new AncientPowerStrategy(),
    [Ability_1.Ability.MOON_DREAM]: new MoonDreamStrategy(),
    [Ability_1.Ability.STONE_AXE]: new StoneAxeStrategy(),
    [Ability_1.Ability.CAMERA_FLASH]: new CameraFlashStrategy(),
    [Ability_1.Ability.ROCK_HEAD]: new RockHeadStrategy(),
    [Ability_1.Ability.TAKE_HEART]: new TakeHeartStrategy(),
    [Ability_1.Ability.CRUSH_CLAW]: new CrushClawStrategy(),
    [Ability_1.Ability.FIRE_LASH]: new FireLashStrategy(),
    [Ability_1.Ability.FAIRY_LOCK]: new FairyLockStrategy(),
    [Ability_1.Ability.FLYING_PRESS]: new FlyingPressStrategy(),
    [Ability_1.Ability.DRAIN_PUNCH]: new DrainPunchStrategy(),
    [Ability_1.Ability.GRAVITY]: new GravityStrategy(),
    [Ability_1.Ability.DIRE_CLAW]: new DireClawStrategy(),
    [Ability_1.Ability.FAKE_OUT]: new FakeOutStrategy(),
    [Ability_1.Ability.PURIFY]: new PurifyStrategy(),
    [Ability_1.Ability.FELL_STINGER]: new FellStingerStrategy(),
    [Ability_1.Ability.GULP_MISSILE]: new GulpMissileStrategy(),
    [Ability_1.Ability.SCHOOLING]: new SchoolingStrategy(),
    [Ability_1.Ability.DOUBLE_SHOCK]: new DoubleShockStrategy(),
    [Ability_1.Ability.PASTEL_VEIL]: new PastelVeilStrategy(),
    [Ability_1.Ability.CHARM]: new CharmStrategy(),
    [Ability_1.Ability.ENTRAINMENT]: new EntrainmentStrategy(),
    [Ability_1.Ability.OKTZOOKA]: new OktzookaStrategy()
};
//# sourceMappingURL=abilities.js.map