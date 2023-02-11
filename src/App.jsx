import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import Pokemon from "./components/Pokemon";

import Container from "./components/Container";

const App = () => {
  const [loading, setLoading] = useState(true);

  const [pokemons, setPokemons] = useState();

  const [currentPageURL, setCurrentPageURL] = useState(
    "https://pokeapi.co/api/v2/pokemon/?limit=150"
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
        setLoading(false);
      })
      .finally(() => {
        controller.abort();
      });
  }, [currentPageURL]);
  return (
    <>
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
