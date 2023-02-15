import { createContext, useEffect, useState } from "react";
export const PokemonsContext = createContext();
const PokemonsProvider = ({ children }) => {
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
  return (
    <PokemonsContext.Provider value={{ pokemons, loading }}>
      {children}
    </PokemonsContext.Provider>
  );
};

export default PokemonsProvider;
