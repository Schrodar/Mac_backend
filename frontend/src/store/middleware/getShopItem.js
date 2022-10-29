import axios from 'axios';
import * as actions from '../createAction';

const getShopItem = ({ dispatch, getState}) => next => async action =>{
    
    if(action.type !== actions.getShopItemBegan.type) return next(action)

    const { onSuccess, onError, url, data, method } = action.payload
    let state = getState()
    let token = state.Entities.user.token
    console.log(data)
    next(action)
    try {
        const respons = await axios.request({
        url,
        headers: { 
            Authorization: `Bearer ${token}` 
        },
        data,
        method
        })

        dispatch({type: onSuccess, payload: respons.data})
        
    } catch (error) {
        dispatch({type: onError, payload: error});
    }
    

}

 export default getShopItem