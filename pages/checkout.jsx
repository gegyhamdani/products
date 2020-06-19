import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import Header from '../src/organism/Header';
import Pages from '../src/templates/Pages';
import withQtyBucket from '../src/hoc/withQtyBucket';
import Checkout from '../src/organism/Checkout';

const CheckoutPage = ({ bucket, getTotalQtyBucket }) => {
  return (
    <Pages>
      <Header totalQtyBucket={getTotalQtyBucket} />
      <Checkout bucketList={bucket} />
    </Pages>
  );
};

CheckoutPage.propTypes = {
  bucket: PropTypes.shape({}),
  getTotalQtyBucket: PropTypes.number
};

CheckoutPage.defaultProps = {
  bucket: {},
  getTotalQtyBucket: 0
};

const mapStateToProps = state => {
  const { bucket } = state;
  return { bucket };
};

export default compose(withQtyBucket, connect(mapStateToProps))(CheckoutPage);
