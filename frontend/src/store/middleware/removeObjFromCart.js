import  * as actions from "../createAction";

const removeObjFromCart = ({ dispatch, getState }) => next => async action =>  {

    if (action.type !== actions.removObjBegan.type) return next(action);

    
    const {onRemovObj, onRemovAmount, onError, data } = action.payload;

    next(action); // so it appers in redux devtoll
    try{
        const state = getState()
        let isSame = state.Entities.cart.map((state) => state._id === data._id );
        let findIndex = isSame.findIndex(state => state === true);
        let number = findIndex;
        let amount = state.Entities.cart[findIndex].amount - 1;
        const modifydata ={
            number,
            amount
        }
        if(amount <= 0) {
            dispatch({ type: onRemovObj, payload: modifydata });
        }
        else{
            dispatch({ type: onRemovAmount, payload: modifydata });
        }


    }catch (err) {
        dispatch({ type: onError, payload: err })
    }
}

export default removeObjFromCart;