import "./App.css";
import { createContext, useContext } from "react";
import Form from "./components/Form";


export const ThemeContext=createContext(null);


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Passing Data into tree- Context</h1>
      </header>
      <hr />
      {/* To pass context to a Button, wrap it or one
       of its parent components into the
       corresponding context provider: */}
      <ThemeContext.Provider value="dark">
        <Form />
      </ThemeContext.Provider>
    </div>
  );
}

export default App;
