/* eslint-disable max-len */
import axios from 'axios';

import { SUCCESS_MESSAGE, ERROR_MESSAGE } from './types';

const { apiBaseUrl } = process.env;

export const passSuccessMessage = message => ({
  type: SUCCESS_MESSAGE,
  message
});
export const passErrorMessage = message => ({
  type: ERROR_MESSAGE,
  message
});

export const placeOrder = orderData => dispatch => axios.post(`${apiBaseUrl}/order`, orderData)
  .then((response) => {
    dispatch(passSuccessMessage(response.data.data.message));
  })
  .catch((error) => {
    console.log(error.response.data.data.message);
    throw dispatch(passErrorMessage(error.response.data.data.message));
  });
