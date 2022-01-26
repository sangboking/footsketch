export function fetchRecipe(){
  return fetch(`https://asia-northeast1-sharexpere-prod.cloudfunctions.net/recipe`)
  .then(response=>response.json()
  .catch(error=>window.alert(error))
)}

export function fetchRecipeDetail(id:string){
  return fetch(`https://asia-northeast1-sharexpere-prod.cloudfunctions.net/recipe/${id}`)
  .then(response=>response.json()
  .catch(error=>window.alert(error))
)}


//react-query에 사용할 API fetch 함수 보관파일