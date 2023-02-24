import { useContext } from "react";
import { TimerContext } from "../../reducer/TimerProvider";

import MemoTest from "./MemoTest";
import Tittle from "./Tittle";

const LayoutMemo = () => {
  const { isActive } = useContext(TimerContext);

  return (
    <>
      <Tittle />
      {!isActive ? (
        <div style={{ color: "white" }}>"Press play to Start"</div>
      ) : (
        <MemoTest />
      )}
    </>
  );
};

export default LayoutMemo;
