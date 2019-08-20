import React from 'react';

import { createBoard } from '../gameHelpers';

// Components
import Board from './Board';

function Battleship() {
  return (
    <div>
      <Board board={createBoard()} />
    </div>
  );
}

export default Battleship;
