import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import Header from '../src/organism/Header';
import Pages from '../src/templates/Pages';
import withQtyBucket from '../src/hoc/withQtyBucket';
import Checkout from '../src/organism/Checkout';

const CheckoutPage = ({ getTotalQtyBucket }) => {
  return (
    <Pages>
      <Header totalQtyBucket={getTotalQtyBucket} />
      <Checkout />
    </Pages>
  );
};

const mapStateToProps = state => {
  const { bucket } = state;
  return { bucket };
};

CheckoutPage.propTypes = {
  bucket: PropTypes.shape({}),
  getTotalQtyBucket: PropTypes.number
};

CheckoutPage.defaultProps = {
  bucket: {},
  getTotalQtyBucket: 0
};

export default compose(withQtyBucket, connect(mapStateToProps))(CheckoutPage);
