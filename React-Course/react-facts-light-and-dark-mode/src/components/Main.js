import React from "react";
import "../css/main.css";

function Main(props) {

    const mode = props.mode;

    const mainStyle = {
        backgroundColor: mode ? "white" : "#404040",
        color: mode ? "black" : "white"
    }

    return (
        <div className="main-container" style={mainStyle}>
            <h1 className="main-title">Fun facts about React</h1>

            <ul className="facts-list">
                <li>Was released in 2013</li>
                <li>Was originally created by Jordan Walke</li>
                <li>Has well over 100K stars on GitHub</li>
                <li>Is maintained by Facebook</li>
                <li>Powers thousands of enterprise apps, including mobile apps</li>
            </ul>
        </div>
    )
}

export default Main;