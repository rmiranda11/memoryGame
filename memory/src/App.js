// import React, { useState, useEffect } from 'react';
// // import logo from './logo.svg';
// import './App.css';
// import CardComponent from "./CardComponent";
// import cardData from "./cardData"



// function App() {

//   const [cards, setCardData] = useState(cardData)
//   const [flipCount, setFlipCount] = useState(0)
//   const [flipCount2, setFlipCount2] = useState(0)
//   const [start, initGame] = useState(false)
//   const [maxFlip, setMaxFlip] = useState(false)
//   const [firstCard, setFirstCard] = useState([])
//   const [secondCard, setSecondCard] = useState([])
//   const [score, setScore] = useState(0)
//   const [totalFlips, setTotal] = useState(0)
//   const [timer, setTimer] = useState(2)
//   const [startClock, setClockStart] = useState(false)



//   function shuffle(array) {
//     var currentIndex = array.length, temporaryValue, randomIndex;

//     while (0 !== currentIndex) {

//       randomIndex = Math.floor(Math.random() * currentIndex);
//       currentIndex -= 1;

//       temporaryValue = array[currentIndex];
//       array[currentIndex] = array[randomIndex];
//       array[randomIndex] = temporaryValue;
//     }

//     return array;
//   }



//   const startGame = () => {

//     // when startGame is pressed you shuffle cards

//     shuffle(cards)

//     // initialize start of game
//     initGame(true)



//   }
  
//   useEffect(() =>{
//     if(startClock && timer > 0){
//     setTimeout(() => {
//       setTimer(time => time -1)
//     }, 1000)
//   }
//   if(timer === 0){
//     setTimer(2)
//     setClockStart(false)
//   }
//   },[timer, startClock])


//   // useEffect(() => {
//   //   if(firstCard.animal !== secondCard.animal){
//   //     setFlipCount(0)
//   //     cards.forEach(element => element.isFlipped = false)
//   //       // setTimeout(() => {
//   //       //   setTimer(time => time -1)
//   //       // }, 1000)
//   //   }
//   // },[firstCard, secondCard])




//   useEffect(() => {

//       if(flipCount > 1){
//       setMaxFlip(true)
          

//       // if first animal is equal to second animal and keys are not the same then change 
//       // isMatched value to true
//       if (firstCard.animal === secondCard.animal && firstCard.key !== secondCard.key) {

        
//         setFlipCount(0)
//         setMaxFlip(false)
//         setClockStart(false)


//         firstCard.isMatched = true
//         secondCard.isMatched = true

//         firstCard.isMatched && secondCard.isMatched ? setFlipCount(0) : setFlipCount(1)

//         // cards.forEach(element => !element.isMatched ? element.isFlipped = false : element.isFlipped = true)
//         cards.forEach(element => !element.isMatched ? element.isFlipped = false : element.isFlipped = true)

      
//       } 
//        if(firstCard.animal !== secondCard.animal) {
//         setClockStart(true)
//         setFlipCount(0)
//         setMaxFlip(false)

//         firstCard.isMatched = false
//         secondCard.isMatched = false
        
        
//         cards.forEach(element => element.isMatched ? element.isFlipped = true : element.isFlipped = false)
//         // setFlipCount(0)
//         // cards.forEach(element => 
//         //   {if(!element.isMatched && startClock){
//         //     element.isFlipped = false

//         //     }
//         //   }
//           // )  
//       }
    

 
//       ///////////////////////////////////////////////////////////////////////////


//     // }
//     } else {
//       setMaxFlip(false)
//       console.log("what")
//     }


//   },[timer,flipCount2])

//   // toggle = () => {

//   // }

//   // const but = () => {
//   //   setFlipCount(flipCount+1)
//   //   console.log(flipCount)
//   // }

//   function handleClick (event){

    
//   function GameScore() {

//     if(firstCard.isMatched && secondCard.isMatched){
//       let scoreCount = Math.round(10000 / flipCount2)
//       setScore(score => score + scoreCount)
//     }
//   }

//     setFlipCount2(flipCount2 => flipCount2 + 1)
//     GameScore()

//     let currentCard = event
//     setFlipCount(flipCount => flipCount + 1)
//     // console.log("FlipCount: " + flipCount)

//     setTotal(totalFlips + 1)
//     // console.log(totalFlips)


//     //changes isFlipped to true or false when clicked
    
//     if (currentCard.isFlipped || !currentCard.isFlipped) {
//       (event.isFlipped = !event.isFlipped)
//     }
//     /////////////////////////////////////////////////////////


//       if (flipCount === 0) {
//         setFirstCard(event)
//       }
//       // setFirstCard(event)

//       if (flipCount === 1) {
//         setSecondCard(event)
//       }
    

//     ///////////////////////////////////////////////////////////////////

//   } //end handleClicka


//   const cardList = cardData.map(item =>
//     <CardComponent
//       style={item.isMatched ?{boxShadow: ".3rem .3rem 25px blue",  border: ".1rem solid transparent", borderImage:"linear-gradient(to bottom right, #b827fc 0%, #2c90fc 25%, #b8fd33 50%, #fec837 75%, #fd1892 100%)" , borderImageSlice: "1"}: {boxShadow:".4rem .4rem 30px red"}}
//       key={item.key}
//       handleClick={start ? handleClick : null}
//       item={item}
//       disabled={item.isMatched ? true : false}
//       imgLink={

//         // if its flipped and start button pressed and max flips havent maxed yet
//         item.isFlipped && start && !maxFlip
//           ?
//           item.picHere = item.pic
//           :
//           item.isMatched ? item.picHere = item.pic : 

//             item.picHere = "https://cdn.shopify.com/s/files/1/1793/9427/products/PLAYDEAD_cardback.png?v=1559353487"
//       }

//       animal={item.animal}
//       matched={item.isMatched}
//       flipped={item.isFlipped}
//     />)

//     // console.log("FirstCard: ")
//     // console.log(firstCard)
//     // console.log("--------------------")
//     // console.log("SecondCard")
//     // console.log(secondCard)
//     // console.log("FlipCount: " + flipCount)
    
    
//   return (
//     <div className="App"> <h1 className="title">Galaxy Memory</h1>
//     <h1>Time: {timer}</h1>

//       <div className="row d-flex justify-content-center">
//         <button className="col-sm-3 btn btn-info " type="button" disabled={start} onClick={startGame}>Start Game</button>
//       </div>
//       <div className="d-flex justify-content-center">
//         <h2 className="col-sm-3 " style={{ color: "white" }}>Score: {score}</h2>
//       </div>
//       <div className="row d-flex justify-content-center display">
//         {cardList}
//       </div>

//     </div>
//   )

// }

// export default App;

// // "https://i.ibb.co/3R5Cs3B/X.jpg"
