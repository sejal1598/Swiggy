import React from "react";
import Header from "./Header";
// import Body from "./Body";
import { Outlet } from "react-router-dom";

// import FoodFireLogo from "../Images/Food Fire Logo.png";


// Restaurant card component: Image, name, cuisine

const AppLayout = () => {

  return (


    <div className="app">
      <Header />
     <Outlet/>

    </div>
  )
}

export default AppLayout


