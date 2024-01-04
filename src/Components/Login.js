import React, { useState } from 'react'
import "./ComponentStyles/Login.css"
import SignIn from './SignIn';

function Login() {

  const[signin,setSignIn]=useState(false);

  return (
    <div className="loginscreen">
        <div className="background">
            <img 
                className='login_logo'
                src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" 
                alt="" 
            />
           <button className="login_button" onClick={()=>setSignIn(true)}>Sign In </button>
            <div className="login_gradient" />

            <div className="login_body">
            {signin ? (
              <SignIn />
            ) : (
              <>
                <h1>Unlimited films, TV programmes and more.</h1>
                <h2>Watch anywhere. Cancel at any time.</h2>
                <h3>Ready to watch? Enter your email to create or restart your membership.</h3>

                <div className="login_input">
                  <form>
                    <input type='email' placeholder='Email Address'/>
                  
                  <button className='login_getStarted' onClick={()=>setSignIn(true)}>
                    GET STARTED
                  </button>
                  </form>
                </div>
                </>
            )}
              
            </div>
        </div>
    </div>
  )
}

export default Login