import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GiMagnifyingGlass } from "react-icons/gi"
import {BsArrowLeftShort} from "react-icons/bs"
import { AiOutlineWechat } from "react-icons/ai"
import { loadForum, serch, SerchForumNoREsult, serchResultPage } from "../store/forumReducer";
import { useNavigate } from "react-router-dom";
import { clearUpload } from "../store/upploadingReducer";
import NoSerch from "../components/NoSerch";
import SerchComponent from "../components/SerchComponent";
import { getSiteData } from "../store/siteImg";


const Forum = ({toggle}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [input, setInput] = useState("");
  const haveSerch = useSelector(state => state.Entities.forum.serchResultPage)
  const haveResult = useSelector(state => state.Entities.forum.serchNoResult)
  const pageData = useSelector(state => state.Entities.pageData.bilder)

  const nyttNamn = () =>  {
    dispatch(clearUpload({ payload: false }));
    navigate('/addthread');
  }

  useEffect(() => {
      dispatch(getSiteData())
      dispatch(loadForum());
  },[]);

  function inMenu () {
    if(toggle === true){
      return ({"pointerEvents": "none"})
    }
  } 
  
  const goBack = () => {
    if(!haveSerch){
      dispatch({type: serchResultPage.type, payload: true})
    }
    dispatch(({type: SerchForumNoREsult.type, payload: true}))
    
  }


  let data = {
    serch: input
  }

   const serchHandling = () => {
     if(input === ""){
       return dispatch({type: SerchForumNoREsult.type, payload: true})
     }
      dispatch(serch(data))
   }  

  function Serch() {
    if(haveSerch){
      return <NoSerch />
    }
    return <SerchComponent /> 
  }
  

  return( 
    <div className="main-forum" style={inMenu()}>
        
        <div className="top-info">
        {haveResult && !haveSerch && <BsArrowLeftShort className="arrowBounce" size={65} onClick={goBack}  style={{margin: "0.1rem 0 0 0" }} />}
        <GiMagnifyingGlass  size={45} className="top-info_magnify" onClick={serchHandling} /> <input  className="top-info_serch" onChange={(e) => setInput(e.target.value)}></input>
            
            <AiOutlineWechat size={45} className="top-info_add_thread" onClick={nyttNamn}/> 

        </div>
        <div className="kassan_line"></div>

       {!haveResult ?  <>
        <div className="Serch-Aktive"> Sökning {input} gav inga resultat</div>
        <div className="info-serch">
          <BsArrowLeftShort className="arrowBounce" size={100} onClick={goBack}  style={{margin: "0.1rem 0 0 0" }} />
          <img src={`data:image/png;base64,${pageData[0].bild}`} alt=""  />  
        </div></> :  <Serch />}

       
        

    </div>
    )
}

export default Forum;