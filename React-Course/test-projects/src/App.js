import React from "react";
import "./style.css"
import boxes from "./boxes"
import Box from "./Box";



function App(props) {
    const [boxesArray, setBoxesArray] = React.useState(boxes);
    
    function toggle(id) {
        setBoxesArray(oldBoxes => {
            return oldBoxes.map((box) => {
                return box.id === id ? {...box, on: !box.on} : box; 
            })
        })
    } 

    const boxDivs = boxesArray.map(box => {
        return <Box     
            key={box.id}
            on={box.on}
            id={box.id}
            toggle={toggle}
        />
    })

    return (
        <div className="mainContainer">
            {boxDivs}
        </div>
    )
}

export default App;
