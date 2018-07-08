/* eslint-disable max-len */
import axios from 'axios';

import {
  GET_MY_ORDERS_SUCCESS, SUCCESS_MESSAGE, ERROR_MESSAGE, CANCEL_ORDER_SUCCESS,
  GET_RECEIVED_ORDERS_SUCCESS, PROCESS_ORDER_SUCCESS
} from './types';

const { apiBaseUrl } = process.env;

export const getMyOrdersSuccess = payload => ({
  type: GET_MY_ORDERS_SUCCESS,
  payload
});

export const getReceivedOrdersSuccess = payload => ({
  type: GET_RECEIVED_ORDERS_SUCCESS,
  payload
});

export const cancelOrderSuccess = order => ({
  type: CANCEL_ORDER_SUCCESS,
  order
});

export const processOrderSuccess = order => ({
  type: PROCESS_ORDER_SUCCESS,
  order
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
    throw dispatch(passErrorMessage(error.response.data.data.message));
  });

export const getMyOrders = (orderStatus = '') => dispatch => axios.get(`${apiBaseUrl}/all_orders?status=${orderStatus}`)
  .then((response) => {
    dispatch(getMyOrdersSuccess(response.data.data));
    dispatch(passSuccessMessage(response.data.data.message));
  })
  .catch((error) => {
    throw dispatch(passErrorMessage(error.response.data.data.message));
  });

export const getReceivedOrders = (orderStatus = '') => dispatch => axios.get(`${apiBaseUrl}/received_orders?status=${orderStatus}`)
  .then((response) => {
    dispatch(getReceivedOrdersSuccess(response.data.data));
    dispatch(passSuccessMessage(response.data.data.message));
  })
  .catch((error) => {
    throw dispatch(passErrorMessage(error.response.data.data.message));
  });

export const processOrder = orderData => dispatch => axios.put(`${apiBaseUrl}/sell_it`, orderData)
  .then((response) => {
    dispatch(processOrderSuccess(response.data.data.order));
    dispatch(passSuccessMessage(response.data.data.message));
  })
  .catch((error) => {
    throw dispatch(passErrorMessage(error.response.data.data.message));
  });

export const cancelOrder = orderData => dispatch => axios.put(`${apiBaseUrl}/cancel_order`, { order_id: orderData.id })
  .then((response) => {
    dispatch(cancelOrderSuccess(orderData));
    dispatch(passSuccessMessage(response.data.data.message));
  })
  .catch((error) => {
    throw dispatch(passErrorMessage(error.response.data.data.message));
  });
