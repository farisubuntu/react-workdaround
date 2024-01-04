import { useEffect, useState, useRef } from "react";
import "./App.css";
import _react_lifecycles from "./react-lifecycles.png";

function Badge() {
  const [count, setCount] = useState(0);
  const inputRef = useRef();

  useEffect(() => {
    console.log("useEffect .......");
  }, []);

  useEffect(()=>{
    inputRef.current.addEventListener('click',handleAlertClick)
    console.log('useEffect inputRef')
    

  },[])

  function handleChange(e) {
    const num = e.target.value.length;
    setCount(num);
  }
function handleAlertClick(e){
   e.target.style.backgroundColor='green'
}
  return (
    <>
      <div className="input-data">
        <label htmlFor="name">Count characters </label>
        <input
          className="form-control w-50 primary yellow"
          type="text"
          id="name"
          onChange={handleChange}
        />
      </div>
      <div className="center" ref={inputRef}>
        <div className="alert alert-success w-25 p-0 text-center my-3">
          {count}
        </div>
      </div>
    </>
  );
}
function App() {
  return (
    <>
      <div className="App">
        <Badge />
      </div>

      <hr />
      <img
        src={_react_lifecycles}
        className="img-fluid"
        alt="react lifecycles"
      />
    </>
  );
}

export default App;
