import React from "react";
import styles from "../styles/SecondPage.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { useFindCopy } from "./hooks/useFindCopy";
import { useDeleteCopy } from "./hooks/useDeleteCopy";
import { useValidate } from "./hooks/useValidate";

function SecondPage({ value, setValue }) {
  const [valueOriginal, setValueOriginal] = useState(value);

  return (
    <>
      {useValidate(value) ? (
        <header className={styles.success}>
          <p>
            Success, all duplicate characters was removed <br></br> string
            before: <span className={styles.originStr}>{valueOriginal}</span>,
            string after: <span className={styles.resultStr}>{value}</span>
          </p>
        </header>
      ) : (
        <></>
      )}
      <div className={styles.main}>
        {value.split("").map((item, index) => {
          return (
            <div className={styles.card} id={index} key={index}>
              {useFindCopy(item, index, value) ? (
                <button
                  className={styles.delete}
                  onClick={() => useDeleteCopy(item, index, value, setValue)}
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
