import React from 'react';
import { StyledStartButton } from './styles/StyledStartButton';

const StartButton = ({ callback, clicked }) => (
  <StyledStartButton disabled={clicked} onClick={callback}>
    Start Game
  </StyledStartButton>
);

export default StartButton;
