import { useEffect, useState } from "react";
import "./App.css";
import Pokemon from "./components/Pokemon";
import Container from "./components/Container";
import LayoutMemo from "./components/LayoutMemo";

const App = () => {
  const [loading, setLoading] = useState(true);

  const [pokemons, setPokemons] = useState();
  const URL = "https://pokeapi.co/api/v2/pokemon/?limit=151";

  useEffect(() => {
    setLoading(true);
    async function fetchData(id) {
      try {
        await fetch(id)
          .then((e) => e.json())
          .then((d) => d.results.map((p) => p))
          .then((r) => setPokemons(r));
      } catch (e) {
        console.log(e);
      } finally {
        setLoading(false);
      }
    }
    fetchData(URL);
  }, []);

  if (loading) return <div>Loading</div>;
  return (
    <>
      <Container item={"memo"}>
        {loading ? <div>Loading</div> : <LayoutMemo pokemons={pokemons} />}
      </Container>
      <Container item={"pokemons"}>
        {loading ? (
          <div>loading</div>
        ) : (
          pokemons.map((p) => <Pokemon key={p.name} url={p.url} />)
        )}
      </Container>
    </>
  );
};

export default App;
