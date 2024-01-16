 import { useEffect, useState } from "react";
import {CDN_LOGO} from "../Utils/constants.js"
import { Link } from "react-router-dom";
// import { Link } from "react-router-dom";
 const Header =()=>
{
  
  const [btnName,setBtnName]=useState("Login")

  useEffect(()=>{
    console.log("Sejal Singh")
  }, [])

 
  return(
    <div className="header">
     <div className="logo-container">
      <img className='logo' src={CDN_LOGO}alt="Logo" />
       
      </div>
      <div className="nav-items">
        <ul>
          <li> <Link to="/"> Home</Link></li>
          <li> <Link to="/about"> About Us </Link></li>
          <li><Link to="contact">
            Contact Us</Link>
            </li>
          <li><Link to = "cart">Cart</Link></li>
          <button className="login" 
          onClick={()=>
            {
           btnName === "Login"? 
           setBtnName("logout"):
           setBtnName("Login")
          }}>{btnName}</button>
        </ul>

      </div>
    </div>
  )
}
export default Header;






















//one select box value populate in other field it is used for immols
  // import React, { useState } from 'react';
// import { useQuery } from 'react-query';

// // Simulated API responses (JSON data)
// const firstSelectData = [
//   { value: '1', label: 'Option 1' },
//   { value: '2', label: 'Option 2' },
//   { value: '3', label: 'Option 3' },
// ];

// const secondSelectData = {
//   '1': [
//     { value: 'a', label: 'A' },
//     { value: 'b', label: 'B' },
//   ],
//   '2': [
//     { value: 'x', label: 'X' },
//     { value: 'y', label: 'Y' },
//   ],
//   '3': [
//     { value: 'i', label: 'I' },
//     { value: 'j', label: 'J' },
//   ],
// };

// function YourComponent() {
//   const [selectedValue, setSelectedValue] = useState('');
  
//   // Use a query to get the data for the first select box
//   const firstSelectQuery = useQuery('firstSelectData', () => {
//     return firstSelectData;
//   });

//   // Function to handle the first select change
//   const handleFirstSelectChange = (e) => {
//     const newValue = e.target.value;
//     setSelectedValue(newValue);
//   };

//   return (
//     <div>
//       <select onChange={handleFirstSelectChange}>
//         <option value="">Select an option</option>
//         {firstSelectQuery.data.map((option) => (
//           <option key={option.value} value={option.value}>
//             {option.label}
//           </option>
//         ))}
//       </select>
      
//       <select>
//         {selectedValue &&
//           secondSelectData[selectedValue].map((option) => (
//             <option key={option.value} value={option.value}>
//               {option.label}
//             </option>
//           ))}
//       </select>
//     </div>
//   );
// }

// export default YourComponent;
