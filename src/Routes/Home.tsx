import { useQuery } from 'react-query';
import { fetchRecipe } from './Api';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Wrapper = styled.div`
   width:50rem;
   height: 100vh;
   margin:0 auto;
   @media screen and (max-width:820px) {
     width:35rem;
   }
   @media screen and (max-width:630px) {
     width:25rem;
   }
  `;

  const Title = styled.h1`
   background-color: yellow;
   height: 25vh;
   display: flex;
   align-items:flex-end;
   padding:20px;
   font-size:3rem;
   font-weight: 700;
   @media screen and (max-width:820px) {
     font-size:2.5rem
   }
   @media screen and (max-width:630px) {
     font-size: 2rem;
   }
  `;

  const Food = styled.div`
    width:100%;
    background-color: white;
    border-bottom: 1px solid lightgray;
    padding-top: 20px;
    padding-bottom: 20px;
    display: flex;
    margin:0 auto;
  `;

  const Image = styled.img`
    width:8rem;
    height:8rem;
    border-radius: 15px;
    margin-right: 10px;
    transition: .3s;
    &:hover{
      width:8.5rem;
      height:8.5rem;
    }
  `;

  const FoodWrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 1rem;
    .link{
      color:black;
      text-decoration: none;
    }
  `;

  const FoodName = styled.div`
    font-size:1.3rem;
    font-weight: 700;
    padding-top:20px;
    margin-bottom: 2rem;
    @media screen and (max-width:820px) {
     font-size:1rem;
   }
   @media screen and (max-width:630px) {
     font-size:0.9rem;
   }
  `;

  const FoodTime = styled.div`
    display: flex;
    color:gray;
    &:first-child{
      margin-right: 20px;
    }
  `;

  const Image2 = styled.img`
    
  `;

  const Time = styled.div`
    margin-right: 30px;
  `;

  const Category = styled.div`
    width:100%;
    background-color: lightgray;
    padding:1rem 0;
    font-size:1.7rem;
    font-weight: 700;
    h1{
      margin-left: 1.5rem;
    }
    @media screen and (max-width:820px) {
     font-size:1.5rem
   }
   @media screen and (max-width:630px) {
     font-size: 1.3rem;
   }
  `;

  const Loader = styled.div`
    position:fixed;
    top:0; left:0;
    height:100%;
    width:100%;
    z-index: 10000;
    background: #fff;
    display:flex;
    align-items: center;
    justify-content: center;
    overflow:hidden;
    font-size:3rem;
  `;

  
  interface IRecipe {
    id:string;
    name:string;
    cookingTime:number;
    picture:string;
    category:string;
  }


export default function Home() {

  
  const {data,isLoading} = useQuery<IRecipe[]>("Recipe",fetchRecipe); //react-query ??????????????? ??????
  
  const sortData = data?.sort(function(a,b){
    return a.name<b.name ? -1 : a.name > b.name ? 1:0;
  }); //????????? data ?????? ????????? ??????

  
  const arr = ["5,430","3,234","2,340","1,203","1,003","940","3,203"] //????????? ???????????? Api??? ????????? ???????????? ?????????????????????.
  
  
  return (
    <Wrapper>
      {
        isLoading?<Loader><img src="images/loader.gif" alt="loader"/></Loader>:
        <>
          <Title>???????????????</Title>
          <Category><h1>????????????</h1></Category>
          {sortData?.filter(a=>a.category==="korean").map((food,i)=>{
            return (
              <Food key={food.id}>
                <Link to={`/detail/${food.id}`}><Image src={food.picture} alt='food'/></Link>
                <FoodWrapper>
                  <Link className='link' 
                    to={`/detail/${food.id}`}><FoodName>{food.name}</FoodName></Link>
                  <FoodTime>
                    <Image2 src="images/time_gray.png" alt="time"></Image2><Time>{food.cookingTime}???</Time>
                    <Image2 src="images/eye.png" alt="eye"/>{arr[i]}
                  </FoodTime>
                </FoodWrapper>
              </Food>
            )
          })}

          <Category><h1>????????????</h1></Category>
          {data?.filter(a=>a.category==="japanese").map((food,i)=>{
            return (
              <Food key={food.id}>
                <Link to={`/detail/${food.id}`}><Image src={food.picture} alt='food'/></Link>
                <FoodWrapper>
                  <Link className='link' 
                    to={`/detail/${food.id}`}><FoodName>{food.name}</FoodName></Link>
                  <FoodTime>
                    <Image2 src="images/time_gray.png" alt="time"></Image2><Time>{food.cookingTime}???</Time>
                    <Image2 src="images/eye.png" alt="eye"/> {arr[i+4]}
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
