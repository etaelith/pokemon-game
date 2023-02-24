import React, { useContext } from "react";
import { PokemonsContext } from "../../context/PokemonsProvider";
import Pokemon from "./Pokemon";

import Container from "../Container";
import Buttons from "./Buttons";
const List = () => {
  const { pokemons, loading } = useContext(PokemonsContext);

  return (
    <>
      <Buttons />
      <Container item={"pokemons"}>
        {loading ? (
          <div>loading</div>
        ) : (
          pokemons.map((p) => {
            const element = <Pokemon key={p.name} url={p.url} />;
            return element;
          })
        )}
      </Container>
      <Buttons />
    </>
  );
};

export default List;
