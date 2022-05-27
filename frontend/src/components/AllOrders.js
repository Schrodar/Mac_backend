import React from 'react';
import { useSelector } from "react-redux";
import Toggle2 from "../components/toggle2";
import { v4 as unique } from 'uuid';

function AllOrders({toggle}) {


const ordrar = useSelector(state => state.Entities.orders)
return(
        
        <div className="main-wrapper">
           

        {ordrar.map((order,index) => <div className={`wrapper${order.open ? "-active" : ""}`} key={unique()}>
            
            
        {!order.open && <div className="time" key={unique()} ><h2 key={unique()}>{ `${order.createdAt.charAt(0)}${order.createdAt.charAt(1)}${order.createdAt.charAt(2)}${order.createdAt.charAt(3)}${order.createdAt.charAt(4)}${order.createdAt.charAt(5)}${order.createdAt.charAt(6)}${order.createdAt.charAt(7)}${order.createdAt.charAt(8)}${order.createdAt.charAt(9)}`}</h2></div> }
            
            <Toggle2 title={"open"} id={order._id} index={index} open={order.open}>

                    <div className="container-order-details" key={unique()}><div key={unique()}>Namn:</div><div key={unique()}>{order.name}</div></div>
                    <div className="container-order-details" key={unique()}><div key={unique()}>Adress:</div><div key={unique()}>{order.address}</div></div>
                    <div className="container-order-details" key={unique()}><div key={unique()}>Stad:</div><div  key={unique()}>{order.city}</div></div>
                    <div className="container-order-details" key={unique()}><div key={unique()}>Postnumer:</div><div key={unique()}>{order.postnumber}</div></div>
                    <div className="container-order-details" key={unique()}><div key={unique()}>Email:</div><div key={unique()}>{order.email}</div></div>
                    <div className="container-order-details" key={unique()}><div key={unique()}>Mobil numer:</div><div key={unique()}>{order.phone}</div></div>

                    <br key={unique()}></br>

                    {order.bilder.map((bild,index) => <div className="container-order-details" key={unique()}><div key={unique()}>{bild[0].amount}x</div> <div key={unique()}>{<img className="bild" src={`data:image/png;base64,${bild[0].bild}`} alt="bild" key={unique()} />}</div></div> )}

            </Toggle2>
            
        </div>
        )}
        </div>
        
    )
}

export default AllOrders