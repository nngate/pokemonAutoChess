"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.setTitle = exports.searchById = exports.lockClick = exports.levelClick = exports.shopClick = exports.itemClick = exports.toggleEloRoom = exports.toggleReady = exports.listBots = exports.removeBot = exports.addBot = exports.requestBotData = exports.createBot = exports.requestBotList = exports.changeAvatar = exports.changeName = exports.joinAfter = exports.joinGame = exports.joinPreparation = exports.searchName = exports.sendMessage = exports.joinLobby = exports.setProfile = exports.logOut = exports.logIn = exports.gameStartRequest = exports.changeRoomPassword = exports.changeRoomName = exports.buyBooster = exports.buyEmotion = exports.changeSelectedEmotion = exports.openBooster = exports.showEmote = exports.giveBooster = exports.participateInTournament = exports.createTournamentLobbies = exports.removeTournament = exports.removeMessage = exports.giveRole = exports.giveTitle = exports.requestLevelLeaderboard = exports.requestBotLeaderboard = exports.requestLeaderboard = exports.pokemonPropositionClick = exports.ban = exports.addBotDatabase = exports.deleteBotDatabase = exports.unban = exports.selectLanguage = exports.networkSlice = void 0;
exports.createTournament = exports.deleteRoom = exports.kick = void 0;
const toolkit_1 = require("@reduxjs/toolkit");
const colyseus_js_1 = require("colyseus.js");
const types_1 = require("../../../types");
const logger_1 = require("../../../utils/logger");
const endpoint = `${window.location.protocol.replace("http", "ws")}//${window.location.host}`;
logger_1.logger.info(endpoint);
const initalState = {
    client: new colyseus_js_1.Client(endpoint),
    lobby: undefined,
    preparation: undefined,
    game: undefined,
    after: undefined,
    uid: "",
    displayName: "",
    profile: undefined
};
exports.networkSlice = (0, toolkit_1.createSlice)({
    name: "network",
    initialState: initalState,
    reducers: {
        logIn: (state, action) => {
            if (action.payload) {
                state.uid = action.payload.uid;
                state.displayName = action.payload.displayName
                    ? action.payload.displayName
                    : "";
            }
        },
        logOut: (state) => {
            var _a, _b, _c, _d;
            state.client = new colyseus_js_1.Client(endpoint);
            state.uid = "";
            state.displayName = "";
            (_a = state.preparation) === null || _a === void 0 ? void 0 : _a.connection.close();
            state.preparation = undefined;
            (_b = state.lobby) === null || _b === void 0 ? void 0 : _b.connection.close();
            state.lobby = undefined;
            (_c = state.game) === null || _c === void 0 ? void 0 : _c.connection.close();
            state.game = undefined;
            (_d = state.after) === null || _d === void 0 ? void 0 : _d.connection.close();
            state.after = undefined;
        },
        setProfile: (state, action) => {
            state.profile = action.payload;
        },
        joinLobby: (state, action) => {
            var _a, _b, _c;
            state.lobby = action.payload;
            (_a = state.preparation) === null || _a === void 0 ? void 0 : _a.connection.close();
            state.preparation = undefined;
            (_b = state.game) === null || _b === void 0 ? void 0 : _b.connection.close();
            state.game = undefined;
            (_c = state.after) === null || _c === void 0 ? void 0 : _c.connection.close();
            state.after = undefined;
        },
        joinPreparation: (state, action) => {
            var _a, _b, _c;
            state.preparation = action.payload;
            (_a = state.lobby) === null || _a === void 0 ? void 0 : _a.connection.close();
            state.lobby = undefined;
            (_b = state.game) === null || _b === void 0 ? void 0 : _b.connection.close();
            state.game = undefined;
            (_c = state.after) === null || _c === void 0 ? void 0 : _c.connection.close();
            state.after = undefined;
        },
        joinGame: (state, action) => {
            var _a, _b, _c;
            Object.assign(state, { game: action.payload });
            (_a = state.preparation) === null || _a === void 0 ? void 0 : _a.connection.close();
            state.preparation = undefined;
            (_b = state.lobby) === null || _b === void 0 ? void 0 : _b.connection.close();
            state.lobby = undefined;
            (_c = state.after) === null || _c === void 0 ? void 0 : _c.connection.close();
            state.after = undefined;
        },
        joinAfter: (state, action) => {
            var _a, _b, _c;
            state.after = action.payload;
            (_a = state.game) === null || _a === void 0 ? void 0 : _a.connection.close();
            state.game = undefined;
            (_b = state.lobby) === null || _b === void 0 ? void 0 : _b.connection.close();
            state.lobby = undefined;
            (_c = state.preparation) === null || _c === void 0 ? void 0 : _c.connection.close();
            state.preparation = undefined;
        },
        sendMessage: (state, action) => {
            if (state.lobby) {
                state.lobby.send(types_1.Transfer.NEW_MESSAGE, action.payload);
            }
            if (state.preparation) {
                state.preparation.send(types_1.Transfer.NEW_MESSAGE, action.payload);
            }
        },
        removeMessage: (state, action) => {
            if (state.lobby) {
                state.lobby.send(types_1.Transfer.REMOVE_MESSAGE, action.payload);
            }
            if (state.preparation) {
                state.preparation.send(types_1.Transfer.REMOVE_MESSAGE, action.payload);
            }
        },
        searchName: (state, action) => {
            var _a;
            (_a = state.lobby) === null || _a === void 0 ? void 0 : _a.send(types_1.Transfer.SEARCH, { name: action.payload });
        },
        changeName: (state, action) => {
            var _a;
            (_a = state.lobby) === null || _a === void 0 ? void 0 : _a.send(types_1.Transfer.CHANGE_NAME, { name: action.payload });
        },
        changeAvatar: (state, action) => {
            var _a;
            (_a = state.lobby) === null || _a === void 0 ? void 0 : _a.send(types_1.Transfer.CHANGE_AVATAR, action.payload);
        },
        requestBotList: (state, action) => {
            var _a;
            (_a = state.lobby) === null || _a === void 0 ? void 0 : _a.send(types_1.Transfer.REQUEST_BOT_LIST, action.payload);
        },
        createBot: (state, action) => {
            var _a;
            (_a = state.lobby) === null || _a === void 0 ? void 0 : _a.send(types_1.Transfer.BOT_CREATION, { bot: action.payload });
        },
        requestBotData: (state, action) => {
            var _a;
            (_a = state.lobby) === null || _a === void 0 ? void 0 : _a.send(types_1.Transfer.REQUEST_BOT_DATA, action.payload);
        },
        requestLeaderboard: (state) => {
            var _a;
            (_a = state.lobby) === null || _a === void 0 ? void 0 : _a.send(types_1.Transfer.REQUEST_LEADERBOARD);
        },
        requestBotLeaderboard: (state) => {
            var _a;
            (_a = state.lobby) === null || _a === void 0 ? void 0 : _a.send(types_1.Transfer.REQUEST_BOT_LEADERBOARD);
        },
        requestLevelLeaderboard: (state) => {
            var _a;
            (_a = state.lobby) === null || _a === void 0 ? void 0 : _a.send(types_1.Transfer.REQUEST_LEVEL_LEADERBOARD);
        },
        addBot: (state, action) => {
            var _a;
            (_a = state.preparation) === null || _a === void 0 ? void 0 : _a.send(types_1.Transfer.ADD_BOT, action.payload);
        },
        removeBot: (state, action) => {
            var _a;
            (_a = state.preparation) === null || _a === void 0 ? void 0 : _a.send(types_1.Transfer.REMOVE_BOT, action.payload);
        },
        listBots: (state) => {
            var _a;
            (_a = state.preparation) === null || _a === void 0 ? void 0 : _a.send(types_1.Transfer.REQUEST_BOT_LIST);
        },
        toggleReady: (state, action) => {
            var _a;
            (_a = state.preparation) === null || _a === void 0 ? void 0 : _a.send(types_1.Transfer.TOGGLE_READY, action.payload);
        },
        toggleEloRoom: (state, action) => {
            var _a;
            (_a = state.preparation) === null || _a === void 0 ? void 0 : _a.send(types_1.Transfer.TOGGLE_NO_ELO, action.payload);
        },
        lockClick: (state) => {
            var _a;
            (_a = state.game) === null || _a === void 0 ? void 0 : _a.send(types_1.Transfer.LOCK);
        },
        levelClick: (state) => {
            var _a;
            (_a = state.game) === null || _a === void 0 ? void 0 : _a.send(types_1.Transfer.LEVEL_UP);
        },
        shopClick: (state, action) => {
            var _a;
            (_a = state.game) === null || _a === void 0 ? void 0 : _a.send(types_1.Transfer.SHOP, { id: action.payload });
        },
        pokemonPropositionClick: (state, action) => {
            var _a;
            (_a = state.game) === null || _a === void 0 ? void 0 : _a.send(types_1.Transfer.POKEMON_PROPOSITION, action.payload);
        },
        itemClick: (state, action) => {
            var _a;
            (_a = state.game) === null || _a === void 0 ? void 0 : _a.send(types_1.Transfer.ITEM, action.payload);
        },
        gameStartRequest: (state, action) => {
            var _a;
            (_a = state.preparation) === null || _a === void 0 ? void 0 : _a.send(types_1.Transfer.GAME_START_REQUEST, {
                token: action.payload
            });
        },
        changeRoomName: (state, action) => {
            var _a;
            (_a = state.preparation) === null || _a === void 0 ? void 0 : _a.send(types_1.Transfer.CHANGE_ROOM_NAME, action.payload);
        },
        changeRoomPassword: (state, action) => {
            var _a;
            (_a = state.preparation) === null || _a === void 0 ? void 0 : _a.send(types_1.Transfer.CHANGE_ROOM_PASSWORD, action.payload);
        },
        changeSelectedEmotion: (state, action) => {
            var _a;
            (_a = state.lobby) === null || _a === void 0 ? void 0 : _a.send(types_1.Transfer.CHANGE_SELECTED_EMOTION, action.payload);
        },
        buyEmotion: (state, action) => {
            var _a;
            (_a = state.lobby) === null || _a === void 0 ? void 0 : _a.send(types_1.Transfer.BUY_EMOTION, action.payload);
        },
        buyBooster: (state, action) => {
            var _a;
            (_a = state.lobby) === null || _a === void 0 ? void 0 : _a.send(types_1.Transfer.BUY_BOOSTER, action.payload);
        },
        openBooster: (state) => {
            var _a;
            (_a = state.lobby) === null || _a === void 0 ? void 0 : _a.send(types_1.Transfer.OPEN_BOOSTER);
        },
        showEmote: (state, action) => {
            var _a;
            (_a = state.game) === null || _a === void 0 ? void 0 : _a.send(types_1.Transfer.SHOW_EMOTE, action.payload);
        },
        searchById: (state, action) => {
            var _a;
            (_a = state.lobby) === null || _a === void 0 ? void 0 : _a.send(types_1.Transfer.SEARCH_BY_ID, action.payload);
        },
        setTitle: (state, action) => {
            var _a;
            (_a = state.lobby) === null || _a === void 0 ? void 0 : _a.send(types_1.Transfer.SET_TITLE, action.payload);
        },
        removeTournament: (state, action) => {
            var _a;
            (_a = state.lobby) === null || _a === void 0 ? void 0 : _a.send(types_1.Transfer.REMOVE_TOURNAMENT, action.payload);
        },
        createTournamentLobbies: (state, action) => {
            var _a;
            (_a = state.lobby) === null || _a === void 0 ? void 0 : _a.send(types_1.Transfer.REMAKE_TOURNAMENT_LOBBIES, action.payload);
        },
        participateInTournament: (state, action) => {
            var _a;
            (_a = state.lobby) === null || _a === void 0 ? void 0 : _a.send(types_1.Transfer.PARTICIPATE_TOURNAMENT, action.payload);
        },
        giveBooster: (state, action) => {
            var _a;
            (_a = state.lobby) === null || _a === void 0 ? void 0 : _a.send(types_1.Transfer.GIVE_BOOSTER, action.payload);
        },
        giveRole: (state, action) => {
            var _a;
            (_a = state.lobby) === null || _a === void 0 ? void 0 : _a.send(types_1.Transfer.SET_ROLE, action.payload);
        },
        giveTitle: (state, action) => {
            var _a;
            (_a = state.lobby) === null || _a === void 0 ? void 0 : _a.send(types_1.Transfer.GIVE_TITLE, action.payload);
        },
        kick: (state, action) => {
            var _a;
            (_a = state.preparation) === null || _a === void 0 ? void 0 : _a.send(types_1.Transfer.KICK, action.payload);
        },
        deleteRoom: (state) => {
            var _a;
            (_a = state.preparation) === null || _a === void 0 ? void 0 : _a.send(types_1.Transfer.DELETE_ROOM);
        },
        ban: (state, action) => {
            var _a;
            (_a = state.lobby) === null || _a === void 0 ? void 0 : _a.send(types_1.Transfer.BAN, action.payload);
        },
        unban: (state, action) => {
            var _a;
            (_a = state.lobby) === null || _a === void 0 ? void 0 : _a.send(types_1.Transfer.UNBAN, action.payload);
        },
        deleteBotDatabase: (state, action) => {
            var _a;
            (_a = state.lobby) === null || _a === void 0 ? void 0 : _a.send(types_1.Transfer.DELETE_BOT_DATABASE, action.payload);
        },
        addBotDatabase: (state, action) => {
            var _a;
            (_a = state.lobby) === null || _a === void 0 ? void 0 : _a.send(types_1.Transfer.ADD_BOT_DATABASE, action.payload);
        },
        selectLanguage: (state, action) => {
            var _a;
            (_a = state.lobby) === null || _a === void 0 ? void 0 : _a.send(types_1.Transfer.SELECT_LANGUAGE, action.payload);
        },
        createTournament: (state, action) => {
            var _a;
            (_a = state.lobby) === null || _a === void 0 ? void 0 : _a.send(types_1.Transfer.NEW_TOURNAMENT, action.payload);
        }
    }
});
_a = exports.networkSlice.actions, exports.selectLanguage = _a.selectLanguage, exports.unban = _a.unban, exports.deleteBotDatabase = _a.deleteBotDatabase, exports.addBotDatabase = _a.addBotDatabase, exports.ban = _a.ban, exports.pokemonPropositionClick = _a.pokemonPropositionClick, exports.requestLeaderboard = _a.requestLeaderboard, exports.requestBotLeaderboard = _a.requestBotLeaderboard, exports.requestLevelLeaderboard = _a.requestLevelLeaderboard, exports.giveTitle = _a.giveTitle, exports.giveRole = _a.giveRole, exports.removeMessage = _a.removeMessage, exports.removeTournament = _a.removeTournament, exports.createTournamentLobbies = _a.createTournamentLobbies, exports.participateInTournament = _a.participateInTournament, exports.giveBooster = _a.giveBooster, exports.showEmote = _a.showEmote, exports.openBooster = _a.openBooster, exports.changeSelectedEmotion = _a.changeSelectedEmotion, exports.buyEmotion = _a.buyEmotion, exports.buyBooster = _a.buyBooster, exports.changeRoomName = _a.changeRoomName, exports.changeRoomPassword = _a.changeRoomPassword, exports.gameStartRequest = _a.gameStartRequest, exports.logIn = _a.logIn, exports.logOut = _a.logOut, exports.setProfile = _a.setProfile, exports.joinLobby = _a.joinLobby, exports.sendMessage = _a.sendMessage, exports.searchName = _a.searchName, exports.joinPreparation = _a.joinPreparation, exports.joinGame = _a.joinGame, exports.joinAfter = _a.joinAfter, exports.changeName = _a.changeName, exports.changeAvatar = _a.changeAvatar, exports.requestBotList = _a.requestBotList, exports.createBot = _a.createBot, exports.requestBotData = _a.requestBotData, exports.addBot = _a.addBot, exports.removeBot = _a.removeBot, exports.listBots = _a.listBots, exports.toggleReady = _a.toggleReady, exports.toggleEloRoom = _a.toggleEloRoom, exports.itemClick = _a.itemClick, exports.shopClick = _a.shopClick, exports.levelClick = _a.levelClick, exports.lockClick = _a.lockClick, exports.searchById = _a.searchById, exports.setTitle = _a.setTitle, exports.kick = _a.kick, exports.deleteRoom = _a.deleteRoom, exports.createTournament = _a.createTournament;
exports.default = exports.networkSlice.reducer;
//# sourceMappingURL=NetworkStore.js.map