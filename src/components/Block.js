import React from 'react';
import { StyledBlock } from './styles/StyledBlock';
import { SHIPS } from '../ships';

const Block = ({ type, blockPressed, clickable, ship }) => (
  <StyledBlock
    clickable={clickable}
    onClick={e => blockPressed(e.target.attributes.type.value)}
    type={type}
    color={ship === 'clear' ? SHIPS[type].color : '128, 128, 128'}
  />
);

export default Block;
