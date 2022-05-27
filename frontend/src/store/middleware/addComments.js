import  * as actions from "../createAction";
import axios from "axios";

const addCommentMiddelware = ({ dispatch, getState}) => next => async action => {
    
     // if action is not == middelwareCallBegan  then next action in the middleware array 
    if (action.type !== actions.addCommentBegan.type) return next(action);
    
    // extracting thees methods from the actions paylode
    const { onSuccess, onError, url, data, method } = action.payload;
   
    next(action)
    try {
        
        const respons = await axios.request({
        url,
        method,
        data,
        })
        if (onSuccess)
            dispatch({ type: onSuccess, payload: {res: respons.data, threadId: data.id }});
        }
    catch (err) {
       

       if (onError) dispatch({ type: onError, payload: err })
    }
    
}

export default addCommentMiddelware;