import React from "react";
import "./style.css"

function App() {
    const [formData, setFormData] = React.useState({
        email: "",
        password: "",
        confirmPassword: "",
        newsletterSubscription: false
    })

    function handleChange(event) {
        setFormData(prevFormData => {
            const {name, value, type, checked} = event.target;
            return {
                ...prevFormData,
                [name]: type === "checkbox" ? checked : value 
            }
        })
    }

    function handleSubmit(event) {
        event.preventDefault();

        if (formData.password === "" 
            || formData.confirmPassword === "" 
            || formData.email === "") {
            console.log("There cannot be empty fields!");
            return;
        }         
        


        if (formData.password !== formData.confirmPassword) {
            console.log("Passwords do not match!");
            return;
        } 
        

        else
        console.log("Succesfully signed up!");

        if (formData.newsletterSubscription) 
        console.log("Thanks for signing up for our newsletter!");
    }

    return (
        <div className="formContainer">
            <form className="form" onSubmit={handleSubmit}>
                <input 
                    className="formTextBox"
                    placeholder="Email"
                    onChange={handleChange}
                    name="email"
                    value={formData.email}                
                />

                <input 
                    type="password"
                    className="formTextBox"
                    placeholder="Password" 
                    onChange={handleChange}
                    name="password"
                    value={formData.password}                  
                />

                <input 
                    type="password"
                    className="formTextBox"
                    placeholder="Confirm password" 
                    onChange={handleChange}
                    name="confirmPassword"
                    value={formData.confirmPassword}                  
                />

                <div className="newsletter-subsciption">
                    <input 
                        id="newsletterSubscription"
                        type="checkbox" 
                        name="newsletterSubscription"
                        className="newsletter-checkbox"  
                        onChange={handleChange}
                        checked={formData.newsletterSubscription}    
                    />
                    <label 
                        htmlFor="newsletterSubscription"
                        className="newsletter-label">
                        I want to join the newsletter
                    </label>
                </div>
                <button
                    className="submit-btn"
                >Sign up</button>
            </form>
        </div>
    )
}

export default App;
