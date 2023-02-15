import { useContext } from "react";
import "./App.css";
import Pokemon from "./components/Pokemon";
import Container from "./components/Container";
import LayoutMemo from "./components/LayoutMemo";
import { PokemonsContext } from "./context/PokemonsProvider";
import MemoProvider from "./context/MemoProvider";

const App = () => {
  const { pokemons, loading } = useContext(PokemonsContext);

  if (loading) return <div>Loading</div>;

  return (
    <>
      <Container item={"memo"}>
        <MemoProvider>
          <LayoutMemo />
        </MemoProvider>
      </Container>
      <Container item={"pokemons"}>
        {pokemons.map((p) => (
          <Pokemon key={p.name} url={p.url} />
        ))}
      </Container>
    </>
  );
};

export default App;
