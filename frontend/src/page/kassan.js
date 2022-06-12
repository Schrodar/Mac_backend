import React from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import { FaRegPaperPlane } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { v4 as unique } from 'uuid';
import Toggle from "../components/toggle";
import { addAmount, reamovObj, clearCart } from "../store/cartReducer";
import { isLoading, thxForOrder } from "../store/toggleReducer";


const Kassan = ({toggle}) => {
    // fetch from store and react
    const cartContent = useSelector(state => state.Entities.cart)
    const orderDone = useSelector(state => state.Entities.toggle.orderDone);
    const handlingOrder = useSelector(state => state.Entities.toggle.isLoading);
    const { register, 
        handleSubmit, 
        watch,
        formState: { errors } } = useForm();
    const dispatch = useDispatch()


    // onSubmit = bill same as reciver 
    const onSubmit = async (data) => {
        dispatch(isLoading({data: true}))
        let cartCont = []

        if(cartContent !== undefined){
            for (let index = 0; index < cartContent.length; index++) {
                const obj = cartContent[index];
                cartCont.push({ _id: obj._id, amount: obj.amount});  
            }
        }
        cartCont.push(data);
        axios.post("http://www.bildsomstod.se/v1/orders", cartCont)
        .then(function(respons) {
            if(respons.status === 201){
                console.log("dispatichng")
                dispatch(thxForOrder({data: true}))
                dispatch(isLoading({data: false}))
                dispatch(clearCart())
            }
            }).catch(function(error) {
                if(error){
                    dispatch(isLoading({data: false}))
                }
            }) 
    }

    // client cant press buttons behind the cover in menu
    function inMenu () {
        if(toggle === true){
          return ({"pointerEvents": "none"})
        }
      } 


      // thank you  message
      if(orderDone){
          return(
            <div className="main">
                <Toggle className="kassan_toggle" title={"Tack för din beställning"} id="4">
                    <div className="thanks-for-order">
                        <h2>Din bestälning är på väg</h2> <FaRegPaperPlane size={48} style={{"margin": "0 2rem"}} />
                    </div>
                </Toggle>
            </div>
          )
      }
      // bep bep bop bop
      if(handlingOrder){
          return(
            <div className="main">
              <Toggle className="kassan_toggle" title={"Din Bestälning bearbetas"} id="5">
                    <div className="thanks-for-order">
                        <h2>Loading... bip bip bop bop</h2>
                    </div>
                </Toggle>
            </div>
          )
      }

    const sumall = cartContent.map(item => item.amount).reduce((prev, curr) => prev + curr, 0) * 4;




      


    return(
        <div className="main" style={inMenu()}>
             {cartContent.map(state => 
            <div className="kassan-items" key={unique()}>
                <img src={`data:image/png;base64,${state.bild}`} alt="bild" key={unique()} />
                <div className="kassan-items kassan-amount">{`${state.amount}x`}</div>
                <div className="kassan-items kassan-items-wrapper" key={unique()}>
                <button className="kassan-items kassan-items-wrapper kassan-items-wraper-btn" key={unique()}  onClick={() => dispatch(reamovObj(state))} >Remove</button>
                <button className="kassan-items kassan-items-wrapper kassan-items-wraper-btn" key={unique()} onClick={() => dispatch(addAmount(state))}>Add</button>
                </div>
            </div>
            )}
        
            <div className="sumall">summa: {sumall} SEK</div>
            <div className="kassan_line"></div>

            <Toggle className="kassan_toggle" title={"Leveransaddress"} id="2">
   
                <form className="content content_form" onSubmit={handleSubmit(onSubmit)} >
                    
                    <input type="text" name="name" {...register('name', { required: true})} placeholder="name"/>
                    {errors?.name?.type === "required" && <p className="Error_handling_p">This field is required</p>}
                    <input type="text" name="email" {...register('email', { required: true})} placeholder="email"/>
                    {errors?.email?.type === "required" && <p className="Error_handling_p">This field is required</p>}
                    <input type="text" name="phone" {...register('phone', { required: true})} placeholder="phone"/>
                    {errors?.phone?.type === "required" && <p className="Error_handling_p">This field is required</p>}
                    <input type="text" name="address" {...register('address', { required: true})} placeholder="address"/>
                    {errors?.address?.type === "required" && <p className="Error_handling_p">This field is required</p>}
                    <input type="text" name="city" {...register('city', { required: true})} placeholder="city"/>
                    {errors?.city?.type === "required" && <p className="Error_handling_p">This field is required</p>}
                    <input type="text" name="postnumber" {...register('postnumber', { required: true})} placeholder="postnumber"/>
                    {errors?.postnumber?.type === "required" && <p className="Error_handling_p">This field is required</p>}
                    
                    
                    <button className="content_form_btn">Beställ</button>
                </form>
                
            </Toggle>
        </div>
    )
}

export default Kassan;
