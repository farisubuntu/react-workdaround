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
}

export default Section;
