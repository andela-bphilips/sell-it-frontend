/* eslint-disable max-len */
import axios from 'axios';

import { GET_MY_ORDERS_SUCCESS, SUCCESS_MESSAGE, ERROR_MESSAGE } from './types';

const { apiBaseUrl } = process.env;

export const getMyOrdersSuccess = payload => ({
  type: GET_MY_ORDERS_SUCCESS,
  payload
});
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

export const getMyOrders = orderData => dispatch => axios.get(`${apiBaseUrl}/all_orders`, orderData)
  .then((response) => {
    dispatch(getMyOrdersSuccess(response.data.data));
    dispatch(passSuccessMessage(response.data.data.message));
  })
  .catch((error) => {
    console.log(error.response.data.data.message);
    throw dispatch(passErrorMessage(error.response.data.data.message));
  });
