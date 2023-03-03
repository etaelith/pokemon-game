import React, { useContext } from "react";
import { PokemonsContext } from "@/context/PokemonsProvider";
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
            let check = p.url.split("/");
            if (check[check.length - 2].length <= 4) {
              const element = <Pokemon key={p.name} url={p.url} />;
              return element;
            }
          })
        )}
      </Container>
      <Buttons />
    </>
  );
};

export default List;
