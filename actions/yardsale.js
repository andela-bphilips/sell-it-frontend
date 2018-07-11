/* eslint-disable max-len */
import axios from 'axios';

import {
  GET_YARDSALE_SUCCESS, GET_YARDSALE_PRODUCTS_SUCCESS, UPDATE_YARDSALE_SUCCESS,
  SUCCESS_MESSAGE, ERROR_MESSAGE, GET_PRODUCT_SUCCESS
} from './types.js';

const { apiBaseUrl } = process.env;

export const getOneProductSuccess = product => ({
  type: GET_PRODUCT_SUCCESS,
  product
});
export const getYardsaleSuccess = yardsale => ({
  type: GET_YARDSALE_SUCCESS,
  yardsale
});
export const getYardsaleProductsSuccess = yardsaleData => ({
  type: GET_YARDSALE_PRODUCTS_SUCCESS,
  data: yardsaleData
});
export const updateYardsaleSuccess = yardsale => ({
  type: UPDATE_YARDSALE_SUCCESS,
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
      console.log(error.response);
      throw dispatch(passErrorMessage(error.response.data.data.message, error.response.status));
    });

export const getYardsaleProducts = (name, limit = 16, page = 1) => dispatch =>
  axios.get(`${apiBaseUrl}/yardsale/products?yard_sale_name=${name}&limit=${limit}&page=${page}`)
    .then((response) => {
      dispatch(getYardsaleProductsSuccess(response.data.data));
    })
    .catch((error) => {
      console.log(error.response.status);
      throw dispatch(passErrorMessage(error.response.data.data.message, error.response.status));
    });

export const getYardsaleProduct = slug => dispatch =>
  axios.get(`${apiBaseUrl}/yardsale/product?slug=${slug}`)
    .then((response) => {
      dispatch(getOneProductSuccess(response.data.data.product));
    })
    .catch((error) => {
      console.log(error.response.status);
      throw dispatch(passErrorMessage(error.response.data.data.message, error.response.status));
    });

export const createYardsaleProduct = (yardsaleName, yardsaleProductData) => dispatch =>
  axios.post(`${apiBaseUrl}/yardsale/product?yard_sale_name=${yardsaleName}`, yardsaleProductData)
    .then((response) => {
      dispatch(passSuccessMessage(response.data.data.message));
    })
    .catch((error) => {
      console.log(error.response.status);
      throw dispatch(passErrorMessage(error.response.data.data.message, error.response.status));
    });

export const createYardsale = yardsaleData => dispatch =>
  axios.post(`${apiBaseUrl}/yardsale`, yardsaleData)
    .then((response) => {
      dispatch(passSuccessMessage(response.data.data.message));
    })
    .catch((error) => {
      console.log(error.response.status);
      throw dispatch(passErrorMessage(error.response.data.data.message, error.response.status));
    });

export const editYardsale = (yardsaleName, yardsaleData) => dispatch =>
  axios.put(`${apiBaseUrl}/yardsale/${yardsaleName}`, yardsaleData)
    .then((response) => {
      dispatch(passSuccessMessage(response.data.data.message));
      dispatch(updateYardsaleSuccess(response.data.data.yardsale));
    })
    .catch((error) => {
      console.log(error.response.status);
      throw dispatch(passErrorMessage(error.response.data.data.message, error.response.status));
    });

export const bulkCreateYardsaleProduct = (yardsaleName, yardsaleData) => dispatch =>
  axios.post(`${apiBaseUrl}/yardsale/bulk/products?yard_sale_name=${yardsaleName}`, yardsaleData)
    .then((response) => {
      dispatch(passSuccessMessage(response.data.data.message));
    })
    .catch((error) => {
      console.log(error.response.status);
      throw dispatch(passErrorMessage(error.response.data.data.message, error.response.status));
    });

export const editYardsaleProduct = (yardsaleProductName, yardsaleProductData) => dispatch =>
  axios.put(`${apiBaseUrl}/yardsale/product?slug=${yardsaleProductName}`, yardsaleProductData)
    .then((response) => {
      dispatch(passSuccessMessage(response.data.data.message));
    })
    .catch((error) => {
      console.log(error.response.status);
      throw dispatch(passErrorMessage(error.response.data.data.message, error.response.status));
    });
