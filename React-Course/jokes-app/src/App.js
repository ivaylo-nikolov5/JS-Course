import React from "react";
import Joke from "./Joke";

function App() {
    return (
        <div>
            <Joke 
            setup="Why did the tomato turn red?" 
            punchline="Because it saw the salad dressing!"
            />
            <Joke 
            setup="Why don’t scientists trust atoms?" 
            punchline="Because they make up everything."
            />
            <Joke 
            setup="Why did the scarecrow win an award?" 
            punchline="Because he was outstanding in his field."
            />
            <Joke 
            setup="What do you call a lazy kangaroo?" 
            punchline="A pouch potato."
            />
            <Joke 
            setup="Why did the coffee file a police report?" 
            punchline="It got mugged."
            />
        </div>
    )
}

export default App;