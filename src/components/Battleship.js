import React, { useState } from 'react';

import { useStoreState, useStoreActions } from 'easy-peasy';
import { createBoard } from '../gameHelpers';

// Styled Components
import {
  StyledBattleshipWrapper,
  StyledBattleship,
} from './styles/StyledBattleship';

// Custom Hooks
import { useBoard } from '../hooks/useBoard';

// Components
import Board from './Board';
import Display from './Display';
import StartButton from './StartButton';

function Battleship() {
  // Game State
  const [gameOver, setGameOver] = useState(false);
  const [gameStarted, setGameStarted] = useState({
    status: false,
    statusText: 'Press Start',
  });
  const [board, setBoard] = useBoard();
  const ships = useStoreState(state => state.ships);
  const addShip = useStoreActions(actions => actions.ships.addShip);

  // Game functions
  const startGame = () => {
    // add the ships to state with random cords
    setGameStarted({
      status: true,
      statusText: 'Enemy is Placing Ships',
    });
    // Loop through the blocks here
    console.log(board);
    // random statement to choose between Vertical and Horizontal
    const chosenValue = Math.random() < 0.5 ? 'vertical' : 'horizontal';
    console.log(chosenValue);
    console.log(ships.Carrier);
    addShip({
      name: 'Carrier',
      blocks: ['C', 'C', 'C', 'C', 'C'],
      color: '128, 128, 128',
      positionRow: 5,
      positionColum: 6,
    });
    // If Horizontal than pick a starting row and then
    // Loop over the same number in that row
    // If Vertical pick a random row and length of ship to place.
    // The ship has a starting block (top for v, left for h)
    // The length of the ship must fit on the board from the start position
  };

  const clickBlock = () => {
    console.log('Block Pressed');
  };

  // Render
  return (
    <StyledBattleshipWrapper>
      <StyledBattleship>
        <Board
          clickable={gameStarted.status}
          board={board}
          blockPressed={clickBlock}
        />
        <aside>
          {gameOver ? (
            <Display gameOver={gameOver} text="Game Over" />
          ) : (
            <div>
              <Display text={`Status: ${gameStarted.statusText}`} />
              <Display text="Shots" />
              <Display text="Score" />
            </div>
          )}
          <StartButton callback={startGame} />
        </aside>
      </StyledBattleship>
    </StyledBattleshipWrapper>
  );
}

export default Battleship;
