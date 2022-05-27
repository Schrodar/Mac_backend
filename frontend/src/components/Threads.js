import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import { v4 as unique } from 'uuid';


function Thread({ object }) {

  let Navigate = useNavigate();
  let location = useLocation()
  
  function handleClick() {
    Navigate(`${location.pathname}/${object._id}`);
  }
  
  const inLineStyle = () => {
    if(object.topic.length > 80) {
      return "16rem"
    }
    return "8rem"
  }


  return (
    <div  object={object} className='wrapper-active-forum' style={{"height": `${inLineStyle()}`, "width": "60%", "cursor": 'pointer'}} onClick={() => handleClick()}>
    
        <div style={{ position: "absolute", width: "10rem", height: "100%", borderRight: "solid black 0.1rem", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.2rem"}} key={unique()} ><h2 key={unique()}>{ `${object.createdAt.charAt(0)}${object.createdAt.charAt(1)}${object.createdAt.charAt(2)}${object.createdAt.charAt(3)}${object.createdAt.charAt(4)}${object.createdAt.charAt(5)}${object.createdAt.charAt(6)}${object.createdAt.charAt(7)}${object.createdAt.charAt(8)}${object.createdAt.charAt(9)}`}</h2></div>
        
        <h2 style={{"fontSize": "1.7rem", display: "flex", justifyContent: "center", alignItems: "center", margin: "0 2rem 0 11rem"}}>{object.topic}</h2>
        
    </div>
  )
}

export default Thread