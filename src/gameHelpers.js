export const BOARD_WIDTH = 10;
export const BOARD_HEIGHT = 10;

export const createBoard = () =>
  Array.from(Array(BOARD_HEIGHT), () =>
    new Array(BOARD_WIDTH).fill([0, 'clear'])
  );
