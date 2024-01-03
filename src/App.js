import { useState, useRef, useEffect } from "react";
import "./App.css";

function EffectsDemoEffectOnce() {
  const [title, setTitle] = useState("default title");
  const titleRef = useRef();
  useEffect(() => {
    console.log("useEffect title");
    document.title = title;
  });
  useEffect(() => {
    console.log("useEffect local storage");
    const persistedTitle = localStorage.getItem("title");
    setTitle(persistedTitle || []);
  }, []);
  console.log("render");
  const handleClick = () => setTitle(titleRef.current.value);
  return (
    <div>
      <input ref={titleRef} />
      <button onClick={handleClick}>change title</button>
    </div>
  );
}

export default function App() {
  return (
    <>
      <h3>Hello</h3>
      <hr />
      <EffectsDemoEffectOnce />
      
    </>
  );
}
