import React from "react";
import "../businessCard.css";
import profilePicture from "../images/profile-picture.png";
import envelopeIcon from "../images/email-icon.png";
import linkedinIcon from "../images/linkedin-icon.png";
import twitterIcon from "../images/twitter-icon.png";
import facebookIcon from "../images/facebook-icon.png";
import instagramIcon from "../images/instagram-icon.png";
import githubIcon from "../images/github-icon.png";


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
                    <button className="connectionsButton" id="email-btn">
                        <img src={envelopeIcon} className="icon"/>
                        Email
                    </button>

                    <button className="connectionsButton" id="linkedin-btn">
                        <img src={linkedinIcon} className="icon"/>
                        Linkedin
                    </button>
                </div>

                <div className="information-section">
                    <div className="about">
                        <p className="section-title">About</p>
                        <p className="section-text">Andrew Tate is an entrepreneur who is known for his controversial online presence. He shares his thoughts and opinions on various topics through social media platforms like Twitter, YouTube, and Twitch.</p>
                    </div>

                    <div className="interests">
                        <p className="section-title">Interests</p>
                        <p className="section-text">Andrew Tate is a multi-faceted individual with a variety of interests. He is particularly interested in personal development. Tate is also an entrepreneur and shares his experiences and advice on building a successful business.</p>
                    </div>
                </div>
            </div>

            <div className="social-medias">
                <img src={twitterIcon} className="social-media-icon"/>
                <img src={facebookIcon} className="social-media-icon"/>
                <img src={instagramIcon} className="social-media-icon"/>
                <img src={githubIcon} className="social-media-icon"/>
            </div>
        </div>
    )
}

export default BusinessCard;