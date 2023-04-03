import { useState, useContext } from "react";
import { PokemonsContext } from "@/context/PokemonsProvider";
import { getLocal } from "@/utils/getFunctions";

export const usePokemonFocusLogic = (pokeDetail) => {
    const { detailIsLoading, setDetailIsLoading } = useContext(PokemonsContext);
    const [imageLoaded, setImageLoaded] = useState(false);

    const handleCard = (e) => {
        e.preventDefault();
        if (e.target === e.currentTarget) {
            setDetailIsLoading(!detailIsLoading);
        }
    };

    const completed = getLocal("players").includes(pokeDetail.id);

    return { handleCard, completed, imageLoaded, setImageLoaded };
};
