export function fetchRecipe(){
  return fetch(`https://asia-northeast1-sharexpere-prod.cloudfunctions.net/recipe`)
  .then(response=>response.json()
)}

export function fetchRecipeDetail(id:string){
  return fetch(`https://asia-northeast1-sharexpere-prod.cloudfunctions.net/recipe/${id}`)
  .then(response=>response.json()
)}
