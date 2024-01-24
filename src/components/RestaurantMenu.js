import React, { useEffect, useState } from 'react'
import Shimmer from './Shimmer'
import { useParams } from 'react-router-dom';
import { MENU_PAGE } from '../Utils/constants';
import useRestaurantMenu from '../Utils/useRestaurantMenu';

export const RestaurantMenu = () => {
  console.log("hiii");
  
  
  const {resId} = useParams()

  const resMenu = useRestaurantMenu(resId)

  
  // console.log(resMenu);

  
  if(resMenu===null){
    return <Shimmer/>
  }

  const {name,cuisines,costForTwoMessage}=resMenu?.cards[0]?.card?.card?.info
const{itemCards}=resMenu?.cards[2].groupedCard.cardGroupMap.REGULAR.cards[1].card.card;
  return (
    <div className='menu'>
     { console.log("sejal")};
    <h1>{name}</h1>  
    <p>{cuisines.join(",")} - {costForTwoMessage}</p>                                    
      <h2>Menu</h2>
      <ul>
        {itemCards.map(item=><li key={item.id}>{item.card?.info?.name} - {"Rs."} {(item.card?.info?.price/100)}</li>)}
        {/* <li>{itemCards[0]?.card?.info?.name}</li> */}
        
      </ul>
    </div>
  )

}