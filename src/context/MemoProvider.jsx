import { createContext, useEffect, useState } from "react";
import { getLocal, setLocal } from "../utils/getFunctions";
export const MemoContext = createContext();
const MemoProvider = ({ children }) => {
  const [isActive, setIsActive] = useState(false);
  const [isPaused, setIsPaused] = useState(true);
  const [time, setTime] = useState(0);
  const [lvl, setLvl] = useState(
    parseInt(String(getLocal("players").length)[0]) || 0
  );
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
  const handleStart = () => {
    setIsActive(true);
    setIsPaused(false);
  };
  const handlePauseResume = () => {
    setIsPaused(!isPaused);
  };
  const handleReset = () => {
    setIsPaused(!isPaused);
    const data = getLocal("record");
    if (time < data) {
      setLocal("record", time);
    }
    const lengthLevel = getLocal("players").length;
    const level = parseInt(String(lengthLevel)[0]);
    setLvl(level);
    setIsActive(false);
    setTime(0);
  };
  return (
    <MemoContext.Provider
      value={{
        isActive,
        isPaused,
        time,
        handlePauseResume,
        handleReset,
        handleStart,
        setLvl,
        lvl,
      }}
    >
      {children}
    </MemoContext.Provider>
  );
};

export default MemoProvider;
