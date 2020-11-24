/* eslint-disable no-unused-vars */
import React, {component} from 'react';
import logo from './logo.png';
import {FaUserCircle} from "react-icons/fa";

console.log(logo);

function Header() {
  return (
    <header>
      <div>
        <div className="logo">
            <img src={process.env.PUBLIC_URL+'logo.png'} alt='logo' style={{height:'2.3em'}}/>
            
        </div>
      Project Management Tool
      <marquee className="scroll" behavior="alternate">Collaboration tool for people to work virtually </marquee>
  <div className="endP"><FaUserCircle/></div>
  
      </div>
    </header>
  );
}

export default Header;
