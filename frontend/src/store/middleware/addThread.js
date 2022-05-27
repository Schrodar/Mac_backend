import axios from "axios";
import * as actions from "../createAction";




const addThread = ({ dispatch }) => next => async action => {
    
     // if action is not == authUserBegan  then next action in the middleware array 
    if (action.type !== actions.addThreadBegan.type) return next(action);
    
    // extracting thees methods from the actions paylode
    const { url, method, data ,onSuccess, onError, pageSwitch, onSuccessImg } = action.payload;

    next(action)

    try {
        const respons = await axios.request({
        url,
        headers: {'Content-Type': 'multipart/form-data'},
        method,
        data
        })

        if (onSuccess){
            dispatch({ type: onSuccess, payload: respons.data.thread});
            dispatch({type: pageSwitch, payload: true});
         }
        
    } 
    

    catch (err) {
       if (onError) dispatch({ type: onError, payload: err })
    }
   
}

export default addThread;