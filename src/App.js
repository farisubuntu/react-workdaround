import "./App.css";
import { useState, useEffect } from "react";
import Category from "./Category.js";

function Page() {
  const [currCatNum, setCurrCatNum] = useState(1);
  return (
    <>
      <div className="top-buttons">
        <button type="button" class="btn btn-success">
          السابق
        </button>
        <button type="button" class="btn btn-success">
          التالي
        </button>
      </div>
      <Category cat_no={currCatNum} />
    </>
  );
}

function App() {
  return <Page />;
}
export default App;
