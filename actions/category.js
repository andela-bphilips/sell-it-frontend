/* eslint-disable max-len */
import axios from 'axios';

import { GET_ALL_CATEGORY_SUCCESS, GET_CATEGORIES_SUCCESS, SUCCESS_MESSAGE, ERROR_MESSAGE } from './types';

const { apiBaseUrl } = process.env;

export const getAllCategorySuccess = category => ({
  type: GET_ALL_CATEGORY_SUCCESS,
  category
});

export const getCategoriesSuccess = categories => ({
  type: GET_CATEGORIES_SUCCESS,
  categories
});
export const passSuccessMessage = message => ({
  type: SUCCESS_MESSAGE,
  message
});
export const passErrorMessage = message => ({
  type: ERROR_MESSAGE,
  message
});

export const getCategories = (categoryType = '') => dispatch =>
  axios.get(`${apiBaseUrl}/all_categories?category_type=${categoryType}`)
    .then((response) => {
      dispatch(getCategoriesSuccess(response.data.data.categories));
    })
    .catch((error) => {
      // console.log(error.response.data.data.message);
      throw dispatch(passErrorMessage(error.response.data.data.message));
    });

export const getAllCategory = () => dispatch =>
  axios.get(`${apiBaseUrl}/all_categories`)
    .then((response) => {
      dispatch(getAllCategorySuccess(response.data.data));
      // dispatch(passSuccessMessage(response.data.data.message));
    })
    .catch((error) => {
      // console.log(error.response.data.data.message);
      console.log('');
      // throw dispatch(passErrorMessage(error.response.data.data.message));
    });
