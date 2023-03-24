import React from "react";
import styles from "../styles/FirstPage.module.css";
import { useValidateInput } from "../hooks/useValidateInput";
import { useContext } from "react";
import { inputContext } from "../context/inputContext";

function FirstPage() {
  const { inputValue, setInputValue, setValid } = useContext(inputContext);
  const validateInput = () => {
    if (useValidateInput(inputValue)) {
      setValid(true);
    } else {
      alert("provide a non-empty value");
    }
  };

  return (
    <>
      <div className={styles.main}>
        <input
          onChange={(e) => setInputValue(e.target.value.toLowerCase())}
          className={styles.input}
          type="text"
          placeholder="Enter any text"
          id="userInput"
        />
        <button className={styles.submit} type="submit" onClick={validateInput}>
          Submit
        </button>
      </div>
    </>
  );
}

export { FirstPage };
