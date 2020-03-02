import React from 'react';
import { StyledBoard } from './styles/StyledBoard';
import CompBlock from './CompBlock';
import { StyledHitBlock } from './styles/StyledHitBlock';
import { StyledMissBlock } from './styles/StyledMissBlock';

function CompBoard({ board, clickable, compPickedBlocks }) {
  console.log(compPickedBlocks);
  return (
    <StyledBoard width={board[0].length} height={board.length}>
      {board.map((row, i) =>
        row.map((block, x) => (
          <CompBlock
            clickable={clickable}
            row={i}
            col={x}
            key={x}
            type={block[0]}
            ship={block[1]}
            compPickedBlocks={compPickedBlocks}
          />
        ))
      )}
    </StyledBoard>
  );
}

export default CompBoard;
