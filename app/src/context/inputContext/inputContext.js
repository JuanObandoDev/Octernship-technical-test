import React from "react";
import { createContext } from "react";
import { useState } from "react";

export const inputContext = createContext();

export function InputContextProvider({ children }) {
  const [inputValue, setInputValue] = useState("");
  const [valid, setValid] = useState(false);
  return (
    <inputContext.Provider
      value={{
        setValid,
        inputValue,
        setInputValue,
        valid,
      }}
    >
      {children}
    </inputContext.Provider>
  );
}
