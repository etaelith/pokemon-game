import { getLocal, levelDefined, setLocal } from "@/utils/getFunctions";

export const initialState = {
  isActive: false,
  isPaused: true,
  time: 0,
  lvl: levelDefined(),
};
export const reducer = (state, action) => {
  switch (action.type) {
    case "START":
      return { ...state, isActive: true, isPaused: false };

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
