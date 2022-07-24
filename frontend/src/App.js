import { useEffect, useState } from "react";
// import styles
import "./style/app.scss";
import BildeForm from "./page/Bildupload";
import Header from "./components/header";
import Nav from "./components/nav"; 
import {loadForum} from "./store/forumReducer"
import { Route, Routes } from "react-router-dom";
import Kundvagn from "./components/kundvagn";
import Shop from "./page/Shop"
import { useDispatch, useSelector } from "react-redux";
import { onLoadShop } from "./store/shopItemsReducer";
import Kassan from "./page/kassan";
import Valkomen from "./page/valkomen";
import { openMeny } from "./store/shopItemsReducer";
import Ordrar from "./page/ordrar";
import Login from "./components/login";
import Forum from "./page/forum";
import ForumThread from "./components/ForumThread";
import AddThread from "./page/AddThread";
import { getSiteData } from "./store/siteImg"
import is from "sharp/lib/is";
import Remove from "./page/remove";

function App() {



  const [toggle, setToggle] = useState(false);
  const openNav = useSelector(state => state.Entities.shop.nav);
  const isLogedIn = useSelector(state => state.Entities.user.isLoggedIn)

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(onLoadShop());
    dispatch(getSiteData())
    dispatch(loadForum());
  })



  function setStyle() {
      if(toggle === true){
        return ({
          "height": "100vh",
          "overflow": "hidden"
        })
      }
    }


  return (
    <div className="container" style={setStyle()} >
      <Header />
      <Nav toggle={toggle} getToggle={toggle => setToggle(!toggle)} />
      <Kundvagn /> 
      <Routes>
        {isLogedIn && <Route exact path="/ordrar" element={ <Ordrar />} />}
        {isLogedIn && <Route exact path="/remove" element={ <Remove />} />}
        <Route exact path="/nyproduct" element={ <BildeForm toggle={toggle} /> } />
        <Route exact path="/shop" element={ <Shop toggle={toggle} />} />
        <Route exact path="/" element={ <Valkomen toggle={toggle} />} />
        <Route exact path="/kassan" element={ <Kassan toggle={toggle} />} />
        <Route exact path="/login" element={ <Login toggle={toggle} />} />
        <Route path="/forum/:id" element={ <ForumThread toggle={toggle} /> } />
        <Route path="/forum" element={ <Forum toggle={toggle} /> } />
        <Route path="/addthread" element={ <AddThread toggle={toggle} /> } />

      </Routes>
      { openNav && <div className="exitcart" onClick={() => dispatch(openMeny(openNav))} ></div>}
    </div>
  );
}

export default App;
