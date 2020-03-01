import React, { useState } from 'react';
import { StyledBlock } from './styles/StyledBlock';
import { StyledHitBlock } from './styles/StyledHitBlock';
import { StyledMissBlock } from './styles/StyledMissBlock';
import { SHIPS } from '../ships';

function CompBlock({ type, clickable, ship }) {
  return (
    <StyledBlock
      clickable={clickable}
      type={type}
      color={ship === 'clear' ? SHIPS[type].color : '128, 128, 128'}
      // TODO Remove this switch ^
      // color="0, 162, 255"
      disabled={clickable !== true}
    />
  );
}

export default CompBlock;
