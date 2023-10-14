import Fashion from "./Component/Fashion/Fashion";
import KidsBaby from "./Component/Fashion/KidsBaby";
import Men from "./Component/Fashion/men";
import Mobile from "./Component/MobilePhone/mobile";
import AppLayout from "./Component/AppLayout/AppLayout";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./Component/Home/Home";
import React, { useEffect } from "react";
import TodayDealsPage from "./Component/TodayDeals/TodayDealsPage";
import Coupons from "./Component/TodayDeals/coupons";
import TodayDeals from "./Component/TodayDeals/TodayDeals";
import { Provider } from "react-redux";
import store from "./../store/store";
import VideoGames from "./Component/VideoGames/Vgames";
import Prime from "./Component/prime/Prime";
import Electronics from "./Component/Electronics/Elec";
import FashionPage from "./Component/Fashion/fashionPage";
import Monitor from "./Component/monitor/monitor";
import Books from "./Component/books/Books";
import HomeProducts from "./Component/HomeProducts/HomeProducts";
import HomeDecor from "./Component/HomeProducts/HomeDecor/HomeDecor";
import Main from "./Component/HomeProducts/Main/Main";
import BestSeller from "./Component/VideoGames/BestSeller";
import VgamesNav from "./Component/VideoGames/VgamesNav";
import axiosInstance from "./axiosConfig/instance";
import CreateAccount from "./Component/Sign-Up/Sign-Up";
import { AuthProvider } from './Context/user-auth'
import { useState } from 'react'
import EditUserInfo from "./Component/UserInfo/EditUserInfo";
import YourAccount from "./Component/UserInfo/YourAccount";
import Login from "./Component/Login/login";
import Cart from "./Component/Cart/Cart";
import Order from "./Component/order/Order";
import CompleteOrder from "./Component/order/completeOrder/CompleteOrder";
import ProductDetails from "./Component/productDetails/ProductDetails";
import Profile from "./Component/UserInfo/profile";
import Favorite from "./Component/favorite/favorite";
import TrackingOrder from "./Component/UserInfo/TrackingOrder";
import { refresh } from "./Services/user-auth";



const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: '/login', element: <Login /> },
      { path: '/CreateAccount', element: <CreateAccount/> },
      { path: "/mobile", element: <Mobile /> },
      {
        path: "todayDeals",
        element: <TodayDealsPage />,
        children: [
          { index: true, element: <TodayDeals /> },
          { path: "coupons", element: <Coupons /> },
        ],
      },
      {
        path: "HomeProducts",
        element: <HomeProducts />,
        children: [
          { index: true, element: <Main /> },
          { path: "Decor", element: <HomeDecor /> },
        ],
      },
      { path: "electronics", element: <Electronics /> },
      {
        path: "fashion",
        element: <FashionPage />,
        children: [
          { index: true, element: <Fashion /> },
          { path: "kids", element: <KidsBaby /> },
          { path: "men", element: <Men /> },
        ],
      },
      {
        path: "videogames",
        element: <VgamesNav />,
        children: [
          { index: true, element: <VideoGames /> },
          { path: "BestSeller", element: <BestSeller /> },
        ],
      },
      { path: "prime", element: <Prime /> },
      { path: "books", element: <Books /> },
      { path: "cart", element: <Cart /> },
      { path: "favorite", element: <Favorite /> },
      { path: "order", element: <Order /> },
      { path: "completeorder", element: <CompleteOrder /> },
      { path: "productdetails", element: <ProductDetails /> },
      {
        path: "Monitor",
        element: <Monitor />,
      },
      { path: 'profile',
       element: <YourAccount /> , 
      children:[
        { index: true, element : <Profile /> },
        { path: 'edit' , element : <EditUserInfo /> },
        { path: 'tracking' , element : <TrackingOrder /> },
      ]
    },
    { path: 'tracking' , element : <TrackingOrder /> },
    ],
  },
]);

function App() {
  // const [Islogged, setIslogged] = useState(localStorage.getItem(`token`) ? true : false);
  const [userData, setUserData] = useState(JSON.parse(localStorage.getItem('userData')));


  var result = "";
  async function start() {
    const api = await axiosInstance.get();
    result = api.data;
    // console.log(result);
  }
  useEffect(() => {
    start();
    const interval = setInterval(() => {
      refresh(); 
    }, 13 * 60 * 1000); 

    return () => {
      clearInterval(interval); 
    };
  }, []);
  
  return (
    <Provider store={store}>
       <AuthProvider value={{  userData , setUserData}} >
      <RouterProvider router={router} />
      </AuthProvider>
    </Provider>
  );
}

export default App;
