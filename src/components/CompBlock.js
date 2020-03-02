import React, { useState } from 'react';
import { StyledBlock } from './styles/StyledBlock';
import { StyledHitBlock } from './styles/StyledHitBlock';
import { StyledMissBlock } from './styles/StyledMissBlock';
import { SHIPS } from '../ships';

function CompBlock({ type, clickable, ship, row, col, compPickedBlocks }) {
  // const [check, setCheck] = useState(null);
  const isEqual = (obj1, obj2) => {
    const obj1Keys = Object.keys(obj1);
    const obj2Keys = Object.keys(obj2);

    if (obj1Keys.length !== obj2Keys.length) {
      return false;
    }

    for (const objKey of obj1Keys) {
      if (obj1[objKey] !== obj2[objKey]) {
        return false;
      }
    }

    return true;
  };

  const coordinateCheck = { row, col };
  let check = false;
  // ^^^ Every time that this loops through it resets
  compPickedBlocks.forEach(compBlock => {
    // setCheck(isEqual(compBlock, coordinateCheck));
    check = isEqual(compBlock, coordinateCheck);
    console.log(check);
  });
  if (check && type === 1) {
    return <StyledHitBlock />;
  }
  if (check && type === 0) {
    return <StyledMissBlock />;
  }
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
