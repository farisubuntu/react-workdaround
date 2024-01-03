import "./App.css";
import { useEffect, useRef, useState } from "react";
import { getUrl } from "./links.js";



function Category({ cat_no }) {
  const [catData, setCatData] = useState(null);
  const [isReady, setIsReady] = useState(false);
  const url = getUrl(cat_no);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setCatData(data);
        setIsReady(true);
        console.log(catData);
        console.log(isReady);
      });
  }, []);

  function getLessonsTitles() {
    const cat_id = catData.category.id;
    const lessons_titles = catData.lessons.map((l) => {
      return (
        <a key={l.id} className="card-link" href={getUrl(cat_no)}>
          {l.name}
        </a>
      );
    });
    return lessons_titles;
  }

  return (
    <div>
      {isReady && (
        <>
          <div className="card" style={{ width: "18rem" }}>
            <div className="card-body">
              <h5 className="card-title">
                {cat_no} - {catData.category.name}
              </h5>
              <h6 className="card-subtitle mb-2 text-muted">
                Category Subtitle
              </h6>
              <p className="card-text">
                نص مختصر لإعطاء فكرة عن الدرس ومحتاوياته بالإضافة للنقاط المهمة
              </p>
              <div className="lessons_links">{getLessonsTitles()}</div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

function App() {
  return (
    <div className="category-list">
      <Category cat_no="1" />
      <Category cat_no="2" />
      <Category cat_no="3" />
    </div>
  );
}

export default App;
