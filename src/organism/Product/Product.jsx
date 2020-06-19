import React from 'react';
import PropTypes from 'prop-types';

import ProductCard from '../Card/ProductCard';
import Header from '../Header';

import styles from './index.module.css';
import ButtonText from '../../atoms/Button/ButtonText/ButtonText';

const Product = ({
  bucket,
  createBucketProduct,
  deleteBucketProduct,
  increaseQtyBucketProduct,
  reduceQtyBucketProduct
}) => {
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

  const handleReduceBucket = data => {
    if (bucket[data.id] !== undefined && bucket[data.id].id === data.id) {
      if (bucket[data.id].qty === 1) return deleteBucketProduct(data.id);
      return reduceQtyBucketProduct(bucket[data.id], data.id);
    }
    return null;
  };

  const getQtyBucket = id => {
    for (let i = 0; i < Object.keys(bucket).length; i += 1) {
      if (bucket[id] !== undefined && bucket[id].id === id)
        return bucket[id].qty;
    }
    return '-';
  };

  const getTotalQtyBucket = () => {
    let total = 0;
    Object.keys(bucket).forEach(key => {
      total += parseInt(bucket[key].qty, 10);
    });
    return total;
  };

  return (
    <div className={styles.container}>
      <Header totalQtyBucket={getTotalQtyBucket()} />

      <div className={styles.main}>
        <h1 className={styles.title}>Product List</h1>
        <ButtonText
          text="Checkout"
          className={`${styles['button-checkout']}`}
        />
        <ProductCard
          getQtyBucket={getQtyBucket}
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
  deleteBucketProduct: PropTypes.func,
  increaseQtyBucketProduct: PropTypes.func,
  reduceQtyBucketProduct: PropTypes.func
};

Product.defaultProps = {
  bucket: {},
  createBucketProduct: () => {},
  deleteBucketProduct: () => {},
  increaseQtyBucketProduct: () => {},
  reduceQtyBucketProduct: () => {}
};

export default Product;
