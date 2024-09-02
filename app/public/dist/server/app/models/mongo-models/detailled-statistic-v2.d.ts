export interface Pokemon {
    name: string;
    avatar: string;
    items: string[];
}
export interface IDetailledStatistic {
    playerId: string;
    elo: number;
    time: number;
    name: string;
    rank: number;
    nbplayers: number;
    avatar: string;
    pokemons: Pokemon[];
}
declare const _default: import("mongoose").Model<IDetailledStatistic, {}, {}, {}, import("mongoose").Document<unknown, {}, IDetailledStatistic> & IDetailledStatistic & {
    _id: import("mongoose").Types.ObjectId;
}, any>;
export default _default;
