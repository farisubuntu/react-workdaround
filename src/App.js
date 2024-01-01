import { useEffect, useState } from "react";
import "./App.css";

function EffectUsage({cost}) {
  const [count, setCount] = useState(0);
  

  function minusCost() {
    cost = cost - 5;
  }

  useEffect(() => {
    //  count 1 second after initial render:
    setTimeout(() => setCount(count + 1), 1500);
  }, [cost]);

  return (
    <>
      <h1>I have rendered {count} times!</h1>

      <button onClick={()=>minusCost()}>add 1 to count</button>
    </>
  );
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello World - React</h1>
        <EffectUsage cost={500}/>
      </header>
    </div>
  );
}

export default App;
