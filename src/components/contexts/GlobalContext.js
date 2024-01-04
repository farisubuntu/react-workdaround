import { createContext } from "react";



const GlobalContext = createContext({

 darkMode: false,
 toggleMode: () => {darkMode: !darkMode},
 appVersion:4.24
});


export default GlobalContext;