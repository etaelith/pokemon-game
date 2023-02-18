import { useContext } from "react";
import MemoProvider from "../context/MemoProvider";
import { PokemonsContext } from "../context/PokemonsProvider";
import Container from "../components/Container";
import LayoutMemo from "../components/LayoutMemo";
import PokemonFocus from "../components/PokemonFocus";
import Pokemon from "../components/Pokemon";

import "../App.css";

const Homepage = () => {
  const { pokemons, loading } = useContext(PokemonsContext);

  if (loading) return <div>Loading</div>;

  return (
    <>
      <Container item={"memo"}>
        <MemoProvider>
          <LayoutMemo />
        </MemoProvider>
      </Container>
      <PokemonFocus />
      <Container item={"pokemons"}>
        {pokemons.map((p) => (
          <Pokemon key={p.name} url={p.url} />
        ))}
      </Container>
    </>
  );
};

export default Homepage;
