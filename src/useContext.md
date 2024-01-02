# `useContext`:

You can apply `useContext` in three steps:

1.  **Create** a context. (You can call it `LevelContext`, since it’s for the heading level.)
 - you need to `export` it from a file so that your components can use it.
 

2.  **Use** that context from the component that needs the data. (`Heading` will use `LevelContext`.)




3.  **Provide** that context from the component that specifies the data. (`Section` will provide `LevelContext`.)





> Context lets a parent—even a distant one!—provide some data to the entire tree inside of it.


