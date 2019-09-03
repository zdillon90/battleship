import React from 'react';

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
  return (
    <StyledBattleshipWrapper>
      <StyledBattleship>
        <Board board={createBoard()} />
        <aside>
          <div>
            <Display text="Status" />
            <Display text="Score" />
          </div>
          <StartButton />
        </aside>
      </StyledBattleship>
    </StyledBattleshipWrapper>
  );
}

export default Battleship;
