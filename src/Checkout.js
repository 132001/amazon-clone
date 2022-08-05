import React from 'react';
import './Checkout.css';
import CheckoutProduct from './CheckoutProduct';
import Subtotal from './Subtotal.js';
import {useStateValue} from './StateProvider';
function Checkout(){
    const [{basket, user},dispatch] = useStateValue();
    return(
        <div className="checkout">
         <div className = "checkout__left"> 
            <img  className="checkout__ad" src="https://assets-global.website-files.com/6130fa1501794e37c21867cf/624b58fdbd4b9efc2fb6bcf8_Logo_AmazonAds.png" alt="checkout_ad"/>
            <div >
                <h3>{user? `Hello,${user?.email}`: null } </h3>
                <h1 className="checkout__title">Shopping Cart</h1>
              {basket.map(item=>
              <CheckoutProduct 
                  id={item.id}
                title = { item.title}
                image = {item.image}
                price = {item.price}
                rating ={item.rating} 
                totalRating = { item.totalRating}/> )}
            </div>
         </div>
         <div className="checkout__right"></div>
        <Subtotal/>
        </div>
    )
}
export default Checkout;  