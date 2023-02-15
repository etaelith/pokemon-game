import { sumZeros } from "../utils/getFunctions";

import defineIcon from "../utils/getIcon";

import "../styles/pokemonCardType.css";
import "../styles/pokemonCard.css";
import { useFetch } from "../hooks/useFetch";

const Pokemon = ({ url }) => {
  const pokemonData = useFetch(url);
  return (
    <>
      {pokemonData && (
        <div className={`card ${pokemonData.types[0].type.name}`}>
          <div className={`fill-bg ${pokemonData.types[0].type.name}`}></div>
          <div className="container-detail">
            <div className="top-container">
              <div className="name-container">
                <div className="name">{pokemonData.name}</div>
              </div>
              <div className="number-container">
                <div className="number">{`#${sumZeros(
                  pokemonData.id,
                  3
                )}`}</div>
              </div>
            </div>
            <div className="image-container">
              <img
                className="pokemon-img"
                src={`https://assets.pokemon.com/assets/cms2/img/pokedex/full/${sumZeros(
                  pokemonData.id,
                  3
                )}.png`}
              ></img>
              <div className="circle-bg"></div>
            </div>

            <div className="types-container">
              {pokemonData.types.map((type, index) => {
                const element = (
                  <div key={index} className={`type-tab ${type.type.name}`}>
                    <img src={defineIcon(type.type.name)}></img>
                    <div>{type.type.name}</div>
                  </div>
                );
                return element;
              })}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Pokemon;
