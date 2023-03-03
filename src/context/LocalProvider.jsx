import { createContext, useEffect, useReducer } from "react";
import { getLocal } from "@/utils/getFunctions";
import { initialState, reducer } from "@/hooks/useReducerLocal";

export const LocalContext = createContext();

const LocalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const results = getLocal("players");
  useEffect(() => {
    if (!results) {
      dispatch({ type: "FIRST_LOG" });
    }
    if (results < 1) {
      dispatch({ type: "FIRST_GAME" });
    } else {
      dispatch({ type: "SYNC_GAME" });
    }
  }, []);
  const lvlUp = () => {
    dispatch({ type: "SYNC_GAME" });
  };

  return (
    <LocalContext.Provider value={{ lvlUp, state }}>
      {children}
    </LocalContext.Provider>
  );
};

export default LocalProvider;
