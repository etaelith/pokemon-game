import { useContext } from "react";
import { PokemonsContext } from "@/context/PokemonsProvider";
import { PokemonDetail } from "@/components/list-pokemon/pokemon-focus/PokemonDetail";
import { PokemonNotLoaded } from "@/components/list-pokemon/pokemon-focus/PokemonNotLoaded";
import "@/styles/pokemonFocus.css";
import "@/styles/pokemonFocusType.css";
import "@/styles/pokemonFocusTypeStatBar.css";
const PokemonFocus = () => {
  const { pokeDetail, detailIsLoading } = useContext(PokemonsContext);

  return (
    <>
      {detailIsLoading ? (
        <PokemonNotLoaded />
      ) : (
        <PokemonDetail pokeDetail={pokeDetail} />
      )}
    </>
  );
};

export default PokemonFocus;
