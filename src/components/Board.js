import React from 'react';
import { StyledBoard } from './styles/StyledBoard';

import Block from './Block';

const Board = ({ board, clickable, setUserTurn, compTurn }) => (
  <StyledBoard width={board[0].length} height={board.length}>
    {board.map(row =>
      row.map((block, x) => (
        <Block
          clickable={clickable}
          key={x}
          type={block[0]}
          ship={block[1]}
          setUserTurn={setUserTurn}
          compTurn={compTurn}
        />
      ))
    )}
  </StyledBoard>
);

export default Board;
