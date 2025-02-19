import { createBrowserRouter } from "react-router-dom";
import Home from "../../pages/Home/Home";
import About from "../../pages/About/About";
import Contact from "../../pages/Contact/Contact";

export const router=createBrowserRouter([
    {
        path:"/",
        element:<Home/>
    },
    {
        path:"/prices",
        element:<About/>
    },
    {
        path:"/about",
        element:<About/>
    },
    {
      path:"/contact",
      element:<Contact/>
  }
  
  ]);
