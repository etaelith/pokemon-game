import { PokemonAbout } from "@/components/list-pokemon/pokemon-focus/PokemonAbout";
import { PokemonStats } from "@/components/list-pokemon/pokemon-focus/PokemonStats";

export const PokemonInfoContent = ({
  pokeDetail,
  pokeInfo,
  pokeInfoLoading,
  stateTab,
}) => {
  return (
    <>
      {pokeInfoLoading ? (
        <div className={`pokeInfo-notLoaded ${pokeDetail.types[0].type.name}`}>
          <div className="ball"></div>
          <div className="line"></div>
        </div>
      ) : (
        <div className="content-info-container">
          <>
            <PokemonAbout
              pokeDetail={pokeDetail}
              pokeInfo={pokeInfo}
              stateTab={stateTab}
            />
            <PokemonStats
              pokeDetail={pokeDetail}
              pokeInfo={pokeInfo}
              stateTab={stateTab}
            />
          </>
        </div>
      )}
    </>
  );
};
