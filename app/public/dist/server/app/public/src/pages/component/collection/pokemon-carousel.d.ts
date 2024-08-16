import { Dispatch, SetStateAction } from "react";
import { Pkm } from "../../../../../types/enum/Pokemon";
import { Synergy } from "../../../../../types/enum/Synergy";
export default function PokemonCarousel(props: {
    type: Synergy | "all";
    setPokemon: Dispatch<SetStateAction<Pkm | "">>;
    filter: string;
    sort: string;
    shinyOnly: boolean;
}): import("react/jsx-runtime").JSX.Element;
