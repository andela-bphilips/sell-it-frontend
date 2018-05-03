import initialState from './initialState.js';

import { ERROR_MESSAGE, SUCCESS_MESSAGE } from '../actions/types.js';

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case SUCCESS_MESSAGE:
      console.log(action.message);
      return action.message;
    case ERROR_MESSAGE:
      return action.message;
    default:
      return state;
  }
};
