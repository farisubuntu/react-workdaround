import { useState, createContext } from "react";

const MyContext = createContext(null);

function MyProvider({ children }) {

 const shared="shard data";
 return (
    <>
      <MyContext.Provider
        // value={{ app_name: "Noteoad", app_ver: "2.2", year: 2021 }}
        value={shared}
      >
        {children}
      </MyContext.Provider>
    </>
  );
}

export { MyContext, MyProvider };
