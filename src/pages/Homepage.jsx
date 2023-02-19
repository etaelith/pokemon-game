import { useContext } from "react";
import MemoProvider from "../context/MemoProvider";
import { PokemonsContext } from "../context/PokemonsProvider";
import Container from "../components/Container";
import LayoutMemo from "../components/memotest/LayoutMemo";
import PokemonFocus from "../components/list-pokemon/PokemonFocus";
import Pokemon from "../components/list-pokemon/Pokemon";

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
        {pokemons.map((p) => {
          const element = <Pokemon key={p.name} url={p.url} />;
          return element;
        })}
      </Container>
    </>
  );
};

export default Homepage;
