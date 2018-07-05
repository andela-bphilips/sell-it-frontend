import initialState from './initialState.js';

import {
  GET_PRODUCTS_SUCCESS, GET_PRODUCT_SUCCESS, GET_MY_PRODUCTS_SUCCESS,
  GET_YARDSALE_PRODUCTS_SUCCESS
} from '../actions/types.js';

export const products = (state = initialState.products, action = {}) => {
  switch (action.type) {
    case GET_PRODUCTS_SUCCESS:
      return {
        products: action.products.products,
        pagination: {
          currentCount: action.products.current_count,
          currentPage: action.products.current_page,
          nextUrl: action.products.next_url,
          prevUrl: action.products.prev_url,
          totalProducts: action.products.total_products,
          totalPages: action.products.total_pages
        }
      };

    case GET_MY_PRODUCTS_SUCCESS:
      return {
        myProducts: action.products.products,
        pagination: {
          currentCount: action.products.current_count,
          currentPage: action.products.current_page,
          nextUrl: action.products.next_url,
          prevUrl: action.products.prev_url,
          totalProducts: action.products.total_products,
          totalPages: action.products.total_pages
        }
      };

    case GET_YARDSALE_PRODUCTS_SUCCESS:
      return {
        products: action.data.products,
        pagination: {
          currentCount: action.data.current_count,
          currentPage: action.data.current_page,
          nextUrl: action.data.next_url,
          prevUrl: action.data.prev_url,
          totalProducts: action.data.total_products,
          totalPages: action.data.total_pages
        },
        yardsaleInfo: {
          admin: action.data.admin,
          countdown: action.data.countdown,
          buyerLimit: action.data.yardSaleInfo.buyerLimit,
          location: action.data.yardSaleInfo.location,
          startDate: action.data.yardSaleInfo.startDate,
          startTime: action.data.yardSaleInfo.startTime,
          name: action.data.yardSaleInfo.name
        }
      };

    default:
      return state;
  }
};

export const product = (state = initialState.product, action = {}) => {
  switch (action.type) {
    case GET_PRODUCT_SUCCESS:
      return action.product;
    default:
      return state;
  }
};
