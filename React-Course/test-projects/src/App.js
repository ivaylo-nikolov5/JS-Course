import React from "react";
import "./style.css"

function App() {
    const [starWarsData, setStarWarsData] = React.useState({});
    const [count, setCount] = React.useState(1);

    console.log("Component rendered")

    function handleClick() {
        setCount(prevCount => prevCount + 1);
    }


    React.useEffect(function() {
        fetch(`https://swapi.dev/api/people/${count}`)
            .then(res => res.json())
            .then(data => setStarWarsData(data));
    }, [count])

    return (
        <div>
            <h2>The count is {count}</h2>
            <button
                onClick={handleClick}
            >Get Next Character</button>
            <pre>{JSON.stringify(starWarsData, null, 4)}</pre>
        </div>
    )
}

export default App;
