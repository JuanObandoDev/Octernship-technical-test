import React from "react";
import { useContext } from "react";
import { inputContext } from "../../context/inputContext/inputContext";
import { FirstPage } from "../FirstPage/FirstPage";
import { SecondPage } from "../SecondPage/SecondPage";

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
