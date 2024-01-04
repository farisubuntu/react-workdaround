import "./App.css";
import MyContext from "./MyContext";
import { useContext } from "react";
import ContextProvider from "./ContextProvider";


function App() {
  let contValue = useContext(MyContext);

  return (
    <>
      <ContextProvider>
        {contValue}
      </ContextProvider>
    </>
  );
}

export default App;
