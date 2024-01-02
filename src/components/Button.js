import { useContext } from "react";
import { ThemeContext } from "../App";

// useContext() always looks for the closest provider
//+ above the component that calls it ex. (App). It searches
//+ upwards and does not consider providers in the
//+ component from which you’re calling useContext().
function Button({ children }) {
 
 const theme = useContext(ThemeContext);
 const className = 'button-' + theme;
 return (
   <button className={className}>
     {children}
   </button>
 );
}
export default Button;