import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Routes from './Routes.jsx';
import '../assets/sass/style.scss';
import setAuthorizationToken from '../utils/setAuthorizationToken';
import ConfigureStore from '../store/configureStore';

/* eslint-disable no-undef */
/* eslint-disable no-multi-assign */
window.jQuery = window.$ = jQuery;

const store = ConfigureStore();

if (localStorage.jwtToken) {
  setAuthorizationToken(localStorage.jwtToken);
  // store.dispatch(getCurrentUser());
}


const app = document.getElementById('app');

ReactDOM.render(
  <Provider store={store}>
    <div> <Routes /> </div>
  </Provider>,
  app
);
