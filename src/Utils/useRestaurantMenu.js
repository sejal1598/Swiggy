import React, { useEffect, useState } from 'react'
import { MENU_PAGE } from './constants';

const useRestaurantMenu = (resId) => {
    const [resMenu,setResMunu] = useState(null)

    useEffect(() => {
        fetchMenu();
      }, [])

      
      const fetchMenu = async () => {
        const data = await fetch(`${MENU_PAGE}${resId}`);
        const json = await data.json()
        setResMunu(json?.data)
        // console.log(json.data);
        console.log(json?.data?.cards[0]?.card?.card?.info?.name);
      }
  return resMenu;
}

export default useRestaurantMenu