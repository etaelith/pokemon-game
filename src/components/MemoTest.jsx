import { useEffect, useState } from "react";

import CardMemoTest from "./CardMemoTest";
import ButtonWin from "./ButtonWin";
import extractData from "../utils/getMemo";
import sumZeros from "../utils/getZeros";

import "../styles/memotest.css";

const MemoTest = ({ pokemons }) => {
  const [completed, setCompleted] = useState([]);
  const [selected, setSelected] = useState([]);
  const [memoImages, setMemoImages] = useState([]);
  const [test, setTest] = useState(null);

  //localstorage
  useEffect(() => {
    if (window.localStorage) {
      const resueltos = JSON.parse(localStorage.getItem("players"));
      if (!resueltos) {
        const array = JSON.stringify([]);
        localStorage.setItem("players", array);
        const tank = [];
        const data = extractData(pokemons, 0);
        data.map((e) => {
          tank.push(
            `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${sumZeros(
              e.index,
              3
            )}.png`
          );
        });
        setTest(tank);
      }
      if (resueltos < 1) {
        const tank = [];
        const data = extractData(pokemons, 0);
        data.map((e) => {
          tank.push(
            `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${sumZeros(
              e.index,
              3
            )}.png`
          );
        });
        setTest(tank);
      } else {
        const tank = [];
        const data = extractData(pokemons, resueltos.length);
        data.map((e) => {
          tank.push(
            `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${sumZeros(
              e.index,
              3
            )}.png`
          );
        });
        setTest(tank);
      }
    }
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
        const players = JSON.parse(localStorage.getItem("players")) || [];
        const lastNumber = players[players.length - 1] || 0;
        const newNumbers = Array.from(
          { length: 10 },
          (_, i) => lastNumber + i + 1
        );
        players.push(...newNumbers);
        localStorage.setItem("players", JSON.stringify(players));

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
