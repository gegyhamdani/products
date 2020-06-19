import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { compose } from 'redux';

import Pages from '../src/templates/Pages';

import Header from '../src/organism/Header';
import Checkout from '../src/organism/Checkout';

import withQtyBucket from '../src/hoc/withQtyBucket';
import { clearBucket } from '../src/redux/actions/bucket';

const CheckoutPage = ({ bucket, getTotalQtyBucket, clearBucketProduct }) => {
  return (
    <Pages>
      <Header totalQtyBucket={getTotalQtyBucket} />
      <Checkout bucketList={bucket} clearBucketProduct={clearBucketProduct} />
    </Pages>
  );
};

CheckoutPage.propTypes = {
  bucket: PropTypes.shape({}),
  getTotalQtyBucket: PropTypes.number,
  clearBucketProduct: PropTypes.func
};

CheckoutPage.defaultProps = {
  bucket: {},
  getTotalQtyBucket: 0,
  clearBucketProduct: () => {}
};

const mapStateToProps = state => {
  const { bucket } = state;
  return { bucket };
};

const mapDispatchToProps = dispatch => {
  return {
    clearBucketProduct: () => dispatch(clearBucket())
  };
};

export default compose(
  withQtyBucket,
  connect(mapStateToProps, mapDispatchToProps)
)(CheckoutPage);
