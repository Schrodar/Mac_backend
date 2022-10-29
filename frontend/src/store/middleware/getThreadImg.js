import axios from "axios";
import * as actions from "../createAction";



const getThreadImg = ({ dispatch }) => next => async action => {
    
     // if action is not == authUserBegan  then next action in the middleware array 
    if (action.type !== actions.getThreadImgBegan.type) return next(action);
    
    // extracting thees methods from the actions paylode
    const { url, method, data, onSuccess, onError} = action.payload;

    


    next(action)
    try {
        
        const respons = await axios.request({

        url,
        method,
        data
        })

        if(respons.data[0].index !== -1){
        dispatch({type: onSuccess, payload: {index: data.index, bild: respons.data}})
        }else{
            throw Error
        }
    } 
    

    catch (err) {
       if (onError) dispatch({ type: onError, payload: err })
    }
   
}

export default getThreadImg;