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
  const updateShipLocations = useStoreActions(
    actions => actions.ships.Carrier.changePosition
  );

  // Game functions
  const startGame = () => {
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
    updateShipLocations(6);
    console.log(ships.Carrier.positionRow);
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
