import { createStore, action } from 'easy-peasy';

const shipsModel = {
  Carrier: {
    blocks: ['C', 'C', 'C', 'C', 'C'],
    color: '128, 128, 128',
    positionRow: 0,
    positionColum: 0,
    changePosition: action((state, payload) => {
      state.positionRow = payload;
    }),
  },
  Battleship: {
    blocks: ['B', 'B', 'B', 'B'],
    color: '128, 128, 128',
    positionRow: 0,
    positionColum: 0,
  },
  Destroyer: {
    blocks: ['D', 'D', 'D'],
    color: '128, 128, 128',
    positionRow: 0,
    positionColum: 0,
  },
  Submarine: {
    blocks: ['S', 'S', 'S'],
    color: '128, 128, 128',
    positionRow: 0,
    positionColum: 0,
  },
  PatrolBoat: {
    blocks: ['P', 'P'],
    color: '128, 128, 128',
    positionRow: 0,
    positionColum: 0,
  },
};

const storeModel = {
  ships: shipsModel,
};

const store = createStore(storeModel);

export default store;
