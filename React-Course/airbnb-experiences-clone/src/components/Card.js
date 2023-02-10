import React from "react";
import "../card.css"
import katieZaferes from "../images/katie-zaferes.png";
import star from "../images/star.png";
 
function Card(props) {
    return (
        <div className="card-container">
            <div className="card-condition">
                SOLD OUT
            </div>

            <img src={katieZaferes} className="card-photo"/>

            <p className="card-reviews">
                <img src={star} className="orange-star"/>
                <span className="reviews-text">
                    5.0 <span className="grayed-text">(6)&#183;USA</span>
                </span>
            </p>

            <p className="card-description">Life lessons with Katie Zaferas</p>

            <p className="card-price">From $136 <span className="price-per-person">
                <span className="slash">/
                </span> person</span></p>
        </div>
    )
}

export default Card;