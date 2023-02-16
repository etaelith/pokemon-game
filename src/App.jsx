import { Route, Routes } from "react-router-dom";
import "./App.css";
import PokemonFocus from "./components/PokemonFocus";

import Homepage from "./pages/Homepage";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />}>
          <Route path="/*" element={<PokemonFocus />} />
        </Route>
        <Route path="*" element={<div>Error</div>} />
      </Routes>
    </>
  );
};

export default App;
