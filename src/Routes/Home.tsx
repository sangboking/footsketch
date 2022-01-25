import { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { fetchRecipe } from './Api';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export default function Home() {

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
  `;

  const FoodName = styled.div`
    font-size:20px;
    font-weight: 700;
    padding-top:15px;
    margin-bottom: 5px;
  `;

  const FoodTime = styled.div`
    
  `;
  
  interface IRecipe {
    id:string;
    name:string;
    cookingTime:number;
    picture:string;
  }

  const {data,isLoading} = useQuery<IRecipe[]>("Recipe",fetchRecipe);
  console.log(data);
  
  

  

  return (
    <Wrapper>
      <Title>맛있는요리</Title>
      {data?.map((food)=>{
        return (
          <Food key={food.id}>
            <Image src={food.picture}/>
            <FoodWrapper>
              <Link className='link' 
                to={`/detail/${food.id}`}><FoodName>{food.name}</FoodName></Link>
              <FoodTime>
                <img src="images/time_gray.png"/> {food.cookingTime}분 
              </FoodTime>
            </FoodWrapper>
          </Food>
        )
      })}
    </Wrapper>

  );
}
