import React from "react";
import "../css/meme.css"

function Meme() {
    return (
        <div className="meme-body">
            <div className="meme-input">
                <input type="text" className="meme-input-box"></input>
                <input type="text" className="meme-input-box"></input>
            </div>

            <div className="meme-generate">
                <button className="generateBtn">Get a new meme image 🖼️</button>
            </div>
        </div>
    )
}

export default Meme;