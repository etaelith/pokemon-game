import { createContext, useContext, useEffect, useState } from "react";
import {
  extractData,
  sumZeros,
  getLocal,
  setLocal,
  levelDefined,
} from "../utils/getFunctions";

import { PokemonsContext } from "./PokemonsProvider";
export const LocalStorageContext = createContext();
const LocalStorageProvider = ({ children }) => {
  const { pokemons, loading } = useContext(PokemonsContext);
  const [lvl, setLvl] = useState(levelDefined());
  const unblocked = getLocal("players");
  const [pokemonImages, setPokemonImages] = useState(null);
  const IMAGE_URL = "https://assets.pokemon.com/assets/cms2/img/pokedex/full/";
  //localstorage
  useEffect(() => {
    if (!loading) {
      if (window.localStorage) {
        const resueltos = getLocal("players");
        if (!resueltos) {
          const array = JSON.stringify([]);
          setLocal("players", array);
          const tank = [];
          const data = extractData(pokemons, 0);
          data.map((e) => {
            tank.push(`${IMAGE_URL}${sumZeros(e.index, 3)}.png`);
          });
          setPokemonImages(tank);
        }
        if (resueltos < 1) {
          const tank = [];
          const data = extractData(pokemons, 0);
          data.map((e) => {
            tank.push(`${IMAGE_URL}${sumZeros(e.index, 3)}.png`);
          });
          setPokemonImages(tank);
        } else {
          const tank = [];
          const data = extractData(pokemons, resueltos.length);
          data.map((e) => {
            tank.push(`${IMAGE_URL}${sumZeros(e.index, 3)}.png`);
          });
          setPokemonImages(tank);
        }
      }
    }
  }, [lvl, loading]);

  return (
    <LocalStorageContext.Provider
      value={{
        pokemonImages,
        lvl,
        setLvl,
        unblocked,
      }}
    >
      {children}
    </LocalStorageContext.Provider>
  );
};

export default LocalStorageProvider;
