import { createStore, action } from 'easy-peasy';

const shipsModel = {
  shipOptions: [],
  addShip: action((state, payload) => {
    state.shipOptions.push(payload);
  }),
};

const storeModel = {
  ships: shipsModel,
};

const store = createStore(storeModel);

export default store;
