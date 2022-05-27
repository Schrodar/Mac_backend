import React from 'react'
import { useSelector } from 'react-redux'
import Thread from "./Threads"

function SerchComponent() {
  
  const forum2 = useSelector(state => state.Entities.forum.SerchResult[0])
  
  
  return (
      <div className="left-post-wrapper">
        {forum2.map(thread => <Thread key={thread._id} object={thread} >{thread.topic}</Thread>)}
      </div> 
  )
}

export default SerchComponent