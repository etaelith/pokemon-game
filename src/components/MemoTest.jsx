import React, { useEffect, useState } from "react";
import "../styles/memotest.css";
import ButtonWin from "./ButtonWin";
const IMAGES = [
  "https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png",
  "https://assets.pokemon.com/assets/cms2/img/pokedex/full/002.png",
  "https://assets.pokemon.com/assets/cms2/img/pokedex/full/003.png",
  "https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png",
  "https://assets.pokemon.com/assets/cms2/img/pokedex/full/005.png",
  "https://assets.pokemon.com/assets/cms2/img/pokedex/full/006.png",
  "https://assets.pokemon.com/assets/cms2/img/pokedex/full/007.png",
  "https://assets.pokemon.com/assets/cms2/img/pokedex/full/008.png",
  "https://assets.pokemon.com/assets/cms2/img/pokedex/full/009.png",
  "https://assets.pokemon.com/assets/cms2/img/pokedex/full/010.png",
]
  .flatMap((image) => [`a|${image}`, `b|${image}`])
  .sort(() => Math.random() - 0.5);
const MemoTest = () => {
  const [completed, setCompleted] = useState([]);
  const [selected, setSelected] = useState([]);

  useEffect(() => {
    if (selected.length === 2) {
      if (selected[0].split("|")[1] === selected[1].split("|")[1]) {
        setCompleted((completed) => completed.concat(selected));
      }
      setTimeout(() => setSelected([]), 1000);
    }
  }, [selected]);

  useEffect(() => {
    if (completed.length === IMAGES.length) {
      document.getElementById("dialog-default").showModal();
    }
  }, [completed]);
  return (
    <>
      {" "}
      <div class="nes-text is-primary" style={{marginBottom: "2em"}}>Memo-test Pokemon</div>
      <ul
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(128px, 1fr",
          gap: 24,
        }}
      >
        {IMAGES.map((image) => {
          const [, url] = image.split("|");
          const element = (
            <li
              onClick={() =>
                selected.length < 2 &&
                setSelected((selected) => selected.concat(image))
              }
              key={image}
              style={{
                padding: 12,
                border: "1px solid #666",
                borderRadius: 12,
              }}
            >
              {selected.includes(image) || completed.includes(image) ? (
                <img alt="icon" src={url}></img>
              ) : (
                <img
                  alt="icon"
                  src="https://raw.githubusercontent.com/devSalaz/pokedexAPI/626babbeeeb0e03a000546e97406b5c3e6697c43/src/assets/images/pokeball-icon.png"
                ></img>
              )}
            </li>
          );
          return element;
        })}
      </ul>
      <ButtonWin />
    </>
  );
};

export default MemoTest;
