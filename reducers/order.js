import initialState from './initialState.js';

import { GET_MY_ORDERS_SUCCESS, GET_RECEIVED_ORDERS_SUCCESS, CANCEL_ORDER_SUCCESS } from '../actions/types.js';

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

    case GET_RECEIVED_ORDERS_SUCCESS:
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

    case CANCEL_ORDER_SUCCESS: {
      const updatedOrder = state.orders.map((order) => {
        if (order.id === action.order.id) {
          return order.buyerOrderStatus = 'cancelled';
        }
        return order;
      });
      return {
        ...state,
        orders: updatedOrder,
      };
    }

    default:
      return state;
  }
};

export default orders;
