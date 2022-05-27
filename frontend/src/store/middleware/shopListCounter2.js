import  * as actions from "../createAction";

const shopListCounter2 = ({ dispatch, getState }) => next => async action => {
    
     // if action is not == middelwareCallBegan  then next action in the middleware array 
    if (action.type !== actions.substractToCountBegan.type) return next(action);
    // extracting thees methods from the actions paylode
    const { data, onSuccess, onError, onZero} = action.payload;
   
    next(action)
    try {
        
            const state = getState()
            let isSame = state.Entities.shop.shopItems.map((state) => state._id === data._id );
            let findIndex = isSame.findIndex(state => state === true);
            let obj = state.Entities.shop.shopItems[findIndex].content
            let number = obj - 1
            let Boolean = false
            let Data2 = {
                Boolean,
                index: findIndex
            }
            if(number === 0){
                dispatch({ type: onZero, payload: Data2})
            }
            let newData = {
                index: findIndex,
                number,
            }

            console.log(newData)
            dispatch({ type: onSuccess, payload: newData });

    } 
    

    catch (err) {
       

       if (onError) dispatch({ type: onError, payload: err })
    }
    
}

export default shopListCounter2;