import { createSlice } from "@reduxjs/toolkit";
import * as action  from "./createAction";

const url = '/v1/forum'

const slice = createSlice({
    name: "forumReducer",
    initialState: {
        serchNoResult: true,
        loading: false,
        serchResultPage: true,
        pageSwitch: false,
        threads:[],
        SerchResult: []
    },
    reducers: {
        getForum: (state, action) => {
            state.threads = action.payload
            state.loading = true
        },
        addThreadImg: (state, action) => {
        state.threads[action.payload.index].bild = action.payload.bild[0]
        state.threads[action.payload.index].switch = true
            
        },
        addComment: (state, action) => {
           let rightThread = state.threads.find(thread => thread._id == action.payload.threadId)
           rightThread.comments.push(action.payload.res[0])
        },
        serchTags: (state, action) => {
            state.SerchResult = action.payload
        },
        threadUpload: (state, action) => {
            state.threads.push(action.payload)
        },
        pageSwitch: (state, action) => {
            state.pageSwitch = action.payload
        },
        serchResultPage: (state, action) => {
            state.serchResultPage = action.payload
        },
        serchFailed: (state, action) => {
            state.serchFailed = action.payload
        },
        SerchForumNoREsult: (state, action) => {
            state.serchNoResult = action.payload
        }
    } 
});

export const { 
    addThreadImg,
    getForum,
    addComment,
    serchTags,
    threadUpload,
    pageSwitch,
    serchResultPage,
    serchFailed,
    SerchForumNoREsult
    } = slice.actions

export const serch = (data) => action.serchTagsBegan({
    url: "/v1/serch",
    data,
    onSuccess: serchTags.type,
    SerchForumNoREsult: SerchForumNoREsult.type,
    serchResultPage: serchResultPage.type,
    onError: action.serchTagsFailed.type
})

export const loadForum = () => action.getForumBegan({
    url,
    onSuccess: getForum.type,
    onError: action.getOrdersFailed.type,
})

export const addComments = (data) => action.addCommentBegan({
    url: "/v1/forum/comments",
    onSuccess: addComment.type,
    onError: action.addCommetnFailed.type,
    method: "POST",
    data,

})

export const laddaUpThread = (data) => action.addThreadBegan({
    url: "/v1/forum",
    method: "POST",
    data,  
    pageSwitch: pageSwitch.type,
    onSuccess: threadUpload.type,
    onError: action.addAmountFailed.type
});

export const forumImg = (data) => action.getThreadImgBegan({
    url: "/v1/forum/img",
    method: "POST",
    data,  
    onSuccess: addThreadImg.type,
    onError: action.addThreadFailed.type
});

export default slice.reducer