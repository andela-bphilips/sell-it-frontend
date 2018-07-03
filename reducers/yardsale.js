import initialState from './initialState.js';

import { GET_YARDSALE_SUCCESS } from '../actions/types.js';

const yardsale = (state = initialState.yardsale, action = {}) => {
  switch (action.type) {
    case GET_YARDSALE_SUCCESS:
      return action.yardsale;

    default:
      return state;
  }
};

export default yardsale;
