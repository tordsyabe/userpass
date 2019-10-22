import React, { useContext } from "react";
import LabelContextProvider from "./context/LabelContext";
import { ThemeContext } from "./context/ThemeContext";
import LabelStickers from "./components/LabelStickers";

import StickerForm from "./components/StickerForm";

function App() {
  const { isDarkMode, setIsDarkMode, darkStyles, lightStyles } = useContext(
    ThemeContext
  );
  return (
    <LabelContextProvider>
      <div className={isDarkMode ? darkStyles.App : lightStyles.App}>
        <div
          className={
            isDarkMode ? darkStyles.formWrapper : lightStyles.formWrapper
          }
        >
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <h1>Label Sticker</h1>
            <input
              type='checkbox'
              onClick={() => setIsDarkMode(!isDarkMode)}
              style={{ margin: "10px 0", display: "none" }}
              id='toggleDarkMode'
            />
            <label
              htmlFor='toggleDarkMode'
              style={{
                cursor: "pointer",
                color: "grey",
                fontSize: "13px",
                border: "1px solid grey",
                borderRadius: "31px",
                padding: "10px",
                height: "15px"
              }}
            >
              {isDarkMode ? "Light Mode" : "Dark Mode"}
            </label>
          </div>

          <StickerForm />
          <p
            style={{
              color: "grey",
              marginTop: "50px",
              fontSize: "15px"
            }}
          >
            This app only supports 8 rows and 2 columns label stickers.
          </p>
        </div>
        <LabelStickers />
      </div>
    </LabelContextProvider>
  );
}

export default App;
