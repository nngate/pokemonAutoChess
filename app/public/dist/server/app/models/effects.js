"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Effects = void 0;
const schema_1 = require("@colyseus/schema");
const pokemon_1 = require("../models/colyseus-models/pokemon");
const Config_1 = require("../types/Config");
const Ability_1 = require("../types/enum/Ability");
const Effect_1 = require("../types/enum/Effect");
const Passive_1 = require("../types/enum/Passive");
const Synergy_1 = require("../types/enum/Synergy");
class Effects extends schema_1.SetSchema {
    update(synergies, board) {
        this.clear();
        Object.values(Synergy_1.Synergy).forEach((synergy) => {
            for (let i = Config_1.SynergyTriggers[synergy].length; i >= 0; i--) {
                const v = Config_1.SynergyTriggers[synergy][i];
                const s = synergies.get(synergy);
                if (s && s >= v) {
                    this.add(Synergy_1.SynergyEffects[synergy][i]);
                    break;
                }
            }
        });
        board.forEach((p) => {
            if (!(0, pokemon_1.isOnBench)(p)) {
                if (p.skill === Ability_1.Ability.GRASSY_SURGE) {
                    this.add(Effect_1.Effect.GRASSY_TERRAIN);
                }
                if (p.skill === Ability_1.Ability.MISTY_SURGE) {
                    this.add(Effect_1.Effect.MISTY_TERRAIN);
                }
                if (p.skill === Ability_1.Ability.ELECTRIC_SURGE) {
                    this.add(Effect_1.Effect.ELECTRIC_TERRAIN);
                }
                if (p.skill === Ability_1.Ability.PSYCHIC_SURGE) {
                    this.add(Effect_1.Effect.PSYCHIC_TERRAIN);
                }
                if (p.passive === Passive_1.Passive.HYDRATATION) {
                    this.add(Effect_1.Effect.HYDRATATION);
                }
            }
        });
    }
}
exports.Effects = Effects;
//# sourceMappingURL=effects.js.map