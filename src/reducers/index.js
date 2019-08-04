import { combineReducers } from 'redux';
import brands from './brands';
import products from './products';


export default combineReducers({
    brands, 
    products
  })