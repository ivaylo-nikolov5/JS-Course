import React from "react";
import "./joke.css"

function Joke(props) {

    const [isShown, setIsShown] = React.useState(false);

    function toggle() {
        setIsShown(prevState => !prevState);
    }

    return (
        <div className="joke-container">
            {props.setup && <h1 className="joke-setup">{props.setup}</h1>}
            {isShown && 
            <h2 className="joke-punchline">{props.punchline}</h2>}
            <button onClick={toggle}>Toggle</button>
        </div>
    )
}

export default Joke;

