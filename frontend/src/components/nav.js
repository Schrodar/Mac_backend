import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaTrash } from 'react-icons/fa'
import { useDispatch, useSelector } from "react-redux";
import { openMeny } from "../store/shopItemsReducer";
import { FaHome, FaRegImages, FaWrench, FaPlusCircle } from "react-icons/fa";
import { BsFillChatDotsFill } from "react-icons/bs";
import { GiLetterBomb } from "react-icons/gi";
import { number } from "sharp/lib/is";

const Nav = ({toggle, getToggle}) => {

    const isLogedIn = useSelector(state => state.Entities.user.isLoggedIn)
    const openNav = useSelector(state => state.Entities.shop.nav);
    const dispatch = useDispatch();

    const [n, setN] = useState("0.5rem")
   /*  const [reSize, setsetReSize] = useState(number)

    

    function resizedEnded(){
    let width = window.innerWidth;

    if(reSize !== window.innerWidth) return setsetReSize(width)
    }


    // WAS once active trys to dampern the amount of times useEfect triggers 
    // was working better then expected dont judge
    useEffect(() => {
    window.addEventListener("resize", ()=>  {
        let timeOutFunction;
        clearTimeout(timeOutFunction);
        timeOutFunction = setTimeout(resizedEnded, 1000);
        
        })
      return () => {
        window.removeEventListener('resize', ()=> {
        let timeOutFunction;
        clearTimeout(timeOutFunction);
        timeOutFunction = setTimeout(resizedEnded, 1000);
        })
      }
    })
     */
// controls the size of the nav cros was once actvie is  now silenced
/*         useEffect(() => {
    let screenWidth = window.innerWidth
     
    if(screenWidth > 1024){
         setN("0.5rem")
    }else{
        setN("1rem")
    }

    }, [reSize]); */
    function inMenu () {
        if(!toggle === true) {
            return ({
                "pointerEvents": "none",
                "opacity": 0,
            })
        }
    }


    function Style1 () {
        if(!toggle === false){
            return ({
                    "transform": "rotate(90deg)",
                    "top": n
            })
        }
    }



    function Style2 () {
        if(!toggle === false){
            return ({
                    "transform": "rotate(45deg)"     
            })
        }
    }
  
    // set color of box shadow to same as hamburger menyu nav  !!! 

    function Style3 () {
        if(!toggle === false){
            return({
                "boxShadow": "0 0 0 400vh rgb(157 153 139 / 100%)"
            })
        }
    }
    const exitCart = () => {
        getToggle(toggle)
        if(openNav === true) dispatch(openMeny(openNav))
    };


    return(
        <>
        <div className="menu-1" style={Style3()}>
            <div className="menu-box" onClick={() => exitCart()} style={Style2()}>
                <div className="line line-1" style={Style1()}></div>
                <div className="line line-2"></div>
                <div className="line line-3" style={Style1()}></div>
            </div>
        </div>
        
            
        <div className="nav" style={inMenu()} >
                <ul>
                    <li>
                        <Link to="/" onClick={() => getToggle(toggle)}>
                           <FaHome className="icon" /> <h4 className="text">Välkommen</h4>
                        </Link>
                    </li>
                    <li>
                        <Link to="/shop" onClick={() => getToggle(toggle)}>
                           <FaRegImages className="icon"  /> <h4 className="text">Bildbank</h4>
                        </Link>
                    </li>
                    <li>
                        <Link to="/forum" onClick={() => getToggle(toggle)}>
                           <BsFillChatDotsFill className="icon"  /> <h4 className="text">Forum</h4>
                        </Link>
                    </li>
                   { isLogedIn && <li>
                        <Link to="/nyproduct" onClick={() => getToggle(toggle)}>
                          <FaPlusCircle className="icon" />  <h4 className="text">Nya bilder</h4>
                        </Link>
                    </li>}
                    { isLogedIn && <li>
                            <Link to="/ordrar" onClick={() => getToggle(toggle)}>
                          <GiLetterBomb className="icon" />  <h4 className="text">Alla ordrar</h4>
                        </Link>
                    </li>}
                    {!isLogedIn && <li>
                        <Link to="/login" onClick={() => getToggle(toggle)}>
                           <FaWrench className="icon"  /> <h4 className="text">Login</h4>
                        </Link>
                    </li>}
                    {isLogedIn && <li>
                        <Link to="/remove" onClick={() => getToggle(toggle)}>
                           <FaTrash className="icon"  /> <h4 className="text">Shope Remover</h4>
                        </Link>
                    </li>}

                </ul>
        </div>  
        </>
    )
}

export default Nav;