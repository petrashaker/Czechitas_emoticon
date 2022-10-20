import React, { createContext, useContext, useState } from "react";
import { eyesData, mouthData, colorsData } from "./data";

export const SettingContext = createContext();

export const useSettings = () => useContext(SettingContext);

const SettingContextProvider = ({children}) => {
    const [settings, setSettings] = useState({
        eyes: eyesData[0].image,
        mouth: mouthData[2].image,
        color: colorsData[3].image
    });

    const handleChange = (newEyes, newMouth, newColor) => {
        // setSettings(prevState => {
        //     console.log(prevState)
        //     prevState.eyes = newEyes;
        //     prevState.mouth = newMouth;
        //     prevState.color = newColor;
        // })
        console.log(newEyes, newMouth, newColor)
        setSettings({
            eyes: newEyes,
            mouth: newMouth,
            color: newColor
        })
    }
    
    return <SettingContext.Provider value={{...settings, handleChange}}>{children}</SettingContext.Provider>
};

export default SettingContextProvider;