"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.leavePreparation = exports.setGameMode = exports.setBlackList = exports.setWhiteList = exports.setNoELO = exports.setPassword = exports.setOwnerName = exports.setOwnerId = exports.setGameStarted = exports.removeUser = exports.changeUser = exports.addUser = exports.removeMessage = exports.pushMessage = exports.setBotsList = exports.setName = exports.setUser = exports.preparationSlice = void 0;
const toolkit_1 = require("@reduxjs/toolkit");
const Game_1 = require("../../../types/enum/Game");
const initialState = {
    users: [],
    gameStartedAt: null,
    ownerId: "",
    ownerName: "",
    messages: [],
    name: "",
    user: undefined,
    password: null,
    noElo: false,
    botsList: null,
    gameMode: Game_1.GameMode.NORMAL,
    whitelist: [],
    blacklist: []
};
exports.preparationSlice = (0, toolkit_1.createSlice)({
    name: "preparation",
    initialState: initialState,
    reducers: {
        setUser: (state, action) => {
            const u = JSON.parse(JSON.stringify(action.payload));
            state.user = u;
        },
        pushMessage: (state, action) => {
            state.messages.push(structuredClone(action.payload));
        },
        removeMessage: (state, action) => {
            state.messages = state.messages.filter((m) => m.payload !== action.payload.payload);
        },
        addUser: (state, action) => {
            const u = JSON.parse(JSON.stringify(action.payload));
            state.users.push(u);
        },
        changeUser: (state, action) => {
            state.users[state.users.findIndex((u) => u.id == action.payload.id)][action.payload.field] = action.payload.value;
        },
        removeUser: (state, action) => {
            state.users.splice(state.users.findIndex((u) => u.id == action.payload), 1);
        },
        setGameStarted: (state, action) => {
            state.gameStartedAt = action.payload;
        },
        setOwnerId: (state, action) => {
            state.ownerId = action.payload;
        },
        setOwnerName: (state, action) => {
            state.ownerName = action.payload;
        },
        setName: (state, action) => {
            state.name = action.payload;
        },
        setPassword: (state, action) => {
            state.password = action.payload;
        },
        setNoELO: (state, action) => {
            state.noElo = action.payload;
        },
        setGameMode: (state, action) => {
            state.gameMode = action.payload;
        },
        leavePreparation: () => initialState,
        setBotsList: (state, action) => {
            state.botsList = action.payload;
        },
        setWhiteList: (state, action) => {
            state.whitelist = action.payload;
        },
        setBlackList: (state, action) => {
            state.blacklist = action.payload;
        }
    }
});
_a = exports.preparationSlice.actions, exports.setUser = _a.setUser, exports.setName = _a.setName, exports.setBotsList = _a.setBotsList, exports.pushMessage = _a.pushMessage, exports.removeMessage = _a.removeMessage, exports.addUser = _a.addUser, exports.changeUser = _a.changeUser, exports.removeUser = _a.removeUser, exports.setGameStarted = _a.setGameStarted, exports.setOwnerId = _a.setOwnerId, exports.setOwnerName = _a.setOwnerName, exports.setPassword = _a.setPassword, exports.setNoELO = _a.setNoELO, exports.setWhiteList = _a.setWhiteList, exports.setBlackList = _a.setBlackList, exports.setGameMode = _a.setGameMode, exports.leavePreparation = _a.leavePreparation;
exports.default = exports.preparationSlice.reducer;
//# sourceMappingURL=PreparationStore.js.map