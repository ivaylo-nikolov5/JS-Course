import React from "react";
import "../navbar.css";
import reactLogo from "../images/logo.png";

function Navbar() {
    return (
        <div className="navBar">
            <div>
                <img src={reactLogo} alt="logo" className="logo"/> 
            </div>
            <h3>ReactFacts</h3>
            
            <div className="right-side">
                <h4>React Course - Project 1</h4>
            </div>
            
           
        </div>
    )
}

export default Navbar;