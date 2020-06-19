import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { compose } from 'redux';
import fetchingProductsAPI from '../src/redux/actions/products';
import {
  createBucket,
  deleteBucket,
  increaseQtyBucket,
  reduceQtyBucket
} from '../src/redux/actions/bucket';
import ProductsContext from '../src/util/ProductsContext';

import Product from '../src/organism/Product';
import LoadingScreen from '../src/organism/LoadingScreen';
import Pages from '../src/templates/Pages';
import Header from '../src/organism/Header';
import withQtyBucket from '../src/hoc/withQtyBucket';

const Home = ({
  fetchingProducts,
  productList,
  isLoadingProducts,
  bucket,
  createBucketProduct,
  deleteBucketProduct,
  increaseQtyBucketProduct,
  reduceQtyBucketProduct,
  getTotalQtyBucket
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
          <Pages>
            <Header totalQtyBucket={getTotalQtyBucket} />
            <Product
              bucket={bucket}
              createBucketProduct={createBucketProduct}
              deleteBucketProduct={deleteBucketProduct}
              increaseQtyBucketProduct={increaseQtyBucketProduct}
              reduceQtyBucketProduct={reduceQtyBucketProduct}
            />
          </Pages>
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
  deleteBucketProduct: PropTypes.func,
  increaseQtyBucketProduct: PropTypes.func,
  reduceQtyBucketProduct: PropTypes.func,
  getTotalQtyBucket: PropTypes.func
};

Home.defaultProps = {
  productList: [],
  bucket: {},
  isLoadingProducts: false,
  fetchingProducts: () => {},
  createBucketProduct: () => {},
  deleteBucketProduct: () => {},
  increaseQtyBucketProduct: () => {},
  reduceQtyBucketProduct: () => {},
  getTotalQtyBucket: () => {}
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
    deleteBucketProduct: id => {
      dispatch(deleteBucket(id));
    },
    increaseQtyBucketProduct: (bucketData, id) => {
      dispatch(increaseQtyBucket(bucketData, id));
    },
    reduceQtyBucketProduct: (bucketData, id) => {
      dispatch(reduceQtyBucket(bucketData, id));
    }
  };
};

export default compose(
  withQtyBucket,
  connect(mapStateToprops, mapDispatchToProps)
)(Home);
