import { combineReducers } from 'redux';
import products from './products';
import bucket from './bucket';

export default combineReducers({ products, bucket });
