import React from 'react';
import { StyledBoard } from './styles/StyledBoard';
import CompBlock from './Block';
import { StyledHitBlock } from './styles/StyledHitBlock';
import { StyledMissBlock } from './styles/StyledMissBlock';

function CompBoard({ board, clickable, compPickedBlocks }) {
  console.log(compPickedBlocks);

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

  return (
    <StyledBoard width={board[0].length} height={board.length}>
      {board.map((row, i) =>
        row.map(function(block, x) {
          // Need to make this into a object
          // Then test the object against each object in the list
          const coordinateCheck = { row: i, col: x };
          let check = false;
          compPickedBlocks.forEach(
            compBlock => (check = isEqual(compBlock, coordinateCheck))
          );
          // const objectsAreEqual = isEqual(coordinateCheck, forEach(compPickedBlocks));
          // Need to run a forEach for compPickedBlocks for each block
          if (check && block[0] === 1) {
            return <StyledHitBlock key={x} />;
          }
          if (check && block[0] === 0) {
            return <StyledMissBlock key={x} />;
          }
          return (
            <CompBlock
              clickable={clickable}
              key={x}
              type={block[0]}
              ship={block[1]}
            />
          );
        })
      )}
    </StyledBoard>
  );
}

export default CompBoard;
