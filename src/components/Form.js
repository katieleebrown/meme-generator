import memesData from '../memesData'
import { useState } from 'react'

export default function Form() {
    const [memeURL, changeURL] = useState("https://i.imgflip.com/30b1gx.jpg")

    function getImage() {
        const memesArray = memesData.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        const newURL = memesArray[randomNumber].url

        console.log(newURL)

        changeURL(newURL)
    }
    return (
        <section id="memeForm">
            <form action="" id="form1">
                <div className="inputRow">
                    <input type='text' className="textBox" name="topInput" placeholder=""></input>
                    <input type='text' className="textBox" name="bottomInput" placeholder=""></input>
                </div>
            </form>

            <button onClick={getImage} id="inputButton">Get a new meme image</button>
            <section className="imageHolder">
                <img src={memeURL} />
            </section>
        </section>
    )
}