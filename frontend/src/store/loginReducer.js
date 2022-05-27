import * as action  from "./createAction";
import { createSlice } from "@reduxjs/toolkit";

let url = "/v1/loggin"

const slice = createSlice({
    name: 'loginReducer',
    initialState: {
        isLoggedIn: false,
        token: [],
    },
    reducers: {
        LoginHandler: (state, action) => {
            state.token = action.payload.token
            state.isLoggedIn = true
        },
    },
});

export const { LoginHandler } = slice.actions
export default slice.reducer;

export const logginBegan = (data) => action.authUserBegan({
  url,
  method: 'post',
  data,
  onSuccess: LoginHandler.type,
  onError: action.authUserFailed.type,
})

