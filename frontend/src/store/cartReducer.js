import * as action  from "./createAction";
import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
    name: 'cartReducer',
    initialState: [],
    reducers: {
        cartAdd: (cart, action) => {
            cart.push(action.payload);
        },
        cartRemove: (cart, action) => {
            cart.splice(action.payload.number, 1);
        },
        addToCartobjeckt: (cart, action) => {
            cart[`${action.payload.number}`].amount = action.payload.amount
        },
        removeAmount: (cart, action) => {
            cart[`${action.payload.number}`].amount = action.payload.amount
        },
        reamovAllItems: (cart, action) => {
            cart.splice(0,cart.length)
        }
    },
});

export const {
        cartAdd,
        cartRemove,
        addToCartobjeckt,
        removeAmount,
        removeAllItems
    } = slice.actions

export default slice.reducer;

  
export const addToCart = (data) => action.addCartBegan({
    data,
    onSuccess: slice.actions.cartAdd.type,
    onError: action.addCartFailed,
})

export const addAmount = (data) => action.addAmountBegan({
    data,
    onSuccess: slice.actions.addToCartobjeckt.type,
    onError: action.addAmountFailed.type,
})

export const reamovObj = (data) => action.removObjBegan({
    data,
    onRemovObj: slice.actions.cartRemove.type,
    onRemovAmount: slice.actions.removeAmount.type,
    onError: action.removObjFailed.type
})

export const clearCart = () => action.resetCartBenagn({
    onSuccess: slice.actions.reamovAllItems.type,
    onError: action.resetCartFailed.type
})