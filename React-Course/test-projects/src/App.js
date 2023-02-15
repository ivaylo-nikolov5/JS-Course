import React from "react";
import './style.css';

function App() {
    const [count, setCount] = React.useState(0)

    function add() {
        console.log("add");
        setCount(prevCount => prevCount + 1);
    }
    
    function sub() {
        console.log("subtract");
        setCount(prevCount => prevCount - 1);
    }    

    return (
        <div className="counter">
            <div className="counter--count">
                <button className="counter--minus" 
                    onClick={sub}
                >-</button>
            <h1>{count}</h1>
                <button className="counter--plus" 
                    onClick={add}
                >+</button>
            </div>
        </div>
    );
}

export default App;
