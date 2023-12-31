import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import AppLayout from './components/App';
import { createBrowserRouter , RouterProvider} from 'react-router-dom';
import { About } from './components/About';
import Contact from './components/Contact';
import Error from './components/Error';
import Body from './components/Body';

const root = ReactDOM.createRoot(document.getElementById('root'));
const appRouter= createBrowserRouter([
  {
    path:"/",
    element:<AppLayout/>,
    children:[
      {
        path:"/",
        element:<Body/>
      },
      {
        path:"/about",
        element:<About/>
      },
      {
        path:"/contact",
        element:<Contact/>
      }
    ],
    errorElement:<Error/>
  },
  
  
  
]
)
    
root.render(
  <React.StrictMode>
    < RouterProvider router={ appRouter}/>
  </React.StrictMode>
);

//STEP 1 TO CREATE ROUTER

