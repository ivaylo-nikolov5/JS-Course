import React from "react";
import "./style.css"

function App() {
    return (
        <div className="formContainer">
            <form className="form">
                <input 
                    className="formTextBox"
                    placeholder="Email"                
                />

                <input 
                    className="formTextBox"
                    placeholder="Password"                
                />

                <input 
                    className="formTextBox"
                    placeholder="Confirm password"                
                />

                <div className="newsletter-subsciption">
                    <input 
                        type="checkbox" 
                        name="newsletter"
                        className="newsletter-checkbox"    
                    />
                    <label 
                        htmlFor="newsletter"
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
