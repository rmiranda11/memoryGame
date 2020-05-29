import React, { useState, useEffect } from 'react';
// import logo from './logo.svg';
import './App.css';
import CardComponent from "./CardComponent";
import cardData from "./cardData"

function App() {

  const [cards, setCardData] = useState(cardData)
  const [flipCount, setFlipCount] = useState(0)
  const [start, initGame] = useState(false)
  const [maxFlip, setMaxFlip] = useState(false)
  const [firstCard, setFirstCard] = useState([])
  const [secondCard, setSecondCard] = useState([])
  const [score, setScore] = useState(0)
  const [totalFlips, setTotal] = useState(0)



  function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (0 !== currentIndex) {

      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  }


  const startGame = () => {

    // when startGame is pressed you shuffle cards

    shuffle(cards)

    // initialize start of game
    initGame(true)


  }


  useEffect(() => {


  })


  function handleClick(event) {

    let currentCard = event
    setFlipCount(flipCount + 1)
    console.log("FlipCount: " + flipCount)

    setTotal(totalFlips + 1)
    // console.log(totalFlips)


    //changes isFlipped to true or false when clicked
    if (currentCard.isFlipped || !currentCard.isFlipped) {
      (event.isFlipped = !event.isFlipped)
    }
    /////////////////////////////////////////////////////////

    var first
    var second

    if (flipCount === 0) {
      first = event
      setFirstCard(first)

    }
    if (flipCount === 1) {
      second = event
      setSecondCard(second)
    }

    console.log(firstCard)
    console.log(secondCard)




    if (flipCount > 1 ) {
      flipCount !== 2
      setMaxFlip(true)
      setFlipCount(flipCount-1)
      // setFirstCard([])
      // setSecondCard([])

      // if first animal is equal to second animal and keys are not the same then change 
      // isMatched value to true
      if (firstCard.animal === secondCard.animal && firstCard.key !== secondCard.key) {
        
        setFlipCount(flipCount - 1)
        setMaxFlip(false)

        firstCard.isMatched = true
        secondCard.isMatched = true


      

        if (firstCard.isMatched && secondCard.isMatched) {
          setFlipCount(flipCount-1)
          // setMaxFlip(false)
          // console.log("Matched")s

        }

        
        // if(currentCard.isMatched === secondCard.isMatched && flipCount === 1){
        //   setFlipCount(flipCount -1)
        // }

      } else {
        setFlipCount(0)

        cards.forEach(element => !element.isMatched ? element.isFlipped = false : element.isFlipped = true)
      }

 
      ///////////////////////////////////////////////////////////////////////////


      //controls score
      const rndNum = Math.round(+1000 / totalFlips)
      setScore(rndNum + score)


    } else {
      setMaxFlip(false)
    }


    ///////////////////////////////////////////////////////////////////


  } //end handleClick



  const cardList = cardData.map(item =>
    <CardComponent
      key={item.key}
      handleClick={start ? handleClick : null}
      item={item}
      imgLink={

        // if its flipped and start button pressed and max flips havent maxed yet
        item.isFlipped && start && !maxFlip
          ?
          item.picHere = item.pic
          //  item.isMatched ? item.picHere = item.pic : item.picHere = item.pic
          :
          item.isMatched ? item.picHere = item.pic :

            item.picHere = "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/e4175c3f-297e-48be-8d30-8480016829c7/d6dlsyg-52f89407-773a-464f-93d3-4648cc91f3fb.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvZTQxNzVjM2YtMjk3ZS00OGJlLThkMzAtODQ4MDAxNjgyOWM3XC9kNmRsc3lnLTUyZjg5NDA3LTc3M2EtNDY0Zi05M2QzLTQ2NDhjYzkxZjNmYi5qcGcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.DbrXxjuDy1GCL4bWW-REB40nCLH2ZBz39FsChuxb_nE"
      }

      animal={item.animal}
      matched={item.isMatched}
      flipped={item.isFlipped}
    />)


  return (
    <div className="App"> <h1 className="title">Galaxy Memory</h1>

      <div className="row d-flex justify-content-center">
        <button className="col-sm-3 btn btn-info " type="button" disabled={start} onClick={startGame}>Start Game</button>
      </div>
      <div className="d-flex justify-content-center">
        <h2 className="col-sm-3 " style={{ color: "white" }}>Score: {score}</h2>
      </div>
      <div className="row d-flex justify-content-center display">
        {cardList}
      </div>

    </div>
  )

}

export default App;

// "https://i.ibb.co/3R5Cs3B/X.jpg"
