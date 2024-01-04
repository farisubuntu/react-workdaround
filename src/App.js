import "./App.css";
import React from "react";
import MyContext from "./MyContext";
import { useContext } from "react";
import ContextProvider from "./ContextProvider";


function App() {
  const contValue = useContext(MyContext);

  return (
    <>
      <ContextProvider>
        {contValue}
      </ContextProvider>
    </>
  );
}

export default App;
