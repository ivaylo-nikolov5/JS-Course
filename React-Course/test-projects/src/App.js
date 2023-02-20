import React from "react";
import "./style.css"

function App() {
    const [starWarsData, setStarWarsData] = React.useState({});

    // console.log("Component rendered")

    fetch("https://swapi.dev/api/people/1")
        .then(res => res.json())
        .then(data => setStarWarsData(data));

    return (
        <div>
            <pre>{JSON.stringify(starWarsData, null, 4)}</pre>
        </div>
    )
}

export default App;
