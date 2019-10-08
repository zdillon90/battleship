import React from 'react';
import ReactDOM from 'react-dom';
import { StoreProvider } from 'easy-peasy';
import * as firebase from 'firebase';
import store from './store';
import App from './App';
import * as serviceWorker from './serviceWorker';

const firebaseConfig = {
  apiKey: 'AIzaSyBAXSrRjyflBJQiECJ8J-ZMaKKGfV2H8FI',
  authDomain: 'battleship-d697e.firebaseapp.com',
  databaseURL: 'https://battleship-d697e.firebaseio.com',
  projectId: 'battleship-d697e',
  storageBucket: '',
  messagingSenderId: '623731397978',
  appId: '1:623731397978:web:d85fb6a20393432ff28f63',
  measurementId: 'G-4PNKHXTM92',
};
firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <StoreProvider store={store}>
    <App />
  </StoreProvider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
