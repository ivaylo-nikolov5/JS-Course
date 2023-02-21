import React from "react";
import logo from "../images/react-logo.png"
import "../css/header.css"

function Header(props) {

    const mode = props.mode;

    const headerStyle = {
        backgroundColor: mode ? "white" : "#2b2b2b",
        color: mode ? "black" : "white",
        boxShadow: mode ? "3px 2px 5px 1px rgba(112, 111, 111, 0.3)" : "none"
    }

    const toggleBtnStyle = {
        backgroundColor: mode ? "black" : "white"
    }

    const toggleCircleStyle = {
        backgroundColor: mode ? "white" : "black",
        marginLeft: mode ? "0" : "auto"
    }

    return (
        <div 
            className="headerContainer"
            style={headerStyle}    
        >
            <img src={logo} className="header-logo"/>
            <h2 className="header-title">ReactFacts</h2>
            <div className="toggleMode">
                <span className="modeLabel">Light</span>
                <div 
                    className="toggle-btn"
                    style={toggleBtnStyle}
                    onClick={props.setMode}
                >
                    <div 
                        className="toggle-circle" 
                        style={toggleCircleStyle}></div
                    >
                </div>
                <span className="modeLabel">Dark</span>
            </div>
        </div>
    )
}

export default Header;