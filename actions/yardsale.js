/* eslint-disable max-len */
import axios from 'axios';

import { GET_YARDSALE_SUCCESS, SUCCESS_MESSAGE, ERROR_MESSAGE } from './types.js';

const { apiBaseUrl } = process.env;

export const getYardsaleSuccess = yardsale => ({
  type: GET_YARDSALE_SUCCESS,
  yardsale
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

export const getYardsale = yardsaleType => dispatch =>
  axios.get(`${apiBaseUrl}/yardsale/${yardsaleType}`)
    .then((response) => {
      dispatch(getYardsaleSuccess(response.data.data.yard_sale));
    })
    .catch((error) => {
      console.log(error.response.status);
      throw dispatch(passErrorMessage(error.response.data.data.message, error.response.status));
    });

export const createYardsaleProduct = (yardsaleName, yardsaleData) => dispatch =>
  axios.post(`${apiBaseUrl}/yardsale/product?yard_sale_name=${yardsaleName}`, yardsaleData)
    .then((response) => {
      dispatch(passSuccessMessage(response.data.data.message));
    })
    .catch((error) => {
      console.log(error.response.status);
      throw dispatch(passErrorMessage(error.response.data.data.message, error.response.status));
    });
