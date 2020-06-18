import { ACTION_TYPE_PRODUCTS } from '../types';

const { FETCHED_PRODUCTS, LOADING_PRODUCTS } = ACTION_TYPE_PRODUCTS;

const axios = require('axios');

const fetchedProducts = productList => ({
  type: FETCHED_PRODUCTS,
  productList
});

const loadingProducts = () => ({
  type: LOADING_PRODUCTS
});

const fetchingProductsAPI = () => dispatch => {
  dispatch(loadingProducts());
  axios.get('https://jsonplaceholder.typicode.com/todos').then(res => {
    dispatch(fetchedProducts(res.data));
  });
};

export default fetchingProductsAPI;
