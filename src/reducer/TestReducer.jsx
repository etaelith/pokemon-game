import { createContext, useEffect, useReducer } from "react";
import { getLocal, setLocal } from "../utils/getFunctions";

export const MemoContext = createContext();

const initialState = {
  isActive: false,
  isPaused: true,
  time: 0,
  lvl: parseInt(String(getLocal("players").length)[0]) || 0,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "START":
      return { ...state, isActive: true, isPaused: false };
    case "PAUSE_RESUME":
      return { ...state, isPaused: !state.isPaused };
    case "RESET":
      const data = getLocal("record");
      if (state.time < data) {
        setLocal("record", state.time);
      }
      const lengthLevel = getLocal("players").length;
      const level = parseInt(String(lengthLevel)[0]);
      return { ...initialState, lvl: level };
    case "TICK":
      return { ...state, time: state.time + 10 };
    case "SET_LVL":
      return { ...state, lvl: action.payload };
    default:
      return state;
  }
};

const MemoProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    let interval = null;
    if (state.isActive && !state.isPaused) {
      interval = setInterval(() => {
        dispatch({ type: "TICK" });
      }, 10);
    } else {
      clearInterval(interval);
    }
    return () => {
      clearInterval(interval);
    };
  }, [state.isActive, state.isPaused]);

  const handleStart = () => {
    dispatch({ type: "START" });
  };

  const handlePauseResume = () => {
    dispatch({ type: "PAUSE_RESUME" });
  };

  const handleReset = () => {
    dispatch({ type: "RESET" });
  };

  return (
    <MemoContext.Provider
      value={{
        ...state,
        handleStart,
        handlePauseResume,
        handleReset,
        dispatch,
      }}
    >
      {children}
    </MemoContext.Provider>
  );
};

export default MemoProvider;
