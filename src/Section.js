<<<<<<< HEAD
import { useContext } from "react";
import { LevelContext } from "./LevelContext";


function Section({children }) {
 const level= useContext(LevelContext);
  return (
    <section className="section">
      <LevelContext.Provider value={level}>
      {children}
      </LevelContext.Provider>
    </section>
  );
=======
import { LevelContext } from "./LevelContext";

function Section({level, children }) {


  return (
   <section className="section">
    <LevelContext.Provider value={level}>
     {children}
    </LevelContext.Provider>
   </section>
 );
>>>>>>> context-2
}

export default Section;
