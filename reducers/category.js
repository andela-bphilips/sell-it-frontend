import initialState from './initialState.js';

import { GET_ALL_CATEGORY_SUCCESS } from '../actions/types.js';

export default (state = initialState.category, action = {}) => {
  switch (action.type) {
    case GET_ALL_CATEGORY_SUCCESS:
      return action.category;

    default:
      return state;
  }
};
