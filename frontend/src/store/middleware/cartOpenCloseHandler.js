import * as actions from "../createAction";

const navHandler = ({ dispatch, getState }) => next => async action => {

    if(action.type !== actions.openMenyBegan.type) return next(action);

    const {onSuccess, onError, data} = action.payload;

    next(action);
    try{
        

        dispatch({ type: onSuccess, payload: !data}); 

    } catch (err) {
        dispatch({ type: onError, payload: err });
    }
}
export default navHandler;