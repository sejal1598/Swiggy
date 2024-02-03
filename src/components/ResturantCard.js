import { useContext } from "react";
import { CDN_URL } from "../Utils/constants";
import userContext from "../Utils/UserContext";

const   RestaurantCard =({resData})=>
{
  // const {resData}=props

  const {cloudinaryImageId,name,cuisines,
    costForTwoString,avgRating}= resData.info;
   
const {loggedInUser}=useContext(userContext)
  // console.log(resData.data)
  return(
    <div className="res-card" style={{backgroundColor: "lightgray"}}>
      <img  alt = "resimg"className = "img-width1" 
       src={CDN_URL + cloudinaryImageId}/>
      <h4>{name}</h4>
      <h5>{cuisines.join(', ')}</h5>
      <h5>{costForTwoString}</h5>
      <h5>{avgRating}stars</h5>
      <h5>{loggedInUser}</h5>
    </div>
  )
}

export const ResturantWithOpen = ((RestaurantCard)=>{
  return((props)=>{
    return(
      <div>
        <label className="isopen-res">isOpen</label>
        <RestaurantCard {...props}/>
      </div>
    )
  })
})
export default RestaurantCard