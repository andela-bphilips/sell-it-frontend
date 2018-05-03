import initialState from './initialState.js';

import { GET_PRODUCTS_SUCCESS } from '../actions/types.js';

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

    default:
      return state;
  }
};

export const product = () => {};
