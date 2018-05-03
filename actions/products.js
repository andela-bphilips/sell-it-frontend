import axios from 'axios';

import { SUCCESS_MESSAGE, ERROR_MESSAGE } from './types';

const { apiBaseUrl } = process.env;

export const passSuccessMessage = (message) => {
  return {
    type: SUCCESS_MESSAGE,
    message
  }
}
export const passErrorMessage = (message) => {
  return {
    type: ERROR_MESSAGE,
    message
  }
}

export const createProduct = (product) => {
  console.log(apiBaseUrl);
  return dispatch => axios.post(`${apiBaseUrl}/product`, product)
    .then((res) => {
      dispatch(passSuccessMessage(res.data.data.message));
    })
    .catch((err) => {
      throw dispatch(passErrorMessage('An error occured. Please check the form and try again.'));
      console.log(err.response.data.data.message);
    });
};
