import React from 'react';
import { StyledBoard } from './styles/StyledBoard';

import Block from './Block';

const Board = ({ board, blockPressed }) => (
  <StyledBoard width={board[0].length} height={board.length}>
    {board.map(row =>
      row.map((block, x) => (
        <Block blockPressed={blockPressed} key={x} type={[0]} />
      ))
    )}
  </StyledBoard>
);

export default Board;
