import initialState from './initialState.js';

import {
  GET_YARDSALE_SUCCESS, GET_ALL_YARDSALES_SUCCESS,
  UPDATE_YARDSALE_SUCCESS
} from '../actions/types.js';

export const yardsale = (state = initialState.yardsale, action = {}) => {
  switch (action.type) {
    case GET_YARDSALE_SUCCESS:
      return action.yardsale;

    case UPDATE_YARDSALE_SUCCESS:
      return action.yardsale;

    default:
      return state;
  }
};

export const yardsales = (state = initialState.yardsales, action = {}) => {
  switch (action.type) {
    case GET_ALL_YARDSALES_SUCCESS:
      return action.yardsales;

    default:
      return state;
  }
};
