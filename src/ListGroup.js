import { useContext,useRef } from "react";
import BadgeContext from "./BadgeContext";


function ListItem({ special, children }) {
 const badge = useContext(BadgeContext);
 const isRed=useRef(false);

 if(badge || special > 200){
  isRed.current=true;
 }
  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      {children}
      <span className={`${isRed.current && 'red '} badge bg-primary rounded-pill`}>
       {!special ? badge : special}
       </span>
    </li>
  );
}

function ListGroup({ badge,children }) {
  return (
    <>
      <ul className="list-group">
       <BadgeContext.Provider value={badge}>
       {children}
       </BadgeContext.Provider>
       </ul>
    </>
  );
}

export {ListItem,ListGroup}
