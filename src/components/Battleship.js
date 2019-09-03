import React, { useState } from 'react';

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
  const [gameOver, setGameOver] = useState(false);
  const [board, setBoard] = useBoard();

  const startGame = () => {
    console.log('Start Game');
    // setBoard(createBoard());
  };

  const clickBlock = () => {
    console.log('Block Pressed');
  };

  return (
    <StyledBattleshipWrapper>
      <StyledBattleship>
        <Board board={board} blockPressed={clickBlock} />
        <aside>
          {gameOver ? (
            <Display gameOver={gameOver} text="Game Over" />
          ) : (
            <div>
              <Display text="Status" />
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
