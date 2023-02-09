import React from "react";
import "../businessCard.css";
import profilePicture from "../images/profile-picture.png";
import envelopeIcon from "../images/email-icon.png";
import linkedinIcon from "../images/linkedin-icon.png";

function BusinessCard() {
    return (
        <div className="main-container">
            <img className="profile-picture" src={profilePicture}/>
            <div className="info">
                <h2 className="name">Andrew Tate</h2>
                <p className="position">Top G</p>
                <a href="https://www.cobratate.com/" 
                className="website" target={"_blank"}>cobratate.com</a>

                <div className="connections-section">
                    <button className="connectionsButton">
                        <img src={envelopeIcon} className="email"/>
                        Email
                    </button>

                    <button className="connectionsButton">
                        <img src={linkedinIcon} className="linkedin"/>
                        Linkedin
                    </button>
                </div>
            </div>
        </div>
    )
}

export default BusinessCard;