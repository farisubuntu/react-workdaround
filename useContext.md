## Working wiht `useContext`

**Basic Usage:**

```js
import React, { useContext } from "react";
// Create a context
const MyContext = React.createContext();
function MyComponent() {
// Use the useContext hook to access the context
  const contextValue = useContext(MyContext);
// Now, contextValue contains the value of MyContext
// ...
}
```

#### `useContext` Hook Uses:

Context can help you:

- Avoid Prop Drilling: Pass data from a parent component to deeply nested child components without intermediaries.
- Global State Management: Manage global state efficiently, especially when Redux or other state management libraries might be overkill.
- Theme Management: Share themes or styles across your application easily.


**Steps to use `useContext` hook:**

1. __Importing React and Creating a Context__

```js
import React, { createContext } from 'react';
// Create a context with a default value (can be null)
const MyContext = createContext(null);
export default MyContext;
```

2. __Creating a Context Provider ( a component that provides the context’s value to its descendants.)__

```js
import React from 'react';
import MyContext from './MyContext'; //import the MyContext
//  MyProvider component receives children as a prop. 
// + This prop represents the descendants of the provider component.
function MyProvider({ children }) { 
// Define the state or data you want to share
// +  it could be any data, including state variables or functions.
  const sharedData = 'This is some shared data'; 
  return (
// rap the children in MyContext.Provider and pass the 
// + shared data as the value prop.
    <MyContext.Provider value={sharedData}>
      {children}
    </MyContext.Provider>
  );
}
export default MyProvider;
```

3. __Consuming *Context* with `useContext`__

```js
import React, { useContext } from 'react';
import MyContext from './MyContext'; //import the MyContext that we created earlier.
function MyComponent() {
// Use the useContext hook to access the context
// +  This hook takes the context as an argument 
// + and returns its current value.

  const contextValue = useContext(MyContext);
  return (
// use the context value in this component as needed
    <div>
      <p>Context Value: {contextValue}</p>
    </div>
  );
}
export default MyComponent;

```