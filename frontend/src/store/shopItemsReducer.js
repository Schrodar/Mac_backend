import { 
    getShopItemsBegan,
    getShopItemsFailed, 
    openMenyBegan, 
    openMenyFailed, 
    addToCountBegan,
    addToCountFailed,
    substractToCountBegan,
    substractToCountFailed,
    deleteShopItemsBegan,
    getShopItemBegan,
    getShopItemFailed
} from "./createAction";

import { createSlice } from "@reduxjs/toolkit";

const url = "/v1/pictures"

const slice = createSlice({
    name: 'shopItemsReducer',
    initialState: {
        shopItems: [],
        nav: false,
        item: {}
    },
    reducers: {
        getShopItems: (shop, action) => {
            shop.shopItems = action.payload
        },
        cartOpen: (state, action) => {
            state.nav = action.payload
        },
        shopCard: (card, action) => {
            card.shopItems[action.payload.index].content = action.payload.number
        },
        displayCardAmount: (card, action) => {
            card.shopItems[action.payload.index].cartActive = action.payload.Boolean
        },
        toBeDeleted: (state, action) => {
            state.item = action.payload
        }

    },

});

export const {
        getShopItems,
        cartOpen,
        shopCard,
        displayCardAmount,
        toBeDeleted
    } = slice.actions

export default slice.reducer;

export const addToCounter = (data) => addToCountBegan({
    data: data,
    onSuccess: shopCard.type,
    onError: addToCountFailed.type,
    onZero: displayCardAmount.type
})

export const substractFromCounter = (data) => substractToCountBegan({
    data: data,
    onSuccess: shopCard.type,
    onError: substractToCountFailed.type,
    onZero: displayCardAmount.type
})
  
export const onLoadShop = () => getShopItemsBegan({
    url,
    onSuccess: getShopItems.type,
    onError: getShopItemsFailed.type,
  })

export const openMeny = (data) => openMenyBegan({
    data,
    onSuccess: cartOpen.type,
    onError: openMenyFailed.type
});

export const deleteItems = (data) => deleteShopItemsBegan({
    url,
    method: 'delete',
    data
})

export const getItem = (data) => getShopItemBegan({
    data,
    method: "PUT",
    url: "/v1/pictures/produkt",
    onSuccess: toBeDeleted.type,
    onError: getShopItemFailed.type
})
