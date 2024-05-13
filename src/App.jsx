import './App.css'
import { useState } from 'react';

const App = () => {
  const [currentNumber, setCurrentNumber] = useState(0); // 8 mai 20:35

  const increaseNumber = () => {
    setCurrentNumber(currentNumber + 1);
  };

  const decreaseNumber = () => {
    setCurrentNumber(currentNumber - 1);
  };

  const [nbReset, setNbReset] = useState(0);
  const resetNumber = () => {
    setCurrentNumber(0);
    setNbReset(nbReset + 1);
  };

  const innmultireNumberX2 = () => {
    setCurrentNumber(currentNumber * 2);
  };

  const impartireNumberLa2 = () => {
    setCurrentNumber(currentNumber / 2);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    const newNumber = parseInt(formData.get('new-number'));

    setCurrentNumber(newNumber);

    if (currentNumber < -100 || currentNumber > 100) {
      console.log("Numarul introdus nu se afla in intervalul [-100, 100]")
      // alert("Numarul introdus nu se afla in intervalul [-100, 100]") - asta nu functioneaza :((( )))
    }
  }

  return ( // JSX
    <div>
      {/*  event handler  */}
      <button className='action-button' onClick={increaseNumber} disabled={currentNumber >= 10 ? true : false}> Increase </button>
      <button onClick={decreaseNumber} disabled={currentNumber < 0 ? true : false}> Decrease </button>
      <button className={currentNumber === 0 ? 'no-display' : ''} onClick={resetNumber}> Reset </button>
      <button onClick={innmultireNumberX2}> * 2 </button>
      <button onClick={impartireNumberLa2}> / 2 </button>
      <p className={currentNumber >= 5 ? 'green-number' : ''}> {currentNumber} </p>
      <p>{nbReset} </p>

      <form onSubmit={handleSubmit}>
        <input type='number' name='new-number' />
      </form>
    </div>
  );
}

export default App

// Tema:
// - button pentru reset
// - button pentru inmultire cu 2
// - button pentru impartire cu 2
// - buttonul de decrease sa fie disabled cand cifra este mai mica decat zero
// - sa se afiseze un alert atunci cand cifra introdusa in input este in afara intervalului (-100, 100) si sa nu se modifice currentNumber
// - butonul de reset sa fie ascuns cand cifra curenta este zero
// - intr-un loc din pagina sa se afiseze numarul de resetari ale calculatorului ( de cate ori a fost apasat butonul de reset )