import * as action from "./createAction";
import { createSlice } from "@reduxjs/toolkit";


const slice = createSlice({
    name: "toggleReducer",
    initialState: {
        status: 1,
        orderDone: false,
        isLoading: false
    },
    reducers: {
        toggleAll: (state, action) => {
            state.status = action.payload
        },
        thxForOrder: (state, action) => {
            state.orderDone = action.payload
            
        },
        isLoading: (state, action) => {
            state.isLoading = action.payload.data
        }
    }
})
export const { toggleAll, thxForOrder, isLoading } = slice.actions
export default slice.reducer

export const kassanAlgoritm = (data) => action.kassanItemBegan({
    data,
    onSuccess: slice.actions.toggleAll.type,
    onFail: action.kassanItemFailed.type,
});

