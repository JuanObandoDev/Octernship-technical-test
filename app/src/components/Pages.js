import React from "react";
import { useContext } from "react";
import { inputContext } from "../context/inputContext";
import { FirstPage } from "./FirstPage";
import { SecondPage } from "./SecondPage";

export function Pages() {
  const { valid } = useContext(inputContext);
  return (
    <>
      {valid ? (
        <>
          <SecondPage />
        </>
      ) : (
        <>
          <FirstPage />
        </>
      )}
    </>
  );
}
