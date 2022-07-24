import { createAction } from "@reduxjs/toolkit";

export const addCartBegan = createAction("middelware/addCartBegan");
export const addCartFailed = createAction("middelware/addCartFailed");

export const getShopItemsBegan = createAction("middelware/getShopItemsBegan");
export const getShopItemsFailed = createAction("middelware/getShopItems");

export const addAmountBegan = createAction("middelware/addAmountBegan");
export const addAmountFailed = createAction("middelware/addAmountFailed");

export const removObjBegan = createAction("middelware/removObjBegan");
export const removObjFailed = createAction("middelware/removObjFailed");

export const kassanItemBegan = createAction("middelware/kassanItemBegan");
export const kassanItemFailed = createAction("middelware/kassanItemFaild");

export const openMenyBegan = createAction("middelware/openMenyBegan");
export const openMenyFailed = createAction("middelware/openMenyFaild");

export const getOrdersBegan = createAction("middelware/getOrdersBegan");
export const getOrdersFailed = createAction("middelware/getOrdersFaild");

export const addToCountBegan = createAction("middelware/addShopListBegan");
export const addToCountFailed = createAction("middelware/addShopListFaild");

export const substractToCountBegan = createAction("middelware/substractFromListBegan");
export const substractToCountFailed = createAction("middelware/substractFromListFaild");

export const authUserBegan = createAction("middelware/LoginBegan");
export const authUserFailed = createAction("middelware/LoginFailed");

export const StyleOrderBegan = createAction("middelware/StyleOrderBegan");
export const StyleOrderFailed = createAction("middelware/StyleOrderFailed");

export const getForumBegan = createAction("middleware/getForumBegan");
export const getForumFailed = createAction("middelware/getForumFailed");

export const addCommentBegan = createAction("middelware/addCommentBegan");
export const addCommetnFailed = createAction("middelware/addCommentFailed");

export const resetCartBenagn = createAction('middelware/ClercartBegan');
export const resetCartFailed = createAction('middelware/clerCartFailed');

export const sendImagBegan = createAction('middelware/SendImgBegan');
export const sendImageFailed = createAction('middelware/SendImgFailed');

export const addThreadBegan = createAction('middelware/addThreadBegan');
export const addThreadFailed = createAction('middelware/addThreadFailed');

export const serchTagsBegan = createAction('middelware/SerchBegan');
export const serchTagsFailed = createAction('middelware/SerchFailed');

export const orderSentBegan = createAction('middelware/orderSentBegan');
export const orderSentFailed = createAction('middelware/orderSentFailed');

export const getPageDataBegan = createAction('middelware/getPageDataBegan');
export const getPageDataFailed = createAction('middelware/getPageDataFailed');

export const test1Began = createAction('middelware/getPageDataFailed');

export const getThreadImgBegan = createAction('middelware/getThreadImgBegan');
export const getThreadImgFailed = createAction('middelware/getThreadImgFailed');

export const resetOpenBegan = createAction('middelware/resetOpenBegan');
export const resetOpenFailed = createAction('middelware/resetOpenFaild');


export const deleteShopItemsBegan = createAction('middelware/DeletShopItemsBegan');
export const deleteShopItemsSuccess = createAction('middelware/DeletShopItemsSuccess');
export const deleteShopItemsFailed = createAction('middelware/DeletShopItemsFailed');