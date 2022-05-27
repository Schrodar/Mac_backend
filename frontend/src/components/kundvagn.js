import React, {useEffect, useState} from "react";
import { FaShoppingCart } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { v4 as unique } from 'uuid';


import { addAmount, reamovObj } from "../store/cartReducer";
import { substractFromCounter } from "../store/shopItemsReducer";
import { openMeny } from "../store/shopItemsReducer";

const Kundvagn = () => {



    const cartContent = useSelector(state => state.Entities.cart);
    const openNav = useSelector(state => state.Entities.shop.nav);
    const dispatch = useDispatch()

    const [size, setSize] = useState(45)

    useEffect(() => {
        let screenWidth = window.screen.width
      
      if(screenWidth < 500){
       setSize(28)  
      }

    
      
    }, [])
    

    
    

    const amount = () => {
        let amount = 0
        cartContent.map(obj => amount += obj.amount)
        return amount
    }

    const summa = () => {
        let amount = 0
        cartContent.map(obj => amount += obj.amount)   
       let newnumber = amount * 4
        return newnumber
    }


    const cartStyle = () => {
        if (cartContent.length < 3) {
            return ({
           "position": "absolute",
            "bottom": "0",
            "left": "50%",
            "transform": "translate(-50%, 0%)",
            "width": "100%",
            "margin": "0 0 1rem 0"
            })
        }
    }

    const RemoveHandeler = (data) => {
        dispatch(substractFromCounter(data));
        dispatch(reamovObj(data));
    }
    // 
    return(
        <>
        <div className="kundvagn" onClick={() => dispatch(openMeny(openNav))}>
            <div className="counter">{amount()}</div>
            <FaShoppingCart className="cart" size={size}/>
        </div>
        { openNav && <div className="cartContent">
            <div className="cart-Hero">
                <p>Varukorg</p>
                <div className="line2"></div>
            </div>
            
            {cartContent.map(state => 
            <div className="cart-items" key={unique()}>
                <img src={`data:image/png;base64,${state.bild}`} alt="bild" key={unique()} />
                <div className="cart-items cart-amount">{`${state.amount}x`}</div>
                <div className="cart-items cart-items-wrapper" key={unique()}>
                <button className="cart-items cart-items-wrapper cart-items-wraper-btn" key={unique()}  onClick={() => RemoveHandeler(state)}> <h4 className="kund-vagntxt">Remove</h4> </button>
                <button className="cart-items cart-items-wrapper cart-items-wraper-btn" key={unique()} onClick={() => dispatch(addAmount(state))}> <h4 className="kund-vagntxt">Add</h4> </button>
                </div>
            </div>)}
            
            <div className="endof_cart" style={cartStyle()}>
            <div className="line2"></div>
                <p className="kund-vagntxt">Summa {summa()}</p>
                <Link to="/kassan" style={{"textDecoration": 'none'}} onClick={() => dispatch(openMeny(openNav))}>
                <button><h4 className="kund-vagntxt" >Kassan</h4></button>
                </Link>
            </div>
        </div> }

       
        
        </>
    )
}

export default Kundvagn;

