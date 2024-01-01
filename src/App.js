import { useRef } from "react";

export default function Form() {
  const inputRef = useRef(null);
  const commandRef = useRef(null);

  function handleClick() {
    inputRef.current.focus();
  }

function handleChangeColor(){
  commandRef.current.style.color="green";
  
}
  return (
    <>
      <input ref={inputRef} />
      <button onClick={handleClick}>Focus the input</button>
      <div className="card" style={{ width: "18rem" }}>
        <img
          src="https://images.unsplash.com/photo-1561154464-82e9adf32764?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
          className="card-img-top"
          alt="..."
        />
        <div ref={commandRef} className="card-body">
          <h5 className="card-title">Card title</h5>
          <h6 className="card-subtitle mb-2 text-muted ">Card subtitle</h6>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          b5
        </div>
        <button onClick={handleChangeColor}>Change color</button>
      </div>
    </>
  );
}

function App() {
  return <Form />;
}
