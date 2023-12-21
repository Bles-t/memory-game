
import { useEffect, useState } from 'react';
import './App.css';
import SingleCard from './Components/SingleCard';
const cardImages = [
  { "src": "/img2/Array.png", matches: false, Key: 1 },
  { "src": "/img/Array.png", matches: false, Key: 1 },
  { "src": "/img2/Conditionals.png", matches: false, Key: 2 },
  { "src": "/img/Conditionals.png", matches: false, Key: 2 },
  { "src": "/img2/Function.png", matches: false, Key: 3 },
  { "src": "/img/Function.png", matches: false, Key: 3 },
  { "src": "/img2/Loops.png", matches: false, Key: 4 },
  { "src": "/img/Loops.png", matches: false, Key: 4 },
  { "src": "/img2/Objects.png", matches: false, Key: 5 },
  { "src": "/img/Objects.png", matches: false, Key: 5 },
  { "src": "/img2/Variable.png", matches: false, Key: 6 },
  { "src": "/img/Variable.png", matches: false, Key: 6 }
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


  }

  // compare 2 selcted cards
  // Remmber  this fires first when the component mounts
  // This is saying only if both choices are chose thats whenyou actually fire this function


  useEffect(() => {
    if (choiceOne && choiceTwo) {
      if (choiceOne.Key === choiceTwo.Key) {
        setCards(prevCards => {

          return prevCards.map(card => {

            if (card.Key === choiceOne.Key) {
              return { ...card, matches: true }
              // (matches === true)
            } else {
              return card
            }
          })
        })
        console.log('those cards match');
        resetTurn()
      } else {
        console.log('Those cards do not match');
        // setimes is a delayed option
        setTimeout(() => resetTurn(), 1000)
      }
    }
  }, [choiceOne, choiceTwo])



  // reset choices& increase turn
  const resetTurn = () => {
    setChoiceOne(null)
    setChoiceTwo(null)
    setTurns(prevTurns => prevTurns + 1)
  }



  console.log(cards, turns);

  return (

    <div className="App">
      <h1> Code Tomorrow</h1>
      <button onClick={shuffleCards} >New Game</button>

      <div className="card-grid">
        {cards.map(card => (
          <SingleCard key={card.id} card={card} handleChoice={handleChoice} flipped={card === choiceOne || card === choiceTwo || card.matches} />
        ))}
      </div>
    </div>

  );
}

export default App;
