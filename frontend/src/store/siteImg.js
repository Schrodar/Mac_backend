import { createSlice } from "@reduxjs/toolkit";
import * as action from "./createAction";

const slice = createSlice({
    name: "siteImg",
    initialState: {
        bilder: []
    },
    reducers: {
        getImgs: (state, action) => {
            state.bilder.push(...action.payload)
        }
    }
})

const { getImgs } = slice.actions

export default slice.reducer
export const getSiteData = (data) => action.getPageDataBegan ({
    url: "/v1/pictures/siteimg",
    data,
    onSuccess: getImgs.type,
    onError: action.getPageDataFailed.type
});