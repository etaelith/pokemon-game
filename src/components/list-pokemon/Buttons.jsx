import React, { useContext } from "react";
import { PokemonsContext } from "@/context/PokemonsProvider";
import "@/styles/buttons.css";
/**
 * Renders the Previous and Next buttons for navigating through the list of pokemons.
 *
 * @returns {JSX.Element} - The rendered component.
 */
const Buttons = () => {
  const { goNext, goPrev } = useContext(PokemonsContext);
  return (
    <div className="buttons">
      <button className="prev" onClick={() => goPrev()}>
        Previous
      </button>
      <button className="next" onClick={() => goNext()}>
        Next
      </button>
    </div>
  );
};

export default Buttons;
