import "./App.css";
import LocalStorageProvider from "./context/LocalStorageProvider";

import Homepage from "./pages/Homepage";

const App = () => {
  return (
    <>
      <LocalStorageProvider>
        <Homepage />
      </LocalStorageProvider>
    </>
  );
};

export default App;
