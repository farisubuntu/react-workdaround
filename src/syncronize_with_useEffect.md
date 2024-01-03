## Review

-   What Effects are
-   How Effects are different from events
-   How to declare an Effect in your component
-   How to skip re-running an Effect unnecessarily
-   Why Effects run twice in development and how to fix them

## Recap

> _Unlike events, Effects are caused by rendering itself rather than a particular interaction_/_event_.

**Two types of logic inside React components:**

   - **Rendering code**:  lives at the top level of your component. This is where you take the props and state, transform them, and return the JSX you want to see on the screen.
   - **Event handlers**: nested functions inside your components that do things rather than just calculate them. An event handler might update an input field, `submit` an `HTTP POST` request to buy a product

---


- Effects let you synchronize a component with some external system (third-party API, network, etc).
- wrap the _side effect_ with `useEffect` Will move it out of the rendering calculation (React will upate the screen first, then your Effect runs)
- 

**To Write an Effect :**
1. **Declare an Effect**
2. **Specify the Effect dependencies**
3. **Add cleanup if needed.**


---


-  By default, Effects run after every render (including the initial one).


---


-  React will skip the Effect if all of its dependencies have the same values as during the last render.


---


-  You can’t “choose” your dependencies. They are determined by the code inside the Effect.


---


-  Empty dependency array (`[]`) corresponds to the component “mounting”, i.e. being added to the screen.


---


-  In Strict Mode, React mounts components twice (in development only!) to stress-test your Effects.


---


-  If your Effect breaks because of remounting, you need to implement a cleanup function.


---


-  React will call your cleanup function before the Effect runs next time, and during the unmount.


---


