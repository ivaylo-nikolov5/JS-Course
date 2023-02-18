import React from "react";
import "./style.css"

function App() {
    const [formData, setFormData] = React.useState({
        firstName: "",
        lastName: "",
        email: "",
        comments: "",
    });

    console.log(formData);

    function handleChange(event) {
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [event.target.name]: event.target.value
            }
        })
    }
    
    return (
        <form>
            <input 
                type="text"
                placeholder="First Name"
                onChange={handleChange}
                name="firstName"
                value={formData.firstName}
            />

            <input 
                type="text"
                placeholder="Last Name"
                onChange={handleChange}
                name="lastName"
                value={formData.lastName}
            />

            <input 
                type="text"
                placeholder="Email"
                onChange={handleChange}
                name="email"
                value={formData.email}
            />

            <textarea 
                onChange={handleChange}
                placeholder="Comments"
                name="comments"
                value={formData.comments}
            />
        </form>
    )
}

export default App;
