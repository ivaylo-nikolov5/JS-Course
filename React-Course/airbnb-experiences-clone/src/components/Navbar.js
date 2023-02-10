import React from "react";
import logo from "../images/logo.png"
import "../navbar.css";

function Navbar() {
    return (
        <div className="navbar">
            <img src={logo} className="logo"/>
        </div>
    )
}

export default Navbar;
