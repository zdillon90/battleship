import React, { useState } from 'react';
import { StyledBlock } from './styles/StyledBlock';
import { StyledHitBlock } from './styles/StyledHitBlock';
import { SHIPS } from '../ships';

function Block({ type, clickable, ship }) {
  const [select, setSelect] = useState(null);
  const blockPressed = () => {
    console.log(type);
    if (type === 1) {
      console.log('hit');
      setSelect('hit');
    } else {
      setSelect('miss');
    }
  };

  switch (select) {
    case 'hit':
      return <StyledHitBlock />;
    default:
      return (
        <StyledBlock
          clickable={clickable}
          onClick={e => blockPressed(e.target.attributes.type.value)}
          type={type}
          color={ship === 'clear' ? SHIPS[type].color : '128, 128, 128'}
          // TODO Remove this switch
          select={select}
        />
      );
  }
  // <StyledHitBlock />
  // <StyledMissBlock />
  // Switch which block style is shown
}

export default Block;
