import  * as actions from "../createAction";
import axios from "axios";


const orderIsSent = ({dispatch, getState }) => next => async action => {

    if(action.type !== actions.orderSentBegan.type) return next(action)

    const {data, onSucssess, onError, url, method} = action.payload
    
    next(action)
    try {
        const respons = await axios.request({
        url,
        method,
        data,
        }) 
        if(onSucssess)
        dispatch({ type:onSucssess, payload: respons.data })
    } catch (error) {
        if (onError) dispatch({ type: onError, payload: error })
    }
    
}
export default orderIsSent