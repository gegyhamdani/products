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
import LoadingScreen from '../src/molecules/LoadingScreen';
import Pages from '../src/templates/Pages';
import Header from '../src/organism/Header';
import withQtyBucket from '../src/hoc/withQtyBucket';

const Home = ({
  fetchingProducts,
  productList,
  isLoadingProducts,
  bucket,
  onCreateBucket,
  onDeleteBucket,
  onIncreaseQtyBucket,
  onReduceQtyBucket,
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
              onCreateBucket={onCreateBucket}
              onDeleteBucket={onDeleteBucket}
              onIncreaseQtyBucket={onIncreaseQtyBucket}
              onReduceQtyBucket={onReduceQtyBucket}
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
  onCreateBucket: PropTypes.func,
  onDeleteBucket: PropTypes.func,
  onIncreaseQtyBucket: PropTypes.func,
  onReduceQtyBucket: PropTypes.func,
  getTotalQtyBucket: PropTypes.number
};

Home.defaultProps = {
  productList: [],
  bucket: {},
  isLoadingProducts: false,
  fetchingProducts: () => {},
  onCreateBucket: () => {},
  onDeleteBucket: () => {},
  onIncreaseQtyBucket: () => {},
  onReduceQtyBucket: () => {},
  getTotalQtyBucket: 0
};

const mapStateToProps = state => {
  const { products, bucket } = state;
  const { productList, isLoadingProducts } = products;
  return { productList, isLoadingProducts, bucket };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchingProducts: () => dispatch(fetchingProductsAPI()),
    onCreateBucket: (bucketData, id) => dispatch(createBucket(bucketData, id)),
    onDeleteBucket: id => dispatch(deleteBucket(id)),
    onIncreaseQtyBucket: (bucketData, id) =>
      dispatch(increaseQtyBucket(bucketData, id)),
    onReduceQtyBucket: (bucketData, id) =>
      dispatch(reduceQtyBucket(bucketData, id))
  };
};

export default compose(
  withQtyBucket,
  connect(mapStateToProps, mapDispatchToProps)
)(Home);
