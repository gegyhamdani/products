import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

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

const Home = ({
  fetchingProducts,
  productList,
  isLoadingProducts,
  bucket,
  createBucketProduct,
  deleteBucketProduct,
  increaseQtyBucketProduct,
  reduceQtyBucketProduct
}) => {
  useEffect(() => {
    if (productList.length > 0) return;
    fetchingProducts();
  }, []);

  return (
    <>
      {!isLoadingProducts ? (
        <LoadingScreen />
      ) : (
        <ProductsContext.Provider value={{ productList }}>
          <Product
            bucket={bucket}
            createBucketProduct={createBucketProduct}
            deleteBucketProduct={deleteBucketProduct}
            increaseQtyBucketProduct={increaseQtyBucketProduct}
            reduceQtyBucketProduct={reduceQtyBucketProduct}
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
  deleteBucketProduct: PropTypes.func,
  increaseQtyBucketProduct: PropTypes.func,
  reduceQtyBucketProduct: PropTypes.func
};

Home.defaultProps = {
  productList: [],
  bucket: {},
  isLoadingProducts: false,
  fetchingProducts: () => {},
  createBucketProduct: () => {},
  deleteBucketProduct: () => {},
  increaseQtyBucketProduct: () => {},
  reduceQtyBucketProduct: () => {}
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

export default connect(mapStateToprops, mapDispatchToProps)(Home);
