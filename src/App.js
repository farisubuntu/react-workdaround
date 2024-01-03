import { useState, useRef, useEffect } from "react";
import "./App.css";


function Fetcher() {
 const [todos,setTodos] = useState(null);

 useEffect(()=>{
  fetch("https://jsonplaceholder.typicode.com/todos/")
  .then((res) => res.json())
  .then((data) => setTodos(data))
  console.log(todos);
 },[]) 

 
 return(
  <>
  <h2>DATA</h2>
  </>
 )
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
