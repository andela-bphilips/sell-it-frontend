import initialState from './initialState.js';

import { GET_ALL_CATEGORY_SUCCESS, GET_CATEGORIES_SUCCESS } from '../actions/types.js';

export const category = (state = initialState.category, action = {}) => {
  switch (action.type) {
    case GET_ALL_CATEGORY_SUCCESS:
      return action.category;

    default:
      return state;
  }
};

export const categories = (state = initialState.categories, action = {}) => {
  switch (action.type) {
    case GET_CATEGORIES_SUCCESS:
      return action.categories;

    default:
      return state;
  }
};
