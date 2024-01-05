import "./App.css";
import { createContext, useContext } from "react";

const AppContext = createContext(null);

function ButtonGroup({ title }) {
  const appContext = useContext(AppContext);
  let buttons = Array(appContext);
  console.log(appContext, "and ", buttons);

  return;
  <div>
    {buttons.map((x) => {
      return <button>{title}</button>;
    })}
  </div>;
}

function App() {
  return (
    <>
      <AppContext.Provider value={4}>
        <ButtonGroup title="a button" />
      </AppContext.Provider>
    </>
  );
}
export default App;
