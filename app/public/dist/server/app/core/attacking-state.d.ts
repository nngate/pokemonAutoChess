import Player from "../models/colyseus-models/player";
import { Weather } from "../types/enum/Weather";
import Board from "./board";
import { PokemonEntity } from "./pokemon-entity";
import PokemonState from "./pokemon-state";
export default class AttackingState extends PokemonState {
    update(pokemon: PokemonEntity, dt: number, board: Board, weather: Weather, player: Player): void;
    onEnter(pokemon: any): void;
    onExit(pokemon: any): void;
}
