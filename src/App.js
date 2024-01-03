import { useState, useRef, useEffect } from "react";
import "./App.css";

function Fetcher() {
  const [todos, setTodos] = useState([]);
  
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((res) => res.json())
      .then((data) => setTodos(data));
      
  }, );

  return (
    <>
      <h2>DATA</h2>
      <div>nothing</div>
      <div></div>
    </>
  );
}

export default function App() {
  return (
    <>
      <h3>Hello</h3>
      <hr />
      <Fetcher />
    </>
  );
}
