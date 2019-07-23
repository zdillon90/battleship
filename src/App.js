import React, { useState } from 'react';
import Board from './components/Board';

function App() {
  const [score, setScore] = useState(0);
  // const [hits, setHits] = useState(0);
  return (
    <div>
      <h1>Hello Battleship!</h1>
      <Board />
      <p>Score: {score} </p>
      <button type="button" onClick={() => setScore(score + 1)}>
        Click me
      </button>
    </div>
  );
}

export default App;
