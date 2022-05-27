import axios from "axios";
import  * as actions from "../createAction";


const getSiteData = ({ dispatch }) => next => async action => {
    
     // if action is not == authUserBegan  then next action in the middleware array 
    if (action.type !== actions.getPageDataBegan.type) return next(action);
    
    // extracting thees methods from the actions paylode
    const { url, onSuccess, onError } = action.payload;
   

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

export default getSiteData;