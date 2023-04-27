import React, { useContext } from "react";
import { UseValidateInput } from "../../hooks/useValidateInput/useValidateInput";
import { inputContext } from "../../context/inputContext/inputContext";
import styles from "../../styles/Header.module.css";

export function Header() {
  const { valid, setValid, inputValue, setInputValue } =
    useContext(inputContext);

  const validateInput = () => {
    if (UseValidateInput(inputValue)) {
      setValid(true);
    } else {
      alert("provide a non-empty value");
    }
  };

  return (
    <header className={styles.pagesBtns}>
      <button
        onClick={() => {
          setValid(false);
          setInputValue("");
        }}
        className={`${styles.firstPage} ${valid ? "" : styles.active}`}
        disabled={!valid}
      >
        First Page
      </button>
      <button
        onClick={validateInput}
        className={`${styles.secondPage} ${valid ? styles.active : ""}`}
        disabled={valid}
      >
        Second Page
      </button>
    </header>
  );
}
