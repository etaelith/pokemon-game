import { PokemonDetailCard } from "@/components/list-pokemon/pokemon-focus/PokemonDetailCard";
import { usePokemonFocusLogic } from "@/hooks/usePokemonFocusLogic";

export const PokemonDetail = ({ pokeDetail }) => {
  const { handleCard, completed, imageLoaded, setImageLoaded } =
    usePokemonFocusLogic(pokeDetail);

  return (
    <div
      className={`pokeDetail-container ${pokeDetail.types[0].type.name}`}
      onClick={handleCard}
    >
      <PokemonDetailCard
        pokeDetail={pokeDetail}
        completed={completed}
        imageLoaded={imageLoaded}
        setImageLoaded={setImageLoaded}
      />
    </div>
  );
};
