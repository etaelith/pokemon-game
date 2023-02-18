import { createContext, useEffect, useReducer } from "react";
import { initialState, reducer } from "./useReducer";

export const MemoReducerContext = createContext();
const MemoProviderReducer = ({ children }) => {
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
    <MemoReducerContext.Provider
      value={{
        ...state,
        handleStart,
        handlePauseResume,
        handleReset,
        dispatch,
      }}
    >
      {children}
    </MemoReducerContext.Provider>
  );
};

export default MemoProviderReducer;
