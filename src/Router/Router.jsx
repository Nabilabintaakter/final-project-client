import {
    createBrowserRouter,
  } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home/Home";
import Menu from "../Pages/Menu/Menu/Menu";
import OrderFood from "../Pages/OrderFood/OrderFood/OrderFood";

export  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      children: [
        {
            path: "/",
            element: <Home></Home>,    
        },
        {
            path: "ourMenu",
            element: <Menu></Menu>,    
        },
        {
            path: "orderFood",
            element: <OrderFood></OrderFood>,    
        },
      ]
    },
  ]);