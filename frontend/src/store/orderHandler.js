import * as action  from "./createAction";
import { createSlice } from "@reduxjs/toolkit";


const slice = createSlice({
        name: 'orderReducer',
        initialState: [],
        reducers: {
            getOrders: (orders, action) => {
                action.payload.forEach((element) => {
                        orders.push(element)  
                    }
                );
            },
            setOpen: (orders, action) => {
                orders[action.payload.index].open = action.payload.bolean
            },
            setOrderSent: (state, action) => {
                state[action.payload.index].isSent = action.payload.isSent

            },
            resetOrdersOpen: (state, action) => {

                
                action.payload.forEach(order => {

                    if(order.open){
                        let index = state.map(list => list._id).indexOf(order._id)
                        state[index].open = false
                        
                    }
                })
            }
        },
})

export const {getOrders, setOpen, setOrderSent} = slice.actions
export default slice.reducer

export const loadOrders = () => action.getOrdersBegan({
    url: "/v1/orders",
    onSucssess: slice.actions.getOrders.type,
    onError: action.getOrdersFailed.type
});

export const StyleOrder = (data) => action.StyleOrderBegan({
    data,
    onSucssess: setOpen.type,
    onError: action.StyleOrderFailed.type
})

export const orderDone = (data) => action.orderSentBegan({
    data,
    onSucssess: setOrderSent.type,
    onError: action.orderSentFailed.type,
    method: 'POST',
    url: "/v1/orders/setSend"
})

export const resetOpen = (data) => action.resetOpenBegan({
    data,
    onSucssess: slice.actions.resetOrdersOpen.type,
    onError: action.resetOpenFailed.type,

})