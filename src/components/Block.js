import React from 'react';
import { StyledBlock } from './styles/StyledBlock';
import { SHIPS } from '../ships';

const Block = ({ type }) => (
  <StyledBlock type={type} color={SHIPS[type].color} />
);

export default Block;
