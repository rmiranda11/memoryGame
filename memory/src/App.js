import React, { useState, useEffect } from 'react';
// import logo from './logo.svg';
import './App.css';
import CardComponent from "./CardComponent";
import cardData from "./cardData"

function App() {
  
  const[cards,setCardData] = useState(cardData)
  const[flipCount,setFlipCount] = useState(1)
  const[start, initGame] = useState(false)
  const[maxFlips, setMaxFlip] = useState(false)
  const[firstCard, setFirstCard] = useState([])
  const[secondCard, setSecondCard] = useState([])
  const[score,setScore] = useState(0)



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
 

  
  function handleClick (event) {

    let currentCard = event
    // console.log(currentCard)

    //changes isFlipped to true or false when clicked
    if(currentCard.isFlipped || !currentCard.isFlipped){
      (event.isFlipped = !event.isFlipped)
    }


    // Counts Flips and resets if greater than 2
    setFlipCount(flipCount + 1)
    console.log(flipCount)

    if(flipCount > 2)
    {
      setFlipCount(1) 
      setMaxFlip(true)
      

      if(firstCard.isMatched){
        firstCard.picHere = event.pic
      }else{
        cards.forEach(element => element.isFlipped = false)
      }
    }else {
      setMaxFlip(false)
    }


    var first  
    var second 

    if(flipCount === 1){
       first = event
       setFirstCard(first)

    }
    if(flipCount === 2){
      second = event
      setSecondCard(second)
   

    }

    console.log(firstCard)
    console.log(second)


    if(firstCard.animal === secondCard.animal){
      firstCard.isMatched = true
      secondCard.isMatched = true
      console.log("match")
      }


 
  } //end handleClick




    const cardList = cardData.map(item => 
      <CardComponent 
        key={item.key} 
        handleClick={start ? handleClick: null} 
        item={item}       
        imgLink={

          // if its flipped and start button pressed and max flips havent maxed yet
          item.isFlipped && start 
          ?
           item.isMatched && maxFlips === 2 ? item.picHere = item.pic : item.pic
           :
            item.picHere = "https://i.ibb.co/3R5Cs3B/X.jpg"
          }

        animal={item.animal}
        matched={item.isMatched} 
        flipped={item.isFlipped}
    />)


    return (
      <div className="App">
        <div className="row">
          <button className="col-sm-4" disabled={start}onClick={startGame}>Start Game</button>
          <div><h2 style={{color:"white"}}>Score: {score}</h2></div>
        </div>
        <div className="row"
        >
          {cardList}
        </div>

      </div>
    )
  
}

export default App;

// "https://i.ibb.co/3R5Cs3B/X.jpg"