import { useState } from "react";
import MyConext from "./MyContext";

function ContextProvider({ children }) {
//  const [id,setId] = useState(0);

const shared=500;
  return (
  <>
  <MyConext.Provider value={shared}>
    {children}
  </MyConext.Provider>;
  </>
  )
}
export default ContextProvider;
