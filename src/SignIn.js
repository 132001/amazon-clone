import React, {useState} from 'react';
import './SignIn.css';
import {Link,useNavigate} from 'react-router-dom';
import {auth} from './Firebase.js';
function SignIn(){
  const history = useNavigate();
  const [email,setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const emailHandler = (e)=>{
    setEmail(e.target.value);
  }
  const passwordHandler = (e)=>{
    setPassword(e.target.value);
  }
  const signInBtn = (e)=>{
         e.preventDefault()
        auth.signInWithEmailAndPassword(email,password).then((auth)=>{
          if(auth){
            history('/');
          }
        }).catch((error)=>{
          alert(error.message);
        })
  }
  const registerBtn = (e)=>{
    e.preventDefault();
    auth.createUserWithEmailAndPassword(email,password).then((auth)=>{
      if(auth){
        history('/');
      }
    }).catch((error)=>{
      alert(error.message);
    })
  }
    return(
        <div className="signIn">
          <Link to="/">
            <img className="signin__logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1200px-Amazon_logo.svg.png" alt="logo"/>
          </Link>
        <div className="signin__container">
        <h1>Sign-In</h1>
            <form>
             <h5>E-mail</h5>
              <input type="text" value={email} onChange={emailHandler}/>
              <h5>Password</h5>
              <input type="password" value={password} onChange={passwordHandler}/>
              <button type="submit" onClick={signInBtn} className="login__signInButton">Sign-In</button>
            </form>
            <p>By signing-in you agree to Amazon's Conditions of Use & Sale. Please see our Privacy Notice, our Cookies Notice and our Interest-Based Ads </p>
            <button onClick={registerBtn} className='login__registerButton'>Create your Amazon account</button>
        </div>
        </div>
    )
}
export default SignIn; 