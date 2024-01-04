import "./Card.css";
import { useContext } from "react";
import { APP_VERSION } from "./AppVersion";



function Card() {
  const av=useContext(APP_VERSION);
  return (
    <div className="card" style={{ width: "18rem" }}>
      <div className="card-body">
        <h5 className="card-title">App Info</h5>
        <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
        <p className="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
            <span className="badge badge-primary">{av}</span>
      </div>
    </div>
  );
}

export default Card;
