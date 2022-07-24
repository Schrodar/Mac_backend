import e from 'cors'
import React from 'react'
import { useState } from 'react'
import { deleteItems } from '../store/upploadingReducer'
import { useDispatch } from 'react-redux'
function Remove() {

    const dispatch = useDispatch()
    const [def, setDef] = useState('')

   const deleteFn = (e) => { 
    e.preventDefault()
    dispatch(deleteItems({id: def}))
   }


  return (
    <div>
        <form>
            <input type="text" onChange={(e) => setDef(e.target.value)} />
            <button onClick={deleteFn}>test</button>
        </form>
    </div>
  )
}

export default Remove