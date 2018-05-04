import initialState from './initialState.js';

import { GET_MY_ORDERS_SUCCESS } from '../actions/types.js';

const orders = (state = initialState.orders, action = {}) => {
  switch (action.type) {
    case GET_MY_ORDERS_SUCCESS:
      return {
        orders: action.payload.orders,
        pagination: {
          currentCount: action.payload.current_count,
          currentPage: action.payload.current_page,
          nextUrl: action.payload.next_url,
          prevUrl: action.payload.prev_url,
          totalOrders: action.payload.total_orders,
          totalPages: action.payload.total_pages
        }
      };

    default:
      return state;
  }
};

export default orders;
