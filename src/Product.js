import React from "react";
import './Product.css';
// import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import {useStateValue} from "./StateProvider";
function Product(props){
    const [{basket},dispatch] = useStateValue();
    const addToCart = ()=>{
        dispatch({
            type:'ADD_TO_CART',
            item:{
                id:props.id,
                title: props.title,
                image:props.image,
                price: props.price,
                rating: props.rating,
                totalRating: props.totalRating
            }
        })
    }
    return(
        <div className="product">
           
                
                
                    <img className="product_picture" src={props.image} alt="product_image"/>
                
                    <div className="product__info">
                    <p>{props.title}</p>
                    <p className="product__price">
                   <small className="product_money_sign">₹</small>
                    <strong className="product_money">{props.price}</strong>
                    </p>
                    </div>
                    <div className="product__rating">
                        <p>{Array(props.rating).fill().map((_,i)=><p key={i}>⭐</p>)}<span className="product_bottom_rating_number" >{props.totalRating}</span></p>
                    </div>
                    <button onClick={addToCart}>Add to Cart</button>
                    <p>FREE Delivery by Amazon</p>
                
                 
        </div> 
    )
}
export default Product;