import React from "react"; 
import Contact from "./components/Contact";
import "./style.css"
import firstCat from "./images/first-cat.jpg";
import secondCat from "./images/second-cat.jpg";
import thirdCat from "./images/third-cat.jpg";
import fourthCat from "./images/fourth-cat.jpg";


function App() {
    return (
        <div>
            <div className="main-container">
                <Contact 
                    img={firstCat}
                    name="Mr.Whiskerson"
                    phoneNumber="(212) 555-1234"
                    email="mr.whiskaz@catnap.meow"
                />
                <Contact 
                    img={secondCat}
                    name="Fluffykins"
                    phoneNumber="(212) 555-2345"
                    email="fluff@me.com"
                />
                <Contact 
                    img={thirdCat}
                    name="Felix"
                    phoneNumber="(212) 555-4567"
                    email="thecat@hotmail.com"
                />
                <Contact 
                    img={fourthCat}
                    name="Pumpkin"
                    phoneNumber="(0800) CAT KINK"
                    email="pumpkin@scrimba.com"
                />
            </div>
            
        </div>
    )
}

export default App;