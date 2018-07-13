/* eslint-disable max-len */
import axios from 'axios';

import { GET_USERS_SUCCESS, SUCCESS_MESSAGE, ERROR_MESSAGE } from './types.js';

const { apiBaseUrl } = process.env;

export const getUsersSuccess = users => ({
  type: GET_USERS_SUCCESS,
  users
});

export const passSuccessMessage = message => ({
  type: SUCCESS_MESSAGE,
  message
});
export const passErrorMessage = (message, statusCode = null) => ({
  type: ERROR_MESSAGE,
  message,
  statusCode
});

export const getUsers = () => dispatch =>
  axios.get(`${apiBaseUrl}/users`)
    .then((response) => {
      dispatch(getUsersSuccess(response.data.data.users));
    })
    .catch((error) => {
      // console.log(error.response.status);
      throw dispatch(passErrorMessage(error.response.data.data.message));
    });
