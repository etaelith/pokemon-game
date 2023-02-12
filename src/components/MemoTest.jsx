import React, { useEffect, useState } from "react";
import "../styles/memotest.css";
import ButtonWin from "./ButtonWin";
import extractData from "../utils/getMemo";
import CardMemoTest from "./CardMemoTest";

const MemoTest = ({ pokemons }) => {
  const [completed, setCompleted] = useState([]);
  const [selected, setSelected] = useState([]);
  const [memoImages, setMemoImages] = useState([]);
  const [test, setTest] = useState(null);

  const [loading, setLoading] = useState(true);

  function sumZeros(num, size) {
    var s = num + "";
    while (s.length < size) s = "0" + s;
    return s;
  }

  //localstorage
  useEffect(() => {
    let resueltos = JSON.parse(localStorage.getItem("players")).length;
    const data = extractData(pokemons, resueltos);

    const tank = [];
    data.map((e) => {
      tank.push(
        `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${sumZeros(
          e.index,
          3
        )}.png`
      );
    });
    setTest(tank);
  }, []);
  useEffect(() => {
    if (test) {
      const sortedMemoImages = [];
      test.forEach((image, index) => {
        sortedMemoImages.push({
          id: `a|${image}`,
          originalIndex: index,
        });
        sortedMemoImages.push({
          id: `b|${image}`,
          originalIndex: index,
        });
      });
      setMemoImages(sortedMemoImages.sort(() => Math.random() - 0.5));
      setLoading(false);
    }
  }, [test]);
  //MemoTest
  useEffect(() => {
    if (selected.length === 2) {
      if (selected[0].id.split("|")[1] === selected[1].id.split("|")[1]) {
        setCompleted((completed) => completed.concat(selected));
      }
      setTimeout(() => setSelected([]), 1000);
    }
  }, [selected]);
  //alert win
  useEffect(() => {
    if (test !== null) {
      if (completed.length === memoImages.length) {
        document.getElementById("dialog-default").showModal();
      }
    }
  }, [completed]);

  return (
    <>
      <div
        className="nes-text is-primary"
        style={{ marginBottom: "2em", marginTop: "2em" }}
      >
        Memo-test Pokemon
      </div>
      {!test ? (
        <div>Loading</div>
      ) : (
        <ul
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(128px, 1fr",
            gap: 24,
          }}
        >
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
      <ButtonWin />
    </>
  );
};

export default MemoTest;
