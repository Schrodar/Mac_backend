import React  from "react";
import { kassanAlgoritm } from "../store/toggleReducer";
import { useDispatch, useSelector } from "react-redux";

const Toggle = ({children, title, id}) => {

    const newId = parseInt(id)
    const state = useSelector(state => state.Entities.toggle.status)
    const dispatch = useDispatch();

    const on = () => {

        if(state === newId) return true
        
        return false
    } 

    return(
        <div>
            <h1 className="kassan_toggle" onClick={() => dispatch(kassanAlgoritm(id))}>{ title }</h1>
            {on ? children : ""}
            <div className="kassan_line"></div>
        </div>
    )
};
export default Toggle;