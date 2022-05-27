import  * as actions from "../createAction";

const cartNumberHandler = ({ dispatch, getState}) => next => async action => {
    
     // if action is not == middelwareCallBegan  then next action in the middleware array 
    if (action.type !== actions.addAmountBegan.type) return next(action);
    
    // extracting thees methods from the actions paylode
    const { data, onSuccess, onError } = action.payload;
   
    next(action)
    try {
        const state = getState()
        let isSame = state.Entities.cart.map((state) => state._id === data._id );
        let findIndex = isSame.findIndex(state => state === true);
        let number = findIndex;
        let amount = state.Entities.cart[findIndex].amount + 1;
        const modifydata ={
            number,
            amount
        }
        
        if (onSuccess) dispatch({ type: onSuccess, payload: modifydata });
        

    } 
    

    catch (err) {
       

       if (onError) dispatch({ type: onError, payload: err })
    }
    
}

export default cartNumberHandler;