import { combineReducers } from 'redux';
import auth from './auth';
import message from './message.js';
import { product, products } from './product.js';

const rootReducer = combineReducers({
  auth, message, products
});
export default rootReducer;
