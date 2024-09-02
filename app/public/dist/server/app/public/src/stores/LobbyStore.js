"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.changeTournamentBracket = exports.removeTournamentBracket = exports.addTournamentBracket = exports.changeTournamentPlayer = exports.updateTournament = exports.changeTournament = exports.removeTournament = exports.addTournament = exports.setNextSpecialGame = exports.pushBotLog = exports.setSuggestions = exports.leaveLobby = exports.setBotData = exports.setPastebinUrl = exports.setBotList = exports.setSearchedUser = exports.setCcu = exports.removeRoom = exports.addRoom = exports.setTabIndex = exports.setUser = exports.changeUser = exports.setLevelLeaderboard = exports.setBotLeaderboard = exports.setLeaderboard = exports.pushMessage = exports.changePokemonConfig = exports.addPokemonConfig = exports.setBoosterContent = exports.removeMessage = exports.setLanguage = exports.lobbySlice = void 0;
const toolkit_1 = require("@reduxjs/toolkit");
const Language_1 = require("../../../types/enum/Language");
const bot_logic_1 = require("../pages/component/bot-builder/bot-logic");
const initialState = {
    language: Language_1.Language.en,
    botLogDatabase: [],
    suggestions: [],
    boosterContent: [],
    pokemonCollection: [],
    messages: [],
    leaderboard: [],
    botLeaderboard: [],
    levelLeaderboard: [],
    user: undefined,
    tabIndex: 0,
    preparationRooms: [],
    gameRooms: [],
    searchedUser: undefined,
    botList: [],
    pastebinUrl: "",
    botData: {
        steps: Array.from({ length: bot_logic_1.MAX_BOTS_STAGE + 1 }, () => ({
            roundsRequired: 1,
            board: []
        })),
        avatar: "ditto",
        author: "",
        elo: 1200,
        name: "ditto",
        id: ""
    },
    nextSpecialGame: null,
    tournaments: [],
    ccu: 0
};
exports.lobbySlice = (0, toolkit_1.createSlice)({
    name: "lobby",
    initialState: initialState,
    reducers: {
        pushBotLog: (state, action) => {
            state.botLogDatabase.push(action.payload);
        },
        pushMessage: (state, action) => {
            state.messages.push(structuredClone(action.payload));
        },
        removeMessage: (state, action) => {
            state.messages = state.messages.filter((m) => m.payload !== action.payload.payload);
        },
        setLeaderboard: (state, action) => {
            state.leaderboard = action.payload;
        },
        setBotLeaderboard: (state, action) => {
            state.botLeaderboard = action.payload;
        },
        setLevelLeaderboard: (state, action) => {
            state.levelLeaderboard = action.payload;
        },
        addPokemonConfig: (state, action) => {
            state.pokemonCollection = [...state.pokemonCollection, action.payload];
        },
        changePokemonConfig: (state, action) => {
            const index = state.pokemonCollection.findIndex((p) => p.id === action.payload.id);
            const clonedCollection = [...state.pokemonCollection];
            if (index !== -1) {
                clonedCollection[index][action.payload.field] = action.payload.value;
                state.pokemonCollection = clonedCollection;
            }
        },
        changeUser: (state, action) => {
            if (state.user && action.payload.id == state.user.id) {
                state.user[action.payload.field] = action.payload.value;
            }
        },
        setUser: (state, action) => {
            const u = JSON.parse(JSON.stringify(action.payload));
            state.user = u;
        },
        setTabIndex: (state, action) => {
            state.tabIndex = action.payload;
        },
        setCcu: (state, action) => {
            state.ccu = action.payload;
        },
        addRoom: (state, action) => {
            const metadata = action.payload.metadata;
            if (metadata && metadata.name) {
                const rooms = metadata.type === "preparation"
                    ? state.preparationRooms
                    : state.gameRooms;
                const roomIndex = rooms.findIndex((room) => room.roomId === action.payload.roomId);
                if (roomIndex !== -1) {
                    rooms[roomIndex] = action.payload;
                }
                else {
                    rooms.push(action.payload);
                }
            }
        },
        removeRoom: (state, action) => {
            state.preparationRooms = state.preparationRooms.filter((room) => room.roomId !== action.payload);
            state.gameRooms = state.gameRooms.filter((room) => room.roomId !== action.payload);
        },
        setSearchedUser: (state, action) => {
            state.searchedUser = action.payload;
        },
        setBotList: (state, action) => {
            state.botList = action.payload;
        },
        setPastebinUrl: (state, action) => {
            state.pastebinUrl = action.payload;
        },
        setBotData: (state, action) => {
            state.botData = action.payload;
        },
        setBoosterContent: (state, action) => {
            state.boosterContent = action.payload;
        },
        setSuggestions: (state, action) => {
            state.suggestions = action.payload;
        },
        setLanguage: (state, action) => {
            state.language = action.payload;
        },
        leaveLobby: () => initialState,
        setNextSpecialGame: (state, action) => {
            state.nextSpecialGame = action.payload;
        },
        addTournament: (state, action) => {
            state.tournaments = state.tournaments.filter((tournament) => tournament.id !== action.payload.id);
            state.tournaments.push(action.payload);
        },
        removeTournament: (state, action) => {
            state.tournaments = state.tournaments.filter((tournament) => tournament.id !== action.payload.id);
        },
        changeTournament: (state, action) => {
            const tournament = state.tournaments.find((t) => t.id == action.payload.tournamentId);
            if (tournament) {
                tournament[action.payload.field] = action.payload.value;
            }
        },
        updateTournament: (state) => {
            state.tournaments = [...state.tournaments];
        },
        changeTournamentPlayer: (state, action) => {
            const tournament = state.tournaments.find((t) => t.id == action.payload.tournamentId);
            if (tournament && tournament.players.has(action.payload.playerId)) {
                const player = tournament.players.get(action.payload.playerId);
                player[action.payload.field] = action.payload.value;
                state.tournaments = [...state.tournaments];
            }
        },
        addTournamentBracket: (state, action) => {
            const tournament = state.tournaments.find((t) => t.id == action.payload.tournamendId);
            if (tournament) {
                tournament.brackets.set(action.payload.bracketId, action.payload.bracket);
                state.tournaments = [...state.tournaments];
            }
        },
        removeTournamentBracket: (state, action) => {
            const tournament = state.tournaments.find((t) => t.id == action.payload.tournamendId);
            if (tournament) {
                tournament.brackets.delete(action.payload.bracketId);
                state.tournaments = [...state.tournaments];
            }
        },
        changeTournamentBracket: (state, action) => {
            const tournament = state.tournaments.find((t) => t.id == action.payload.tournamentId);
            if (tournament && tournament.brackets.has(action.payload.bracketId)) {
                const player = tournament.brackets.get(action.payload.bracketId);
                player[action.payload.field] = action.payload.value;
                state.tournaments = [...state.tournaments];
            }
        }
    }
});
_a = exports.lobbySlice.actions, exports.setLanguage = _a.setLanguage, exports.removeMessage = _a.removeMessage, exports.setBoosterContent = _a.setBoosterContent, exports.addPokemonConfig = _a.addPokemonConfig, exports.changePokemonConfig = _a.changePokemonConfig, exports.pushMessage = _a.pushMessage, exports.setLeaderboard = _a.setLeaderboard, exports.setBotLeaderboard = _a.setBotLeaderboard, exports.setLevelLeaderboard = _a.setLevelLeaderboard, exports.changeUser = _a.changeUser, exports.setUser = _a.setUser, exports.setTabIndex = _a.setTabIndex, exports.addRoom = _a.addRoom, exports.removeRoom = _a.removeRoom, exports.setCcu = _a.setCcu, exports.setSearchedUser = _a.setSearchedUser, exports.setBotList = _a.setBotList, exports.setPastebinUrl = _a.setPastebinUrl, exports.setBotData = _a.setBotData, exports.leaveLobby = _a.leaveLobby, exports.setSuggestions = _a.setSuggestions, exports.pushBotLog = _a.pushBotLog, exports.setNextSpecialGame = _a.setNextSpecialGame, exports.addTournament = _a.addTournament, exports.removeTournament = _a.removeTournament, exports.changeTournament = _a.changeTournament, exports.updateTournament = _a.updateTournament, exports.changeTournamentPlayer = _a.changeTournamentPlayer, exports.addTournamentBracket = _a.addTournamentBracket, exports.removeTournamentBracket = _a.removeTournamentBracket, exports.changeTournamentBracket = _a.changeTournamentBracket;
exports.default = exports.lobbySlice.reducer;
//# sourceMappingURL=LobbyStore.js.map