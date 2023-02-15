import { useContext, useEffect, useState } from "react";
import { PokemonsContext } from "../context/PokemonsProvider";
import { MemoContext } from "../context/MemoProvider";

import {
  getLocal,
  setLocal,
  extractData,
  sumZeros,
} from "../utils/getFunctions";
import CardMemoTest from "./CardMemoTest";

import "../styles/memotest.css";

const MemoTest = () => {
  const { pokemons } = useContext(PokemonsContext);
  const { handleReset } = useContext(MemoContext);
  const [completed, setCompleted] = useState([]);
  const [selected, setSelected] = useState([]);
  const [memoImages, setMemoImages] = useState([]);
  const [test, setTest] = useState(null);
  const IMAGE_URL = "https://assets.pokemon.com/assets/cms2/img/pokedex/full/";
  //localstorage
  useEffect(() => {
    if (window.localStorage) {
      const resueltos = getLocal("players");
      if (!resueltos) {
        const array = JSON.stringify([]);
        setLocal("players", array);
        const tank = [];
        const data = extractData(pokemons, 0);
        data.map((e) => {
          tank.push(`${IMAGE_URL}${sumZeros(e.index, 3)}.png`);
        });
        setTest(tank);
      }
      if (resueltos < 1) {
        const tank = [];
        const data = extractData(pokemons, 0);
        data.map((e) => {
          tank.push(`${IMAGE_URL}${sumZeros(e.index, 3)}.png`);
        });
        setTest(tank);
      } else {
        const tank = [];
        const data = extractData(pokemons, resueltos.length);
        data.map((e) => {
          tank.push(`${IMAGE_URL}${sumZeros(e.index, 3)}.png`);
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
        const players = getLocal("players");
        const lastNumber = players[players.length - 1] || 0;
        const newNumbers = Array.from(
          { length: 10 },
          (_, i) => lastNumber + i + 1
        );
        players.push(...newNumbers);
        setLocal("players", JSON.stringify(players));

        handleReset();
      }
    }
  }, [completed]);

  return (
    <>
      {!test ? (
        <div>Loading</div>
      ) : (
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
