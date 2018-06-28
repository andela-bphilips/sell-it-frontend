import initialState from './initialState.js';

import {
  GET_MY_ORDERS_SUCCESS, CANCEL_ORDER_SUCCESS,
  GET_RECEIVED_ORDERS_SUCCESS, PROCESS_ORDER_SUCCESS
} from '../actions/types.js';

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
          order.buyerOrderStatus = 'cancelled';
        }
        return order;
      });
      return {
        ...state,
        orders: updatedOrder,
      };
    }

    case PROCESS_ORDER_SUCCESS: {
      const updatedOrder = state.orders.map((order) => {
        if (order.id === action.order.id) {
          if (action.order.sellerOrderStatus
              === 'SellerOrderStatus.approved_type') {
            order.sellerOrderStatus = 'approved';
          } else if (action.order.sellerOrderStatus
              === 'SellerOrderStatus.rejected_type') {
            order.sellerOrderStatus = 'rejected';
          } else if (action.order.sellerOrderStatus
              === 'SellerOrderStatus.completed_type') {
            order.sellerOrderStatus = 'completed';
          }
          order.modifiedAt = action.order.modifiedAt;
        }
        return order;
      });
      return {
        ...state,
        orders: updatedOrder
      };
    }

    default:
      return state;
  }
};

export default orders;
