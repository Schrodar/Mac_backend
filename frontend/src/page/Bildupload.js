import { useState } from "react";
import { useForm } from "react-hook-form";
import { useSelector, useDispatch } from "react-redux";
import { skickaBildData, loadingDuringAwait } from "../store/upploadingReducer";

const BildeForm = ({toggle}) => {
    const isLoading = useSelector(state => state.Entities.uploadHandling.loading)
    const failed = useSelector(state => state.Entities.uploadHandling.sendFailed)
    const dispatch = useDispatch();
    const [bild, setBild] = useState(null)
    const { register, handleSubmit } = useForm();
    
    const payload = {
        loading: true
    }


    const onSubmit = (data) => {
      const formData = new FormData()
      formData.append("name",data.name)
      formData.append("description",data.description)
      formData.append("size",data.size)
      formData.append("modify",data.modify)
      formData.append("category",data.category)
      formData.append("img", data.img[0])
      dispatch(loadingDuringAwait(payload))
      dispatch(skickaBildData(formData))

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


    return(
        <div className="main" style={inMenu()}>
            <form className="content content_form" onSubmit={handleSubmit(onSubmit)} >
                <input type="text" name="name" {...register('name')} placeholder="name"/>
                <input type="text" name="description" {...register('description')} placeholder="descriptoion"/>
                <input type="text" name="size" {...register('size')} placeholder="size"/>
                <input type="text" name="category" {...register('category')} placeholder="category"/>
                <input type="checkbox" className="input-checkbox" name="modify" {...register('modify')} />
                <input className="input-file" type="file" name="img" {...register('img')} onChange={(e) => preViewHandler(e)} />
                <img src={bild} alt=""  />
                <button className="content_form_btn">Ladda Up</button>
            </form>
            <div style={{position: "relative",margin: "2rem 5rem", display: "flex", alignItems: "center", justifyContent: "center", width: "inherit", height: "5rem" }}>
                {isLoading && <div className="spin"></div>} 
                {failed && <div><h1>måste välja en bild <br></br> Testa igen Love  </h1></div>} 
            </div>
        </div>
    )
}
export default BildeForm;