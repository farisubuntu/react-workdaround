const main_url=
'https://raw.githubusercontent.com/farisubuntu/urdu-course/main/data/';
// const main_url='https://raw.githubusercontent.com/farisubuntu/urdu-course/main/data/10/10.json';
// lesson raw : https://raw.githubusercontent.com/farisubuntu/urdu-course/main/data/10/1001.json
function getBaseUrl(){
 return main_url;
}

function getUrl(cat_no){
 return `${main_url}${cat_no}/${cat_no}.json`;
}



export {getUrl}
