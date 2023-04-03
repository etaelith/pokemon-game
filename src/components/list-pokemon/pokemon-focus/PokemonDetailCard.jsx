import { PokemonDetailTop } from "@/components/list-pokemon/pokemon-focus/PokemonDetailTop";
import { PokemonDetailInfo } from "@/components/list-pokemon/pokemon-focus/PokemonDetailInfo";
import usePokeInfo from "@/hooks/usePokeInfo";
import PokeIcon from "@/assets/pokeball.svg";

export const PokemonDetailCard = ({
  pokeDetail,
  completed,
  imageLoaded,
  setImageLoaded,
}) => {
  const { pokeInfo, pokeInfoLoading, setStateTab, stateTab } = usePokeInfo(
    pokeDetail.id
  );

  return (
    <div className="pokeDetail-card">
      <PokemonDetailTop
        pokeDetail={pokeDetail}
        imageLoaded={imageLoaded}
        setImageLoaded={setImageLoaded}
      />

      <PokemonDetailInfo
        pokeDetail={pokeDetail}
        pokeInfo={pokeInfo}
        pokeInfoLoading={pokeInfoLoading}
        completed={completed}
        setStateTab={setStateTab}
        stateTab={stateTab}
      />
    </div>
  );
};
