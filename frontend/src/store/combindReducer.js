import { combineReducers } from 'redux';
import cartReducer from './cartReducer';
import shopItemsReducer from "./shopItemsReducer";
import toggleReducer from "./toggleReducer";
import orderReducer from "./orderHandler";
import loginReducer from "./loginReducer";
import forumReducer from "./forumReducer";
import upladning from "./upploadingReducer";
import siteImg from "./siteImg"


const reducers =  combineReducers({
        cart: cartReducer,
        shop: shopItemsReducer,
        toggle: toggleReducer,
        orders: orderReducer,
        user: loginReducer,
        forum: forumReducer,
        uploadHandling: upladning,
        pageData: siteImg,

});

export default reducers;
