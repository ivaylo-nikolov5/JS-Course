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
                    {props.element.location}
                </div>
            </div>
        </div>
    )
}

export default Separate;