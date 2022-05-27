import * as actions from "../createAction";

const SetOpenMiddelware = ({ dispatch, getState }) => next => async action => {

    if(action.type !== actions.StyleOrderBegan.type) return next(action);

    const {data, onSucssess, onError } = action.payload;
    
    next(action)
    try {

        dispatch(({type: onSucssess, payload: data }))


    } 
    
    
    catch (err) {
        dispatch({ type: onError, payload: err })
    }


}

export default SetOpenMiddelware;