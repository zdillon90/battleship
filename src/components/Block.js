import React, { useState } from 'react';
import { StyledBlock } from './styles/StyledBlock';
import { StyledHitBlock } from './styles/StyledHitBlock';
import { StyledMissBlock } from './styles/StyledMissBlock';
import { SHIPS } from '../ships';

function Block({
  type,
  clickable,
  ship,
  setUserTurn,
  compTurn,
  row,
  col,
  boardType,
  compPickedBlocks,
}) {
  const [select, setSelect] = useState(null);
  const blockPressed = () => {
    if (type === 1) {
      setSelect('hit');
    } else {
      setSelect('miss');
    }
    setUserTurn(false);
    compTurn();
    // setTimeout(compTurn, 100);
    // ^ This can be a random number as well
  };

  // if (boardType === 'comp') {
  //   // console.log(row, col);
  //   // console.log(compPickedBlocks);
  //   // need to check to see if row is the first number in the object
  //   // and need to check to see if col is the second number in the object
  //   // const foundRow = compPickedBlocks.some(e => e.randRow === row);
  //   // const foundCol = compPickedBlocks.some(e => e.randCol === col);
  //   // if (foundRow === true && foundCol === true) {
  //   //   console.log(`Block found row: ${row} col: ${col}`);
  //   // }

  //   for (let i = 0; i < compPickedBlocks.length; i += 1) {
  //     // console.log(compPickedBlocks[i]);
  //     if (
  //       row === compPickedBlocks[i].row &&
  //       col === compPickedBlocks[i].col &&
  //       type === 0
  //     ) {
  //       console.log(`Block found "Miss" {row: ${row} col: ${col}}`);
  //       // setSelect('miss');
  //     } else if (
  //       row === compPickedBlocks[i].row &&
  //       col === compPickedBlocks[i].col &&
  //       type === 1
  //     ) {
  //       console.log(`Block found "Hit" {row: ${row} col: ${col}}`);
  //     } else {
  //       console.log('nothing');
  //     }
  //   }
  // }

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
      color={ship === 'clear' ? SHIPS[type].color : '128, 128, 128'}
      // TODO Remove this switch ^
      // color="0, 162, 255"
      select={select}
      disabled={clickable !== true}
    />
  );
}

export default Block;
