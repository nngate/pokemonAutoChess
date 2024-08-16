"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const schema_1 = require("@colyseus/schema");
class DpsHeal extends schema_1.Schema {
    constructor(id, name) {
        super();
        this.heal = 0;
        this.shield = 0;
        this.id = id;
        this.name = name;
    }
    changeHeal(heal, shield) {
        if (this.heal != heal) {
            this.heal = heal;
        }
        if (this.shield != shield) {
            this.shield = shield;
        }
    }
}
exports.default = DpsHeal;
__decorate([
    (0, schema_1.type)("string")
], DpsHeal.prototype, "id", void 0);
__decorate([
    (0, schema_1.type)("string")
], DpsHeal.prototype, "name", void 0);
__decorate([
    (0, schema_1.type)("uint16")
], DpsHeal.prototype, "heal", void 0);
__decorate([
    (0, schema_1.type)("uint16")
], DpsHeal.prototype, "shield", void 0);
//# sourceMappingURL=dps-heal.js.map