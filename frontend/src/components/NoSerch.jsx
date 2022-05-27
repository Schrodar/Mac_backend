import React from 'react';
import { useSelector } from 'react-redux';
import Thread from "../components/Threads";


function NoSerch() {
       const forum = useSelector(state => state.Entities.forum.threads)
            
  return (
     <div className="left-post-wrapper">
        {forum.map(thread => <Thread key={thread._id} object={thread} >{thread.topic}</Thread>)}
    </div>
  )
}

export default NoSerch