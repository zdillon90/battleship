import React from 'react';
import styled from 'styled-components';
import { StyledBoard } from './styles/StyledBoard';

import Block from './Block';

const Board = ({ board }) => (
  // const Container = styled.div`
  //   display: table;
  //   background-color: #2196f3;
  //   padding: 10px;
  // `;

  // const Row = styled.div`
  //   display: table-row;
  // `;

  <StyledBoard width={board[0].length} height={board.length}>
    {board.map(row => row.map((block, x) => <Block key={x} type={[0]} />))}
  </StyledBoard>
);

export default Board;
