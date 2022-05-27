
import  * as actions from "../createAction";

const cartAddHandler = ({ dispatch, getState}) => next => async action => {
    
     // if action is not == middelwareCallBegan  then next action in the middleware array 
    if (action.type !== actions.addCartBegan.type) return next(action);
    
    // extracting thees methods from the actions paylode
    const { data, onSuccess, onError} = action.payload;
   
    next(action)
    try {
        if (onSuccess) dispatch({ type: onSuccess, payload: data });
    } 
    

    catch (err) {
       

       if (onError) dispatch({ type: onError, payload: err })
    }
    
}

export default cartAddHandler;