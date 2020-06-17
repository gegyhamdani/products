import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import fetchingProductsAPI from '../src/redux/actions/products';

import Product from '../src/organism/Product';
import LoadingScreen from '../src/organism/LoadingScreen';

const Home = ({ fetchingProducts, productList, isLoadingProducts }) => {
  useEffect(() => {
    fetchingProducts();
  }, []);

  return (
    <>
      {isLoadingProducts ? (
        <LoadingScreen />
      ) : (
        <Product productList={productList} />
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
  const { productList, isLoadingProducts } = state;
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
