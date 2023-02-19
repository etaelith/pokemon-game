import { useContext } from "react";
import { MemoContext } from "../../context/MemoProvider";

import MemoTest from "./MemoTest";
import Tittle from "./Tittle";

const LayoutMemo = () => {
  const { isActive } = useContext(MemoContext);

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
