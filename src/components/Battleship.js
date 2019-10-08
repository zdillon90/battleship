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

  const checkShipPalcement = () => {
    // Check to see if block is filled first
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
    // For them not to overlap I haft to mark the blocks with the
    // current ship and do a check, if it hits a block on creation
    // it starts over on the entire placement.
    let startPositionRow = null;
    let startPositionColum = null;
    if (shipDirection === 'vertical') {
      startPositionRow = getRandomInt(0, 10 - blockNumber);
      startPositionColum = getRandomInt(0, 10);
    } else if (shipDirection === 'horizontal') {
      startPositionRow = getRandomInt(0, 10);
      startPositionColum = getRandomInt(0, 10 - blockNumber);
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
    const blockCheck = [];
    // change to a for loop
    for (let s = 0; s < shipNames.length; s += 1) {
      console.log(shipNames[s]);
      const ship = makeShip(shipNames[s]);
      // ship.clear = false;
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
            console.log(`Ship Row: ${shipBlock.row}`);
            console.log(`Check Row: ${blockCheck[i].row}`);
            console.log(`Ship Column: ${shipBlock.colum}`);
            console.log(`Check Column: ${blockCheck[i].colum}`);
            // shipBlock.clear = false;
            ship.blocked = true;
            // s -= 1;
            // console.log(shipBlock.clear);
            // If it fails don't remove it from the list
          } else {
            // If the ship is cleared to place, remove it from the list
            // ship.clear = true; // So all of the other bocks that are not colliding make this true
            // shipNames.slice(shipNames.pop(s));
          }
          // Need to loop through each of the blocks of the new ship in question and see if any
          // are not clear and if true than keep the ship on the list
        }
      }
      if (ship.blocked) {
        s -= 1;
      } else {
        addShip(ship);
      }
      // add to beginning of list and skip the numberOfBlocks
      // need to check all the ship blocks
      // Use block[1] style

      // console.log(blockCheck);
      console.log(ship);
      console.log(shipNames);
      // check ship here before adding it
    }
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
