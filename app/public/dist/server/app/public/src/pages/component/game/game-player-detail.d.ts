import { ArraySchema } from "@colyseus/schema";
import HistoryItem from "../../../../../models/colyseus-models/history-item";
import Synergies from "../../../../../models/colyseus-models/synergies";
export default function GamePlayerDetail(props: {
    name: string;
    life: number;
    money: number;
    level: number;
    history: ArraySchema<HistoryItem>;
    synergies: Synergies;
}): import("react/jsx-runtime").JSX.Element;
