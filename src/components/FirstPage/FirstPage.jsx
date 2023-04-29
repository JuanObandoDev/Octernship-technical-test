import React from "react";
import { useContext } from "react";

import { UseValidateInput } from "../../hooks/useValidateInput/useValidateInput";
import { inputContext } from "../../context/inputContext/inputContext";

import styles from "../../styles/FirstPage.module.css";

export function FirstPage() {
  const { inputValue, setInputValue, setValid } = useContext(inputContext);
  const validateInput = () => {
    if (UseValidateInput(inputValue)) {
      setValid(true);
    } else {
      alert("provide a non-empty value");
    }
  };

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
        onClick={validateInput}
      >
        Submit
      </button>
    </div>
  );
}
