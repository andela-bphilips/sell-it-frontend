import { combineReducers } from 'redux';
import auth from './auth';
import message from './message.js';
import orders from './order.js';
import { categories, category } from './category.js';
import { product, products } from './product.js';


const rootReducer = combineReducers({
  auth, categories, category, message, orders, product, products
});

export default rootReducer;
