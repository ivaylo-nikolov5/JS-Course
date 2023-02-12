import React from "react";

function Joke(props) {
    return (
        <h1>{props.setup} - {props.punchline}</h1>
    )
}

export default Joke;

