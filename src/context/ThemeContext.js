import React, { createContext, useState } from "react";
import darkStyles from "../AppDark.module.css";
import lightStyles from "../App.module.css";

export const ThemeContext = createContext();

const ThemeContextProvider = props => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  return (
    <ThemeContext.Provider
      value={{ isDarkMode, setIsDarkMode, darkStyles, lightStyles }}
    >
      {props.children}
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
