# useEffect

The `useEffect` Hook allows you to perform **side effects** in your components **(fetching data, directly updating the DOM, and timers**)

syntax 


```jsx
useEffect(<function>, <dependency>)
```


**There are several ways to control when side effects run.** We should always include the second parameter which accepts an array. We can optionally pass dependencies to `useEffect` in this *array*.
1. No dependency passed:

```js
useEffect(() => {
  //Runs on every render
});
```

2. An empty array:

```js

useEffect(() => {
  //Runs only on the first render
}, []);
```

3. Props or state values:

```js
useEffect(() => {
  //Runs on the first render
  //And any time any dependency value changes
}, [prop, state]);
```

### Effect Cleanup

Some effects require cleanup to reduce memory leaks. *Timeouts, subscriptions, event listeners*, and other effects that are no longer needed should be disposed. We do this by including a **return function** at the end of the `useEffect` Hook.

