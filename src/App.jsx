import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import Pokemon from "./components/Pokemon";

import Container from "./components/Container";
import MemoTest from "./components/MemoTest";
import extractData from "../src/utils/getMemo";
const memolocal = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const App = () => {
  const [loading, setLoading] = useState(true);
  const [memoData, setMemoData] = useState();
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
