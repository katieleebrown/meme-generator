import memesData from '../memesData'
import { useState } from 'react'

export default function Form() {
    const [meme, setMeme] = useState({
        memeURL: "https://i.imgflip.com/3oevdk.jpg",
        memeAlt: "Bernie I Am Once Again Asking For Your Support",
    })

    const [formText, setFormText] = useState({
        topText: "",
        bottomText: ""
    })

    function createMeme() {
        const memesArray = memesData.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        const newURL = memesArray[randomNumber].url
        const newAlt = memesArray[randomNumber].name

        setMeme(prevMeme => {
            return {
                memeURL: newURL,
                memeAlt: newAlt,
            }
        })
    }

    function updateText(event) {
        setFormText(prevFormText => {
            return {
                ...prevFormText,
                [event.target.name]: event.target.value
            }
        })
    }

    return (
        <section id="memeForm">
            <form action="" id="form1">
                <div className="inputRow">
                    <input
                        type='text'
                        className="textBox"
                        name="topText"
                        placeholder="Top text"
                        value={formText.topText}
                        onChange={updateText}
                    />
                    <input
                        type='text'
                        className="textBox"
                        name="bottomText"
                        placeholder="Bottom text"
                        value={formText.bottomText}
                        onChange={updateText}
                    />
                </div>
            </form>

            <button onClick={createMeme} id="inputButton">Get a new meme image</button>
            <section className="imageHolder">
                <h2 id='topText'>{formText.topText}</h2>
                <img src={meme.memeURL} alt={meme.memeAlt} />
                <h2 id='bottomText'>{formText.bottomText}</h2>
            </section>
        </section>
    )
}