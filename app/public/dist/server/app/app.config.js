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
const path_1 = __importDefault(require("path"));
const monitor_1 = require("@colyseus/monitor");
const tools_1 = __importDefault(require("@colyseus/tools"));
const colyseus_1 = require("colyseus");
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
const express_basic_auth_1 = __importDefault(require("express-basic-auth"));
const firebase_admin_1 = __importDefault(require("firebase-admin"));
const mongoose_1 = require("mongoose");
const design_1 = require("./core/design");
const items_statistic_1 = __importDefault(require("./models/mongo-models/items-statistic"));
const meta_1 = __importDefault(require("./models/mongo-models/meta"));
const pokemons_statistic_v2_1 = __importDefault(require("./models/mongo-models/pokemons-statistic-v2"));
const title_statistic_1 = __importDefault(require("./models/mongo-models/title-statistic"));
const precomputed_types_1 = require("./models/precomputed/precomputed-types");
const after_game_room_1 = __importDefault(require("./rooms/after-game-room"));
const custom_lobby_room_1 = __importDefault(require("./rooms/custom-lobby-room"));
const game_room_1 = __importDefault(require("./rooms/game-room"));
const preparation_room_1 = __importDefault(require("./rooms/preparation-room"));
const types_1 = require("./types");
const Config_1 = require("./types/Config");
const Item_1 = require("./types/enum/Item");
const Pokemon_1 = require("./types/enum/Pokemon");
const leaderboard_1 = require("./services/leaderboard");
const clientSrc = __dirname.includes("server")
    ? path_1.default.join(__dirname, "..", "..", "client")
    : path_1.default.join(__dirname, "public", "dist", "client");
const viewsSrc = path_1.default.join(clientSrc, "index.html");
let gameOptions = {};
if (process.env.NODE_APP_INSTANCE) {
    const processNumber = Number(process.env.NODE_APP_INSTANCE || "0");
    const port = 2567 + processNumber;
    gameOptions = {
        presence: new colyseus_1.RedisPresence(process.env.REDIS_URI),
        driver: new colyseus_1.RedisDriver(process.env.REDIS_URI),
        publicAddress: `${process.env.SERVER_NAME}/${port}`,
        selectProcessIdToCreateRoom: function (roomName, clientOptions) {
            return __awaiter(this, void 0, void 0, function* () {
                if (roomName === "lobby") {
                    const lobbies = yield colyseus_1.matchMaker.query({ name: "lobby" });
                    if (lobbies.length !== 0) {
                        throw "Attempt to create one lobby";
                    }
                }
                return (yield colyseus_1.matchMaker.stats.fetchAll()).sort((p1, p2) => p1.ccu > p2.ccu ? 1 : -1)[0].processId;
            });
        }
    };
}
exports.default = (0, tools_1.default)({
    options: gameOptions,
    initializeGameServer: (gameServer) => {
        gameServer.define("after-game", after_game_room_1.default);
        gameServer.define("lobby", custom_lobby_room_1.default);
        gameServer.define("preparation", preparation_room_1.default).enableRealtimeListing();
        gameServer.define("game", game_room_1.default).enableRealtimeListing();
    },
    initializeExpress: (app) => {
        app.use(((err, req, res, next) => {
            res.status(err.status).json(err);
        }));
        app.use((0, cors_1.default)());
        app.use(express_1.default.json());
        app.use(express_1.default.static(clientSrc));
        app.get("/", (req, res) => {
            res.sendFile(viewsSrc);
        });
        app.get("/auth", (req, res) => {
            res.sendFile(viewsSrc);
        });
        app.get("/lobby", (req, res) => {
            res.sendFile(viewsSrc);
        });
        app.get("/preparation", (req, res) => {
            res.sendFile(viewsSrc);
        });
        app.get("/game", (req, res) => {
            res.sendFile(viewsSrc);
        });
        app.get("/after", (req, res) => {
            res.sendFile(viewsSrc);
        });
        app.get("/bot-builder", (req, res) => {
            res.sendFile(viewsSrc);
        });
        app.get("/bot-admin", (req, res) => {
            res.sendFile(viewsSrc);
        });
        app.get("/sprite-viewer", (req, res) => {
            res.sendFile(viewsSrc);
        });
        app.get("/map-viewer", (req, res) => {
            res.sendFile(viewsSrc);
        });
        app.get("/pokemons", (req, res) => {
            res.send(Pokemon_1.Pkm);
        });
        app.get("/title-names", (req, res) => {
            res.send(types_1.Title);
        });
        app.get("/pokemons-index", (req, res) => {
            res.send(Pokemon_1.PkmIndex);
        });
        app.get("/types", (req, res) => {
            res.send(precomputed_types_1.PRECOMPUTED_POKEMONS_PER_TYPE);
        });
        app.get("/items", (req, res) => {
            res.send(Item_1.Item);
        });
        app.get("/types-trigger", (req, res) => {
            res.send(Config_1.SynergyTriggers);
        });
        app.get("/meta", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
            res.send(yield meta_1.default.find({}, [
                "cluster_id",
                "count",
                "ratio",
                "winrate",
                "mean_rank",
                "types",
                "pokemons",
                "x",
                "y"
            ]));
        }));
        app.get("/titles", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
            res.send(yield title_statistic_1.default.find());
        }));
        app.get("/meta/items", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
            res.send(yield items_statistic_1.default.find());
        }));
        app.get("/meta/pokemons", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
            res.send(yield pokemons_statistic_v2_1.default.find());
        }));
        app.get("/tilemap/:map", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
            const tilemap = (0, design_1.initTilemap)(req.params.map);
            res.send(tilemap);
        }));
        app.get("/leaderboards", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
            res.send((0, leaderboard_1.getLeaderboard)());
        }));
        const basicAuthMiddleware = (0, express_basic_auth_1.default)({
            users: {
                admin: process.env.ADMIN_PASSWORD
                    ? process.env.ADMIN_PASSWORD
                    : "Default Admin Password"
            },
            challenge: true
        });
        app.use("/colyseus", basicAuthMiddleware, (0, monitor_1.monitor)());
        app.use("/colyseus", (0, monitor_1.monitor)());
    },
    beforeListen: () => {
        (0, mongoose_1.connect)(process.env.MONGO_URI);
        firebase_admin_1.default.initializeApp({
            credential: firebase_admin_1.default.credential.cert({
                projectId: process.env.FIREBASE_PROJECT_ID,
                clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
                privateKey: process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, "\n")
            })
        });
    }
});
//# sourceMappingURL=app.config.js.map