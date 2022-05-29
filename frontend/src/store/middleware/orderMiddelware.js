import * as actions from "../createAction";
import axios from "axios";

const orderMiddelware = ({ dispatch, getState }) => next => async action => {

    if(action.type !== actions.getOrdersBegan.type) return next(action);

    const {url, onSucssess, onError } = action.payload;
    
    next(action)
    const state = getState()
    let token = state.Entities.user.token
    console.log(state.Entities.orders)
    try {
        const respons = await axios.request({
        url,
        headers: { 
            Authorization: `Bearer ${token}` 
        }
        })
        
        if(state.Entities.orders.length !== 0){
            throw new Error
        }

        if(onSucssess)
            dispatch({type: onSucssess, payload: respons.data})

    } 
    
    
    catch (err) {
        dispatch({ type: onError, payload: err })
    }


}

export default orderMiddelware;