import React from "react";
import WindowTracker from "./WindowTracker";
import "./style.css"

function App() {
    const [show, setShow] = React.useState(true);

    function handleClick() {
        setShow(!show)
    }

    return (
        <div className="container">
            <button
                className="toggle-btn"
                onClick={handleClick}
            >
                Toggle WindowTracker
            </button>
            {show && <WindowTracker />}
        </div>
    );
}

export default App;
