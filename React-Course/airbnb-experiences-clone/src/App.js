import React from "react";
import Card from "./components/Card";
import Navbar from "./components/Navbar";
import SecondSection from "./components/SecondSection";
import "./style.css";
import katieZaferes from "./images/katie-zaferes.png";

function App() {
    return (
        <div>
            <Navbar />
            <SecondSection />
            <Card 
                img={katieZaferes}
                rating={"5.0"}
                reviewCount={6}
                title="Life Lessons with Katie Zaferes"
                price={136}
                country="USA"
            />
        </div>
    )
}

export default App;