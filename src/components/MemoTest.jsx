import { useContext } from "react";
import { LocalStorageContext } from "../context/LocalStorageProvider";

import CardMemoTest from "./CardMemoTest";

import "../styles/memotest.css";

const MemoTest = () => {
  const { selected, setSelected, completed, setCompleted, memoImages } =
    useContext(LocalStorageContext);

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
