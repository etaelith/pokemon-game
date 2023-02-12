import React from "react";

const CardMemoTest = ({ selected, setSelected, completed, image, url }) => {
  return (
    <li
      onClick={() =>
        selected.length < 2 && setSelected((selected) => selected.concat(image))
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
};

export default CardMemoTest;
