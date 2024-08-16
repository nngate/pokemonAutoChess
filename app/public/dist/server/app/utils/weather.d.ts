import { Weather } from "../types/enum/Weather";
import { MapSchema } from "@colyseus/schema";
import { Pokemon } from "../models/colyseus-models/pokemon";
export declare function getWeather(playerBoard: MapSchema<Pokemon, string>, opponentBoard: MapSchema<Pokemon, string>): Weather;
