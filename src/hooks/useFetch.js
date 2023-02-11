import axios from "axios";
import React, { useEffect, useState } from "react";

const useFetch = () => {
  const [loading, setLoading] = useState(true);
  const [pokemons, setPokemons] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const promises = Array.from({ length: 150 }, (_, i) =>
          axios.get(`https://pokeapi.co/api/v2/pokemon/${i + 1}`)
        );
        const results = await Promise.all(promises);
        setPokemons(results.map((result) => result.data));
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);
  return <div value={pokemons}></div>;
};

export default useFetch;
