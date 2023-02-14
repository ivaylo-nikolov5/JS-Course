import React from "react";
import "../css/header.css"
import trollFace from "../images/troll-face.png"

function Header() {
    return (
        <div className="header">
            <div className="header-left-part">
                <img src={trollFace} className="logo-image"/>
                <h1 className="header-title">Meme Generator</h1>
            </div>

            <div className="header-right-part">
                <h3 className="header-subtitle">React Course - Project 3</h3>
            </div>
        </div>
    )
}

export default Header;