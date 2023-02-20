import React from "react";
import "../css/meme.css"

function Meme() {
    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "" 
    });

    

    console.log(meme);

    const [allMemeImages, setAllMemeImages] = React.useState([]);
    
    React.useEffect(function(){
            fetch("https://api.imgflip.com/get_memes")
                .then(res => res.json())
                .then(data => setAllMemeImages(data.data.memes));

        }, [])
        
        console.log(allMemeImages);
    
    function handleClick() {
        const memesArray = allMemeImages;
        let randomMeme = Math.trunc(Math.random() * 100 + 1);
        const url = memesArray[randomMeme].url;
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: url
        }))
    }

    function handleChange(event) {
        const {name, value} = event.target;
        setMeme(prevMeme => ({
            ...prevMeme,
            [name]: value
        }))
    }


    return (
        <div className="meme-body">
            <div className="meme-input">
                <input type="text" 
                className="meme-input-box"
                placeholder="Top text"
                name="topText"
                value={meme.topText}
                onChange={handleChange}
                >
                </input>
                <input type="text" 
                className="meme-input-box"
                placeholder="Bottom text"
                name="bottomText"
                value={meme.bottomText}
                onChange={handleChange}
                >
                    
                </input>
            </div>

            <div className="meme-generate">
                <button 
                    className="generateBtn"
                    onClick={handleClick}
                >Get a new meme image 🖼️</button>
            </div>

            <div className="meme">
                    <h2 className="meme--text top">{meme.topText}</h2>
                    <img className="meme--image" src={meme.randomImage}/>             
                    <h2 className="meme--text bottom">{meme.bottomText}</h2>   
            </div>
        </div>
    )
}

export default Meme;