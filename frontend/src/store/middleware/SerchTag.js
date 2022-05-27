import axios from "axios";
import  * as actions from "../createAction";


const SerchTags = ({ dispatch, getState }) => next => async action => {
    
     // if action is not == authUserBegan  then next action in the middleware array 
    if (action.type !== actions.serchTagsBegan.type) return next(action);
    
    // extracting thees methods from the actions paylode
    const { 
        url, 
        onSuccess, 
        data, 
        serchResultPage,
        onError, 
        SerchForumNoREsult 
    } = action.payload;


    
    next(action)
    try {
    
        const respons = await axios.request({
        method: "POST",
        data,
        url,
        })

        if(respons.status === 404){
            throw new Error("no threds")
        }

        if(respons.data[0] === undefined){
            
            return dispatch({type: SerchForumNoREsult, payload: false})
        }
        
        if(respons.data[0].length === 0){
            
            
            throw new Error(respons.data[0].length)
        }

        if (onSuccess){
            dispatch({type: SerchForumNoREsult, payload: true})
            dispatch({ type: onSuccess, payload: respons.data});
            dispatch({ type: serchResultPage, payload: false, })
        }
        
    } 
    

    catch (err) {
        
        dispatch({type: onError})
    }
   
}

export default SerchTags;