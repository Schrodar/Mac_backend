
import React from 'react'
import { useState } from 'react'
import { deleteItems } from '../store/upploadingReducer'
import { useDispatch, useSelector } from 'react-redux'
import { getItem } from '../store/shopItemsReducer'
function Remove() {

  const dispatch = useDispatch()
  const [def, setDef] = useState('')

  const item = useSelector(state => state.Entities.shop.item)

  const areUShure = () => {
    
    let Deleteing = prompt("skriv delete sen tryck ok för att ta bort produkten", "")
   
    if(Deleteing.toLowerCase() === "delete") {
      dispatch(deleteItems({id: def}))
    }
  }

  const findProduckt = () => {
    
    dispatch(getItem({id: def}))
  }




  return (
    
      <div className='remove-main'>

        <input className='' type="text" onChange={(e) => setDef(e.target.value)}/>
        
        {item && <img className='img-remove' src={`data:image/png;base64,${item.bild}`} alt="bild"/>}
        
        <div className='btns-remove'>
          <button onClick={findProduckt} >Find</button>
          <button onClick={areUShure} >Delete</button>
        </div>

      </div>
  )
}

export default Remove