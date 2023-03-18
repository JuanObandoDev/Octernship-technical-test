import React from "react";
import styles from "./FirstPage.module.css";
import { useValidateInput } from "./hooks/useValidateInput";

function FirstPage({ setValid, value, setValue }) {
  const validateInput = () => {
    if (useValidateInput(value)) {
      setValid(true);
    } else {
      alert("provide a non-empty value");
    }
  };

  return (
    <>
      <div className={styles.main}>
        <input
          onChange={(e) => setValue(e.target.value)}
          value={value}
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
