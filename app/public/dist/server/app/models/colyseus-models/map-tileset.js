"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const schema_1 = require("@colyseus/schema");
class MapTileset extends schema_1.Schema {
    constructor() {
        super(...arguments);
        this.FIRE = "FIRE0";
        this.ICE = "ICE0";
        this.GROUND = "GROUND0";
        this.NORMAL = "NORMAL0";
        this.GRASS = "GRASS0";
        this.WATER = "WATER0";
    }
}
exports.default = MapTileset;
__decorate([
    (0, schema_1.type)("string")
], MapTileset.prototype, "FIRE", void 0);
__decorate([
    (0, schema_1.type)("string")
], MapTileset.prototype, "ICE", void 0);
__decorate([
    (0, schema_1.type)("string")
], MapTileset.prototype, "GROUND", void 0);
__decorate([
    (0, schema_1.type)("string")
], MapTileset.prototype, "NORMAL", void 0);
__decorate([
    (0, schema_1.type)("string")
], MapTileset.prototype, "GRASS", void 0);
__decorate([
    (0, schema_1.type)("string")
], MapTileset.prototype, "WATER", void 0);
//# sourceMappingURL=map-tileset.js.map