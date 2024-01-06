import "./App.css";
import { useState, useEffect, useContext } from "react";
import Category from "./Category.js";
import { categoriesNumbers, resolveCategoryUrl } from "./api.js";
import { CategoryContext } from "./CategoryContext.js";

function Page() {
  const [index, setIndex] = useState(0);
  const context = useContext(CategoryContext);
  const [cat_no, setCatNo] = useState(context);
  let [catName, setCatName] = useState("");
  // let [imgurl, setImageUrl] = useState("");

  useEffect(() => {
    let url = resolveCategoryUrl(cat_no);
    fetch(url)
      .then((res) => res.json())
      .then((data) => setCatName(data.category.name));
  });
  function handleNextClick() {
    setIndex(index + 1);
    setCatNo(categoriesNumbers[index + 1]);
  }
  function handlePrevClick() {
    setIndex(index - 1);
    setCatNo(categoriesNumbers[index - 1]);
  }

  return (
    <>
      <div className="top-buttons">
        <button
          onClick={handlePrevClick}
          type="button"
          className="btn btn-success"
        >
          السابق
        </button>
        <h2 className="cat-title bg-primary">{catName}</h2>
        <button
          onClick={handleNextClick}
          type="button"
          className="btn btn-success"
        >
          التالي
        </button>
      </div>

      <CategoryContext.Provider value={cat_no}>
        <div className="container">
          <div className="row">
            <div class="img-wrapper">
              <img
                src={`https://raw.githubusercontent.com/farisubuntu/vite-app1/main/src/assets/images/${cat_no}.jpeg`}
                className="card-img-top"
                alt="Not found"
              />
            </div>
          </div>

          <div className="row">
            <Category cat_no={cat_no} />
          </div>
        </div>
      </CategoryContext.Provider>
    </>
  );
}

function App() {
  return <Page />;
}
export default App;
