import * as action  from "./createAction";
import { createSlice } from "@reduxjs/toolkit";

let url = "/v1/loggin"

const slice = createSlice({
    name: 'loginReducer',
    initialState: {
        isLoggedIn: false,
        token: [],
        failed: false
    },
    reducers: {
        LoginHandler: (state, action) => {
            state.token = action.payload.token
            state.isLoggedIn = true
        },
        wrongPwdHandler: (state, action) => {
            state.failed = true
        },
        wrongPwdReseter: (state, action) => {
            state.failed = false
            
        }
    },
});

export const { LoginHandler, wrongPwdHandler, wrongPwdReseter } = slice.actions
export default slice.reducer;

export const logginBegan = (data) => action.authUserBegan({
  url,
  method: 'post',
  data,
  onSuccess: LoginHandler.type,
  onError: action.authUserFailed.type,
  tryAgen: wrongPwdHandler.type
})

