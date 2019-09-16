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

  // Game Functions
  const getRandomInt = (min, max) => {
    const newMin = Math.ceil(min);
    const newMax = Math.floor(max);
    return Math.floor(Math.random() * (newMax - newMin + 1)) + newMin;
  };

  const makeShip = name => {
    const shipDirection = Math.random() < 0.5 ? 'vertical' : 'horizontal';
    let blockNumber = null;
    if (name === 'Carrier') {
      blockNumber = 5;
    } else if (name === 'Battleship') {
      blockNumber = 4;
    } else if (name === 'Destroyer' || name === 'Submarine') {
      blockNumber = 3;
    } else if (name === 'Patrol Boat') {
      blockNumber = 2;
    }
    console.log(blockNumber);
    const blocks = [];
    for (let i = 0; i < blockNumber; i += 1) {
      blocks.push(name.substring(0, 1));
    }
    console.log(blocks);
    // For them not to overlap I haft to mark the blocks with the
    // current ship and do a check, if it hits a block on creation
    // it starts over on the entire placement.
    let positionRow = null;
    let positionColum = null;
    if (shipDirection === 'vertical') {
      positionRow = getRandomInt(0, 10 - blockNumber);
      positionColum = getRandomInt(0, 10);
    } else if (shipDirection === 'horizontal') {
      positionRow = getRandomInt(0, 10);
      positionColum = getRandomInt(0, 10 - blockNumber);
    }
    const ship = {
      name,
      blocks,
      color: '128, 128, 128',
      shipDirection,
      positionRow,
      positionColum,
    };
    return ship;
  };

  const startGame = () => {
    const shipNames = [
      'Carrier',
      'Battleship',
      'Destroyer',
      'Submarine',
      'Patrol Boat',
    ];
    setGameStarted({
      status: true,
      statusText: 'Enemy is Placing Ships',
    });
    shipNames.forEach(shipName => {
      const ship = makeShip(shipName);
      addShip(ship);
    });
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
