import React from "react";

function WindowTracker() {

    const [windowWidth, setWindowWidth] = React.useState(window.innerWidth);

    React.useEffect(() => {
        function watchWidth() {
            console.log("Setting up...")
            setWindowWidth(window.innerWidth);
        }
            
        window.addEventListener("resize", watchWidth);


        return function() {
            console.log("Cleaning up...")
            window.removeEventListener("resize", watchWidth);            
        }

    }, [])

    return (
        <div>
            <h1>Window width: {windowWidth}</h1>
        </div>
    )
}

export default WindowTracker;