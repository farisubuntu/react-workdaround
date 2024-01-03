## `useEffect`/react notes:



- A couple of key points to note before we get started:

    - Functions defined in the body of your function component get recreated on every _render cycle_. This has an impact(مؤثر) if you use it inside of your effect. There are strategies to deal with it (for example, **hoist** them outside of the component, define them inside of the effect, use `useCallback`)
    - It is important to understand basic JavaScript concepts such as stale closures, otherwise, you might have trouble tackling problems with outdated props or state values inside of your effect
    - You should not ignore suggestions from the React Hooks ESLint plugin
    - Do not mimic(تقلد) the lifecycle methods of class-based components. This way of thinking does more harm than good. Instead, think more about data flow and state associated with effects because you run effects based on state changes across render cycles

> For Interactive react lifecycle interactive diagram see [] (https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/)

 
#### The control flow of effects. The following steps are carried out when executing an effect:

-   **Initial render/mounting**: When a functional component that contains a `useEffect` Hook is initially rendered, the code inside the `useEffect` block runs after the initial render of the component. This is similar to `componentDidMount` class components
-   **Subsequent renders:** You can pass a dependency array as the second argument to the `useEffect` Hook. This array contains variables or values that the effect depends on. Any change in these variables will re-render the component. If no dependency array is given, the effect will run on every render
-   **Cleanup function**: You can also run an optional cleanup function inside the effect. It is used to clean up any resources or subscriptions created by the effect when the component is unmounted or when the dependencies change
-   **Unmounting**: If a cleanup function is present, it is run and then the component is unmounted from the DOM


The signature of the useEffect Hook looks like this:

```jsx
useEffect(
    () => {
        // execute side effect
    },
    // optional dependency array
    [
        // 0 or more entries
    ] 
)
```



Because the second argument is optional, the following execution is perfectly fine:

```jsx
useEffect(() => { 
    // execute side effect
})
```

**Example: The user can change the document title with an input field:
**

```js
import React, { useState, useRef, useEffect } from "react";
function EffectsDemoNoDependency() {
  const [title, setTitle] = useState("default title");
  const titleRef = useRef();
  useEffect(() => {
    console.log("useEffect");
    document.title = title;
  });
  const handleClick = () => setTitle(titleRef.current.value);
  console.log("render");
  return (
    <div>
      <input ref={titleRef} />
      <button onClick={handleClick}>change title</button>
    </div>
  );
}
```
