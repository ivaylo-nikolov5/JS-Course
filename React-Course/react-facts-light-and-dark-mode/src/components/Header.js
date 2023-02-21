import React from "react";
import logo from "../images/react-logo.png"
import "../css/header.css"

function Header() {
    return (
        <div className="headerContainer">
            <img src={logo} className="header-logo"/>
            <h2 className="header-title">ReactFacts</h2>
            <div className="toggleMode">
                <span>Light</span>
                <div className="toggle-btn">
                    <div className="toggle-circle"></div>
                </div>
                <span>Dark</span>
            </div>
        </div>
    )
}

export default Header;