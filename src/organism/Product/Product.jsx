import React from 'react';
import PropTypes from 'prop-types';

import ProductCard from '../Card/ProductCard';
import Header from '../Header';

import styles from './index.module.css';

const Product = ({ bucket }) => {
  const getBucketData = id => {
    for (let i = 0; i < bucket.length; i += 1) {
      if (bucket[i].id === id) return bucket[i].qty;
    }
    return '-';
  };
  return (
    <div className={styles.container}>
      <Header />

      <div className={styles.main}>
        <h1 className={styles.title}>Product List</h1>
        <ProductCard getBucketData={getBucketData} />
      </div>
    </div>
  );
};

Product.propTypes = {
  bucket: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      qty: PropTypes.number
    })
  )
};

Product.defaultProps = {
  bucket: []
};

export default Product;
