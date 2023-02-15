import React from "react";
import './style.css';

function App() {
    const [counter, setCounterValue] = React.useState(0)

    function incrementCounter() {
        setCounterValue(counter + 1);
    }
    
    function decrementCounter() {
        setCounterValue(counter - 1);
    }    

    return (
        <div className="counter">
            <div className="counter--count">
                <button className="counter--minus" 
                    onClick={incrementCounter}
                >-</button>
                <h1>0</h1>
                <button className="counter--plus" 
                    onClick={decrementCounter}
                >+</button>
            </div>
        </div>
    );
}

export default App;
