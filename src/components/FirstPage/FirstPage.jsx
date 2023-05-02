import React, { useContext } from "react";

import { validateInput } from "../../utils/validate-input/validateInput";
import { inputContext } from "../../context/inputContext/inputContext";

import styles from "../../styles/FirstPage.module.css";

export function FirstPage() {
  const { inputValue, setInputValue, setValid } = useContext(inputContext);

  return (
    <div className={styles.main}>
      <input
        onChange={(e) => setInputValue(e.target.value.toLowerCase())}
        className={styles.input}
        type="text"
        placeholder="Enter any text"
        id="userInput"
      />
      <button 
        className={styles.submit} 
        type="submit" 
        onClick={() => {
          validateInput(inputValue) ? setValid(true) : alert("provide a non-empty value");
        }}
      >
        Submit
      </button>
    </div>
  );
}
