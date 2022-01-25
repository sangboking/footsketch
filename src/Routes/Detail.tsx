import { useQuery } from 'react-query';
import { useParams,Link } from 'react-router-dom';
import { fetchRecipeDetail } from './Api';
import styled from 'styled-components';

const Wrapper = styled.div`
   width:40%;
   height: 150vh;
   margin:0 auto;
   position: relative;
`;

const Back = styled.img`
  position: absolute;
  top:15px;
  left:15px;
  cursor: pointer;
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

const FoodContent = styled.div`
  display: flex;
  flex-direction: column;
  padding:20px 20px;
`;

const Title = styled.h1`
  font-size:20px;
  font-weight: 700;
  margin-bottom: 20px;
`;

const Ingredients = styled.div`
  margin-bottom: 20px;
`;

const Ig = styled.div`
  display: flex;
  img{
    margin-right: 10px;
  }
`;

const CookStep = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;

const Box = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width:25px;
  height:25px;
  background-color: yellow;
  margin-bottom: 10px;
  font-weight: 700;
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
      <Link to="/"><Back src="/images/back@2x.png"></Back></Link>
      <Image src={data?.picture}/>
      <FoodName>{data?.name}</FoodName>
      <FoodDescription>{data?.description}</FoodDescription>
      <FoodInfo>
        <FoodTime><img src="/images/time.png"></img> {data?.cookingTime}분</FoodTime>
        <FoodServing><img src="/images/serving.png"></img> {data?.servings}인분</FoodServing>
        <FoodKcal><img src="/images/kcal.png"/> {data?.kcal}kcal</FoodKcal>
      </FoodInfo>
      <FoodContent>
        <Title>재료</Title>
        {
          data?.ingredients.map((a,i)=>{
            return(
              <Ingredients key={i}>
                <Ig>
                  <img src="/images/check_full.png"/>
                  {a}
                </Ig>
              </Ingredients>
            )
          })
        }
      </FoodContent>
      <FoodContent>
        <Title>양념장</Title>
        {
          data?.spices.map((a,i)=>{
            return(
              <Ingredients key={i}>
                <Ig>
                  <img src="/images/check_full.png"/>
                  {a}
                </Ig>
              </Ingredients>
            )
          })
        }
      </FoodContent>
      <FoodContent>
        <Title>만들어 봅시다!</Title>
        {
          data?.cookingSteps.map((a,i)=>{
            return(
              <CookStep key={i}>
                <Box>{i+1}</Box>
                {a}
              </CookStep>
            )
          })
        }
      </FoodContent>
    </Wrapper>
  );
}