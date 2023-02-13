import React from "react";
import Header from "./components/header.js";
import Separate from "./components/Separate.js"
import "./style.css"
import data from "./data.js"

function App() {
    const destinations = data.map(element => {
       return <Separate 
            id={element.id}
            element={element}
        />
    })



    return (
        <div>
            <Header />
            <div className="destinations-container">
                {destinations}
            </div>
      </div>
  )
}

export default App;
