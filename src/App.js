import "./App.css";
import { useContext } from "react";
import Card from "./Card.jsx";
import {APP_VERSION} from "./AppVersion";




function Rect({l,w}){
    const app_ver=useContext(APP_VERSION);

  return(
   <>
    <div className="alert alert-warning" role="aleert">
      <span className="badge bg-secondary l">{l}</span>
      <span className="badge bg-secondary w">X</span>
      <span className="badge bg-secondary w"> {w}</span>
      <span className="badge bg-secondary w"> = </span>
      <span className="badge bg-secondary result">{l * w}</span>
      <blockquote>{app_ver}</blockquote>
    </div>
   </> 
  )

}





function App() {
  return(
  <>
  <h3>useContext</h3>
  <hr />
    <Card />


  
  </>
  )
}
export default App; 
