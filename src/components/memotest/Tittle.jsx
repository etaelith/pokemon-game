import { useContext } from "react";
import { TimerContext } from "@/context/TimerProvider";
import { getLocal } from "@/utils/getFunctions";
import Timer from "./Timer";
import "@/styles/tittle.css";
import { LocalContext } from "@/context/LocalProvider";
const Tittle = () => {
  const { handleStart, time } = useContext(TimerContext);
  const { state } = useContext(LocalContext);
  const { lvl } = state;
  return (
    <>
      <div className="tittle">
        <div className="nes-text is-primary h1-tittle">Memo-test Pokemon</div>
        <div className="nes-container is-dark with-title">
          <p className="title">Container.is-dark</p>
          <p>
            {lvl !== 0
              ? `It's great to have you here! Are you ready to continue? Click the button below to begin.`
              : `Welcome, adventurer! Your journey starts now. Click the button below to begin.`}
          </p>
          <div className="div-count">
            <button
              type="button"
              onClick={handleStart}
              className="nes-btn is-primary button-play"
            >
              {lvl === 0 ? "Play" : `Go to lvl ${lvl}`}
            </button>

            <div className="nes-container is-rounded align-count">
              <div className="timer">
                <p>Timer: &nbsp;</p>
                <Timer time={time} />
              </div>
              <div className="timer">
                <p>Record: &nbsp;</p>
                <Timer time={getLocal("record")} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Tittle;
