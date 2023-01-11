import memesData from '../memesData'
import { useState } from 'react'

export default function Form() {
    const [meme, setMeme] = useState({
        memeURL: "https://i.imgflip.com/3oevdk.jpg",
        memeAlt: "Bernie I Am Once Again Asking For Your Support",
        topText: '',
        bottomText: ''
    })

    function createMeme() {
        const memesArray = memesData.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        const newURL = memesArray[randomNumber].url
        const newAlt = memesArray[randomNumber].name
        const newTopText = document.getElementById('topInput').value
        const newBottomText = document.getElementById('bottomInput').value

        setMeme(prevMeme => {
            return {
                memeURL: newURL,
                memeAlt: newAlt,
                topText: newTopText,
                bottomText: newBottomText
            }
        })
    }
    return (
        <section id="memeForm">
            <form action="" id="form1">
                <div className="inputRow">
                    <input type='text' className="textBox" id='topInput' name="topInput" placeholder="Top text"></input>
                    <input type='text' className="textBox" id='bottomInput' name="bottomInput" placeholder="Bottom text"></input>
                </div>
            </form>

            <button onClick={createMeme} id="inputButton">Get a new meme image</button>
            <section className="imageHolder">
                <h2 id='topText'>{meme.topText}</h2>
                <img src={meme.memeURL} alt={meme.memeAlt} />
                <h2 id='bottomText'>{meme.bottomText}</h2>
            </section>
        </section>
    )
}