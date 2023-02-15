import React from "react";
import "../css/meme.css"
import memesData from "../memesData";

function Meme() {
    const memes = memesData.data.memes;
    const [image, setImage] = React.useState("")


    function handleClick() {
        let randomMeme = Math.trunc(Math.random() * 100 + 1);
        setImage(memes[randomMeme].url)
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
                <img className="memeImage" src={image}/>
            </div>
        </div>
    )
}

export default Meme;