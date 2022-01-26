# footsketch Recipe

⬇아래 Demo는 netify로 배포하였습니다.

[Recipe Demo 이동](https://loving-kalam-7ec4cf.netlify.app/)

### skill

React, TypeScript

### css,library

styled-components, styled-reset, react-query, react-router-dom

## API fetch

API는 Api.ts 파일에 함수를 만들어 사용하였습니다. 만든 함수는
react-query 라이브러리를 사용하여 API를 호출하였습니다.

```js
function fetchRecipe(){
  return fetch(`https://asia-northeast1-sharexpere-prod.cloudfunctions.net/recipe`)
  .then(response=>response.json();
  .catch(error=>window.alert(error));
)};
const {data,isLoading} = useQuery<IRecipe[]>("Recipe",fetchRecipe);
```

react-query는 위와같은 형태로 사용할수 있습니다.
만들어놓은 fetchRecipe 함수를 "Recipe" 라는 고유 키값을 지정하여서
useQuery를 사용하면 data,와 isLoading 값을 얻을수 있습니다.

data에는 불러온 API 데이터들이 담기고, isLoading은 API 호출 성공,
미성공 값에대한 boolean 값이 담기게 됩니다.

## Home Section

1번,3번 과제인 Recipe List 입니다.
받아온 API data를 ㄱ,ㄴ,ㄷ 순으로 정렬하기 위해 sort()함수를 사용하였습니다.

```js
const sortData = data?.sort(function (a, b) {
  return a.name < b.name ? -1 : a.name > b.name ? 1 : 0;
});
```

배열안의 객체의 name값을 정렬하기 위해 위와같은 형태로 정렬하였습니다.

react-query로 얻어온 isLoading 값을 loading 상황일때 loader.gif 라는 사진을
사용하였습니다.

ㄱ,ㄴ,ㄷ순으로 정렬된 API 데이터를 category 분류하기 위해 filter() 함수를
사용하여 한국,일본 음식으로 재 정렬 하였습니다.

그후 map()함수를 통해 API 데이터를 순차적으로 출력하였습니다.

## Details section

react-router 의 useParms()를 통해 API 의 id 값을 불러와서
각 음식의 API를 호출하여 구현하였습니다.

Home section과 동일하게 react-query를 사용하여 API 호출을 하였습니다.

```js
function fetchRecipeDetail(id:string){
  return fetch(`https://asia-northeast1-sharexpere-prod.cloudfunctions.net/recipe/${id}`)
  .then(response=>response.json();
  .catch(error=>window.alert(error));
)};
const {data,isLoading} = useQuery<IRecipe>("RecipeDetail",()=>fetchRecipeDetail(id as any));
```

받아온 API 데이터를 통해 2번째 과제를 완성하였습니다.
