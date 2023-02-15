import React, { useState } from "react";

export function useFetch(url) {
  const [pokemonData, setPokemonData] = useState();
  async function fetchData(id) {
    try {
      await fetch(id)
        .then((e) => e.json())
        .then((r) => setPokemonData(r));
    } catch (e) {
      console.log(e);
    } finally {
    }
  }
  fetchData(url);
  return pokemonData;
}


