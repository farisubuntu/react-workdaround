import { forwardRef, useRef } from "react";

const MyInput = forwardRef((props, ref) => {
  return <input {...props} ref={ref} />;
});


// Form Component

function Form() {
  const inputRef = useRef(null);

  function handleClick() {
    inputRef.current.focus();
  }

  return (
    <>
      <MyInput ref={inputRef} />
      <button onClick={handleClick}>Focus the input</button>
    </>
  );
}

function App() {
  return (
    <>
      <p className="small">
        Example 4 of 4: Exposing a ref to your own component Sometimes, you may
        want to let the parent component manipulate the DOM inside of your
        component. For example, maybe you’re writing a MyInput component, but
        you want the parent to be able to focus the input (which the parent has
        no access to). You can use a combination of useRef to hold the input and
        forwardRef to expose it to the parent component. Read a detailed
        walkthrough here.
      </p>
      <hr />
          <Form />


    </>
  );
}

export default App;
