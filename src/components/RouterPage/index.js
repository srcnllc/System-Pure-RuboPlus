import { createBrowserRouter } from "react-router-dom";
import Home from "../../pages/Home/Home";
import Prices from "../../pages/Prices/Prices";
import Contact from "../../pages/Contact/Contact";
import About from "../../pages/About/About";

export const router=createBrowserRouter([
    {
        path:"/",
        element:<Home/>
    },
    {
        path:"/prices",
        element:<Prices/>
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
