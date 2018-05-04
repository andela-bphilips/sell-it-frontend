/* eslint-disable max-len */
import axios from 'axios';

import { GET_PRODUCTS_SUCCESS, GET_PRODUCT_SUCCESS, GET_MY_PRODUCTS_SUCCESS, SUCCESS_MESSAGE, ERROR_MESSAGE } from './types';

const { apiBaseUrl } = process.env;

export const getProductsSuccess = products => ({
  type: GET_PRODUCTS_SUCCESS,
  products
});

export const getMyProductsSuccess = products => ({
  type: GET_MY_PRODUCTS_SUCCESS,
  products
});

export const getOneProductSuccess = product => ({
  type: GET_PRODUCT_SUCCESS,
  product
});
export const passSuccessMessage = message => ({
  type: SUCCESS_MESSAGE,
  message
});
export const passErrorMessage = message => ({
  type: ERROR_MESSAGE,
  message
});

export const createProduct = product => dispatch => axios.post(`${apiBaseUrl}/product`, product)
  .then((response) => {
    dispatch(passSuccessMessage(response.data.data.message));
  })
  .catch((error) => {
    console.log(error.response.data.data.message);
    throw dispatch(passErrorMessage('An error occured. Please check the form and try again.'));
  });

export const getProducts = (search) => dispatch => axios.get(`${apiBaseUrl}/products?search=${search}&`)
  .then((response) => {
    dispatch(getProductsSuccess(response.data.data));
  })
  .catch((error) => {
    console.log(error);
    throw dispatch(passErrorMessage('An error occured.'));
  });

export const getProduct = slug => dispatch => axios.get(`${apiBaseUrl}/product?slug=${slug}`)
  .then((response) => {
    dispatch(getOneProductSuccess(response.data.data.product));
  })
  .catch((error) => {
    console.log(error);
    throw dispatch(passErrorMessage('An error occured.'));
  });

export const getMyProducts = (status='') => dispatch => axios.get(`${apiBaseUrl}/my_products?status=${status}`)
  .then((response) => {
    dispatch(getProductsSuccess(response.data.data));
  })
  .catch((error) => {
    console.log(error);
    throw dispatch(passErrorMessage('An error occured.'));
  });
