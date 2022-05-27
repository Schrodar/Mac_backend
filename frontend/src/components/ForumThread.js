import React,{ useState, useEffect, useCallback} from 'react'
import { useParams } from 'react-router-dom'
import { useSelector, useDispatch } from "react-redux"
import { loadForum, forumImg } from '../store/forumReducer';
import Comments from './Comments';
import { AiOutlineWechat } from "react-icons/ai"

import  AddComment2  from "./AddCommentPlanobject";



function ForumThread() {  
  console.log("it is running")
  const [addThread, setAddthread] = useState(false)
  
  const params = useParams();
  const dispatch = useDispatch();

  const [test, setTest] = useState(-1)

  const gotThreads = useSelector(state => state.Entities.forum.loading);

  const forum = useSelector(state => state.Entities.forum.threads);

  const rightThread = forum.find(thread => JSON.stringify(thread._id) === JSON.stringify(params.id));
  let forumIndex = forum.map(object => JSON.stringify(object._id)).indexOf(JSON.stringify(params.id));
    const [size, setSize] = useState(45)

 let data = {
   id: params.id,
   index: forumIndex
 }
 

    useEffect(() => {
      
      let screenWidth = window.screen.width
      
      if(screenWidth < 500){
       setSize(28)  
      }
      else{
        setSize(45)
      }

    }, [])
    

  if(gotThreads === false) {
    dispatch(loadForum())
  }

  const doDispatch = useCallback(() => dispatch(forumImg(data))) 

  useEffect(()=> {
    if(data.index === -1){
      console.log(data.index)
      setTimeout(() => {
        console.log(data.index)
        doDispatch()
      }, 10000)
    }else{
      doDispatch()
    }
    
  },[])

  
  if(gotThreads === false){
    return <h1 style={{margin: "20rem auto"}}>Loading </h1>
  }

 const addCommentHandler = () => {
  setAddthread(!addThread)
 }
  
  return (
        <div className='question-div'>
          <div style={{"border" : "solid black 0.1rem", borderRadius: "2rem", display: "flex", flexDirection: "column", position: "relative"}}>
            <div style={{width: "100%", height: "min-content"}}>
              <h1 style={{"fontSize": "4rem", "margin": "0.5rem 1.5rem"}} >{rightThread.topic}</h1>
            </div>
            <div style={{width: "100%", height: "100%", display: "flex", flexDirection: "row"}}>
              <div style={{width: "30rem", height: "100%"}}>
            {/* <h3 style={{"fontSize": "3rem", "margin": "1rem 1.5rem "}}>user.name</h3> */}
                <div><h3 style={{"fontSize": "2rem", "margin": "1rem 1.5rem"}}> {`${rightThread.createdAt.charAt(0)}${rightThread.createdAt.charAt(1)}${rightThread.createdAt.charAt(2)}${rightThread.createdAt.charAt(3)}${rightThread.createdAt.charAt(4)}${rightThread.createdAt.charAt(5)}${rightThread.createdAt.charAt(6)}${rightThread.createdAt.charAt(7)}${rightThread.createdAt.charAt(8)}${rightThread.createdAt.charAt(9)}`} </h3></div>
                <div style={{ "width": "12rem", "height": "18rem", "border" : "solid black 0.1rem", "margin": "1rem 1.5rem"}}></div>
              </div>
              <div style={{width: "100%", height: "100%"}}>
                
                {rightThread.switch ? <img style={{height:`${(rightThread.bild.ar * 25)}rem`, width: "25rem", margin: "1rem 1.5rem" }} src={`data:image/png;base64,${rightThread.bild.bild}`} alt="nonon" /> : <></>}
              <h2 style={{"fontSize": "3rem", "margin": "1rem 1.5rem 5rem 1.5rem"}}>{rightThread.text}</h2>
              
              </div>
            </div>
            
            <div style={{ position: "absolute", width: "6rem", height: "6rem", right: "1rem", bottom: "0.5rem"}}>
              <AiOutlineWechat size={size}  onClick={() => addCommentHandler() }/>
            </div>
          </div>
          <div>
             {addThread ? <AddComment2  id={rightThread._id} /> : <></>} 
            {rightThread.comments.map(answare => <Comments answare={answare} key={answare._id} /> )}
            
          </div>
        </div>
        
  )
}

export default ForumThread