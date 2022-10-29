import { useState, useEffect } from "react";
import Toggle from "./toggle";
import { logginBegan, wrongPwdReseter } from "../store/loginReducer"
import { useDispatch, useSelector } from "react-redux";
import { FaRegPaperPlane } from "react-icons/fa";
import { loadingDuringAwait } from "../store/upploadingReducer";

const Login = () => {
    const isLoggedIn = useSelector(state => state.Entities.user.isLoggedIn)
    const failed = useSelector(state => state.Entities.user.failed)

    const isLoading = useSelector(state => state.Entities.uploadHandling.loading)
    const [password, setPasword] = useState("");
    const [email, setEmail] = useState("")
    const dispatch = useDispatch()

  const handleKeyDown = event => {

    if (event.key === 'Enter') {
      loginHandler(event)
    }
  };

    const payload = {
        loading: true
    }
        
    const emailHandler = e => {
        setEmail(e.target.value)
    }
        const passwordHandler = (e) => {
        setPasword(e.target.value)
    }

    const loginHandler = e => {
        e.preventDefault();
        dispatch(logginBegan({email, password}));
        dispatch(loadingDuringAwait(payload));
    }

    const resetWrongPwd = () => {
        dispatch(wrongPwdReseter())
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
                        <input type="text" placeholder="email" onChange={emailHandler} onKeyDown={handleKeyDown} />
                        <input type="password" placeholder="password" onFocus={resetWrongPwd} onChange={passwordHandler} onKeyDown={handleKeyDown} />
                        <button onClick={loginHandler}>Login</button>

                        <div className="LoadingLogin">
                            {failed && <div className="wrongPwd">Wrong password or username </div>}
                            {isLoading && <div className="spin"></div>} 
                        </div>
                    </div>
                </Toggle>
        </div>
    )
}
export default Login;