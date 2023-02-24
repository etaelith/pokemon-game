import { getCheck, levelDefined, sumZeros } from "../../utils/getFunctions";
import { useContext } from "react";
import defineIcon from "../../utils/getIcon";

import { useFetch } from "../../hooks/useFetch";
import { PokemonsContext } from "../../context/PokemonsProvider";
import "../../styles/pokemonCard.css";
import "../../styles/pokemonCardType.css";

const Pokemon = ({ url }) => {
  const { setPokeDetail, setDetailIsLoading } = useContext(PokemonsContext);
  const pokemonData = useFetch(url);
  const handleCard = (e) => {
    e.preventDefault();
    setPokeDetail(pokemonData);
    setDetailIsLoading(false);
  };

  return (
    <>
      {pokemonData && (
        <div
          className={`card ${pokemonData.types[0].type.name}`}
          onClick={handleCard}
        >
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
                className={`pokemon-img ${getCheck(url)}`}
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
