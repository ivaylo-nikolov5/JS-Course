import React from "react";
import Card from "./components/Card";
import Navbar from "./components/Navbar";
import SecondSection from "./components/SecondSection";
import "./style.css";
import data from "./data";

function App() {

    const cards = data.map(item => {
        return (
            <Card
                key={item.key}
                {...item}
            />
        )
    })

    return (
        <div>
            <Navbar />
            <SecondSection />
            
            <div className="cards-list">
                {cards}
            </div>

        </div>
    )
}

export default App;