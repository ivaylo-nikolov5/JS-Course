import React from "react";

class UserForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {userName: "", 
                        gender: "", 
                        description: "",
                        acceptTerms: false};
    }
    
    handleChange = (event) => {
        this.setState({[event.target.name]: 
            event.target.type !== "checkbox"? event.target.value: event.target.checked})
    }

    handleSubmit = (event) => {
        event.preventDefault();
        alert(`User name: ${this.state.userName} \n
               Gender: ${this.state.gender}\n
               Description: ${this.state.description}\n
               Accept Terms and Conditions: ${this.state.acceptTerms}`);
    }

    // handleDescription = (event) => {
    //     this.setState({description: event.target.value});
    // }

    // handleGender = (event) => {
    //     this.setState({gender: event.target.value});
    // }

    // handleTerms = (event) => {
    //     this.setState({acceptTerms: event.target.checked});
    // }

    render () {
        return (
            <form onSubmit={this.handleSubmit}>
            <div>
                <div>
                <label>
                    Name:
                    <input 
                    type="text" 
                    name="userName" 
                    value={this.state.userName}
                    onChange = {this.handleChange}>
                    </input>
                </label>
                </div>
                
                <div>
                    <label>
                        Gender:
                        <select 
                        name="gender"
                        value={this.state.gender}
                        onChange={this.handleChange}>
                            <option>Choose</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>

                        </select>
                    </label>
                </div>

                <div>
                <label>
                    Description:
                    <textarea 
                    value={this.state.description}
                    name="description"
                    onChange={this.handleChange}
                    ></textarea>
                </label>
                </div>

                <div>
                    <label>
                        Accept Terms:   
                        <input 
                        type="checkbox"
                        name="acceptTerms"
                        checked={this.state.acceptTerms}
                        onChange={this.handleChange}></input>
                    </label>
                    
                </div>
            </div>
            <button type="submit">Submit</button>
     </form>
        )
        
    }
}

export default UserForm;