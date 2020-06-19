import React from 'react';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';

import ProductCard from '../Card/ProductCard';

import ButtonText from '../../atoms/Button/ButtonText/ButtonText';

import styles from './index.module.css';

const Product = ({
  bucket,
  onCreateBucket,
  onDeleteBucket,
  onIncreaseQtyBucket,
  onReduceQtyBucket
}) => {
  const router = useRouter();

  const createNewBucketObj = data => {
    const qty = { qty: 1 };
    const obj = { ...data, ...qty };
    return obj;
  };

  const handleAddBucket = data => {
    if (bucket[data.id] !== undefined && bucket[data.id].id === data.id) {
      return onIncreaseQtyBucket(bucket[data.id], data.id);
    }
    return onCreateBucket(createNewBucketObj(data), data.id);
  };

  const handleReduceBucket = data => {
    if (bucket[data.id] !== undefined && bucket[data.id].id === data.id) {
      if (bucket[data.id].qty === 1) return onDeleteBucket(data.id);
      return onReduceQtyBucket(bucket[data.id], data.id);
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

  return (
    <div className={styles.main}>
      <h1 className={styles.title}>Product List</h1>
      <ButtonText
        text="Checkout"
        className={`${styles['button-checkout']}`}
        onClick={() => router.push('/checkout')}
        label="Checkout"
      />
      <ProductCard
        getQtyBucket={getQtyBucket}
        onAddBucket={handleAddBucket}
        onReduceBucket={handleReduceBucket}
      />
    </div>
  );
};

Product.propTypes = {
  bucket: PropTypes.shape({
    id: PropTypes.number,
    qty: PropTypes.number
  }),
  onCreateBucket: PropTypes.func,
  onDeleteBucket: PropTypes.func,
  onIncreaseQtyBucket: PropTypes.func,
  onReduceQtyBucket: PropTypes.func
};

Product.defaultProps = {
  bucket: {},
  onCreateBucket: () => {},
  onDeleteBucket: () => {},
  onIncreaseQtyBucket: () => {},
  onReduceQtyBucket: () => {}
};

export default Product;
