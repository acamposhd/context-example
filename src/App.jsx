import { useContext } from "react";
import logo from "./logo.svg";
import "./App.css";
import ComponenteHijo from "./components/ComponenteHijo";

import { GlobalContext } from "./context/global/global.context";

function App() {
  const { handleCount } = useContext(GlobalContext);

  return (
    <div className="App">
      <h1>Componente Padre</h1>
      <button onClick={() => handleCount("increment")}>+</button>
      <button onClick={() => handleCount("decrement")}>-</button>
      <ComponenteHijo />
    </div>
  );
}

export default App;

// Props Drilling
