import React from "react";
import "../css/meme.css"
import memesData from "../memesData";

function Meme() {
    function handleClick() {
        let randomMeme = Math.trunc(Math.random() * 100 + 1);
        document.querySelector(".memeImage").src = memesData.data.memes[randomMeme].url;
    }


    return (
        <div className="meme-body">
            <div className="meme-input">
                <input type="text" 
                className="meme-input-box"
                placeholder="Top text">
                </input>
                <input type="text" 
                className="meme-input-box"
                placeholder="Bottom text">
                </input>
            </div>

            <div className="meme-generate">
                <button 
                    className="generateBtn"
                    onClick={handleClick}
                >Get a new meme image 🖼️</button>
            </div>

            <div className="memeImageContainer">
                <img className="memeImage" src=""/>
            </div>
        </div>
    )
}

export default Meme;