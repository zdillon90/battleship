import React from 'react';
import styled from 'styled-components';
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

  <div>
    {board.map(row => row.map((block, x) => <Block key={x} type={[0]} />))}
  </div>
);

export default Board;
