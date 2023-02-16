import { useContext, useEffect, useState } from "react";
import { PokemonsContext } from "../context/PokemonsProvider";
const usePokeInfo = (pokeDetail) => {
  const { detailIsLoading } = useContext(PokemonsContext);
  const [stateTab, setStateTab] = useState(1);

  const [pokeInfo, setPokeInfo] = useState([]);
  let [pokeInfoLoading, setPokeInfoLoading] = useState(true);
  const currentLinkInfo = `https://pokeapi.co/api/v2/pokemon-species/${pokeDetail}`;
  useEffect(() => {
    setPokeInfoLoading(true);
    async function fetchData(id) {
      try {
        await fetch(id)
          .then((e) => e.json())
          .then((r) => setPokeInfo(r));
      } catch (e) {
        console.log(e);
      } finally {
        setPokeInfoLoading(false);
      }
    }
    if (!detailIsLoading) {
      fetchData(currentLinkInfo);
    }
  }, [detailIsLoading]);
  return {
    pokeInfo,
    pokeInfoLoading,
    stateTab,
    setStateTab,
  };
};

export default usePokeInfo;
