import React from 'react';
import PropTypes from 'prop-types';

import ProductCard from '../Card/ProductCard';
import Header from '../Header';

import styles from './index.module.css';

const Product = ({ bucket, createBucketProduct, increaseQtyBucketProduct }) => {
  const createNewBucketObj = data => {
    const qty = { qty: 1 };
    const obj = { ...data, ...qty };
    return obj;
  };

  const handleAddBucket = data => {
    if (bucket[data.id] !== undefined && bucket[data.id].id === data.id) {
      return increaseQtyBucketProduct(bucket[data.id], data.id);
    }
    return createBucketProduct(createNewBucketObj(data), data.id);
  };

  const handleReduceBucket = () => {};

  const getBucketData = id => {
    for (let i = 0; i < Object.keys(bucket).length; i += 1) {
      if (bucket[id] !== undefined && bucket[id].id === id)
        return bucket[id].qty;
    }
    return '-';
  };

  return (
    <div className={styles.container}>
      <Header />

      <div className={styles.main}>
        <h1 className={styles.title}>Product List</h1>
        <ProductCard
          getBucketData={getBucketData}
          onAddBucket={handleAddBucket}
          onReduceBucket={handleReduceBucket}
        />
      </div>
    </div>
  );
};

Product.propTypes = {
  bucket: PropTypes.shape({
    id: PropTypes.number,
    qty: PropTypes.number
  }),
  createBucketProduct: PropTypes.func,
  increaseQtyBucketProduct: PropTypes.func
};

Product.defaultProps = {
  bucket: {},
  createBucketProduct: () => {},
  increaseQtyBucketProduct: () => {}
};

export default Product;
