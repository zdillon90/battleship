import React, { useState } from 'react';
import { StyledBlock } from './styles/StyledBlock';
import { StyledHitBlock } from './styles/StyledHitBlock';
import { StyledMissBlock } from './styles/StyledMissBlock';
import { SHIPS } from '../ships';

function Block({ type, clickable, ship, setUserTurn, compTurn }) {
  const [select, setSelect] = useState(null);
  const blockPressed = () => {
    console.log(type);
    if (type === 1) {
      console.log('hit');
      setSelect('hit');
    } else {
      setSelect('miss');
    }
    setUserTurn(false);
    compTurn();
  };

  switch (select) {
    case 'hit':
      return <StyledHitBlock />;
    case 'miss':
      return <StyledMissBlock />;
    default:
      return (
        <StyledBlock
          clickable={clickable}
          onClick={e => blockPressed(e.target.attributes.type.value)}
          type={type}
          color={ship === 'clear' ? SHIPS[type].color : '128, 128, 128'}
          // TODO Remove this switch
          // color="0, 162, 255"
          select={select}
          disabled={clickable !== true}
        />
      );
  }
}

export default Block;
