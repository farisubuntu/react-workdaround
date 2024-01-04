import { useState } from "react";
import MyConext from "./MyContext";

function ContextProvider({ children }) {
 const [id,setId] = useState(0);
  return 
  <>
  <MyConext.Provider value={id}>
    {children}
  </MyConext.Provider>;
  </>
}
export default ContextProvider;
