import React from 'react';
import { StyledBlock } from './styles/StyledBlock';
import { SHIPS } from '../ships';

const Block = ({ type, blockPressed, clickable }) => (
  <StyledBlock
    clickable={clickable}
    onClick={blockPressed}
    type={type}
    color={SHIPS[type].color}
  />
);

export default Block;
