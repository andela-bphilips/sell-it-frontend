import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Routes from './Routes.jsx';
import '../assets/sass/style.scss';
import { getCurrentUser } from '../actions/auth';
import setAuthorizationToken from '../utils/setAuthorizationToken';
import setUserLocation from '../utils/setUserLocation';
import ConfigureStore from '../store/configureStore';

/* eslint-disable no-undef */
/* eslint-disable no-multi-assign */
window.jQuery = window.$ = jQuery;

const store = ConfigureStore();

if (localStorage.jwtToken) {
  const location = localStorage.getItem('userLocation');
  setAuthorizationToken(localStorage.jwtToken, location);
  store.dispatch(getCurrentUser());
}

setUserLocation();

const app = document.getElementById('app');

ReactDOM.render(
  <Provider store={store}>
    <div> <Routes /> </div>
  </Provider>,
  app
);
