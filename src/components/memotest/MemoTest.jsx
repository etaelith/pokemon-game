import { useContext } from "react";

import CardMemoTest from "./CardMemoTest";

import { MemoContext } from "../../context/MemoProvider";
import "../../styles/memotest.css";

const MemoTest = () => {
  const { selected, setSelected, completed, setCompleted, memoImages } =
    useContext(MemoContext);

  return (
    <>
      {memoImages && (
        <ul className="container-memotest">
          {memoImages.map((image, index) => {
            const [, url] = image.id.split("|");
            const element = (
              <CardMemoTest
                key={index}
                selected={selected}
                setSelected={setSelected}
                completed={completed}
                setCompleted={setCompleted}
                image={image}
                url={url}
              />
            );
            return element;
          })}
        </ul>
      )}
    </>
  );
};

export default MemoTest;
