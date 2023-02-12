import React from "react";
import "../card.css"
import star from "../images/star.png";
 
function Card(props) {
    return (
        <div className="card-container">
            {/* <div className="card-condition">
                SOLD OUT
            </div> */}

            <img src={props.img} className="card-photo"/>

            <p className="card-reviews">
                <img src={star} className="orange-star"/>
                <span className="reviews-text">
                    {props.rating} <span className="grayed-text">({props.reviewCount})&#183;{props.country}</span>
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