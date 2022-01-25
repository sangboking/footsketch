import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import { fetchRecipeDetail } from './Api';
import styled from 'styled-components';

const Wrapper = styled.div`
   width:40%;
   height: 150vh;
   margin:0 auto;
`;

const Image = styled.img`
  width:100%;
  height:30vh;
`;

const FoodName = styled.h1`
  font-size: 30px;
  font-weight: 700;
  padding:20px 20px;
  margin-bottom: 5px;
`;

const FoodDescription = styled.div`
  font-size:15px;
  font-weight: 400;
  padding:10px 20px;
  color:gray;
  margin-bottom: 20px;
`;

const FoodInfo = styled.div`
  display: flex;
  justify-content: space-around;
  border-bottom: 1px solid lightgray;
  border-top: 1px solid lightgray;
  padding:15px 15px;
`;

const FoodTime = styled.div`

`;

const FoodServing = styled.div`

`;

const FoodKcal = styled.div`

`;



interface Params {
  id?: string
}

interface IRecipe {
  id:string;
  name:string;
  cookingTime:number;
  picture:string;
  servings:number;
  ingredients:string[];
  spices:string[];
  description:string;
  cookingSteps:string[];
  kcal:number;
}

export default function Detail() {
  const {id}:Params = useParams();

  

  const {data,isLoading} = useQuery<IRecipe>("RecipeDetail",()=>fetchRecipeDetail(id as any));

  console.log(data);
  return (
    <Wrapper>
      <Image src={data?.picture}/>
      <FoodName>{data?.name}</FoodName>
      <FoodDescription>{data?.description}</FoodDescription>
      <FoodInfo>
        <FoodTime><img src="/images/time.png"></img> {data?.cookingTime}분</FoodTime>
        <FoodServing><img src="/images/serving.png"></img> {data?.servings}인분</FoodServing>
        <FoodKcal><img src="/images/kcal.png"/> {data?.kcal}kcal</FoodKcal>
      </FoodInfo>
    </Wrapper>
  );
}
