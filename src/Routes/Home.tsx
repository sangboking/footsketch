import { useQuery } from 'react-query';
import { fetchRecipe } from './Api';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Wrapper = styled.div`
   width:50%;
   height: 100vh;
   margin:0 auto;
  `;

  const Title = styled.h1`
   background-color: yellow;
   height: 25vh;
   display: flex;
   align-items:flex-end;
   padding:20px;
   font-size:50px;
   font-weight: 700;
  `;

  const Food = styled.div`
    width:100%;
    background-color: white;
    border-bottom: 1px solid lightgray;
    padding:20px 20px;
    display: flex;
    margin:0 auto;
  `;

  const Image = styled.img`
    width:100px;
    height:100px;
    border-radius: 15px;
    margin-right: 10px;
  `;

  const FoodWrapper = styled.div`
    display: flex;
    flex-direction: column;
    .link{
      color:black;
    }
  `;

  const FoodName = styled.div`
    font-size:20px;
    font-weight: 700;
    padding-top:15px;
    margin-bottom: 5px;
  `;

  const FoodTime = styled.div`
    
  `;

  const Category = styled.div`
    width:100%;
    background-color: lightgray;
    padding:10px 10px;
    font-size:20px;
    font-weight: 700;
  `;

  const Loader = styled.div`
    position: absolute;
    top:50%;
    left:50%;
    font-size: 30px;
  `;

  
  interface IRecipe {
    id:string;
    name:string;
    cookingTime:number;
    picture:string;
    category:string;
  }


export default function Home() {

  
  const {data,isLoading} = useQuery<IRecipe[]>("Recipe",fetchRecipe);
  const sortData = data?.sort(function(a,b){
    return a.name<b.name ? -1 : a.name > b.name ? 1:0;
  }); //받아온 data 이름 순으로 정렬
  
  
  return (
    <Wrapper>
      {
        isLoading?<Loader>로딩중입니다</Loader>:
        <>
          <Title>맛있는요리</Title>
          <Category>한국요리</Category>
          {sortData?.filter(a=>a.category==="korean").map((food)=>{
            return (
              <Food key={food.id}>
                <Image src={food.picture} alt='food'/>
                <FoodWrapper>
                  <Link className='link' 
                    to={`/detail/${food.id}`}><FoodName>{food.name}</FoodName></Link>
                  <FoodTime>
                    <img src="images/time_gray.png" alt="time"/> {food.cookingTime}분 
                  </FoodTime>
                </FoodWrapper>
              </Food>
            )
          })}

          <Category>일본요리</Category>
          {data?.filter(a=>a.category==="japanese").map((food)=>{
            return (
              <Food key={food.id}>
                <Image src={food.picture} alt='food'/>
                <FoodWrapper>
                  <Link className='link' 
                    to={`/detail/${food.id}`}><FoodName>{food.name}</FoodName></Link>
                  <FoodTime>
                    <img src="images/time_gray.png" alt="time"/> {food.cookingTime}분 
                  </FoodTime>
                </FoodWrapper>
              </Food>
            )
          })}
        </>
      }
    </Wrapper>

  );
}
