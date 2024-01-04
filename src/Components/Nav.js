import React, { useEffect, useState } from 'react'
import "./ComponentStyles/Nav.css";
import netflixlogo from "./ComponentStyles/netflixlogo.png"
import {useNavigate } from 'react-router-dom';

function Nav() {

  const [show,handleShow]=useState(false);
  const navigate=useNavigate();

  const transitionNav=()=>{
    if(window.scrollY > 100){
      handleShow(true);
    } else{
      handleShow(false);
    }
  }

  useEffect(()=>{
    window.addEventListener("scroll",transitionNav);
    return () => window.removeEventListener("scroll",transitionNav);

  },[]);

  return (
    <div className={`nav ${show && "nav_black"}`}>
      <div className="nav_contents">
      <img 
        onClick={()=>navigate("/")} 
        className='nav_logo'
        src={netflixlogo}
        alt="" 
      />
      <img 
        onClick={()=>{
          navigate("/profile")
        }}
        className='nav_avatar'
        src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" 
        alt="" 
      />
      
      </div>
    </div>
  )
}

export default Nav