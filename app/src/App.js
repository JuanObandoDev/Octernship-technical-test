import "./styles/App.css";
import React from "react";
import { FirstPage } from "./components/FirstPage";
import { SecondPage } from "./components/SecondPage";
import { useState } from "react";
import { useValidateInput } from "./components/hooks/useValidateInput";

function App() {
  const [value, setValue] = useState("");
  const [valid, setValid] = useState(false);

  const validateInput = () => {
    if (useValidateInput(value)) {
      setValid(true);
    } else {
      alert("provide a non-empty value");
    }
  };

  return (
    <>
      <div className="pagesBtns">
        <button
          onClick={() => {
            setValid(false);
            setValue("");
          }}
          className={`firstPage ${valid ? "" : "active"}`}
          disabled={!valid}
        >
          First Page
        </button>
        <button
          onClick={validateInput}
          className={`secondPage ${valid ? "active" : ""}`}
          disabled={valid}
        >
          Second Page
        </button>
      </div>
      {valid ? (
        <>
          <SecondPage value={value} setValue={setValue} />
        </>
      ) : (
        <>
          <FirstPage setValid={setValid} value={value} setValue={setValue} />
        </>
      )}
    </>
  );
}

export default App;
