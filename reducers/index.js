import { combineReducers } from 'redux';
import auth from './auth';
import { categories, category } from './category.js';
import { message, statusCode } from './message.js';
import orders from './order.js';
import { product, products } from './product.js';
import users from './users.js';
import yardsale from './yardsale.js';


const rootReducer = combineReducers({
  auth,
  categories,
  category,
  message,
  orders,
  product,
  products,
  statusCode,
  users,
  yardsale
});

export default rootReducer;
