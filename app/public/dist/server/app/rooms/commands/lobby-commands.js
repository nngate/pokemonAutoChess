"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EndTournamentCommand = exports.EndTournamentMatchCommand = exports.CreateTournamentLobbiesCommand = exports.NextTournamentStageCommand = exports.ParticipateInTournamentCommand = exports.RemoveTournamentCommand = exports.OnCreateTournamentCommand = exports.OpenSpecialGameCommand = exports.OnBotUploadCommand = exports.DeleteBotCommand = exports.AddBotCommand = exports.SelectLanguageCommand = exports.UnbanUserCommand = exports.BanUserCommand = exports.OnSearchCommand = exports.OnSearchByIdCommand = exports.BuyBoosterCommand = exports.BuyEmotionCommand = exports.ChangeAvatarCommand = exports.ChangeSelectedEmotionCommand = exports.ChangeTitleCommand = exports.ChangeNameCommand = exports.OpenBoosterCommand = exports.RemoveMessageCommand = exports.OnNewMessageCommand = exports.GiveRoleCommand = exports.GiveBoostersCommand = exports.GiveTitleCommand = exports.OnLeaveCommand = exports.OnJoinCommand = void 0;
const command_1 = require("@colyseus/command");
const schema_1 = require("@colyseus/schema");
const colyseus_1 = require("colyseus");
const discord_js_1 = require("discord.js");
const nanoid_1 = require("nanoid");
const tournament_logic_1 = require("../../core/tournament-logic");
const game_record_1 = require("../../models/colyseus-models/game-record");
const lobby_user_1 = __importDefault(require("../../models/colyseus-models/lobby-user"));
const pokemon_config_1 = __importDefault(require("../../models/colyseus-models/pokemon-config"));
const tournament_1 = require("../../models/colyseus-models/tournament");
const banned_user_1 = __importDefault(require("../../models/mongo-models/banned-user"));
const bot_v2_1 = require("../../models/mongo-models/bot-v2");
const detailled_statistic_v2_1 = __importDefault(require("../../models/mongo-models/detailled-statistic-v2"));
const tournament_2 = require("../../models/mongo-models/tournament");
const user_metadata_1 = __importDefault(require("../../models/mongo-models/user-metadata"));
const precomputed_emotions_1 = require("../../models/precomputed/precomputed-emotions");
const precomputed_rarity_1 = require("../../models/precomputed/precomputed-rarity");
const utils_1 = require("../../public/src/utils");
const bots_1 = require("../../services/bots");
const types_1 = require("../../types");
const Config_1 = require("../../types/Config");
const EloRank_1 = require("../../types/enum/EloRank");
const Game_1 = require("../../types/enum/Game");
const Pokemon_1 = require("../../types/enum/Pokemon");
const Starters_1 = require("../../types/enum/Starters");
const array_1 = require("../../utils/array");
const logger_1 = require("../../utils/logger");
const profanity_filter_1 = require("../../utils/profanity-filter");
const random_1 = require("../../utils/random");
const schemas_1 = require("../../utils/schemas");
class OnJoinCommand extends command_1.Command {
    execute(_a) {
        return __awaiter(this, arguments, void 0, function* ({ client, rooms = [] }) {
            try {
                client.send(types_1.Transfer.ROOMS, rooms);
                client.userData = { joinedAt: Date.now() };
                const user = yield user_metadata_1.default.findOne({ uid: client.auth.uid });
                if (user) {
                    const stats = yield detailled_statistic_v2_1.default.find({ playerId: client.auth.uid }, ["pokemons", "time", "rank", "elo"], { limit: 10, sort: { time: -1 } });
                    if (stats) {
                        const records = new schema_1.ArraySchema();
                        stats.forEach((record) => {
                            records.push(new game_record_1.GameRecord(record.time, record.rank, record.elo, record.pokemons));
                        });
                        this.state.users.set(client.auth.uid, new lobby_user_1.default(user.uid, user.displayName, user.elo, user.avatar, user.wins, user.exp, user.level, user.donor, records, user.honors, user.uid === client.auth.uid ? user.pokemonCollection : null, user.booster, user.titles, user.title, user.role, client.auth.email === undefined &&
                            client.auth.photoURL === undefined, client.auth.metadata.creationTime, client.auth.metadata.lastSignInTime, user.language));
                    }
                }
                else {
                    const numberOfBoosters = 3;
                    const starterAvatar = (0, random_1.pickRandomIn)(Starters_1.StarterAvatars);
                    user_metadata_1.default.create({
                        uid: client.auth.uid,
                        displayName: client.auth.displayName,
                        avatar: starterAvatar,
                        booster: numberOfBoosters,
                        pokemonCollection: new Map()
                    });
                    this.state.users.set(client.auth.uid, new lobby_user_1.default(client.auth.uid, client.auth.displayName, 1000, starterAvatar, 0, 0, 0, false, [], [], new Map(), numberOfBoosters, [], "", types_1.Role.BASIC, client.auth.email === undefined &&
                        client.auth.photoURL === undefined, client.auth.metadata.creationTime, client.auth.metadata.lastSignInTime, ""));
                }
            }
            catch (error) {
                logger_1.logger.error(error);
            }
        });
    }
}
exports.OnJoinCommand = OnJoinCommand;
class OnLeaveCommand extends command_1.Command {
    execute({ client }) {
        try {
            if (client && client.auth && client.auth.displayName && client.auth.uid) {
                this.state.users.delete(client.auth.uid);
            }
        }
        catch (error) {
            logger_1.logger.error(error);
        }
    }
}
exports.OnLeaveCommand = OnLeaveCommand;
class GiveTitleCommand extends command_1.Command {
    execute(_a) {
        return __awaiter(this, arguments, void 0, function* ({ client, uid, title }) {
            try {
                const u = this.state.users.get(client.auth.uid);
                const targetUser = this.state.users.get(uid);
                if (u && u.role && u.role === types_1.Role.ADMIN) {
                    const user = yield user_metadata_1.default.findOne({ uid });
                    if (user && user.titles && !user.titles.includes(title)) {
                        user.titles.push(title);
                        user.save();
                        if (targetUser) {
                            targetUser.titles.push(title);
                        }
                    }
                }
            }
            catch (error) {
                logger_1.logger.error(error);
            }
        });
    }
}
exports.GiveTitleCommand = GiveTitleCommand;
class GiveBoostersCommand extends command_1.Command {
    execute(_a) {
        return __awaiter(this, arguments, void 0, function* ({ client, uid, numberOfBoosters = 1 }) {
            try {
                const u = this.state.users.get(client.auth.uid);
                const targetUser = this.state.users.get(uid);
                if (u && u.role && u.role === types_1.Role.ADMIN) {
                    const user = yield user_metadata_1.default.findOne({ uid: uid });
                    if (user) {
                        user.booster += numberOfBoosters;
                        user.save();
                        if (targetUser) {
                            targetUser.booster = user.booster;
                        }
                    }
                }
            }
            catch (error) {
                logger_1.logger.error(error);
            }
        });
    }
}
exports.GiveBoostersCommand = GiveBoostersCommand;
class GiveRoleCommand extends command_1.Command {
    execute(_a) {
        return __awaiter(this, arguments, void 0, function* ({ client, uid, role }) {
            try {
                const u = this.state.users.get(client.auth.uid);
                const targetUser = this.state.users.get(uid);
                if (u && u.role === types_1.Role.ADMIN) {
                    const user = yield user_metadata_1.default.findOne({ uid: uid });
                    if (user) {
                        user.role = role;
                        user.save();
                        if (targetUser) {
                            targetUser.role = user.role;
                        }
                    }
                }
            }
            catch (error) {
                logger_1.logger.error(error);
            }
        });
    }
}
exports.GiveRoleCommand = GiveRoleCommand;
class OnNewMessageCommand extends command_1.Command {
    execute({ client, message }) {
        try {
            const MAX_MESSAGE_LENGTH = 250;
            message = (0, profanity_filter_1.cleanProfanity)(message.substring(0, MAX_MESSAGE_LENGTH));
            const user = this.state.users.get(client.auth.uid);
            if (user &&
                [types_1.Role.ADMIN, types_1.Role.MODERATOR].includes(user.role) &&
                message != "") {
                this.state.addMessage(message, user.id, user.name, user.avatar);
            }
        }
        catch (error) {
            logger_1.logger.error(error);
        }
    }
}
exports.OnNewMessageCommand = OnNewMessageCommand;
class RemoveMessageCommand extends command_1.Command {
    execute({ client, messageId }) {
        try {
            const user = this.state.users.get(client.auth.uid);
            if (user &&
                user.role &&
                (user.role === types_1.Role.ADMIN || user.role === types_1.Role.MODERATOR)) {
                this.state.removeMessage(messageId);
            }
        }
        catch (error) {
            logger_1.logger.error(error);
        }
    }
}
exports.RemoveMessageCommand = RemoveMessageCommand;
class OpenBoosterCommand extends command_1.Command {
    execute(_a) {
        return __awaiter(this, arguments, void 0, function* ({ client }) {
            try {
                const user = this.state.users.get(client.auth.uid);
                if (!user)
                    return;
                const mongoUser = yield user_metadata_1.default.findOneAndUpdate({ uid: client.auth.uid, booster: { $gt: 0 } }, { $inc: { booster: -1 } });
                if (!mongoUser)
                    return;
                const NB_PER_BOOSTER = 10;
                const boosterContent = [];
                for (let i = 0; i < NB_PER_BOOSTER; i++) {
                    const guaranteedUnique = i === NB_PER_BOOSTER - 1;
                    boosterContent.push(pickRandomPokemonBooster(guaranteedUnique));
                }
                boosterContent.forEach((pkmWithConfig) => {
                    const index = Pokemon_1.PkmIndex[pkmWithConfig.name];
                    const mongoPokemonConfig = mongoUser.pokemonCollection.get(index);
                    const dustGain = pkmWithConfig.shiny ? Config_1.DUST_PER_SHINY : Config_1.DUST_PER_BOOSTER;
                    if (mongoPokemonConfig) {
                        mongoPokemonConfig.dust += dustGain;
                    }
                    else {
                        mongoUser.pokemonCollection.set(index, {
                            id: index,
                            emotions: [],
                            shinyEmotions: [],
                            dust: dustGain,
                            selectedEmotion: types_1.Emotion.NORMAL,
                            selectedShiny: false
                        });
                    }
                });
                mongoUser.save();
                user.booster = mongoUser.booster - 1;
                boosterContent.forEach((pkmWithConfig) => {
                    const index = Pokemon_1.PkmIndex[pkmWithConfig.name];
                    const pokemonConfig = user.pokemonCollection.get(index);
                    const mongoPokemonConfig = mongoUser.pokemonCollection.get(index);
                    if (!mongoPokemonConfig)
                        return;
                    if (pokemonConfig) {
                        pokemonConfig.dust = mongoPokemonConfig.dust;
                    }
                    else {
                        const newConfig = new pokemon_config_1.default(index);
                        newConfig.dust = mongoPokemonConfig.dust;
                        user.pokemonCollection.set(index, newConfig);
                    }
                });
                client.send(types_1.Transfer.BOOSTER_CONTENT, boosterContent);
            }
            catch (error) {
                logger_1.logger.error(error);
            }
        });
    }
}
exports.OpenBoosterCommand = OpenBoosterCommand;
function pickRandomPokemonBooster(guarantedUnique) {
    var _a;
    let pkm = Pokemon_1.Pkm.MAGIKARP, emotion = types_1.Emotion.NORMAL;
    const shiny = (0, random_1.chance)(0.03);
    const rarities = Object.keys(Game_1.Rarity);
    const seed = Math.random() * (0, array_1.sum)(Object.values(Config_1.BoosterRarityProbability));
    let threshold = 0;
    if (guarantedUnique) {
        pkm = (0, random_1.pickRandomIn)([
            ...precomputed_rarity_1.PRECOMPUTED_POKEMONS_PER_RARITY[Game_1.Rarity.UNIQUE],
            ...precomputed_rarity_1.PRECOMPUTED_POKEMONS_PER_RARITY[Game_1.Rarity.LEGENDARY]
        ]);
    }
    else {
        for (let i = 0; i < rarities.length; i++) {
            const rarity = rarities[i];
            const rarityProbability = Config_1.BoosterRarityProbability[rarity];
            threshold += rarityProbability;
            if (seed < threshold) {
                const candidates = ((_a = precomputed_rarity_1.PRECOMPUTED_POKEMONS_PER_RARITY[rarity]) !== null && _a !== void 0 ? _a : []).filter((p) => Pokemon_1.Unowns.includes(p) === false);
                if (candidates.length > 0) {
                    pkm = (0, random_1.pickRandomIn)(candidates);
                    break;
                }
            }
        }
    }
    const availableEmotions = Object.values(types_1.Emotion).filter((e, i) => { var _a; return ((_a = precomputed_emotions_1.PRECOMPUTED_EMOTIONS_PER_POKEMON_INDEX[Pokemon_1.PkmIndex[pkm]]) === null || _a === void 0 ? void 0 : _a[i]) === 1; });
    emotion = (0, random_1.pickRandomIn)(availableEmotions);
    return { name: pkm, shiny, emotion };
}
class ChangeNameCommand extends command_1.Command {
    execute(_a) {
        return __awaiter(this, arguments, void 0, function* ({ client, name }) {
            try {
                const user = this.state.users.get(client.auth.uid);
                if (!user)
                    return;
                if (types_1.USERNAME_REGEXP.test(name)) {
                    user.name = name;
                    const usr = yield user_metadata_1.default.findOne({ uid: client.auth.uid });
                    if (usr) {
                        usr.displayName = name;
                        usr.save();
                    }
                }
            }
            catch (error) {
                logger_1.logger.error(error);
            }
        });
    }
}
exports.ChangeNameCommand = ChangeNameCommand;
class ChangeTitleCommand extends command_1.Command {
    execute(_a) {
        return __awaiter(this, arguments, void 0, function* ({ client, title }) {
            try {
                const user = this.state.users.get(client.auth.uid);
                if (user) {
                    if (user.title === title) {
                        title = "";
                    }
                    user.title = title;
                    const usr = yield user_metadata_1.default.findOne({ uid: client.auth.uid });
                    if (usr) {
                        usr.title = title;
                        usr.save();
                    }
                }
            }
            catch (error) {
                logger_1.logger.error(error);
            }
        });
    }
}
exports.ChangeTitleCommand = ChangeTitleCommand;
class ChangeSelectedEmotionCommand extends command_1.Command {
    execute(_a) {
        return __awaiter(this, arguments, void 0, function* ({ client, emotion, index, shiny }) {
            try {
                const user = this.state.users.get(client.auth.uid);
                if (!user)
                    return;
                const pokemonConfig = user.pokemonCollection.get(index);
                if (pokemonConfig) {
                    const emotionsToCheck = shiny
                        ? pokemonConfig.shinyEmotions
                        : pokemonConfig.emotions;
                    if (emotionsToCheck.includes(emotion) &&
                        (emotion != pokemonConfig.selectedEmotion ||
                            shiny != pokemonConfig.selectedShiny)) {
                        pokemonConfig.selectedEmotion = emotion;
                        pokemonConfig.selectedShiny = shiny;
                        const u = yield user_metadata_1.default.findOne({ uid: client.auth.uid });
                        const pkmConfig = u === null || u === void 0 ? void 0 : u.pokemonCollection.get(index);
                        if (u && pkmConfig) {
                            pkmConfig.selectedEmotion = emotion;
                            pkmConfig.selectedShiny = shiny;
                            u.save();
                        }
                    }
                }
            }
            catch (error) {
                logger_1.logger.error(error);
            }
        });
    }
}
exports.ChangeSelectedEmotionCommand = ChangeSelectedEmotionCommand;
class ChangeAvatarCommand extends command_1.Command {
    execute(_a) {
        return __awaiter(this, arguments, void 0, function* ({ client, index, emotion, shiny }) {
            try {
                const user = this.state.users.get(client.auth.uid);
                if (!user)
                    return;
                const config = user.pokemonCollection.get(index);
                if (config) {
                    const emotionsToCheck = shiny ? config.shinyEmotions : config.emotions;
                    if (emotionsToCheck.includes(emotion)) {
                        const portrait = (0, utils_1.getPortraitSrc)(index, shiny, emotion)
                            .replace(types_1.CDN_PORTRAIT_URL, "")
                            .replace(".png", "");
                        user.avatar = portrait;
                        const u = yield user_metadata_1.default.findOne({ uid: client.auth.uid });
                        if (u) {
                            u.avatar = portrait;
                            u.save();
                        }
                    }
                }
            }
            catch (error) {
                logger_1.logger.error(error);
            }
        });
    }
}
exports.ChangeAvatarCommand = ChangeAvatarCommand;
class BuyEmotionCommand extends command_1.Command {
    execute(_a) {
        return __awaiter(this, arguments, void 0, function* ({ client, emotion, index, shiny }) {
            try {
                const user = this.state.users.get(client.auth.uid);
                const cost = (0, Config_1.getEmotionCost)(emotion, shiny);
                if (!user)
                    return;
                const pokemonConfig = user.pokemonCollection.get(index);
                if (!pokemonConfig)
                    return;
                const mongoUser = yield user_metadata_1.default.findOneAndUpdate({
                    uid: client.auth.uid,
                    $and: [
                        { [`pokemonCollection.${index}.dust`]: { $gte: cost } },
                        {
                            [`pokemonCollection.${index}.${shiny ? "shinyEmotions" : "emotions"}`]: { $ne: emotion }
                        }
                    ]
                }, {
                    $inc: { [`pokemonCollection.${index}.dust`]: -cost },
                    $push: {
                        [`pokemonCollection.${index}.${shiny ? "shinyEmotions" : "emotions"}`]: emotion
                    },
                    [`pokemonCollection.${index}.selectedEmotion`]: emotion,
                    [`pokemonCollection.${index}.selectedShiny`]: shiny
                }, { new: true });
                if (!mongoUser)
                    return;
                const mongoPokemonConfig = mongoUser.pokemonCollection.get(index);
                if (!mongoPokemonConfig)
                    return;
                pokemonConfig.dust = mongoPokemonConfig.dust;
                pokemonConfig.selectedShiny = mongoPokemonConfig.selectedShiny;
                pokemonConfig.selectedEmotion = mongoPokemonConfig.selectedEmotion;
                if (shiny && mongoPokemonConfig.shinyEmotions.includes(emotion)) {
                    pokemonConfig.shinyEmotions.push(emotion);
                }
                if (!shiny && mongoPokemonConfig.emotions.includes(emotion)) {
                    pokemonConfig.emotions.push(emotion);
                }
                if (!mongoUser.titles.includes(types_1.Title.SHINY_SEEKER)) {
                    let numberOfShinies = 0;
                    mongoUser.pokemonCollection.forEach((c) => {
                        numberOfShinies += c.shinyEmotions.length;
                    });
                    if (numberOfShinies >= 30) {
                        mongoUser.titles.push(types_1.Title.SHINY_SEEKER);
                    }
                }
                if (!mongoUser.titles.includes(types_1.Title.DUKE) &&
                    mongoUser.pokemonCollection.size >= 30) {
                    mongoUser.titles.push(types_1.Title.DUKE);
                }
                if (emotion === types_1.Emotion.ANGRY &&
                    index === Pokemon_1.PkmIndex[Pokemon_1.Pkm.ARBOK] &&
                    !mongoUser.titles.includes(types_1.Title.DENTIST)) {
                    mongoUser.titles.push(types_1.Title.DENTIST);
                }
                if (!mongoUser.titles.includes(types_1.Title.ARCHEOLOGIST) &&
                    Pokemon_1.Unowns.some((unown) => index === Pokemon_1.PkmIndex[unown]) &&
                    Pokemon_1.Unowns.every((name) => {
                        const index = Pokemon_1.PkmIndex[name];
                        const collection = mongoUser.pokemonCollection.get(index);
                        const isUnlocked = collection &&
                            (collection.emotions.length > 0 ||
                                collection.shinyEmotions.length > 0);
                        return isUnlocked || index === index;
                    })) {
                    mongoUser.titles.push(types_1.Title.ARCHEOLOGIST);
                }
                if (!mongoUser.titles.includes(types_1.Title.DUCHESS) &&
                    mongoPokemonConfig.shinyEmotions.length >=
                        Object.keys(types_1.Emotion).length &&
                    mongoPokemonConfig.emotions.length >= Object.keys(types_1.Emotion).length) {
                    mongoUser.titles.push(types_1.Title.DUCHESS);
                }
                mongoUser.save();
            }
            catch (error) {
                logger_1.logger.error(error);
            }
        });
    }
}
exports.BuyEmotionCommand = BuyEmotionCommand;
class BuyBoosterCommand extends command_1.Command {
    execute(_a) {
        return __awaiter(this, arguments, void 0, function* ({ client, index }) {
            try {
                const user = this.state.users.get(client.auth.uid);
                const BOOSTER_COST = 500;
                if (!user)
                    return;
                const mongoUser = yield user_metadata_1.default.findOneAndUpdate({
                    uid: client.auth.uid,
                    [`pokemonCollection.${index}.dust`]: { $gte: BOOSTER_COST }
                }, {
                    $inc: {
                        booster: 1,
                        [`pokemonCollection.${index}.dust`]: -BOOSTER_COST
                    }
                }, { new: true });
                if (!mongoUser)
                    return;
                const pokemonConfig = user.pokemonCollection.get(index);
                if (!pokemonConfig)
                    return;
                const mongoPokemonConfig = mongoUser.pokemonCollection.get(index);
                if (!mongoPokemonConfig)
                    return;
                user.booster = mongoUser.booster;
                pokemonConfig.dust = mongoPokemonConfig.dust;
            }
            catch (error) {
                logger_1.logger.error(error);
            }
        });
    }
}
exports.BuyBoosterCommand = BuyBoosterCommand;
class OnSearchByIdCommand extends command_1.Command {
    execute(_a) {
        return __awaiter(this, arguments, void 0, function* ({ client, uid }) {
            try {
                const user = yield user_metadata_1.default.findOne({ uid: uid });
                if (user) {
                    const statistic = yield detailled_statistic_v2_1.default.find({ playerId: user.uid }, ["pokemons", "time", "rank", "elo"], { limit: 10, sort: { time: -1 } });
                    if (statistic) {
                        client.send(types_1.Transfer.USER, new lobby_user_1.default(user.uid, user.displayName, user.elo, user.avatar, user.wins, user.exp, user.level, user.donor, statistic.map((r) => {
                            return new game_record_1.GameRecord(r.time, r.rank, r.elo, r.pokemons);
                        }), user.honors, user.pokemonCollection, user.booster, user.titles, user.title, user.role, false, client.auth.metadata.creationTime, client.auth.metadata.lastSignInTime, user.language));
                    }
                }
            }
            catch (error) {
                logger_1.logger.error(error);
            }
        });
    }
}
exports.OnSearchByIdCommand = OnSearchByIdCommand;
class OnSearchCommand extends command_1.Command {
    execute(_a) {
        return __awaiter(this, arguments, void 0, function* ({ client, name }) {
            try {
                const regExp = new RegExp("^" + name);
                const users = yield user_metadata_1.default.find({ displayName: { $regex: regExp, $options: "i" } }, ["uid", "elo", "displayName", "level", "avatar"], { limit: 100, sort: { level: -1 } });
                if (users) {
                    const suggestions = users.map((u) => {
                        return {
                            id: u.uid,
                            elo: u.elo,
                            name: u.displayName,
                            level: u.level,
                            avatar: u.avatar
                        };
                    });
                    client.send(types_1.Transfer.SUGGESTIONS, suggestions);
                }
            }
            catch (error) {
                logger_1.logger.error(error);
            }
        });
    }
}
exports.OnSearchCommand = OnSearchCommand;
class BanUserCommand extends command_1.Command {
    execute(_a) {
        return __awaiter(this, arguments, void 0, function* ({ client, uid, reason }) {
            var _b;
            try {
                const potentialBannedUser = yield user_metadata_1.default.findOne({ uid: uid });
                const user = this.state.users.get(client.auth.uid);
                if (user &&
                    potentialBannedUser &&
                    (user.role === types_1.Role.ADMIN || user.role === types_1.Role.MODERATOR) &&
                    potentialBannedUser.role !== types_1.Role.ADMIN) {
                    this.state.removeMessages(uid);
                    const banned = yield banned_user_1.default.findOne({ uid });
                    if (!banned) {
                        banned_user_1.default.create({
                            uid,
                            author: user.name,
                            time: Date.now(),
                            name: potentialBannedUser.displayName
                        });
                        client.send(types_1.Transfer.BANNED, `${user.name} banned the user ${potentialBannedUser.displayName}`);
                        const dsEmbed = new discord_js_1.EmbedBuilder()
                            .setTitle(`${user.name} banned the user ${potentialBannedUser.displayName}`)
                            .setAuthor({
                            name: user.name,
                            iconURL: (0, utils_1.getAvatarSrc)(user.avatar)
                        })
                            .setDescription(`${user.name} banned the user ${potentialBannedUser.displayName}. Reason: ${reason}`)
                            .setThumbnail((0, utils_1.getAvatarSrc)(potentialBannedUser.avatar));
                        try {
                            (_b = this.room.discordBanWebhook) === null || _b === void 0 ? void 0 : _b.send({
                                embeds: [dsEmbed]
                            });
                        }
                        catch (error) {
                            logger_1.logger.error(error);
                        }
                    }
                    else {
                        client.send(types_1.Transfer.BANNED, `${potentialBannedUser.displayName} was already banned`);
                    }
                    this.room.clients.forEach((c) => {
                        if (c.auth.uid === uid) {
                            c.send(types_1.Transfer.BAN);
                            c.leave();
                        }
                    });
                }
            }
            catch (error) {
                logger_1.logger.error(error);
            }
        });
    }
}
exports.BanUserCommand = BanUserCommand;
class UnbanUserCommand extends command_1.Command {
    execute(_a) {
        return __awaiter(this, arguments, void 0, function* ({ client, uid, name }) {
            var _b;
            try {
                const user = this.state.users.get(client.auth.uid);
                if (user && (user.role === types_1.Role.ADMIN || user.role === types_1.Role.MODERATOR)) {
                    const res = yield banned_user_1.default.deleteOne({ uid });
                    if (res.deletedCount > 0) {
                        client.send(types_1.Transfer.BANNED, `${user.name} unbanned the user ${name}`);
                        const dsEmbed = new discord_js_1.EmbedBuilder()
                            .setTitle(`${user.name} unbanned the user ${name}`)
                            .setAuthor({
                            name: user.name,
                            iconURL: (0, utils_1.getAvatarSrc)(user.avatar)
                        })
                            .setDescription(`${user.name} unbanned the user ${name}`)
                            .setThumbnail((0, utils_1.getAvatarSrc)(user.avatar));
                        try {
                            (_b = this.room.discordBanWebhook) === null || _b === void 0 ? void 0 : _b.send({
                                embeds: [dsEmbed]
                            });
                        }
                        catch (error) {
                            logger_1.logger.error(error);
                        }
                    }
                }
            }
            catch (error) {
                logger_1.logger.error(error);
            }
        });
    }
}
exports.UnbanUserCommand = UnbanUserCommand;
class SelectLanguageCommand extends command_1.Command {
    execute(_a) {
        return __awaiter(this, arguments, void 0, function* ({ client, message }) {
            try {
                const u = this.state.users.get(client.auth.uid);
                if (client.auth.uid && u) {
                    const user = yield user_metadata_1.default.findOne({ uid: client.auth.uid });
                    if (user) {
                        user.language = message;
                        user.save();
                    }
                    u.language = message;
                }
            }
            catch (error) {
                logger_1.logger.error(error);
            }
        });
    }
}
exports.SelectLanguageCommand = SelectLanguageCommand;
class AddBotCommand extends command_1.Command {
    execute(_a) {
        return __awaiter(this, arguments, void 0, function* ({ client, message }) {
            var _b, _c;
            try {
                const user = this.state.users.get(client.auth.uid);
                if (user &&
                    (user.role === types_1.Role.ADMIN ||
                        user.role === types_1.Role.BOT_MANAGER ||
                        user.role === types_1.Role.MODERATOR)) {
                    const id = message.slice(21);
                    client.send(types_1.Transfer.BOT_DATABASE_LOG, `retrieving id : ${id} ...`);
                    client.send(types_1.Transfer.BOT_DATABASE_LOG, "retrieving data ...");
                    const data = yield ((_b = this.room.pastebin) === null || _b === void 0 ? void 0 : _b.getPaste(id, false));
                    if (data) {
                        client.send(types_1.Transfer.BOT_DATABASE_LOG, "parsing JSON data ...");
                        const json = JSON.parse(data);
                        const resultDelete = yield bot_v2_1.BotV2.deleteMany({
                            avatar: json.avatar,
                            author: json.author
                        });
                        const keys = new Array();
                        this.room.bots.forEach((b) => {
                            if (b.avatar === json.avatar && b.author === json.author) {
                                keys.push(b.id);
                            }
                        });
                        keys.forEach((k) => {
                            this.room.bots.delete(k);
                        });
                        client.send(types_1.Transfer.BOT_DATABASE_LOG, JSON.stringify(resultDelete, null, 2));
                        client.send(types_1.Transfer.BOT_DATABASE_LOG, `creating Bot ${json.avatar} by ${json.author}...`);
                        const resultCreate = yield bot_v2_1.BotV2.create({
                            name: json.name,
                            avatar: json.avatar,
                            elo: json.elo ? json.elo : 1200,
                            author: json.author,
                            steps: json.steps,
                            id: (0, nanoid_1.nanoid)()
                        });
                        const dsEmbed = new discord_js_1.EmbedBuilder()
                            .setTitle(`BOT ${json.name} by @${json.author} loaded by ${user.name}`)
                            .setURL(message)
                            .setAuthor({
                            name: user.name,
                            iconURL: (0, utils_1.getAvatarSrc)(user.avatar)
                        })
                            .setDescription(`BOT ${json.name} by @${json.author} (url: ${message} ) loaded by ${user.name}`)
                            .setThumbnail((0, utils_1.getAvatarSrc)(json.avatar));
                        try {
                            (_c = this.room.discordWebhook) === null || _c === void 0 ? void 0 : _c.send({
                                embeds: [dsEmbed]
                            });
                        }
                        catch (error) {
                            logger_1.logger.error(error);
                        }
                        this.room.bots.set(resultCreate.id, resultCreate);
                        this.room.broadcast(types_1.Transfer.REQUEST_BOT_LIST, (0, bots_1.createBotList)(this.room.bots, { withSteps: true }));
                    }
                    else {
                        client.send(types_1.Transfer.BOT_DATABASE_LOG, `no pastebin found with given url ${message}`);
                    }
                }
            }
            catch (error) {
                logger_1.logger.error(error);
                client.send(types_1.Transfer.BOT_DATABASE_LOG, JSON.stringify(error));
            }
        });
    }
}
exports.AddBotCommand = AddBotCommand;
class DeleteBotCommand extends command_1.Command {
    execute(_a) {
        return __awaiter(this, arguments, void 0, function* ({ client, message }) {
            var _b;
            try {
                const user = this.state.users.get(client.auth.uid);
                if (user &&
                    (user.role === types_1.Role.ADMIN ||
                        user.role === types_1.Role.BOT_MANAGER ||
                        user.role === types_1.Role.MODERATOR)) {
                    const id = message;
                    const botData = this.room.bots.get(id);
                    client.send(types_1.Transfer.BOT_DATABASE_LOG, `deleting bot ${botData === null || botData === void 0 ? void 0 : botData.name}by @${botData === null || botData === void 0 ? void 0 : botData.author} id ${id}`);
                    const resultDelete = yield bot_v2_1.BotV2.deleteOne({ id: id });
                    client.send(types_1.Transfer.BOT_DATABASE_LOG, JSON.stringify(resultDelete, null, 2));
                    const dsEmbed = new discord_js_1.EmbedBuilder()
                        .setTitle(`BOT ${botData === null || botData === void 0 ? void 0 : botData.name} by @${botData === null || botData === void 0 ? void 0 : botData.author} deleted by ${user.name}`)
                        .setAuthor({
                        name: user.name,
                        iconURL: (0, utils_1.getAvatarSrc)(user.avatar)
                    })
                        .setDescription(`BOT ${botData === null || botData === void 0 ? void 0 : botData.name} by @${botData === null || botData === void 0 ? void 0 : botData.author} (id: ${message} ) deleted by ${user.name}`)
                        .setThumbnail((0, utils_1.getAvatarSrc)((botData === null || botData === void 0 ? void 0 : botData.avatar) ? botData === null || botData === void 0 ? void 0 : botData.avatar : ""));
                    try {
                        (_b = this.room.discordWebhook) === null || _b === void 0 ? void 0 : _b.send({
                            embeds: [dsEmbed]
                        });
                    }
                    catch (error) {
                        logger_1.logger.error(error);
                    }
                    this.room.bots.delete(id);
                    this.room.broadcast(types_1.Transfer.REQUEST_BOT_LIST, (0, bots_1.createBotList)(this.room.bots, { withSteps: true }));
                }
            }
            catch (error) {
                logger_1.logger.error(error);
                client.send(types_1.Transfer.BOT_DATABASE_LOG, JSON.stringify(error));
            }
        });
    }
}
exports.DeleteBotCommand = DeleteBotCommand;
class OnBotUploadCommand extends command_1.Command {
    execute({ client, bot }) {
        var _a;
        try {
            const user = this.state.users.get(client.auth.uid);
            if (!user)
                return;
            (_a = this.room.pastebin) === null || _a === void 0 ? void 0 : _a.createPaste({
                text: JSON.stringify(bot),
                title: `${user.name} has uploaded BOT ${bot.name}`,
                format: "json"
            }).then((data) => {
                var _a;
                const dsEmbed = new discord_js_1.EmbedBuilder()
                    .setTitle(`BOT ${bot.name} created by ${bot.author}`)
                    .setURL(data)
                    .setAuthor({
                    name: user.name,
                    iconURL: (0, utils_1.getAvatarSrc)(user.avatar)
                })
                    .setDescription(`A new bot has been created by ${user.name}, You can import the data in the Pokemon Auto Chess Bot Builder (url: ${data} ).`)
                    .setThumbnail((0, utils_1.getAvatarSrc)(bot.avatar));
                client.send(types_1.Transfer.PASTEBIN_URL, { url: data });
                try {
                    (_a = this.room.discordWebhook) === null || _a === void 0 ? void 0 : _a.send({
                        embeds: [dsEmbed]
                    });
                }
                catch (error) {
                    logger_1.logger.error(error);
                }
            }).catch((error) => {
                logger_1.logger.error(error);
            });
        }
        catch (error) {
            logger_1.logger.error(error);
        }
    }
}
exports.OnBotUploadCommand = OnBotUploadCommand;
class OpenSpecialGameCommand extends command_1.Command {
    execute({ gameMode, minRank, noElo }) {
        logger_1.logger.info(`Creating special game ${gameMode} ${minRank !== null && minRank !== void 0 ? minRank : ""}`);
        let roomName = "Special game";
        if (gameMode === Game_1.GameMode.RANKED) {
            if (minRank === EloRank_1.EloRank.GREATBALL) {
                roomName = `Great Ball Ranked Match`;
            }
            else if (minRank === EloRank_1.EloRank.ULTRABALL) {
                roomName = `Ultra Ball Ranked Match`;
            }
            else {
                roomName = `Ranked Match`;
            }
        }
        else if (gameMode === Game_1.GameMode.SCRIBBLE) {
            roomName = "Smeargle's Scribble";
        }
        colyseus_1.matchMaker.createRoom("preparation", {
            gameMode,
            minRank,
            noElo,
            ownerId: null,
            roomName,
            autoStartDelayInSeconds: 15 * 60
        });
        this.state.getNextSpecialGame();
    }
}
exports.OpenSpecialGameCommand = OpenSpecialGameCommand;
class OnCreateTournamentCommand extends command_1.Command {
    execute(_a) {
        return __awaiter(this, arguments, void 0, function* ({ client, name, startDate }) {
            try {
                const user = this.state.users.get(client.auth.uid);
                if (user && user.role && user.role === types_1.Role.ADMIN) {
                    yield this.state.createTournament(name, startDate);
                    yield this.room.fetchTournaments();
                }
            }
            catch (error) {
                logger_1.logger.error(error);
            }
        });
    }
}
exports.OnCreateTournamentCommand = OnCreateTournamentCommand;
class RemoveTournamentCommand extends command_1.Command {
    execute({ client, tournamentId }) {
        try {
            const user = this.state.users.get(client.auth.uid);
            if (user && user.role && user.role === types_1.Role.ADMIN) {
                this.state.removeTournament(tournamentId);
            }
        }
        catch (error) {
            logger_1.logger.error(error);
        }
    }
}
exports.RemoveTournamentCommand = RemoveTournamentCommand;
class ParticipateInTournamentCommand extends command_1.Command {
    execute(_a) {
        return __awaiter(this, arguments, void 0, function* ({ client, tournamentId, participate }) {
            try {
                if (!client.auth.uid || this.state.users.has(client.auth.uid) === false)
                    return;
                const tournament = this.state.tournaments.find((t) => t.id === tournamentId);
                if (!tournament)
                    return logger_1.logger.error(`Tournament not found: ${tournamentId}`);
                const user = yield user_metadata_1.default.findOne({ uid: client.auth.uid });
                if (!user)
                    return;
                if (participate) {
                    const tournamentPlayer = new tournament_1.TournamentPlayerSchema(user.displayName, user.avatar, user.elo);
                    tournament.players.set(user.uid, tournamentPlayer);
                }
                else if (tournament.players.has(user.uid)) {
                    tournament.players.delete(user.uid);
                }
                const mongoTournament = yield tournament_2.Tournament.findById(tournamentId);
                if (mongoTournament) {
                    mongoTournament.players = (0, schemas_1.convertSchemaToRawObject)(tournament.players);
                    mongoTournament.save();
                }
            }
            catch (error) {
                logger_1.logger.error(error);
            }
        });
    }
}
exports.ParticipateInTournamentCommand = ParticipateInTournamentCommand;
class NextTournamentStageCommand extends command_1.Command {
    execute(_a) {
        return __awaiter(this, arguments, void 0, function* ({ tournamentId }) {
            try {
                logger_1.logger.debug(`Tournament ${tournamentId} is moving to next stage`);
                const tournament = this.state.tournaments.find((t) => t.id === tournamentId);
                if (!tournament)
                    return logger_1.logger.error(`Tournament not found: ${tournamentId}`);
                const remainingPlayers = (0, tournament_logic_1.getRemainingPlayers)(tournament);
                if (remainingPlayers.length <= 4 &&
                    remainingPlayers.some((p) => p.ranks.length > 0)) {
                    return [new EndTournamentCommand().setPayload({ tournamentId })];
                }
                else {
                    return [
                        new CreateTournamentLobbiesCommand().setPayload({ tournamentId })
                    ];
                }
            }
            catch (error) {
                logger_1.logger.error(error);
            }
        });
    }
}
exports.NextTournamentStageCommand = NextTournamentStageCommand;
class CreateTournamentLobbiesCommand extends command_1.Command {
    execute(_a) {
        return __awaiter(this, arguments, void 0, function* ({ tournamentId, client }) {
            try {
                if (client) {
                    const user = this.state.users.get(client.auth.uid);
                    if (!user || !user.role || user.role !== types_1.Role.ADMIN) {
                        return;
                    }
                }
                logger_1.logger.debug(`Creating tournament lobbies for tournament ${tournamentId}`);
                const tournament = this.state.tournaments.find((t) => t.id === tournamentId);
                if (!tournament)
                    return logger_1.logger.error(`Tournament not found: ${tournamentId}`);
                this.state.addAnnouncement(`${tournament.name} ${(0, tournament_logic_1.getTournamentStage)(tournament)} are starting !`);
                const brackets = (0, tournament_logic_1.makeBrackets)(tournament);
                tournament.brackets.clear();
                for (const bracket of brackets) {
                    const bracketId = (0, nanoid_1.nanoid)();
                    logger_1.logger.info(`Creating tournament game ${bracket.name} id: ${bracketId}`);
                    tournament.brackets.set(bracketId, new tournament_1.TournamentBracketSchema(bracket.name, bracket.playersId));
                    yield colyseus_1.matchMaker.createRoom("preparation", {
                        gameMode: Game_1.GameMode.TOURNAMENT,
                        noElo: true,
                        ownerId: null,
                        roomName: bracket.name,
                        autoStartDelayInSeconds: 10 * 60,
                        whitelist: bracket.playersId,
                        tournamentId,
                        bracketId
                    });
                }
                const mongoTournament = yield tournament_2.Tournament.findById(tournamentId);
                if (mongoTournament) {
                    mongoTournament.brackets = (0, schemas_1.convertSchemaToRawObject)(tournament.brackets);
                    yield mongoTournament.save();
                }
            }
            catch (error) {
                logger_1.logger.error(error);
            }
        });
    }
}
exports.CreateTournamentLobbiesCommand = CreateTournamentLobbiesCommand;
class EndTournamentMatchCommand extends command_1.Command {
    execute(_a) {
        return __awaiter(this, arguments, void 0, function* ({ tournamentId, bracketId, players }) {
            logger_1.logger.debug(`Tournament ${tournamentId} bracket ${bracketId} has ended`);
            try {
                const tournament = this.state.tournaments.find((t) => t.id === tournamentId);
                if (!tournament)
                    return logger_1.logger.error(`Tournament not found: ${tournamentId}`);
                const bracket = tournament.brackets.get(bracketId);
                if (!bracket)
                    return logger_1.logger.error(`Tournament bracket not found: ${bracketId}`);
                bracket.finished = true;
                players.forEach((p) => {
                    const player = tournament.players.get(p.id);
                    if (player) {
                        player.ranks.push(p.rank);
                        if (p.rank > 4) {
                            player.eliminated = true;
                        }
                    }
                });
                bracket.playersId.forEach((playerId) => {
                    const player = tournament.players.get(playerId);
                    if (player && players.every((p) => p.id !== playerId)) {
                        player.eliminated = true;
                    }
                });
                if ((0, schemas_1.values)(tournament.brackets).every((b) => b.finished)) {
                    const mongoTournament = yield tournament_2.Tournament.findById(tournamentId);
                    if (mongoTournament) {
                        mongoTournament.players = (0, schemas_1.convertSchemaToRawObject)(tournament.players);
                        mongoTournament.brackets = (0, schemas_1.convertSchemaToRawObject)(tournament.brackets);
                        mongoTournament.save();
                    }
                    return [new NextTournamentStageCommand().setPayload({ tournamentId })];
                }
            }
            catch (error) {
                logger_1.logger.error(error);
            }
        });
    }
}
exports.EndTournamentMatchCommand = EndTournamentMatchCommand;
class EndTournamentCommand extends command_1.Command {
    execute(_a) {
        return __awaiter(this, arguments, void 0, function* ({ tournamentId }) {
            var _b;
            try {
                logger_1.logger.debug(`Tournament ${tournamentId} is finished`);
                const tournament = this.state.tournaments.find((t) => t.id === tournamentId);
                if (!tournament)
                    return logger_1.logger.error(`Tournament not found: ${tournamentId}`);
                let finalists = [], nbMatchsPlayed = 0;
                tournament.players.forEach((player, playerId) => {
                    if (player.ranks.length > nbMatchsPlayed) {
                        finalists = [];
                        nbMatchsPlayed = player.ranks.length;
                    }
                    if (player.ranks.length === nbMatchsPlayed) {
                        finalists.push(Object.assign({ id: playerId }, player));
                    }
                });
                const winner = finalists.find((p) => p.ranks.at(-1) === 1);
                if (winner) {
                    this.room.presence.publish("tournament-winner", winner);
                }
                for (const player of finalists) {
                    const mongoUser = yield user_metadata_1.default.findOne({ uid: player.id });
                    const user = this.state.users.get(player.id);
                    const rank = (_b = player.ranks.at(-1)) !== null && _b !== void 0 ? _b : 1;
                    if (mongoUser == null || user == null)
                        continue;
                    mongoUser.booster += 3;
                    if (mongoUser.titles.includes(types_1.Title.ACE_TRAINER) === false) {
                        mongoUser.titles.push(types_1.Title.ACE_TRAINER);
                        user.titles.push(types_1.Title.ACE_TRAINER);
                    }
                    if (rank <= 4) {
                        mongoUser.booster += 3;
                        if (mongoUser.titles.includes(types_1.Title.ELITE_FOUR_MEMBER) === false) {
                            mongoUser.titles.push(types_1.Title.ELITE_FOUR_MEMBER);
                            user.titles.push(types_1.Title.ELITE_FOUR_MEMBER);
                        }
                    }
                    if (rank === 1) {
                        mongoUser.booster += 4;
                        if (mongoUser.titles.includes(types_1.Title.CHAMPION) === false) {
                            mongoUser.titles.push(types_1.Title.CHAMPION);
                            user.titles.push(types_1.Title.CHAMPION);
                        }
                    }
                    user.booster = mongoUser.booster;
                    yield mongoUser.save();
                }
                tournament.brackets.clear();
                tournament.finished = true;
                const mongoTournament = yield tournament_2.Tournament.findById(tournamentId);
                if (mongoTournament) {
                    mongoTournament.finished = true;
                    mongoTournament.brackets = (0, schemas_1.convertSchemaToRawObject)(tournament.brackets);
                    yield mongoTournament.save();
                }
            }
            catch (error) {
                logger_1.logger.error(error);
            }
        });
    }
}
exports.EndTournamentCommand = EndTournamentCommand;
//# sourceMappingURL=lobby-commands.js.map