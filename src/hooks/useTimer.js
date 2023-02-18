import { useContext } from "react";
import { MemoContext } from "../context/MemoProviderPreview";

const useTimer = () => {
  const {} = useContext(MemoContext);
  return <div>useTimer</div>;
};

export default useTimer;
