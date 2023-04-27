import "./styles/App.css";
import React from "react";
import { InputContextProvider } from "./context/inputContext";
import { Header } from "./components/Header";
import { Pages } from "./components/Pages";

function App() {
  return (
    <InputContextProvider>
      <Header />
      <Pages />
    </InputContextProvider>
  );
}

export default App;
