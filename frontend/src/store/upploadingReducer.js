import { createSlice } from "@reduxjs/toolkit";
import * as action from "./createAction";

 
const slice = createSlice({
    name: "upladning",
    initialState: {
    addSuccess: false, 
    loading: false,
    sendFailed: false
    },
    reducers: {
        imgUpload: (state, action) => {
            state.loading = action.payload.loading
            state.sendFailed = action.payload.sendFailed
        },
        loadingDuringAwait: (state, action) => {
            state.loading = action.payload.loading
        },
        clearUpload: (state, action) => {
            state.addSuccess = action.payload.payload
        }
    }
});

export const {imgUpload, loadingDuringAwait,showThreadMsg, threadUpload, clearUpload} = slice.actions
export default slice.reducer

export const skickaBildData = (data) => action.sendImagBegan({
    url: "/v1/pictures",
    method: "POST",
    data,
    onSuccess: imgUpload.type,
    onError: action.sendImageFailed.type
});

export const deleteItems = (data) => action.deleteShopItemsBegan({
    
    url: "/v1/pictures",
    method: 'DELETE',
    data,
    onSuccess: action.deleteShopItemsSuccess.type,
    onError: action.deleteShopItemsFailed.type
})



// dispatch skickabilddata + loadingDuringAwait när ok kommer från server dispatch loading done 