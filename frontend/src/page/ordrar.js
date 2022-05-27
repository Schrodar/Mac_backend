import React, { useState } from "react";
import  { useDispatch } from "react-redux";
import { loadOrders } from "../store/orderHandler";
import { useEffect } from "react";
import { v4 as unique } from 'uuid';
import SentOrders from '../components/SentOrders';
import NotSentOrders from '../components/NotSendOrder';
import AllOrders from '../components/AllOrders';




const Ordrar = ({toggle}) => {

  const dispatch = useDispatch()

  

  useEffect(() => {
      dispatch(loadOrders())
  },)
  
  function inMenu () {
      if(toggle === true){
        return ({"pointerEvents": "none"})
      }
  }

    const options = [
    { label: 'Alla', value: 'Alla' },
    { label: 'Ej skickade', value: 'Ej' },
    { label: 'Skickade', value: 'Skickade' },
    ];

  const [value, setValue] = useState("Alla");

  const handleChange = (event) => {
    setValue(event.target.value);
  };


      function FilterOrders() {
       if (value === 'Ej') {
         return  <NotSentOrders />;
       }
        if(value === 'Skickade'){
          return <SentOrders />;
        }
        return <AllOrders /> ;
    }

  return(
    <div className="main" style={inMenu()}>
      <div style={{width: "100%", height: "10rem", display: "flex", justifyContent: "center", alignItems: "center" }}>
        
          <div style={{margin: "0rem 2rem", fontSize: "2rem"}}>välj filter</div>
          <select style={{width: "20rem"}} value={value} onChange={handleChange}>
          {options.map((option) => (
            <option key={unique()} value={option.value}>{option.label}</option>
          ))}
        </select>
      
      </div>
    <FilterOrders toggle={toggle}  filterOrdrar={value} />
    </div>
  )


}

export default Ordrar;