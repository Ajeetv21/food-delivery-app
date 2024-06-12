import React, { useState } from 'react'
import './LoginPopup.css'
import { assets } from '../../assets/assets';

const Login =({setShowLogin})=> {
  const [currState, setcurrState] = useState("Login")
  
  return (
    <>
    <div className="login-popup">
      <form className="login-popup-container">
        <div className="login-popup-title">
          <h2>{currState}</h2>
          <img src={assets.cross_icon} onClick={()=>setShowLogin(false)} alt="" />
       
        </div>
         <div className='login-popup-inputs '>
             {currState==="Login"?<></>:<input type="text" placeholder='your name' required/>}

              <input type="email" placeholder='Your Email'required />
              <input type="password" placeholder='password' required /> 
         </div>
         <button>{currState === "Sign Up"?"create Account":"Login"}</button>
         <div className="login-popup-condition">
          <input type="checkbox" required />
          <p>By countinuing , i agree to the terms of use & privay policy</p>
         </div>
         {currState==="Login"?<p>create a new account ? <span onClick={()=>setcurrState("Sign Up")}>Click here</span></p>
                         : <p>Already have an account ? <span onClick={()=>setcurrState("Login")}>Login here</span></p>}
         
        
      </form>
    </div>
    </>
  )
}

export default Login