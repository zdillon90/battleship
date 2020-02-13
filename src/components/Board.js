import React from 'react';
import { StyledBoard } from './styles/StyledBoard';

import Block from './Block';

function Board({
  board,
  clickable,
  setUserTurn,
  compTurn,
  boardType,
  compPickedBlocks,
}) {
  // Comp board needs to be it's own component

  console.log(compPickedBlocks.length);

  debugger;

  return (
    <StyledBoard width={board[0].length} height={board.length}>
      {board.map((row, i) =>
        row.map((block, x) => {
          if (compPickedBlocks.length >= 1) {
            if (
              // i === compPickedBlocks[x].col &&
              // x === compPickedBlocks[x].row &&
              boardType === 'comp'
            ) {
              return (
                <Block
                  clickable={clickable}
                  row={i}
                  col={x}
                  key={x}
                  type={block[0]}
                  ship={block[1]}
                  setUserTurn={setUserTurn}
                  compTurn={compTurn}
                  boardType={boardType}
                  // compPickedBlocks={compPickedBlocks}
                />
              );
            }
          }
          return (
            <Block
              clickable={clickable}
              row={i}
              col={x}
              key={x}
              type={block[0]}
              ship={block[1]}
              setUserTurn={setUserTurn}
              compTurn={compTurn}
              boardType={boardType}
              // compPickedBlocks={compPickedBlocks}
            />
          );
        })
      )}
    </StyledBoard>
  );
}

export default Board;
