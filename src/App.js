// import logo from './logo.svg';
import React,{useEffect} from 'react';
import './App.css';
import Header from "./Header.js";
import Home from "./Home.js";
import Checkout from "./Checkout.js";
import SignIn from "./SignIn.js"
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import {auth} from './Firebase';
import {useStateValue} from "./StateProvider";
function App() {
  const [{},dispatch] = useStateValue();
  useEffect(()=>{
    auth.onAuthStateChanged((authUser)=>{
      console.log("THE USER IS: ", authUser);
      if(authUser){
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      }
      else{
        dispatch({
          type:'SET_USER',
          user:null 
        })
      }
    })
  },[])
  return ( 
    <Router>
    
    <Routes>
      <Route path="/"  element ={<><Header/> <Home/></> }/>
      <Route path="/signin" element={<SignIn/>}/>
      <Route path="/checkout" element = {<><Header/> <Checkout/> </> }/>
    </Routes>
   </Router>
  );
}

export default App;
