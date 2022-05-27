import React,{useEffect} from "react";
import { FaCartArrowDown } from "react-icons/fa"
import { v4 as unique } from 'uuid';
import { useDispatch } from "react-redux";
import { addToCart } from "../store/cartReducer";
import { useSelector } from "react-redux";
import { addAmount } from "../store/cartReducer";
import { addToCounter } from "../store/shopItemsReducer";
import { onLoadShop } from "../store/shopItemsReducer";


const Shop = ({toggle }) => {

    function inMenu () {
        if(toggle === true) {
            return ({"opacity": 0,
            "pointerEvents": "none"
            })
        }
    }

    const data = useSelector(state => state.Entities.shop.shopItems);
    const cartContent = useSelector(state => state.Entities.cart);
    const dispatch = useDispatch()


    const itemToCartHandler = async (data) => {
        
        const inCart = cartContent.find((element ) => element._id === data._id);
                
        if(inCart === undefined){
            dispatch(addToCart(data));
            dispatch(addAmount(data));
            dispatch(addToCounter(data));
        }
        else{
            dispatch(addAmount(data));
            dispatch(addToCounter(data));
        }   
    }

    
    useEffect(() => {
        dispatch(onLoadShop());
    },[])

return (
    <div className="main" style={inMenu()}>
        <div className="over-main">        
        
        <h2 className="center-välkomen-shop" style={{"fontSize": "3rem", }}>BILDBANK </h2>

        <h4 className="text-shop">Det här är bildbanken där du finner vårt utbud av bilder. Tryck för att lägga önskad bild i kundvagnen.
         <br></br>Om du vill anpassa en bild efter dina önskemål, skriv det i orden vid beställning. 
         <br></br>Fakturan (produktionskostnad + porto) kommer med er beställning via posten.
         <br></br>Till en början använder vi uteslutande SWISH och ber om överseende med detta tills vi fått ordning på betalningsmetoden.
         <br></br>Hör av er vid övriga frågor.<br></br> 
         
         Trevligt bildsökande önskar vi på BILDSOMSTÖD.  </h4>
         <div className="shop-line"></div>
        </div>
        
        {data &&
        <div className="main-shop">
        
        {data.map((element, index, array) => 
 
            <div className="main_card" style={inMenu()} key={unique()}>
                <div className="main_card main_card_front" style={inMenu() } key={unique()} >
                    <img src={`data:image/png;base64,${element.bild}`} alt="bild" key={unique()} /> 
                </div>


                <div className="main_card main_btn" key={unique()}>
                   {element.cartActive && <div className="number"><FaCartArrowDown size={16}/></div>}
                    <button  key={element._id} onClick={() => itemToCartHandler(element)}><h4 className="btn-text">lägg till; 4 SEK</h4><br></br><h4 className="btn-text">{element.name}</h4></button>
                </div>
            </div>
        )}
        </div>}
    </div>
)
}

export default Shop;