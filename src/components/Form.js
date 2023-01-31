import memesData from '../memesData'
import { useState, useEffect } from 'react'

export default function Form() {
    const [meme, setMeme] = useState({
        memeURL: "https://i.imgflip.com/3oevdk.jpg",
        memeAlt: "Bernie I Am Once Again Asking For Your Support",
        topText: "",
        bottomText: ""
    })

    const [allMemes, setAllMemes] = useState(memesData)

    useEffect(function () {
        fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json())
            .then(data => setAllMemes(data))
            .then(console.log(allMemes.data.memes[0]))
    }, [])

    function handleChange(event) {
        const { name, value } = event.target

        setMeme(prevMeme => {
            return {
                ...prevMeme,
                [name]: value
            }
        })
    }

    function createMeme() {
        const memesArray = allMemes.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        const newURL = memesArray[randomNumber].url
        const newAlt = memesArray[randomNumber].name

        setMeme(prevMeme => {
            return {
                ...prevMeme,
                memeURL: newURL,
                memeAlt: newAlt,
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
                        value={meme.topText}
                        onChange={handleChange}
                    />
                    <input
                        type='text'
                        className="textBox"
                        name="bottomText"
                        placeholder="Bottom text"
                        value={meme.bottomText}
                        onChange={handleChange}
                    />
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