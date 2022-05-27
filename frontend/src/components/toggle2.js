import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { StyleOrder } from "../store/orderHandler";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import { v4 as unique } from 'uuid';

const Toggle2 = ({children, id, index, open}) => {
 
        const dispatch = useDispatch()
        const ordrar = useSelector(state => state.Entities.orders);
    
        let dennaOrder = ordrar.filter(obj => obj._id === id )

        let openHandler = () => {
            dispatch(StyleOrder({index, bolean: !open}));
        }

    return(
        <div className="toggle-wrapper" key={unique()} >
            <div key={unique()}  onClick={() => openHandler()} className="order_toggle">{open ? <FaAngleUp key={unique()} size={30}/> : <FaAngleDown  key={unique()} size={30} />}</div>
            {dennaOrder[0].open ? children : <></>}
            <div className="order__line" key={unique()} ></div>
        </div>
    )
};
export default Toggle2;