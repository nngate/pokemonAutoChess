import { Schema } from "@colyseus/schema";
import { IDpsHeal } from "../types";
export default class DpsHeal extends Schema implements IDpsHeal {
    id: string;
    name: string;
    heal: number;
    shield: number;
    constructor(id: string, name: string);
    changeHeal(heal: number, shield: number): void;
}
