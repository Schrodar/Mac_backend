import { useState } from "react";
import Toggle from "./toggle";
import { logginBegan } from "../store/loginReducer"
import { useDispatch, useSelector } from "react-redux";
import { FaRegPaperPlane } from "react-icons/fa";
import { loadingDuringAwait } from "../store/upploadingReducer";

const Login = () => {
    const isLoggedIn = useSelector(state => state.Entities.user.isLoggedIn)
    const isLoading = useSelector(state => state.Entities.uploadHandling.loading)
    const   [password, setPasword] = useState("passowrd");
    const   [email, setEmail] = useState("email")
    const   dispatch = useDispatch()


    const payload = {
        loading: true
    }
        
    const emailHandler = (e) => {
        setEmail(e.target.value)
    }
        const passwordHandler = (e) => {
        setPasword(e.target.value)
    }

    const loginHandler = (e) => {
        e.preventDefault();
        
        dispatch(logginBegan({email, password}));
        dispatch(loadingDuringAwait(payload));
    }


    if(isLoggedIn){
     return(
        <div className="main">
            <Toggle className="kassan_toggle" title={"Mosi har loggat In !"} id="4">
                <div className="thanks-for-order">
                    <h2>Du har loggat in</h2> <FaRegPaperPlane size={48} style={{"margin": "0 2rem"}} />
                </div>
            </Toggle>
        </div>
     )
    }




    return(
        <div className="main">
              <Toggle className="kassan_toggle" title={"Login"} id="6">
                    <div className="login">
                        <input type="text" placeholder="email" onChange={emailHandler} />
                        <input type="password" placeholder="password" onChange={passwordHandler} />
                        <button onClick={loginHandler}>Login</button>
                        <div style={{margin: "3rem auto", position: "relative", }}>
                            {isLoading && <div className="spin"></div>} 
                        </div>
                    </div>
                </Toggle>
        </div>
    )
}
export default Login;