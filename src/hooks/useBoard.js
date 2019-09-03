import { useState } from 'react';
import { createBoard } from '../gameHelpers';

export const useBoard = () => {
  const [board, setBoard] = useState(createBoard());

  return [board, setBoard];
};
