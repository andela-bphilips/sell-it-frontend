import { combineReducers } from 'redux';
import auth from './auth';
import message from './message.js';
import orders from './order.js';
import { product, products } from './product.js';
import category from './category.js';


const rootReducer = combineReducers({
  auth, message, orders, product, products, category
});

export default rootReducer;
