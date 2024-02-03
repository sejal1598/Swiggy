import React, { useEffect, useState } from "react";
import Header from "./Header";
// import Body from "./Body";
import { Outlet } from "react-router-dom";
import userContext from "../Utils/UserContext";

// import FoodFireLogo from "../Images/Food Fire Logo.png";


// Restaurant card component: Image, name, cuisine

const AppLayout = () => {
  const [userName,setUserName]=useState()


  //usecontext hhok
  useEffect(()=>{
    const data ={
      name:"sejal Singh"
    }
    setUserName(data.name)
  },[])

  return (


    <div className="app">
     <userContext.Provider value={{loggedInUser:userName}}>
      <Header />
      </userContext.Provider>
     <Outlet/>
  

    </div>
  )
}

export default AppLayout


