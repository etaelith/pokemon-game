import { createContext, useContext, useEffect, useState } from "react";
import { LocalContext } from "./LocalProvider";
import { getLocal, setLocal } from "../utils/getFunctions";
import {  TimerContext } from "../reducer/TimerProvider";
export const MemoContext = createContext();
const MemoProvider = ({ children }) => {
  const { state, lvlUp } = useContext(LocalContext);
  const { handleReset } = useContext(TimerContext);

  const [completed, setCompleted] = useState([]);
  const [selected, setSelected] = useState([]);
  const [memoImages, setMemoImages] = useState([]);

  useEffect(() => {
    if (state.pokemonImages) {
      const sortedMemoImages = [];
      state.pokemonImages.forEach((image, index) => {
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
  }, [state.pokemonImages]);
  //MemoTest
  useEffect(() => {
    if (selected.length === 2) {
      if (selected[0].id !== selected[1].id) {
        if (selected[0].id.split("|")[1] === selected[1].id.split("|")[1]) {
          setCompleted((completed) => completed.concat(selected));
        }
      }
      setTimeout(() => setSelected([]), 1000);
    }
  }, [selected]);
  useEffect(() => {
    if (memoImages !== null) {
      if (completed.length === 20) {
        const players = getLocal("players");
        const lastNumber = players[players.length - 1] || 0;
        const newNumbers = Array.from(
          { length: 10 },
          (_, i) => lastNumber + i + 1
        );
        players.push(...newNumbers);
        setLocal("players", JSON.stringify(players));
        setCompleted([]);
        handleReset();
        lvlUp();
      }
    }
  }, [completed]);

  return (
    <MemoContext.Provider
      value={{
        selected,
        setSelected,
        completed,
        setCompleted,
        memoImages,
      }}
    >
      {children}
    </MemoContext.Provider>
  );
};

export default MemoProvider;
