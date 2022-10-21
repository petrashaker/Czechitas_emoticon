import React from "react";
import { createRoot } from "react-dom/client";
import "./style.css";
import Emoticon from "./components/Emoticon";
import Configurator from "./components/Configurator";
import SettingContextProvider from "./setting-context";

const App = () => {
  return (
    <SettingContextProvider>
      <div className="container">
        <header>
          <h1>Vytvoř si vlastní emotikon</h1>
        </header>
        <main>
          <Emoticon />
          <Configurator />
        </main>
      </div>
    </SettingContextProvider>
  );
};

createRoot(document.querySelector("#app")).render(<App />);

//https://kodim.cz/kurzy/react-2/postupy/state-management/cv-context-opakovani
