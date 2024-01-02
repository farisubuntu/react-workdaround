import { LevelContext } from "./LevelContext";

function Section({level, children }) {


  return (
   <section className="section">
    <LevelContext.Provider value={level}>
     {children}
    </LevelContext.Provider>
   </section>
 );
}


export default Section;
