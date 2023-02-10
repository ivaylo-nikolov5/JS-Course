import React from "react";
import Card from "./components/Card";
import Navbar from "./components/Navbar";
import SecondSection from "./components/SecondSection";
import "./style.css";

function App() {
    return (
        <div>
            <Navbar />
            <SecondSection />
            <Card />
        </div>
    )
}

export default App;