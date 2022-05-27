import  * as actions from "../createAction";
import axios from "axios";

const forumMiddleware = ({ dispatch, getState}) => next => async action => {
    
     // if action is not == middelwareCallBegan  then next action in the middleware array 
    if (action.type !== actions.getForumBegan.type) return next(action);
    
    // extracting thees methods from the actions paylode
    const { onSuccess, onError, url } = action.payload;
   
    next(action)
    try {
        
        const respons = await axios.request({
        url,

        })
        if (onSuccess)
            dispatch({ type: onSuccess, payload: respons.data});
        }
    catch (err) {
       

       if (onError) dispatch({ type: onError, payload: err })
    }
    
}

export default forumMiddleware;