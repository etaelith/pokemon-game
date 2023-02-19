import { createContext, useContext, useEffect, useState } from "react";
import { getLocal, setLocal } from "../utils/getFunctions";
import { LocalStorageContext } from "./LocalStorageProvider";
export const MemoContext = createContext();
const MemoProvider = ({ children }) => {
  const { setLvl, pokemonImages } = useContext(LocalStorageContext);
  const [completed, setCompleted] = useState([]);
  const [selected, setSelected] = useState([]);
  const [memoImages, setMemoImages] = useState([]);

  const [isActive, setIsActive] = useState(false);
  const [isPaused, setIsPaused] = useState(true);
  const [time, setTime] = useState(0);
  useEffect(() => {
    let interval = null;
    if (isActive && isPaused === false) {
      interval = setInterval(() => {
        setTime((time) => time + 10);
      }, 10);
    } else {
      clearInterval(interval);
    }
    return () => {
      clearInterval(interval);
    };
  }, [isActive, isPaused]);

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
      if (selected[0].id !== selected[1].id) {
        if (selected[0].id.split("|")[1] === selected[1].id.split("|")[1]) {
          setCompleted((completed) => completed.concat(selected));
        }
      }
      setTimeout(() => setSelected([]), 1000);
    }
  }, [selected]);
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
        setCompleted([]);
        handleReset();
      }
    }
  }, [completed]);
  const handleStart = () => {
    setIsActive(true);
    setIsPaused(false);
  };

  const handleReset = () => {
    setIsPaused(true);
    setIsActive(false);
    setTimeout(() => {
      setTime(0);
      const data = getLocal("record");
      if (time < data) {
        setLocal("record", time);
      }
      const lengthLevel = getLocal("players").length;
      const level = parseInt(String(lengthLevel)[0]);
      setLvl(level);
    }, 0);
  };

  return (
    <MemoContext.Provider
      value={{
        selected,
        setSelected,
        completed,
        setCompleted,
        memoImages,
        isActive,
        isPaused,
        time,
        handleReset,
        handleStart,
      }}
    >
      {children}
    </MemoContext.Provider>
  );
};

export default MemoProvider;
