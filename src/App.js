
import { useState } from 'react';
import './App.css';
import SingleCard from './Components/SingleCard';
const cardImages = [
  { "src": "/img/Array Def.png" },
  { "src": "/img/Array.png" },
  { "src": "/img/Conditionals Def.png" },
  { "src": "/img/Conditionals.png" },
  { "src": "/img/Function Def.png" },
  { "src": "/img/Function.png" },
  { "src": "/img/Loops Def.png" },
  { "src": "/img/Loops.png" },
  { "src": "/img/Objects Def.png" },
  { "src": "/img/Objects.png" },
  { "src": "/img/Variable Def..png" },
  { "src": "/img/Variable.png" }
]

function App() {
  // setting State as empty array
  const [cards, setCards] = useState([])

  const [turns, setTurns] = useState(0)



  const shuffleCards = () => {
    // This is just spreading the current array and assgin it a variable
    const shuffledCards = [...cardImages]
      // this fires a function to each item in the arrray to randomize
      .sort(() => Math.random() - 0.5)
      // Taking each item from the new random array
      // and spreading it and it givng it a new random id whil returnig it as a object
      .map((card) => ({ ...card, id: Math.random() }))

    setCards(shuffledCards)
    setTurns(0)

  }

  console.log(cards, turns);

  return (


    <div className="App">
      <h1> Code Tomorrow</h1>
      <button onClick={shuffleCards} >New Game</button>

      <div className="card-grid">
        {cards.map(card => (
          <SingleCard key={card.id} card={card} />
        ))}
      </div>
    </div>

  );
}

export default App;
