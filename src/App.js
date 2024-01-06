import "./App.css";
import { useContext } from "react";
import { StoreProvider } from "./store";

function App() {
  const store=useContext(StoreProvider);

  return (
    <div className="App">
        <h3>Sharing</h3>
        
    </div>
  );
}

export default App;
