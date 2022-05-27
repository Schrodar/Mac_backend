import { configureStore } from "@reduxjs/toolkit";
import enteties from './enteties';
import thunk from "redux-thunk";
import cartHandler from "./middleware/AddObjToCart";
import getShopItemsMiddelware from "./middleware/getShopItems";
import cartNumberHandler from "./middleware/amountOfCartObj"
import removeObjFromCart from "./middleware/removeObjFromCart"
import toggleCordinator from "./middleware/toggleCordinator";
import navHandler from "./middleware/cartOpenCloseHandler";
import orderMiddelware from "./middleware/orderMiddelware";
import shopListCounter from "./middleware/shopListCounter";
import shopListCounter2 from "./middleware/shopListCounter2";
import authHandler from "./middleware/authHandler";
import SetOpenMiddelware from "./middleware/setOpenMiddelware";
import forumMiddleware from "./middleware/forumMiddelare";
import addCommentMiddelware from "./middleware/addComments";
import cartReset from "./middleware/cartReset";
import laddaUpBild from "./middleware/laddaUpBild";
import addThread from "./middleware/addThread"
import SerchTags from "./middleware/SerchTag";
import orderIsSent from "./middleware/setOrderSent";
import getSiteData from "./middleware/pageData"
import getThreadImg from './middleware/getThreadImg';
import resetOrderOpen from './middleware/setOrderOpen'

const store = configureStore({
  reducer: enteties,
  middleware: [thunk,
    cartHandler,
    getShopItemsMiddelware,
    cartNumberHandler, 
    removeObjFromCart, 
    toggleCordinator, 
    navHandler,
    orderMiddelware,
    shopListCounter,
    shopListCounter2,
    authHandler,
    SetOpenMiddelware,
    forumMiddleware,
    addCommentMiddelware,
    cartReset,
    laddaUpBild,
    addThread,
    SerchTags,
    orderIsSent,
    getSiteData,
    getThreadImg,
    resetOrderOpen
  ]
});

export default store;