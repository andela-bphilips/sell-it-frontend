/* eslint-disable max-len */
import axios from 'axios';

import { GET_ALL_CATEGORY_SUCCESS } from './types';

const { apiBaseUrl } = process.env;

export const getAllCategorySuccess = category => ({
  type: GET_ALL_CATEGORY_SUCCESS,
  category
});


export const getAllCategory = () => dispatch => axios.get(`${apiBaseUrl}/all_categories`)
  .then((response) => {
    dispatch(getAllCategorySuccess(response.data.data));
    // dispatch(passSuccessMessage(response.data.data.message));
  })
  .catch((error) => {
    console.log(error.response.data.data.message);
    // throw dispatch(passErrorMessage(error.response.data.data.message));
  });

