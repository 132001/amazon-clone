import React from "react";
import "./Header.css";
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import {Link} from 'react-router-dom';
import {useStateValue} from "./StateProvider";
import {auth} from "./Firebase";
function Header(){
    const [{basket, user},dispatch] = useStateValue();
    const handleAuthentication=()=>{
       if(user){
          auth.signOut();
       }
    }
    return (
        <div className="header">
          <Link to = "/">
            <img className="header__logo" src="https://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="logo"/>
            </Link>
            <div className="header__search">
                <input className ="header__searchInput" type = "text"/>
                    <SearchIcon className="header__searchIcon"/>
            </div>
            <div className = "header__nav">
            <Link to={!user && "/signin"}>
                <div onClick={handleAuthentication}   className = "header__option">
                    <span className="header__optionLineOne">
                       {user? `${user?.email}`: "Hello, Guest"} 
                    </span> 
                    <span className = "header__optionLineTwo">
                       {user? "Sign out": "Sign in"} 
                    </span>
                </div>
            </Link>
                <div className = "header__option">
                    <span className="header__optionLineOne">
                        Returns
                    </span> 
                    <span className = "header__optionLineTwo">
                       & Order
                    </span>
                </div>
                <div className = "header__option">
                    <span className="header__optionLineOne">
                       Your
                    </span> 
                    <span className = "header__optionLineTwo">
                        Prime
                    </span>
                </div>  
                <Link to ="/checkout">           
                <div className = "header__optionBasket">
                    <ShoppingCartIcon id="header_cartline1"/>
                    <span  className = "header__optionLineTwo header__basketCount">
                        {basket?.length}
                    </span>
                </div>
                </Link>   
            </div>
       </div>
    )
}
export default  Header;