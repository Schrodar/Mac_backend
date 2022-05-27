import * as actions from "../createAction";

const resetOrderOpen = ({dispatch, getState}) => next => action => {

    if(action.type !== actions.resetOpenBegan.type) return next(action)

    const {data, onSucssess, onErorr } = action.payload

    const state = getState()


    let Ordrar = state.Entities.orders

    dispatch({type: onSucssess, payload: Ordrar})

}
export default resetOrderOpen