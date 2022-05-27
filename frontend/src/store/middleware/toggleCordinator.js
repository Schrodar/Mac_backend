import * as actions from "../createAction";

const toggleCordinator = ({ dispatch, getState }) => next => async action => {

    if(action.type !== actions.kassanItemBegan.type) return next(action);

    const {onSuccess, onError, data } = action.payload
  next(action);
  try {
      if(onSuccess) dispatch({ type: onSuccess, payload: data,})
  } catch (err) {
      dispatch({ type: onError, payload: err})
  } 
} 

export default toggleCordinator