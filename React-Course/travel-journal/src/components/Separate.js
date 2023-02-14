import React from "react";
import "../separate.css";
import locationIcon from "../images/location-icon.png"


function Separate(props) {
    return (
        <div className="separate-main-container">
            <div>
                <img src={`images/${props.element.img}`} className="separate-picture"/>
            </div>

            <div className="separate-priview-info">
                <div className="location">
                    <img src={locationIcon} className="locationIcon"/>
                    <span className="separate-location">{props.element.location}</span>
                    <a 
                    href={props.element.googleMapsLink} 
                    target="_blank"
                    className="googleMapsLink">
                        View on Google Maps
                    </a>
                </div>

                <h1 className="separate-title">{props.element.title}</h1>
                <p className="separate-dates">{props.element.startDate} - {props.element.endDate}</p>
                <p className="separate-description">{props.element.description}</p>
            </div>
        </div>
    )
}

export default Separate;