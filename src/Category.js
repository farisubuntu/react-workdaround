import "./Category.css";
import { useContext, useEffect, useState } from "react";
import CategoryContext from "./CategoryContext";


function resolveLessonUrl(cat_no, num) {
  const baseurl = `https://raw.githubusercontent.com/farisubuntu/vite-app1/main/src/assets/data/${cat_no}`;
  return `${baseurl}/${cat_no}0${num}.json`;
}


function resolveCategoryUrl(cat_no){
  const baseurl = `https://raw.githubusercontent.com/farisubuntu/vite-app1/main/src/assets/data/${cat_no}`;
  return `${baseurl}/${cat_no}.json`
}

function Lesson({ index }) {
  const currentCat = useContext(CategoryContext);
  const [currnetLesson, setCurrentLesson] = useState({});
  let url = resolveLessonUrl(currentCat, index);
  

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setCurrentLesson(data.lesson));
  }, []);
  return (
    <>
      <div className="card">
        <div className="card-header">
        <span className="badge bg-primary larger">{currnetLesson.name}</span>  
          <span className="badge bg-secondary">{currnetLesson.id}</span>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            الإختبارات 
            <span className="badge bg-secondary"> {currnetLesson.countQuiz}</span>
          </li>
          <li className="list-group-item">
            الكلمات: 
            <span className="badge bg-secondary"> {currnetLesson.countWords}</span>
          </li>
          <li className="list-group-item">
            العبارات: 
            <span className="badge bg-secondary"> {currnetLesson.countPhrases}</span>
          </li>
        </ul>
      </div>
    </>
  );
}
function Category({ cat_no }) {
let imageUrl=`https://raw.githubusercontent.com/farisubuntu/vite-app1/main/src/assets/images/${cat_no}.jpeg`
let [catName,setCatName]=useState('');
let url= resolveCategoryUrl(cat_no);
useEffect(()=>{
  fetch(url)
  .then((res) => res.json())
  .then((data)=> setCatName(data.category.name))
},[])

  return (
    <>
      <CategoryContext.Provider value={cat_no}>
      <img src={imageUrl} className="card-img-top" alt={imageUrl} />
        
       <div className="card-wrapper">
        <Lesson index={1} />
        <Lesson index={2} />
        <Lesson index={3} />
        <Lesson index={4} />
        <Lesson index={5} />
        <Lesson index={6} />
    </div>
      </CategoryContext.Provider>
    </>
  );
}
export default Category;
