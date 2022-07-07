import { useContext } from "react";
import "./App.css";
import ComponenteHijo from "./components/ComponenteHijo";

import { GlobalContext } from "./context/global/global.context";
import { useTranslation } from "react-i18next";

function App() {
  const { handleCount } = useContext(GlobalContext);
  const { i18n, t } = useTranslation();

  function changeLaguage(language) {
    i18n.changeLanguage(language);
  }

  return (
    <div className="App">
      <h1>{t("title")}</h1>
      <h2>{t("subtitle")}</h2>
      <div className="link-container">
        <p
          className={`App-link ${
            i18n.language === "es" ? "selected" : "unselected"
          }`}
          onClick={() => changeLaguage("es")}
        >
          🇲🇽
        </p>
        <p
          className={`App-link ${
            i18n.language === "en" ? "selected" : "unselected"
          }`}
          onClick={() => changeLaguage("en")}
        >
          🇺🇸
        </p>
      </div>

      <button onClick={() => handleCount("increment")}>+</button>
      <button onClick={() => handleCount("decrement")}>-</button>
      <ComponenteHijo />
    </div>
  );
}

export default App;

// Props Drilling
