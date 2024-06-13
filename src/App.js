import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

import DiceImage1 from './images/dice1.png'
import DiceImage2 from './images/dice2.png'
import DiceImage3 from './images/dice3.png'
import DiceImage4 from './images/dice4.png'
import DiceImage5 from './images/dice5.png'
import DiceImage6 from './images/dice6.png'



function App() {
  var dices=[
    DiceImage1,
    DiceImage2,
    DiceImage3,
    DiceImage4,
    DiceImage5,
    DiceImage6
  ]

  const [image1, setNewImage] = useState(dices[0])
  const [image2, setNewImage2] = useState(dices[5])


  const rollDice = () => {
    // Function that generates random number
    var num1 = Math.floor(Math.random() * 6)
    var num2 = Math.floor(Math.random() * 6)
    
    
    setNewImage(dices[num1])
    setNewImage2(dices[num2])

    
    alert('You rolled a ' + (num1 + 1) + ' and ' + (num2 + 1))
  };


  return (
    <div className="App">
      <center>
        <h1>Dice Roller</h1>
        <div className='container'>
          <img className='square' src={image1} alt='Dice 1'></img>
          <div style={{width: '5px', display: 'inline-block'}}></div>
          <img className='square' src={image2} alt='Dice 2'></img>
        </div>
        <button type="button" class="btn btn-outline-primary" onClick={rollDice}>Roll Dice</button>
      </center>
    </div>
  );
}

export default App;
