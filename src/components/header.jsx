import React from "react";
import '../App.css';
import DarkModeToggle from "./dark";
import logolight from "../images/logolight.png"
import logodark from "../images/logodark.png"



function Header(){
    return(
        <>
            <div className="header">
                
                    <img className="logolight"  src={logolight}/>
                    <img className="logodark" src={logodark}/>

                
            <div className="menu">

                <li><a href="#">Home</a></li>
                <li><a href="#expertise">Expertise</a></li>
                <li><a href="#about">About Me</a></li>
                <li><a href="#skills">Skills</a></li>
                
                <li><a href="#projects">Projects</a></li>
                <li><a href="#contact">Contact Me</a></li>
                <li><DarkModeToggle/> </li>
             </div>
             
            </div>
            
        </>
    )
} 

export default Header