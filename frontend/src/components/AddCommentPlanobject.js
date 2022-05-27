import React from 'react'
import { useState } from "react";
import { addComments } from "../store/forumReducer";
import { useDispatch } from 'react-redux';


function AddComment2({id, addCommentHandler}) {
    const [text, setText] = useState("")
    const dispatch = useDispatch();

    const textHandler = (e) =>{
        setText(e.target.value)
    } 

    const handleSubmit = (e) => {
        e.preventDefault()

        dispatch(addComments({
            text,
            id
        }))


    }



 
  return (
        <div  style={{ "display": 'flex', "margin": "2rem 0","border": "solid black 0.1rem", "height": "min-content", flexDirection: "row", borderRadius: "2rem"}} >
        <div style={{ "width": "30rem", display: "flex", flexDirection: "column", borderRight: "solid black 0.1rem" }} >

        <h3 style={{margin: "1rem 0 1rem 2rem"}}>2002</h3>

        {/* <h3 style={{margin: "0 0 1rem 2rem"}}>{}user.name</h3> */}

        <div style={{"width": "12rem", "height": "18rem", "border" : "solid black 0.1rem", "margin": "1rem 0 1rem 2rem"}}></div>
        
        </div>
        
        <div style={{display: "flex", alignItems: "center", justifyContent: "center", width: "100%", height: "min-content", flexDirection: "column"}} > 
                <textarea  style={{margin: "2rem", width: "60rem", height: "25rem"}}  type="text"  onChange={textHandler} placeholder="Text"/>
                <button className="comment-btn" onClick={handleSubmit}>Add comment</button>
        </div>
    </div>
  )
}

export default AddComment2