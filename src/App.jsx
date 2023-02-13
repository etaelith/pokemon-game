import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import Pokemon from "./components/Pokemon";

import Container from "./components/Container";
import MemoTest from "./components/MemoTest";

const App = () => {
  const [loading, setLoading] = useState(true);

  const [pokemons, setPokemons] = useState();

  const [currentPageURL, setCurrentPageURL] = useState(
    // max pokemons ?limit=1008 https://bulbapedia.bulbagarden.net/wiki/Generation
    "https://pokeapi.co/api/v2/pokemon/?limit=151"
  );

  useEffect(() => {
    setLoading(true);
    const controller = new AbortController();
    axios
      .get(currentPageURL, {
        signal: controller.signal,
      })
      .then((res) => {
        setPokemons(res.data.results.map((p) => p));
      })
      .finally(() => {
        controller.abort();
        setLoading(false);
      });
  }, [currentPageURL]);

  if (loading) return <div>Loading</div>;
  return (
    <>
      {loading ? <div>Loading</div> : <MemoTest pokemons={pokemons} />}

      <Container>
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
