"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getRank = getRank;
const EloRank_1 = require("../types/enum/EloRank");
const Config_1 = require("../types/Config");
function getRank(elo) {
    let rank = EloRank_1.EloRank.BEGINNER;
    Object.keys(Config_1.EloRankThreshold).forEach((e) => {
        if (elo > Config_1.EloRankThreshold[e]) {
            rank = e;
        }
    });
    return rank;
}
//# sourceMappingURL=elo.js.map