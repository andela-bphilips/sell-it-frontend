import initialState from './initialState.js';

import { ERROR_MESSAGE, SUCCESS_MESSAGE } from '../actions/types.js';

export const message = (state = initialState.message, action = {}) => {
  switch (action.type) {
    case SUCCESS_MESSAGE:
      return action.message;
    case ERROR_MESSAGE:
      return action.message;
    default:
      return state;
  }
};

export const statusCode = (state = initialState.statusCode, action = {}) => {
  switch (action.type) {
    case ERROR_MESSAGE:
      if (action.statusCode) {
        return action.statusCode;
      }
      return state;

    default:
      return state;
  }
};
