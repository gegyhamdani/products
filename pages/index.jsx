import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import fetchingProductsAPI from '../src/redux/actions/products';
import ProductsContext from '../src/util/ProductsContext';

import Product from '../src/organism/Product';
import LoadingScreen from '../src/organism/LoadingScreen';

const Home = ({ fetchingProducts, productList, isLoadingProducts }) => {
  useEffect(() => {
    if (productList.length > 0) return;
    fetchingProducts();
  }, []);

  return (
    <>
      {isLoadingProducts ? (
        <LoadingScreen />
      ) : (
        <ProductsContext.Provider value={{ productList }}>
          <Product />
        </ProductsContext.Provider>
      )}
    </>
  );
};

Home.propTypes = {
  productList: PropTypes.arrayOf(PropTypes.shape({})),
  isLoadingProducts: PropTypes.bool,
  fetchingProducts: PropTypes.func,
};

Home.defaultProps = {
  productList: [],
  isLoadingProducts: false,
  fetchingProducts: () => {},
};

const mapStateToprops = (state) => {
  const { products } = state;
  const { productList, isLoadingProducts } = products;
  return { productList, isLoadingProducts };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchingProducts: () => {
      dispatch(fetchingProductsAPI());
    },
  };
};

export default connect(mapStateToprops, mapDispatchToProps)(Home);
