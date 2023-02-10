import React from "react";
import "../contact.css"
import firstCat from "../images/first-cat.jpg";
import phoneIcon from "../images/phone-icon.png";
import emailIcon from "../images/email-icon.png";

function Contact() {
    return (
        <div className="contact-main-container">
            <img src={firstCat} className="contact-image"/>
            <h1 className="contact-name">Mr.Whiskerson</h1>

            <div className="phone-details">
                <img src={phoneIcon} className="contact-icon"/>
                <span className="contact-text">(212) 555-1234</span>
            </div>

            <div className="email-details">
                <img src={emailIcon} className="contact-icon"/>
                <span className="contact-text">mr.whiskaz@catnap.meow</span>
            </div>

        </div>
    )
}

export default Contact;