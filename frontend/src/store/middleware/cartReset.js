import * as actions from "../createAction";

const cartReset = ({dispatch}) => next => async action => {
    if(action.type !== actions.resetCartBenagn.type) return next(action)

    const { onSuccess, onError, } = action.payload

    next(action)
    try {

        dispatch({type: onSuccess})

    } catch (error) {
        dispatch({type: onError})
    }

}
export default cartReset;