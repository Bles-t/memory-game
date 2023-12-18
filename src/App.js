
import { useEffect, useState } from 'react';
import './App.css';
import SingleCard from './Components/SingleCard';
const cardImages = [
  { "src": "/img2/Array.png" },
  { "src": "/img/Array.png" },
  { "src": "/img2/Conditionals.png" },
  { "src": "/img/Conditionals.png" },
  { "src": "/img2/Function.png" },
  { "src": "/img/Function.png" },
  { "src": "/img2/Loops.png" },
  { "src": "/img/Loops.png" },
  { "src": "/img2/Objects.png" },
  { "src": "/img/Objects.png" },
  { "src": "/img2/Variable.png" },
  { "src": "/img/Variable.png" }
]

function App() {
  // setting State as empty array
  const [cards, setCards] = useState([])
  const [turns, setTurns] = useState(0)

  //Storing the choices a user makes into a state
  const [choiceOne, setChoiceOne] = useState(null)
  const [choiceTwo, setChoiceTwo] = useState(null)



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

  // handle a choice
  const handleChoice = (card) => {
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card)

    console.log(card);
  }

  // compare 2 selcted cards
  // Remmber  this fires first when the component mounts
  // This is saying only if both choices are chose thats whenyou actually fire this function
  useEffect(() => {
    if (choiceOne && choiceTwo) {
      if (choiceOne.src === choiceTwo.src) {

      }
    }
  }, [choiceOne, choiceTwo])

  console.log(cards, turns);

  return (

    <div className="App">
      <h1> Code Tomorrow</h1>
      <button onClick={shuffleCards} >New Game</button>

      <div className="card-grid">
        {cards.map(card => (
          <SingleCard key={card.id} card={card} handleChoice={handleChoice} />
        ))}
      </div>
    </div>

  );
}

export default App;
