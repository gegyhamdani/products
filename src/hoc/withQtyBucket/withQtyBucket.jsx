import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const withQtyBucket = WrappedComponent => {
  const HOCComponent = ({ bucket, ...props }) => {
    const getTotalQtyBucket = () => {
      let total = 0;
      Object.keys(bucket).forEach(key => {
        total += parseInt(bucket[key].qty, 10);
      });
      return total;
    };

    return (
      <WrappedComponent getTotalQtyBucket={getTotalQtyBucket()} {...props} />
    );
  };

  HOCComponent.propTypes = {
    bucket: PropTypes.shape({})
  };

  HOCComponent.defaultProps = {
    bucket: {}
  };

  const mapStateToProps = state => {
    const { bucket } = state;
    return {
      bucket
    };
  };

  return connect(mapStateToProps)(HOCComponent);
};

export default withQtyBucket;
