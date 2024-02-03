import React, { useEffect, useState } from 'react'
import Shimmer from './Shimmer'
import { useParams } from 'react-router-dom';
import { MENU_PAGE } from '../Utils/constants';
import useRestaurantMenu from '../Utils/useRestaurantMenu';
import RestaurantCategory from './RestaurantCategory';

export const RestaurantMenu = () => {
  const [showIndex,setShowIndex]=useState()

  
  
  const {resId} = useParams()

  const resMenu = useRestaurantMenu(resId)

  
  // console.log(resMenu);

  
  if(resMenu===null){
    return <Shimmer/>
  }

  const {name,cuisines,costForTwoMessage}=resMenu?.cards[0]?.card?.card?.info
const{itemCards}=resMenu?.cards[2].groupedCard.cardGroupMap.REGULAR.cards[1].card.card;

// console.log(resMenu?.cards[2].groupedCard.cardGroupMap.REGULAR.cards);
const categories= resMenu?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c)=>c.card?.["card"]?.["@type"] ==="type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory")
// console.log(categories);
  return (
    <div className='menu'>
     { console.log("sejal")};
    <h1>{name}</h1>  
    <p className='cuisen'>{cuisines.join(",")} - {costForTwoMessage}</p>                                    
      <ul>
        {categories.map((category , index)=>
        <RestaurantCategory
         data= {category?.card?.card} 
          showItems={index === showIndex ?true:false}
          setShowIndex ={()=>setShowIndex(index)}
          />)}
        {/* {itemCards.map(item=><li key={item.id}>{item.card?.info?.name} - {"Rs."} {(item.card?.info?.price/100)}</li>)} */}
        {/* <li>{itemCards[0]?.card?.info?.name}</li> */}
        
      </ul>
    </div>
  )

}