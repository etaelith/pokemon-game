import { createContext, useEffect, useReducer } from "react";
import { initialState, reducer } from "./useReducer";

export const TimerContext = createContext();
const TimerProvider = ({ children }) => {
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

  const handleReset = () => {
    dispatch({ type: "RESET" });
  };

  return (
    <TimerContext.Provider
      value={{
        ...state,
        handleStart,
        isActive: state.isActive,
        time: state.time,
        handleReset,
        dispatch,
      }}
    >
      {children}
    </TimerContext.Provider>
  );
};

export default TimerProvider;
