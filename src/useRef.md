# useRef

- The `useRef` Hook allows you to persist values between renders.
- It can be used to store a **mutable** value that does not cause a re-render when updated.
- It can be used to access a **DOM** element directly.

Example 1: Use `useRef` to track application renders:

```jsx
import { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom/client";

function App() {
  const [inputValue, setInputValue] = useState("");
  const count = useRef(0);

  useEffect(() => {
    count.current = count.current + 1;
  });

  return (
    <>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <h1>Render Count: {count.current}</h1>
    </>
  );
}

```
**Dont read or write a `ref` during rendering**

```js
function MyComponent() {
  // ...
  // 🚩 Don't write a ref during rendering
  myRef.current = 123;
  // ...
  // 🚩 Don't read a ref during rendering
  return <h1>{myOtherRef.current}</h1>;
}
```

__You can read or write refs from event handlers or effects instead__

```js
function MyComponent() {
  // ...
  useEffect(() => {
    // ✅ You can read or write refs in effects
    myRef.current = 123;
  });
  // ...
  function handleClick() {
    // ✅ You can read or write refs in event handlers
    doSomething(myOtherRef.current);
  }
  // ...
}
```

### Manipulating the DOM with a ref:

```js

import { useRef } from 'react';
// first, declare it with initial value
function MyComponent() {
  const inputRef = useRef(null);
  // ...
  
  // Then pass your ref object as the ref attribute to the JSX of the DOM node you want to manipulate:
  return (
    <>
    <input ref={inputRef} />

    </>
  )
  //...

// React will set the current property of your ref object to that DOM node. 
//+ Now you can access the <input>’s DOM node and call methods like focus():

  function handleClick() {
    inputRef.current.focus();
  }

```