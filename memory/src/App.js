import React, { useState } from 'react';
// import logo from './logo.svg';
import './App.css';
import CardComponent from "./CardComponent";
import cardData from "./cardData"

function App() {
  
  const[data,setData] = useState(cardData)
  const[flipCount, setFlipCount] = useState(0)
  // const[firstFlip,setFirstFlip] = useState([])

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

  function startGame(){
    const mixUp = shuffle(data)
    console.log(mixUp)
    setData(mixUp)

        setFlipCount(prev => prev + 1 )
        console.log(flipCount)

    // if(flipCount === 0){
    // const dataShuffle = shuffle(data)
    // console.log(dataShuffle)
    
  }
  
  function handleClick(event){

    // if(flipCount > 0){
    //   // darkSquares()
    //   // console.log(flipCount)
    //   // console.log(data[event].animal)
    // }

  }

  // function darkSquares(){
  //   const flipCheck = data[event].isFlipped
  //   const realPic = data[event].animal
  //   const x = 

  //   console.log(realPic,event)
    
  //   if(flipCheck){
  //    return realPic} 
  //    else {return x}
    
  // }



  // const xchecker =

    const cardList = data.map(item => <CardComponent key={item.key} handleClick={handleClick} item={item} imgLink={item.pic}
      animal={item.animal} />)


    return (
      <div className="App">
        <div className="row">
          <button className="col-sm-4"  onClick={()=> startGame()}>Start Game</button>
        </div>
        <div className="row">
          {cardList}
        </div>

      </div>
    )
  
}

export default App;

//"https://i.ibb.co/3R5Cs3B/X.jpg"