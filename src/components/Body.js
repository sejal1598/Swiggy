import { useEffect, useState } from "react";
// import restaurantList from "../Utils/mockData";
import RestaurantCard from "./ResturantCard";
// import { useEffect } from "react";
import restaurantList from "../Utils/mockData";
import { Link } from "react-router-dom";
import Shimmer from "./Shimmer";

const Body = () => {
  console.log("prakhar");

  const [resList, setResList] = useState([])
  const [searchText, setSearcText] = useState("")
  const [filteredRes ,setFilterRes] = useState([])

  useEffect(() => {
    fetchData();
  },[])

    // if (resList.length === 0) {
    //   return <h1>Loading....</h1>
    // }
  
  const fetchData = async () => {
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.87989326840672&lng=80.99263317883016&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();
    setResList(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants); 
    setFilterRes(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
  

    // console.log(json?.data?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    // const Data =json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
                  // setResList()
    // setFilterRes(json.data.cards[5].card.card.gridElements.infoWithStyle.restaurants)
    // console.log(data);
   
  }
  return resList.length === 0 ? (<Shimmer />) : (
    <div className="body">
      <div className="search">
        <div >
          <input type="
        text" value={searchText} onChange={(e)=>
          setSearcText(e.target.value)}/>
          <button onClick={()=>
          {
           const filteredRestaurant= resList.filter((res)=>
           res.info.name.toLowerCase().includes(searchText.toLowerCase()))
        
           setFilterRes(filteredRestaurant)
          }}>Search</button>

        
        </div>
        
        <button onClick={() => {
          const filterlist = resList.filter((res) => res.info.avgRating > 4.2)
          console.log(filterlist);
          setResList(filteredRes)
         
        }}>Top Rated Restuarant</button>
      </div>
      <div className="res-container">
        {
          filteredRes.map((restaurant) => (
            <Link key={restaurant?.info?.id} to={"/restaurants/" + restaurant?.info?.id}>
              <RestaurantCard resData={restaurant} />
            </Link>
          ))
         
          
        }
        {/* <RestaurantCard resData= {restaurantList[0]}/>
      <RestaurantCard resData= {restaurantList[1]}/> */}


        {/* //RestaurantCard */}
      </div>


    </div>
  )
}
export default Body;


























//immols use  // import RestaurantCard from './ResturantCard';
// import ResturantCard from './ResturantCard';

//   export default Body
// import React from 'react'

// export const Body = () => {
//   return (
//     <div>Body</div>
//   )
// }
// import React from 'react';
// import { useForm } from 'react-hook-form';


// function MyForm() {
//   // Step 1: Define initial form values and a submit function
//   const initialValues = {
//     name: '',
//     email: '',
//   };

//   const onSubmit = (formData) => {
//     // Step 7: Handle form submission here
//     console.log('Form submitted with data:', formData.name);

//   };

//   // Step 2: Call the useForm hook and pass initial values and submit function
//   const { register , handleSubmit } = useForm();

//   return (
//     <div>
//       <h1>Custom useForm Hook Example</h1>
//       <form onSubmit={handleSubmit (onSubmit)}>
//         {/* Step 3: Input fields with onChange event handlers */}
//         <label>
//           Name:
//           <input
//             type="text"
//             name="name"
//             {...register("name")}
//             // Calls handleChange to update form state
//           />
//         </label>
//         <br />
//         <label>
//           Email:
//           <input
//             type="email"
//             name="email"
//           {...register("email")} // Calls handleChange to update form state
//           />
//         </label>
//         <br />
//         <button type="submit">Submit</button>
//       </form>
//     </div>
//   );
// }

// export default MyForm;
// import axios from 'axios';
// import React from 'react';
// import { useForm } from 'react-hook-form';
// import { useQuery, useQueryClient } from 'react-query';


// import { useQuery, useQueryClient } from 'react-query';
// import axios from 'axios';
// import { useForm } from 'react-hook-form';

// function NumberData() {

//   const { register, handleSubmit } = useForm();
//   const queryClient = useQueryClient();

//   const fetchFirstSelectData = (number) => {
//     return axios.get(`https://api.example.com/first-api?number=${number}`);
//   };

//   const fetchSecondSelectData = (number) => {
//     return axios.get(`https://api.example.com/second-api?number=${number}`);
//   };

//   const onSubmit = (data) => {
//     const number = data.number;

//     queryClient.invalidateQueries('firstSelectData'); // Invalidate the query for the first select
//     queryClient.invalidateQueries('secondSelectData'); // Invalidate the query for the second select

//     // Fetch data for the first select box
//     queryClient.fetchQuery('firstSelectData', () => fetchFirstSelectData(number));

//     // Fetch data for the second select box
//     queryClient.fetchQuery('secondSelectData', () => fetchSecondSelectData(number));
//   };

//   return (
//     <div>
//       <h1>Number Data</h1>
//       <form onSubmit={handleSubmit(onSubmit)}>
//         <input {...register('number')} type="text" placeholder="Enter a number" />
//         <button type="submit">Fetch Data</button>
//       </form>

//       <SelectBox queryKey="firstSelectData" placeholder="Select Option 1" />
//       <SelectBox queryKey="secondSelectData" placeholder="Select Option 2" />
//     </div>
//   );
// }

// function SelectBox({ queryKey, placeholder }) {
//   const { data, isLoading, isError } = useQuery(queryKey, () => {
//     return fetchSecondSelectData(number); // Replace with the appropriate function for the second API
//   });

//   if (isLoading) {
//     return <div>Loading...</div>;
//   }

//   if (isError) {
//     return <div>Error fetching data</div>;
//   }

//   const options = data.data; // Adjust this based on your API response

//   return (
//     <select>
//       <option value="">{placeholder}</option>
//       {options.map((option) => (
//         <option key={option.id} value={option.value}>
//           {option.label}
//         </option>
//       ))}
//     </select>
//   );
// }

// export default NumberData;
