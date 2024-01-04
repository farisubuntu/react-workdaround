import { createContext } from "react";



const GlobalContext = createContext({

 darkMode: false,
 appTheme: "dark",
 appVersion:4.24
});


export default GlobalContext;