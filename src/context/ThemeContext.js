import React, { createContext, useState, useEffect } from "react";
import darkStyles from "../AppDark.module.css";
import lightStyles from "../App.module.css";

export const ThemeContext = createContext();

const ThemeContextProvider = props => {
  const [isDarkMode, setIsDarkMode] = useState(null);

  useEffect(() => {
    if (JSON.parse(localStorage.getItem("isDarkMode")) === null) {
      localStorage.setItem("isDarkMode", true);
    }
    const UIFromLS = JSON.parse(localStorage.getItem("isDarkMode"));
    setIsDarkMode(UIFromLS);
  }, [isDarkMode]);

  return (
    <ThemeContext.Provider
      value={{ isDarkMode, setIsDarkMode, darkStyles, lightStyles }}
    >
      {props.children}
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
