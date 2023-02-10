import React from "react";
import "../second-section.css";
import photoGrid from "../images/photo-grid.png";

function SecondSection() {
    return (
        <div className="second-section">
            <div className="image-section">
                <img src={photoGrid} className="photo-grid"/>
            </div>

            <div className="second-section-info">
                <h1 className="second-section-title">Online Experiences</h1>
                <p className="second-section-text">
                    Join unique interactive activities led by one-of-a-kind hosts-all without leaving home.
                </p>
            </div>
        </div>
    )
}

export default SecondSection;