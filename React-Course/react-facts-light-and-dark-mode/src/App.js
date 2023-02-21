import React from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import "./css/style.css"

function App() {
    const [mode, setMode] = React.useState(true);
    
    function changeMode() {
        setMode(prevMode => !prevMode)
    }

    return (
        <div>
            <Header 
                mode={mode}
                setMode={changeMode}
            />    
            <Main mode={mode}/> 
                   
        </div>
    )
}

export default App;
