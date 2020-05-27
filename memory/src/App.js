import React, { useState, useEffect } from 'react';
// import logo from './logo.svg';
import './App.css';
import CardComponent from "./CardComponent";
import cardData from "./cardData"

function App() {
  
  const[cards,setCardData] = useState(cardData)
  const[flipCount,setFlipCount] = useState(1)
  const[start, initGame] = useState(false)
  const[maxFlip, setMaxFlip] = useState(false)
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
    setFlipCount(flipCount + 1)
    console.log("FlipCount: " + flipCount)
    

    //changes isFlipped to true or false when clicked
    if(currentCard.isFlipped || !currentCard.isFlipped){
      (event.isFlipped = !event.isFlipped)
    }
/////////////////////////////////////////////////////////

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
console.log(secondCard)


  

   if(flipCount > 2){
      setMaxFlip(true)
      setFlipCount(1)
      setFirstCard([])
      setSecondCard([])

        
      

      if(flipCount === 3){
        
      if(firstCard.animal === secondCard.animal && firstCard.key != secondCard.key){
        setFlipCount(2)
        firstCard.isMatched = true
        secondCard.isMatched = true
        console.log("Match")
        setMaxFlip(false)
      }else{
        cards.forEach(element => !element.isMatched ? element.isFlipped = false : element.isFlipped = true)
      }
    }
    }else{setMaxFlip(false)}

  

// if(flipCount > 2){    

//   if(firstCard.animal === secondCard.animal){
//     setFlipCount(1)
//     setScore(+1)
//     setFirstCard([])
//     setSecondCard([])
//     setMaxFlip(false)
//     firstCard.isMatched = true
//     secondCard.isMatched = true
//     firstCard.picHere && secondCard.picHere != "https://i.ibb.co/3R5Cs3B/X.jpg"
//   }

// }
///////////////////////////////////////////////////////////////////

    // if(maxFlip){
    //   if(currentCard.animal === firstCard.animal){
    //     setFlipCount(1)
    //     setMaxFlip(false)
    //     currentCard.isMatched = true
    //     firstCard.isMatched = true
    //     console.log("Match")
    //   }else{
    //     cards.forEach(element => element.isFlipped = false)
    //   }
    //   setFlipCount(1)
    // }

    // setFirstCard(event)
    // console.log(firstCard)

 
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
          item.picHere = item.pic
          //  item.isMatched ? item.picHere = item.pic : item.picHere = item.pic
           :
            item.isMatched ? item.picHere = item.pic :

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




// if(flipCount > 2)
// {
//   setFlipCount(1) 
//   setMaxFlip(true)
  
//   if(maxFlips){
//     setFlipCount(1)
//   }else if(!firstCard.isMatched && !secondCard.isMatched && flipCount > 2){
//     cards.forEach(element => element.isFlipped = false)
//   }

// }else {
//   setMaxFlip(false)
// }


// var first  
// var second 

// if(flipCount === 1){
//    first = event
//    setFirstCard(first)

// }
// if(flipCount === 2){
//   second = event
//   setSecondCard(second)
// }

// console.log(firstCard)
// console.log(secondCard)


// // if(firstCard.animal === secondCard.animal){
// //   setFlipCount(1)

// //   console.log("match")
// //   }

// if(flipCount === 3){    

//   if(firstCard.animal === secondCard.animal){
//     setFlipCount(1)
//     setScore(+1)
//     firstCard.isMatched = true
//     secondCard.isMatched = true
//     firstCard.picHere && secondCard.picHere != "https://i.ibb.co/3R5Cs3B/X.jpg"
//   }

// }