import React, { useRef } from 'react'
import "./ComponentStyles/SignIn.css"

import {createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../firebase';

function SignIn() {

    const emailRef=useRef(null);
    const passwordRef=useRef(null);

    const register = (e) => {
        e.preventDefault();

        createUserWithEmailAndPassword(auth, emailRef.current.value, passwordRef.current.value).then((auth) => {
            console.log(auth)
        }).catch((error)=>{
            alert(error.message);
        });
    };

    const signIn=(e) => {
        e.preventDefault();

        signInWithEmailAndPassword(auth, emailRef.current.value, passwordRef.current.value)
        .then((auth) => {
            console.log(auth)
        }).catch((error)=>{
            alert(error.message);
        });
        
    }

  return (
    <div className='signin'>
        <form>
            <h1>Sign In</h1>
            <input ref={emailRef} type="email" placeholder='Email'/>
            <input ref={passwordRef} type="password" placeholder='Password' />
            <button type='submit' onClick={signIn}>Sign In</button>
            <h4>
                <span className='gray'>New to Netflix?</span>
                <span className='link' onClick={register}> Sign up now.</span>
             </h4>
        </form>
    </div>
  )
}

export default SignIn