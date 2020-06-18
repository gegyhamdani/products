import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import fetchingProductsAPI from '../src/redux/actions/products';
import { createBucket, increaseQtyBucket } from '../src/redux/actions/bucket';
import ProductsContext from '../src/util/ProductsContext';

import Product from '../src/organism/Product';
import LoadingScreen from '../src/organism/LoadingScreen';

const Home = ({
  fetchingProducts,
  productList,
  isLoadingProducts,
  bucket,
  createBucketProduct,
  increaseQtyBucketProduct
}) => {
  useEffect(() => {
    fetchingProducts();
  }, []);

  return (
    <>
      {isLoadingProducts ? (
        <LoadingScreen />
      ) : (
        <ProductsContext.Provider value={{ productList }}>
          <Product
            bucket={bucket}
            createBucketProduct={createBucketProduct}
            increaseQtyBucketProduct={increaseQtyBucketProduct}
          />
        </ProductsContext.Provider>
      )}
    </>
  );
};

Home.propTypes = {
  productList: PropTypes.arrayOf(PropTypes.shape({})),
  bucket: PropTypes.shape({}),
  isLoadingProducts: PropTypes.bool,
  fetchingProducts: PropTypes.func,
  createBucketProduct: PropTypes.func,
  increaseQtyBucketProduct: PropTypes.func
};

Home.defaultProps = {
  productList: [],
  bucket: {},
  isLoadingProducts: false,
  fetchingProducts: () => {},
  createBucketProduct: () => {},
  increaseQtyBucketProduct: () => {}
};

const mapStateToprops = state => {
  const { products, bucket } = state;
  const { productList, isLoadingProducts } = products;
  return { productList, isLoadingProducts, bucket };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchingProducts: () => {
      dispatch(fetchingProductsAPI());
    },
    createBucketProduct: (bucketData, id) => {
      dispatch(createBucket(bucketData, id));
    },
    increaseQtyBucketProduct: (bucketData, id) => {
      dispatch(increaseQtyBucket(bucketData, id));
    }
  };
};

export default connect(mapStateToprops, mapDispatchToProps)(Home);
