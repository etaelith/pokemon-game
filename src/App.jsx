import "./App.css";
import LocalProvider from "./context/LocalProvider";

import Homepage from "./pages/Homepage";

const App = () => {
  return (
    <>
      <LocalProvider>
        <Homepage />
      </LocalProvider>
    </>
  );
};

export default App;
