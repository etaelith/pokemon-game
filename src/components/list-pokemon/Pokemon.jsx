import { useContext } from "react";
import { getCheck, sumZeros } from "@/utils/getFunctions";
import { PokemonsContext } from "@/context/PokemonsProvider";
import { useFetch } from "@/hooks/useFetch";

import defineIcon from "@/utils/getIcon";
import chargeImg from "@/assets/chargeImg.svg";
import "@/styles/pokemonCard.css";
import "@/styles/pokemonCardType.css";
import useLoading from "@/hooks/useLoading";

const Pokemon = ({ url }) => {
  const { setPokeDetail, setDetailIsLoading } = useContext(PokemonsContext);
  const { imageLoaded, setImageLoaded } = useLoading();
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
                className="pokemon-img waiting"
                src={chargeImg}
                alt="img loading"
                style={{ display: imageLoaded ? "none" : "block" }}
              ></img>
              <img
                className={`pokemon-img ${getCheck(url)}`}
                src={`https://assets.pokemon.com/assets/cms2/img/pokedex/full/${sumZeros(
                  pokemonData.id,
                  3
                )}.png`}
                onLoad={() => setImageLoaded(true)}
                onError={() => setImageLoaded(false)}
                style={{ display: imageLoaded ? "block" : "none" }}
              ></img>
              <div
                className="circle-bg"
                style={{ display: imageLoaded ? "block" : "none" }}
              ></div>
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
