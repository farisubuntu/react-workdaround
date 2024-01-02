# `useContext`:

> Context lets a parent—even a distant one!—provide some data to the entire tree inside of it.

You can apply `useContext` in three steps:

1.  **Create** a context. (ex. called it `LevelContext` and put it inside seperate file such as `LevelContext.js`)

 - you need to `export` it from a file so that your components can use it
   ```js
   import { createContext } from 'react';
   export const LevelContext = createContext(1);
   ```


2.  **Use** that context from the component that needs the data. (_ex. child component that will use nearst parent provider_)

    ```js
    function Heading({ children }) {
    const level = useContext(LevelContext);
    // ...
    }
    ```


3.  **Provide** that context from the component that specifies the data. (ex. here `Section` will provide `LevelContext`.)

    ```js
    import { LevelContext } from './LevelContext.js';

    export default function Section({ level, children }) {
      return (
        <section className="section">
          <LevelContext.Provider value={level}>
            {children}
          </LevelContext.Provider>
        </section>
      );
    }
    ```

