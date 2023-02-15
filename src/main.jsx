import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";
import "nes.css/css/nes.min.css";
import PokemonsProvider from "./context/PokemonsProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <PokemonsProvider>
      <App />
    </PokemonsProvider>
  </BrowserRouter>
);
