import { PokemonDetailTabs } from "@/components/list-pokemon/pokemon-focus/PokemonDetailTabs";
import { PokemonInfoContent } from "@/components/list-pokemon/pokemon-focus/PokemonInfoContent";

export const PokemonDetailInfo = ({
  pokeDetail,
  pokeInfo,
  pokeInfoLoading,
  completed,
  setStateTab,
  stateTab,
}) => {
  return (
    <div className="pokeDetail-info-container">
      {!completed ? (
        <div className="blocked-content">
          to see data of this pokemon complete the lvl: {}
        </div>
      ) : (
        <>
          <PokemonDetailTabs
            pokeDetail={pokeDetail}
            setStateTab={setStateTab}
            stateTab={stateTab}
          />
          <PokemonInfoContent
            pokeDetail={pokeDetail}
            pokeInfo={pokeInfo}
            pokeInfoLoading={pokeInfoLoading}
            stateTab={stateTab}
          />
        </>
      )}
    </div>
  );
};
