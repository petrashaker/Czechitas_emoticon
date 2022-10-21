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

  // const handleChange = (newItem, newMouth, newColor) => {
  //     setSettings(prevState => ({
  //         ...prevState,
  //         eyes: newEyes,
  //         mouth: newMouth,
  //         color: newColor,
  //     }))
  //     console.log(newEyes, newMouth, newColor)
  //     // setSettings({
  //     //     eyes: newEyes,
  //     //     mouth: newMouth,
  //     //     color: newColor
  //     // })
  // }

  const handleEyesChange = (newEyes) => {
    setSettings((prevState) => ({
      ...prevState,
      eyes: newEyes,
    }));
  };
  const handleMouthChange = (newMouth) => {
    setSettings((prevState) => ({
      ...prevState,
      mouth: newMouth,
    }));
  };
  const handleColorChange = (newColor) => {
    setSettings((prevState) => ({
      ...prevState,
      color: newColor,
    }));
  };

  return (
    <SettingContext.Provider
      value={{
        ...settings,
        handleEyesChange,
        handleMouthChange,
        handleColorChange,
      }}
    >
      {children}
    </SettingContext.Provider>
  );
};

export default SettingContextProvider;
