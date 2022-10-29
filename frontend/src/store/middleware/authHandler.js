import axios from "axios";
import * as actions from "../createAction";
import { wrongPwdHandler } from "../loginReducer";
import { loadingDuringAwait } from "../upploadingReducer";


const authHandler = ({ dispatch }) => next => async action => {
    
     // if action is not == authUserBegan  then next action in the middleware array 
    if (action.type !== actions.authUserBegan.type) return next(action);
    // extracting thees methods from the actions paylode
    const { url, method, data ,onSuccess, onError, tryAgen} = action.payload;

    const setSpin = {
       loading: false
    }
    const payload = {
        loading: false
    }

    next(action)
    try {
        
        const respons = await axios.request({
        
        url,
        method,
        data,
        })
        if (onSuccess) {
            dispatch({ type: onSuccess, payload: respons.data});
            dispatch(loadingDuringAwait(setSpin));
        }
    } 
    

    catch (err) {
       dispatch(actions.authUserFailed(err));
       dispatch(wrongPwdHandler())
       dispatch(loadingDuringAwait(payload))

       if (onError) dispatch({ type: onError, payload: err })
    }
   
}

export default authHandler;