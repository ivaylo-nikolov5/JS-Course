import React from "react";
import "./style.css"

function App() {
    const [formData, setFormData] = React.useState({
        firstName: "",
        lastName: "",
        email: "",
        comments: "",
        isFriendly: true,
        employment: ""

    });

    function handleChange(event) {
        setFormData(prevFormData => {
            const {name, value, type, checked} = event.target;

            return {
                ...prevFormData,
                [name]: type === "checkbox" ? checked : value
            }
        })
    }

    console.log(formData.employment)
    
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
            <br/>
            <input 
                type="checkbox" 
                id="isFriendly"
                name="isFriendly"
                checked={formData.isFriendly}
                onChange={handleChange}
            />
            <label htmlFor="isFriendly">Are you friendly?</label>

            <fieldset>
                <legend>Current employment status/</legend>
                
                <input
                    type="radio"
                    id="unemployed"
                    name="employment"
                    onChange={handleChange}
                    checked={formData.employment === "Unemployed"}
                    value="Unemployed"
                />

                <label htmlFor="unemployed">Unemployed</label>
                <br/>

                <input
                    type="radio"
                    id="part-time"
                    name="employment"
                    onChange={handleChange}
                    checked={formData.employment === "Part-time"}
                    value="Part-time"
                />

                <label htmlFor="part-time">Part-time</label>
                <br/>

                <input
                    type="radio"
                    id="full-time"
                    name="employment"
                    onChange={handleChange}
                    checked={formData.employment === "Full-time"}
                    value="Full-time"
                />

                <label htmlFor="full-time">Full-time</label>                

            </fieldset>
        </form>
    )
}

export default App;
