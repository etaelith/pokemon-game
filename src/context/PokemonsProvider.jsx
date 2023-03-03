import { createContext, useEffect, useState } from "react";
import useError from "../hooks/useError";
export const PokemonsContext = createContext();
const PokemonsProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [pokemons, setPokemons] = useState();
  const [pokeDetail, setPokeDetail] = useState([]);
  const [detailIsLoading, setDetailIsLoading] = useState(true);
  const [currentURL, setCurrentURL] = useState(
    "https://pokeapi.co/api/v2/pokemon"
  );
  const [prevURL, setPrevURL] = useState(null);
  const [nextURL, setNextURL] = useState(null);
  const [count, setCount] = useState(0);

  useEffect(() => {
    setLoading(true);
    async function fetchData(id) {
      try {
        await fetch(id)
          .then((e) => e.json())
          .then((res) => {
            setPrevURL(res.previous);
            setNextURL(res.next);
            setPokemons(res.results.map((p) => p));
          });
      } catch (e) {
        useError();
      } finally {
        setLoading(false);
      }
    }
    fetchData(currentURL);
  }, [currentURL]);
  const goNext = () => {
    if (count > 50) {
      setNextURL(null);
    } else {
      setCurrentURL(nextURL);
      setCount(count + 1);
    }
  };
  const goPrev = () => {
    setCurrentURL(prevURL);
    setCount(count - 1);
  };
  return (
    <PokemonsContext.Provider
      value={{
        goNext,
        goPrev,
        pokemons,
        loading,
        pokeDetail,
        setPokeDetail,
        detailIsLoading,
        setDetailIsLoading,
      }}
    >
      {children}
    </PokemonsContext.Provider>
  );
};

export default PokemonsProvider;
