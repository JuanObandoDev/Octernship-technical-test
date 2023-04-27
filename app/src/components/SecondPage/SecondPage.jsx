import React from "react";
import styles from "../styles/SecondPage.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { useFindCopy } from "../../hooks/useFindCopy/useFindCopy";
import { useDeleteCopy } from "../../hooks/useDeleteCopy/useDeleteCopy";
import { useValidate } from "../../hooks/useValidate/useValidate";
import { useContext } from "react";
import { inputContext } from "../../context/inputContext/inputContext";

function SecondPage() {
  const { inputValue, setInputValue } = useContext(inputContext);
  const [valueOriginal, setValueOriginal] = useState(inputValue);

  return (
    <>
      {useValidate(inputValue) ? (
        <header className={styles.success}>
          <p>
            Success, all duplicate characters was removed <br></br> string
            before: <span className={styles.originStr}>{valueOriginal}</span>,
            string after: <span className={styles.resultStr}>{inputValue}</span>
          </p>
        </header>
      ) : (
        <></>
      )}
      <div className={styles.main}>
        {inputValue.split("").map((item, index) => {
          return (
            <div className={styles.card} id={index} key={index}>
              {useFindCopy(item, index, inputValue) ? (
                <button
                  className={styles.delete}
                  onClick={() =>
                    useDeleteCopy(item, index, inputValue, setInputValue)
                  }
                >
                  <FontAwesomeIcon icon={faTrashCan} />
                </button>
              ) : (
                <></>
              )}
              {item}
            </div>
          );
        })}
      </div>
    </>
  );
}

export { SecondPage };
