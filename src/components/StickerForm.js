import React, { useContext } from "react";
import { LabelContext } from "../context/LabelContext";
import { ThemeContext } from "../context/ThemeContext";
import LabelContextProvider from "../context/LabelContext";

const StickerForm = props => {
  const {
    setUser,
    setPass,
    setCount,
    handleClear,
    handleGenerate
  } = useContext(LabelContext);
  const { darkStyles, lightStyles, isDarkMode } = useContext(ThemeContext);

  return (
    <LabelContextProvider>
      <form
        className={isDarkMode ? darkStyles.form : lightStyles.form}
        autoComplete='off'
        onSubmit={handleGenerate}
      >
        <input
          className={isDarkMode ? darkStyles.input : lightStyles.input}
          required
          type='text'
          name='user'
          placeholder='Username'
          onChange={e => setUser(e.target.value)}
        />
        <br />
        <input
          className={isDarkMode ? darkStyles.input : lightStyles.input}
          required
          type='text'
          name='pass'
          placeholder='Password'
          onChange={e => setPass(e.target.value)}
        />
        <br />

        <input
          className={isDarkMode ? darkStyles.input : lightStyles.input}
          required
          type='number'
          min='1'
          max='16'
          name='count'
          placeholder='How many?'
          onChange={e => setCount(e.target.value)}
        />
        <br />
        <input
          type='submit'
          className={
            isDarkMode ? darkStyles.buttonGenerate : lightStyles.buttonGenerate
          }
          value='Generate'
        />
        <button
          className={
            isDarkMode ? darkStyles.buttonClear : lightStyles.buttonClear
          }
          onClick={handleClear}
        >
          Clear
        </button>
      </form>
    </LabelContextProvider>
  );
};

export default StickerForm;
