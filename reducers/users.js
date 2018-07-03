import initialState from './initialState.js';

import { GET_USERS_SUCCESS } from '../actions/types.js';

const users = (state = initialState.users, action = {}) => {
  switch (action.type) {
    case GET_USERS_SUCCESS:
      return action.users;

    default:
      return state;
  }
};

export default users;
