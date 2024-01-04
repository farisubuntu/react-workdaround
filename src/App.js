import "./App.css";
import { useContext } from "react";
import { MyContext, MyProvider } from "./MyContext";

function App() {
  const mycontext = useContext(MyContext);
  return (
    <>
      <MyProvider>
        <h2>My parent is the provider was</h2>
        <div className="card">
          <div className="badge">
            {mycontext.shared}
          </div>
        </div>
      </MyProvider>
    </>
  );
}
export default App;
