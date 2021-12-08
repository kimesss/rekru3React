import './App.css';
import {useEffect, useState} from "react";

function App() {
    const [randomUserData, setRandomUserData] = useState([])
    const [prev, setPrev] = useState([])
    // const [click, setClick] = useState(1)

    function dataHandler() {
        let i = Math.floor(Math.random()*102)
        fetch("https://gist.githubusercontent.com/natebass/b0a548425a73bdf8ea5c618149fe1fce/raw/f4231cd5961f026264bb6bb3a6c41671b044f1f4/quotes.json")
            .then(res => res.json()).then(res => setRandomUserData(res.filter(el => el == res[i])))
        prev.push(randomUserData)
        console.log(prev)
    }
    // window.addEventListener("load", dataHandler)

    const backToPrev = () =>  {
        if (prev.length - 1 < 0)
            return;
        else{

        setRandomUserData(prev[prev.length - 1])
        prev.pop()}
    }


   const quote = randomUserData.map(el => {
        return <p>{el.quote}</p>
    })
    const author = randomUserData.map(el => {
        return <p>{el.author}</p>
    })

  return (
        <div>
    <button className="App" onClick={dataHandler}>
Random Quotes
    </button>
            <button onClick={backToPrev}> Back </button>
            <div>
                {randomUserData ? quote : null}
            </div>
            <div>
                {randomUserData ? author : null}
            </div>
        </div>
  );
}

export default App;
