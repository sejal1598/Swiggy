import React from 'react'
import { CDN_URL } from '../Utils/constants';

export const ItemList = ({items }) => {
    console.log(items);
  return (
    <div>
       
         {items.map((itemSet, index) => (
        <div key={index} className='item-list'>
          {itemSet.itemCards.map((itemCard, cardIndex) => (
            <div key={itemCard.card.info.id} className='itemcard' >
                 
                 <div>
              <div className='item-list-span'> <span>{itemCard.card.info.name}</span>
              <span> -Rs.{itemCard.card.info?itemCard.card.info.price/100:itemCard.card.info.defaultPrice} </span>
              </div>
             <p className='description'>{itemCard.card.info.description}</p>
             </div>
             <div>
                <div className='btn-container'>
                <button className='list-btn'>Add +</button>
                </div>
             <img className='img-width' src={CDN_URL+itemCard.card.info.imageId}/>
         
                </div>
            </div>
          ))}
        </div>
      ))}
      
        
    </div>
  )
}
