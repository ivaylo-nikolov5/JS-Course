import React from "react";
import "../card.css"
import star from "../images/star.png";
 
function Card(props) {
    let condition;

    if (props.openSpots === 0) {
        condition = "SOLD OUT";
    } else if (props.location === "Online") {
        condition = "ONLINE";
    }

    let validConditions = ["ONLINE", "SOLD OUT"]
    return (
        <div className="card-container">
            {validConditions.includes(condition) &&
                <div className="card-condition">
                    {condition}
                </div>
            }

            <img src={`images/${props.coverImg}`} className="card-photo"/>

            <p className="card-reviews">
                <img src={star} className="orange-star"/>
                <span className="reviews-text">
                    {props.rating} <span className="grayed-text">({props.stats.reviewCount})&#183;{props.location}</span>
                </span>
            </p>

            <p className="card-description">{props.title}</p>

            <p className="card-price">From ${props.price} <span className="price-per-person">
                <span className="slash">/
                </span> person</span></p>
        </div>
    )
}

export default Card;