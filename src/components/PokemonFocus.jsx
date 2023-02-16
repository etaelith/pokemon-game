import React, { useContext, useEffect, useState } from "react";
import { PokemonsContext } from "../context/PokemonsProvider";
import { sumZeros } from "../utils/getFunctions";
import defineIcon from "../utils/getIcon";
import "../styles/pokemonFocus.css";
const PokemonFocus = () => {
  const { pokeDetail, setPokeDetail, detailIsLoading, setDetailIsLoading } =
    useContext(PokemonsContext);

  const handleCard = (e) => {
    e.preventDefault();
    setDetailIsLoading(true);
  };
  return (
    <>
      {detailIsLoading ? (
        <div>Loading</div>
      ) : (
        <div
          className={`pokeDetail-container ${pokeDetail.types[0].type.name}`}
          onClick={handleCard}
        >
          <div className={`card ${pokeDetail.types[0].type.name}`}>
            <div className={`fill-bg ${pokeDetail.types[0].type.name}`}></div>
            <div className="container-detail">
              <div className="top-container">
                <div className="name-container">
                  <div className="name">{pokeDetail.name}</div>
                </div>
                <div className="number-container">
                  <div className="number">{`#${sumZeros(
                    pokeDetail.id,
                    3
                  )}`}</div>
                </div>
              </div>
              <div className="image-container">
                <img
                  className="pokemon-img"
                  src={`https://assets.pokemon.com/assets/cms2/img/pokedex/full/${sumZeros(
                    pokeDetail.id,
                    3
                  )}.png`}
                ></img>
                <div className="circle-bg"></div>
              </div>

              <div className="types-container">
                {pokeDetail.types.map((type, index) => {
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
        </div>
      )}
    </>
  );
};

export default PokemonFocus;
/*         */
