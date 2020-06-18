import { ACTION_TYPE_PRODUCTS } from '../types';

const initialState = {
  productList: [],
  isLoadingProducts: false
};

const products = (state = initialState, action) => {
  const { FETCHED_PRODUCTS, LOADING_PRODUCTS } = ACTION_TYPE_PRODUCTS;
  const { type, productList } = action;

  const fetchedPost = () => ({
    ...state,
    productList,
    isLoadingProducts: false
  });

  const loadingProduct = () => ({
    ...state,
    isLoadingProducts: true
  });

  switch (type) {
    case FETCHED_PRODUCTS:
      return fetchedPost();
    case LOADING_PRODUCTS:
      return loadingProduct();
    default:
      return state;
  }
};

export default products;
