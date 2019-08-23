import React from 'react';
import { StyledBlock } from './styles/StyledBlock';
import { SHIPS } from '../ships';

const Block = ({ type }) => (
  <StyledBlock type={type} color={SHIPS[type].color}>
    Block
  </StyledBlock>
);

export default Block;

// const coloredBlock = styled.div`
//   display: table-cell;
//   background-color: rgba(255, 255, 255, 0.8);
//   border: 1px solid rgba(0, 0, 0, 0.8);
//   font-size: 40px;
//   text-align: center;
//   border-width: thin;
//   padding-left: 10px;
//   padding-right: 10px;
// `;
