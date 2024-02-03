import { useState } from "react";
import { ItemList } from "./ItemList";

const RestaurantCategory =(({data ,showItems ,setShowIndex})=>{
    // console.log(data);
    const handleClick=()=>{
      setShowIndex();
    }

    return(
        // accordian header
        <div className="accordian-container">
           <div className=" accordian ">
           <div onClick={handleClick} className="accordian-title" >
           <span>{data.title} ({data.categories.length})</span>
            <span>🔽</span>
           </div>
         {showItems && <ItemList items={data.categories}/>}
           </div>
          
        </div>
    )
})
export default RestaurantCategory