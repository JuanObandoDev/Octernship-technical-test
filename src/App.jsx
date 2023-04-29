import React from "react";

import { InputContextProvider } from "./context/inputContext/inputContext";
import { Header } from "./components/Header/Header";
import { Pages } from "./components/Pags/Pages";

import "./styles/App.css";

function App() {
  return (
    <InputContextProvider>
      <Header />
      <Pages />
    </InputContextProvider>
  );
}

export default App;
