import React, { useState } from 'react';
import { StyledBlock } from './styles/StyledBlock';
import { SHIPS } from '../ships';

function Block({ type, clickable, ship }) {
  const [select, setSelect] = useState(null);
  const blockPressed = id => {
    console.log(id);
    if (id === '1') {
      // console.log('Red');
      return 'Red';
    }
    // console.log('White');
    return 'White';
  };
  return (
    <StyledBlock
      clickable={clickable}
      onClick={e => blockPressed(e.target.attributes.type.value)}
      type={type}
      color={ship === 'clear' ? SHIPS[type].color : '128, 128, 128'}
      // TODO Remove this switch
      select={select}
    />
    // <StyledHitBlock />
    // <StyledMissBlock />
  );
}

export default Block;
