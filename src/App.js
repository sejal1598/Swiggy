import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { BrowserRouter, createBrowserRouter, Outlet, Route, RouterProvider, Routes } from "react-router-dom";

import { About } from './components/About'
import { Contact } from "./components/Contact";
import { Error } from "./components/Error";
import { RestaurantMenu } from "./components/RestaurantMenu";

// import FoodFireLogo from "../Images/Food Fire Logo.png";


// Restaurant card component: Image, name, cuisine

const AppLayout = () => {

  return (

    <BrowserRouter>
      <div className="app">
        <Header />
     
        <Routes>
          <Route path="/" element={<Body />} />
          <Route path="/about" element={<About />} />
           <Route path="/contact" element={<Contact />} />
          
            <Route path="/restaurantmenu/:id" element={<RestaurantMenu />} />
           <Route path="/*" element={<Error />} />
           
          </Routes>
      </div>
    </BrowserRouter>
  
//     <div className="app">
//       <Header />
//       <Outlet />

//     </div>
//   )
// }


// const appRouter = createBrowserRouter([
//   {
//     path: "/",
//     element: <AppLayout />,
//     children: [
//       {
//         path:"/",
//         element:<Body/>
//       } ,
//       {
//         path:"/about",
//         element:<About/>
//       } ,
//       {
//         path:"/contact",
//         element:<Contact/>
//       },
//       {
//         path:"/restaurants/:resId",
//         element:<RestaurantMenu/>
//       }

//     ],
//     errorElement:<Error/>
//   }


// ]
)}


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />)
export default AppLayout

