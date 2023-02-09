import React from "react";
import staticReactLogo from "../images/react.png";
import "../main-section.css";

function Main() {
    return (
    <div>
        <div className="title-section">
            <h1 className="title">Fun facts about React</h1>
        </div>
        
        <div>
            <img className="static-react-logo" src={staticReactLogo}/>
        </div>

        <div className="list-section">
            <ul>
                <li>Was first released in 2013</li>
                <li>Was originally created by Jordan Walke</li>
                <li>Has well over 100K stars on GitHub</li>
                <li>Is maintained by Facebook</li>
                <li>Powers housands of enterprice apps, including mobile apps</li>
            </ul>
        </div>
    </div>
    );
}

export default Main;