import React, { useState } from 'react';
import { StyledBlock } from './styles/StyledBlock';
import { StyledHitBlock } from './styles/StyledHitBlock';
import { StyledMissBlock } from './styles/StyledMissBlock';
// import { SHIPS } from '../ships';

function Block({ type, clickable, setUserTurn, compTurn }) {
  const [select, setSelect] = useState(null);
  const blockPressed = () => {
    if (type === 1) {
      setSelect('hit');
    } else {
      setSelect('miss');
    }
    setUserTurn(false);
    // compTurn();
    setTimeout(compTurn, 2000);
    // ^ This can be a random number as well
  };

  if (select === 'hit') {
    return <StyledHitBlock />;
  }
  if (select === 'miss') {
    return <StyledMissBlock />;
  }
  return (
    <StyledBlock
      clickable={clickable}
      onClick={e => blockPressed(e.target.attributes.type.value)}
      type={type}
      // color={ship === 'clear' ? SHIPS[type].color : '128, 128, 128'}
      // TODO Remove this switch ^
      color="0, 162, 255"
      select={select}
      disabled={clickable !== true}
    />
  );
}

export default Block;
