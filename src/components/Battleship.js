import React, { useState } from 'react';
import { createBoard } from '../gameHelpers';

// Styled Components
import {
  StyledBattleshipWrapper,
  StyledBattleship,
} from './styles/StyledBattleship';

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
  const [board, setBoard] = useState(createBoard());
  // TODO: Add a mode here for Salvo variation

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
    let startPositionRow = null;
    let startPositionColum = null;
    if (shipDirection === 'vertical') {
      startPositionRow = getRandomInt(0, 9 - blockNumber);
      startPositionColum = getRandomInt(0, 9);
    } else if (shipDirection === 'horizontal') {
      startPositionRow = getRandomInt(0, 9);
      startPositionColum = getRandomInt(0, 9 - blockNumber);
    }
    const blocks = [];
    let blockCount = 0;
    for (let i = 0; i < blockNumber; i += 1) {
      const block = {};
      block.letter = name.substring(0, 1);
      if (i === 0) {
        block.row = startPositionRow;
        block.colum = startPositionColum;
      } else if (i !== 0 && shipDirection === 'vertical') {
        block.row = startPositionRow + blockCount;
        block.colum = startPositionColum;
      } else if (i !== 0 && shipDirection === 'horizontal') {
        block.row = startPositionRow;
        block.colum = startPositionColum + blockCount;
      }
      blocks.push(block);
      blockCount += 1;
    }
    const ship = {
      name,
      blocks,
      color: '128, 128, 128',
      shipDirection,
      startPositionRow,
      startPositionColum,
    };
    return ship;
  };

  const placeShips = shipNames => {
    const shipObjects = [];
    const blockCheck = [];
    for (let s = 0; s < shipNames.length; s += 1) {
      console.log(shipNames[s]);
      const ship = makeShip(shipNames[s]);
      const currentShipLetter = shipNames[s].substring(0, 1);
      ship.blocks.forEach(block => {
        blockCheck.unshift(block);
      });
      for (let i = 0; i < blockCheck.length; i += 1) {
        for (let x = 0; x < ship.blocks.length; x += 1) {
          const shipBlock = ship.blocks[x];
          if (
            currentShipLetter !== blockCheck[i].letter &&
            shipBlock.row === blockCheck[i].row &&
            shipBlock.colum === blockCheck[i].colum
          ) {
            console.log('Block taken up');
            ship.blocked = true;
          }
        }
      }
      if (ship.blocked) {
        s -= 1;
      } else {
        shipObjects.push(ship);
      }
    }
    return shipObjects;
  };

  const routeShips = shipList => {
    console.log(board);
    console.log(shipList);
    const newBoard = createBoard();
    for (let s = 0; s < shipList.length; s += 1) {
      for (let b = 0; b < shipList[s].blocks.length; b += 1) {
        const blockRow = shipList[s].blocks[b].row;
        const blockColum = shipList[s].blocks[b].colum;
        newBoard[blockRow][blockColum] = [1, shipList[s].name];
      }
    }
    console.log(newBoard);
    setBoard(newBoard);
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
    const shipList = placeShips(shipNames);
    routeShips(shipList);
  };

  const clickBlock = id => {
    console.log('Block Pressed!', id);
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
          <StartButton clicked={gameStarted.status} callback={startGame} />
        </aside>
      </StyledBattleship>
    </StyledBattleshipWrapper>
  );
}

export default Battleship;
