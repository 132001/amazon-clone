import React from 'react';
import './CheckoutProduct.css';
import { useStateValue } from './StateProvider';
function CheckoutProduct(props){
    const[{basket},dispatch] = useStateValue();
    const removeFromCart = ()=>{
        // console.log("Function called remove from cart");
        dispatch({
            type:"REMOVE_FROM_CART",
            id : props.id
        });
    }
    
    return(
        <div className="checkoutProduct">
            <img  className = "checkoutProduct__image" src = {props.image} alt="product_image"/>
            <div className = "checkoutProduct__info">
                <p className='checkoutProduct__title'>{props.title}</p>
                <p className='checkoutProduct__price'>
                    <small className="product_money">₹</small>
                    <strong className="product_money">{props.price}</strong>
                </p>
                <div className='checkoutProduct__rating'>
                    {Array(props.rating).fill().map((_,i)=><p key={i}>⭐</p>)}
                </div>
                <button onClick={removeFromCart}>Remove from Cart</button>
            </div>

        </div>
    )
}
export default CheckoutProduct;