import React, { createContext, useContext, useState } from "react";
import { eyesData, mouthData, colorsData } from "./data";

export const SettingContext = createContext();

export const useSettings = () => useContext(SettingContext);

const SettingContextProvider = ({ children }) => {
  const [settings, setSettings] = useState({
    eyes: eyesData[0].image,
    mouth: mouthData[2].image,
    color: colorsData[3].image,
  });

  const settingsChange = (newSettings) => {
    setSettings((prevState) => ({     
      ...prevState, 
      ...settings,
      ...newSettings,
    }));
  };

  return (
    <SettingContext.Provider
      value={{
        ...settings,
        settingsChange
      }}
    >
      {children}
    </SettingContext.Provider>
  );
};

export default SettingContextProvider;
