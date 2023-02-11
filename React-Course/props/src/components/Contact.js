import React from "react";
import "../contact.css"
import firstCat from "../images/first-cat.jpg";
import phoneIcon from "../images/phone-icon.png";
import emailIcon from "../images/email-icon.png";

function Contact(props) {

    const picture = props.img;
    const name = props.name;
    const phoneNumber = props.phoneNumber;
    const email = props.email;

    return (
        <div className="contact-main-container">
            <img src={picture} className="contact-image"/>
            <h1 className="contact-name">{name}</h1>

            <div className="phone-details">
                <img src={phoneIcon} className="contact-icon"/>
                <span className="contact-text">{phoneNumber}</span>
            </div>

            <div className="email-details">
                <img src={emailIcon} className="contact-icon"/>
                <span className="contact-text">{email}</span>
            </div>

        </div>
    )
}

export default Contact;