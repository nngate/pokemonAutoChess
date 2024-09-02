"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const types_1 = require("../../types");
const userMetadataSchema = new mongoose_1.Schema({
    uid: {
        type: String,
    },
    displayName: {
        type: String,
    },
    language: {
        type: String,
        default: "en",
    },
    avatar: {
        type: String,
        default: "0019/Normal",
    },
    wins: {
        type: Number,
        default: 0,
    },
    exp: {
        type: Number,
        default: 0,
    },
    level: {
        type: Number,
        default: 0,
    },
    elo: {
        type: Number,
        default: 1000,
    },
    donor: {
        type: Boolean,
        default: false,
    },
    booster: {
        type: Number,
        default: 0,
    },
    mapWin: {
        ICE: {
            type: Number,
            default: 0,
        },
        FIRE: {
            type: Number,
            default: 0,
        },
        GROUND: {
            type: Number,
            default: 0,
        },
        NORMAL: {
            type: Number,
            default: 0,
        },
        GRASS: {
            type: Number,
            default: 0,
        },
        WATER: {
            type: Number,
            default: 0,
        },
    },
    map: {
        ICE: {
            type: String,
            default: "ICE0",
        },
        FIRE: {
            type: String,
            default: "FIRE0",
        },
        GROUND: {
            type: String,
            default: "GROUND0",
        },
        NORMAL: {
            type: String,
            default: "NORMAL0",
        },
        GRASS: {
            type: String,
            default: "GRASS0",
        },
        WATER: {
            type: String,
            default: "WATER0",
        },
    },
    title: {
        type: String,
    },
    role: {
        type: String,
        enum: types_1.Role,
        default: types_1.Role.BASIC,
    },
    honors: [
        {
            type: String,
        },
    ],
    titles: [
        {
            type: String,
            enum: types_1.Title,
        },
    ],
    pokemonCollection: {
        type: Map,
        of: {
            dust: {
                type: Number,
            },
            selectedEmotion: {
                type: String,
                enum: types_1.Emotion,
            },
            emotions: [
                {
                    type: String,
                    enum: types_1.Emotion,
                },
            ],
            shinyEmotions: [
                {
                    type: String,
                    enum: types_1.Emotion,
                },
            ],
            selectedShiny: {
                type: Boolean,
            },
            id: {
                type: String,
            },
        },
    },
});
exports.default = (0, mongoose_1.model)("UserMetadata", userMetadataSchema);
//# sourceMappingURL=user-metadata.js.map