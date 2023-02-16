import React from "react";
import "./style.css"
import boxes from "./boxes"
import Box from "./Box";



function App(props) {
    const [boxesArray, setBoxesArray] = React.useState(boxes);
    
    function toggle(id) {
        setBoxesArray(prevBoxes => {
            const newBoxes = [];

            for (let i = 0; i < prevBoxes.length; i++) {
                const currentSquare = prevBoxes[i];
                if (currentSquare.id === id) {
                    const updatedSquare = {
                        ...currentSquare,
                        on: !currentSquare.on
                    }
                    newBoxes.push(updatedSquare);
                } else {
                    newBoxes.push(currentSquare);
                }
            }

            return newBoxes;
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
