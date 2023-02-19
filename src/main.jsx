import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import "nes.css/css/nes.min.css";
import PokemonsProvider from "./context/PokemonsProvider";
import { BrowserRouter } from "react-router-dom";
ReactDOM.createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <PokemonsProvider>
        <App />
      </PokemonsProvider>
    </BrowserRouter>
  </StrictMode>
);
