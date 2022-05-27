import React,{ useState,} from 'react'
import { useNavigate, useLocation } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { useSelector, useDispatch } from 'react-redux';
import { laddaUpThread, pageSwitch } from "../store/forumReducer"



function AddThread({toggle}) {

    const dispatch = useDispatch()
    const location = useLocation()
    const Navigate = useNavigate();
    const goTo = useSelector(state => state.Entities.forum.threads)
    const itsDone = useSelector(state => state.Entities.forum.pageSwitch)
    const [bild, setBild] = useState(null)
    const { register, handleSubmit } = useForm();


    const onSubmit = (data) => {
      const formData = new FormData()
      formData.append("topic",data.topic)
      formData.append("text",data.text)
      formData.append("img", data.img[0])
      formData.append("tags", data.tags)
      dispatch(laddaUpThread(formData))
    }



    const preViewHandler = (e) => {
        //// fixa en if statment där du kollar om e.target.files[0] === blob
        const loadImg = new FileReader();
        
        loadImg.onload = () => {
            
            if(loadImg.readyState === 2){
                setBild(loadImg.result)
            }
        }
        if(e.target.files[0]) {
        loadImg.readAsDataURL(e.target.files[0]) 
        }
        
    }
        
    function inMenu () {
        if(toggle === true){
          return ({"pointerEvents": "none"})
        }
      } 

    const handelRoute = () => {
        dispatch({ type: pageSwitch.type, payload: false})
        Navigate(`${location.pathname[0]}forum/${goTo[goTo.length - 1]._id}`)
    }

    if(itsDone){
        handelRoute()
    }
    return(

        <div className="main" style={inMenu()}>
            <form className="content content_form" onSubmit={handleSubmit(onSubmit)}>
                <textarea style={{marginTop: "2rem", height: "10rem", width: "60rem"}} type="text" name="topic" {...register('topic')} placeholder="Topic"/>
                <textarea style={{margin: "2rem", width: "60rem", height: "15rem"}}  type="text" name="text" {...register('text')} placeholder="Text"/>
                <input type="tags" {...register('tags')} style={{border: "none", height: "5rem", width: "50rem", margin: "2rem 0"}} placeholder="taggar för sökning Exempel: tal tydligt övning" />
                <input className="input-file" type="file" name="img" {...register('img')} onChange={(e) => preViewHandler(e)} />
                <img src={bild} alt=""  />
                <button className="content_form_btn" type="submit">Ladda up ny tråd</button>
            </form>
        </div>
    )

}

export default AddThread