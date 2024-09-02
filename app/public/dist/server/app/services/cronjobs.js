"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.initCronJobs = initCronJobs;
const cron_1 = require("cron");
const logger_1 = require("../utils/logger");
const leaderboard_1 = require("./leaderboard");
function initCronJobs() {
    logger_1.logger.debug("init cron jobs");
    cron_1.CronJob.from({
        cronTime: "0 0/10 * * * *",
        timeZone: "Europe/Paris",
        onTick: () => {
            (0, leaderboard_1.fetchLeaderboards)();
        },
        start: true
    });
}
//# sourceMappingURL=cronjobs.js.map