import { MapSchema, Schema } from "@colyseus/schema";
import SimplePlayer from "../../models/colyseus-models/simple-player";
export default class AfterGameState extends Schema {
    players: MapSchema<SimplePlayer, string>;
    elligibleToELO: boolean;
    elligibleToXP: boolean;
    constructor({ elligibleToELO, elligibleToXP }: {
        elligibleToELO: boolean;
        elligibleToXP: boolean;
    });
}
