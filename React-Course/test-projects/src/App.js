import React from "react";
import './style.css';
import star from "./images/empty-star.png";
import filledStar from "./images/filled-star.png"

function App() {

    const [contact, setContact] = React.useState({
        firstName: "John",
        lastName: "Doe",
        phoneNumber: "+1 (719) 555-1212",
        email: "itsmyrealname@example.com",
        imgUrl: "images/user.png",
        isFavorite: true
    })

    let starIcon = contact.isFavorite ? filledStar : star;

    function toggleFavorite() {
        setContact(prevContact => {
           return {
            ...prevContact,
            isFavorite: !prevContact.isFavorite
           }
        })
    }

    return (

        <div>
            <div className="card">
                <img className="card-image" src={contact.imgUrl}/>
                <div className="card-info">
                    <img 
                    src={starIcon}
                    className="card-favorite"
                    onClick={toggleFavorite}
                    />

                    <h2 className="card-name">
                        {contact.firstName} {contact.lastName}
                    </h2>
                    <p className="card-contact">{contact.phoneNumber}</p>
                    <p className="card-email">{contact.email}</p>
                </div>

            </div>

        </div>

    )
}

export default App;
