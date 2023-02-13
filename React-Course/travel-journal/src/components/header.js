import React from "react";
import "../header.css"
import logo from "../images/logo.png"

function Header() {
    return (
        <div className="header">
            <img src={logo} className="header-logo"/>
            <span className="header-title">my travel journal.</span>
        </div>
    )
}

export default Header;
