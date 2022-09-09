export default function Form() {
    function getImage() {

    }
    return (
        <section id="memeForm">
            <form action="" id="form1">
                <div className="inputRow">
                    <input type='text' className="textBox" name="topInput" placeholder=""></input>
                    <input type='text' className="textBox" name="bottomInput" placeholder=""></input>
                </div>
            </form>

            <button onClick={getImage} type='submit' id="inputButton" form="form1" value='Submit'>Get a new meme image</button>
            <section className="imageHolder">
                <img src="" />
            </section>
        </section>
    )
}