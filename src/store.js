import { createStore, action } from 'easy-peasy';

const shipsModel = {
  ships: {
    shipList: [],
    addShip: action((state, payload) => {
      state.shipList.push(payload);
    }),
  },
};

const store = createStore(shipsModel);

export default store;
