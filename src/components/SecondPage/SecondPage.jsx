import React, { useContext, useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";

import { UseFindCopy } from "../../hooks/useFindCopy/useFindCopy";
import { UseDeleteCopy } from "../../hooks/useDeleteCopy/useDeleteCopy";
import { UseValidate } from "../../hooks/useValidate/useValidate";

import { inputContext } from "../../context/inputContext/inputContext";

import styles from "../../styles/SecondPage.module.css";

export function SecondPage() {
  const { inputValue, setInputValue } = useContext(inputContext);
  const [valueOriginal, setValueOriginal] = useState(inputValue);

  const itemComponent = (item, index) => {
    return (
      <div className={styles.card} id={index} key={index}>
        {UseFindCopy(item, index, inputValue) ? (
          <button
            className={styles.delete}
            onClick={() =>
              UseDeleteCopy(item, index, inputValue, setInputValue)
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
  };

  return (
    <>
      {UseValidate(inputValue) ? (
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
        {inputValue.split("").map(itemComponent)}
      </div>
    </>
  );
}
