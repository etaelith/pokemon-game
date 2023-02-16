import { createContext, useContext, useEffect, useState } from "react";
import {
  extractData,
  sumZeros,
  getLocal,
  setLocal,
} from "../utils/getFunctions";
import { MemoContext } from "./MemoProvider";
import { PokemonsContext } from "./PokemonsProvider";
export const LocalStorageContext = createContext();
const LocalStorageProvider = ({ children }) => {
  const { pokemons } = useContext(PokemonsContext);
  const { lvl } = useContext(MemoContext);
  const { handleReset } = useContext(MemoContext);
  const [completed, setCompleted] = useState([]);
  const [selected, setSelected] = useState([]);
  const [memoImages, setMemoImages] = useState([]);
  const [pokemonImages, setPokemonImages] = useState(null);
  const IMAGE_URL = "https://assets.pokemon.com/assets/cms2/img/pokedex/full/";
  //localstorage
  useEffect(() => {
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
  }, [lvl]);

  useEffect(() => {
    if (pokemonImages) {
      const sortedMemoImages = [];
      pokemonImages.forEach((image, index) => {
        sortedMemoImages.push({
          id: `a|${image}`,
          originalIndex: index,
        });
        sortedMemoImages.push({
          id: `b|${image}`,
          originalIndex: index,
        });
      });
      setMemoImages(sortedMemoImages.sort(() => Math.random() - 0.5));
    }
  }, [pokemonImages]);
  //MemoTest
  useEffect(() => {
    if (selected.length === 2) {
      if (selected[0].id.split("|")[1] === selected[1].id.split("|")[1]) {
        setCompleted((completed) => completed.concat(selected));
      }
      setTimeout(() => setSelected([]), 1000);
    }
  }, [selected]);
  //alert win
  useEffect(() => {
    if (pokemonImages !== null) {
      if (completed.length === memoImages.length) {
        const players = getLocal("players");
        const lastNumber = players[players.length - 1] || 0;
        const newNumbers = Array.from(
          { length: 10 },
          (_, i) => lastNumber + i + 1
        );
        players.push(...newNumbers);
        setLocal("players", JSON.stringify(players));

        handleReset();
        setCompleted([])
      }
    }
  }, [completed]);

  return (
    <LocalStorageContext.Provider
      value={{ memoImages, pokemonImages, selected, setSelected, completed }}
    >
      {children}
    </LocalStorageContext.Provider>
  );
};

export default LocalStorageProvider;
