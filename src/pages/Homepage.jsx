import { useContext } from "react";
import "../App.css";
import Pokemon from "../components/Pokemon";
import Container from "../components/Container";
import LayoutMemo from "../components/LayoutMemo";
import { PokemonsContext } from "../context/PokemonsProvider";
import LocalStorageProvider from "../context/LocalStorageProvider";
import MemoProvider from "../context/MemoProvider";
import PokemonFocus from "../components/PokemonFocus";

const Homepage = () => {
  const { pokemons, loading } = useContext(PokemonsContext);

  if (loading) return <div>Loading</div>;

  return (
    <>
      <Container item={"memo"}>
        <MemoProvider>
          <LocalStorageProvider>
            <LayoutMemo />
          </LocalStorageProvider>
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
