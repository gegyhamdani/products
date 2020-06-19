import React from 'react';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';

import CheckoutCard from '../Card/CheckoutCard';
import ButtonText from '../../atoms/Button/ButtonText/ButtonText';

import styles from './index.module.css';

const Checkout = ({ bucketList, clearBucketProduct }) => {
  const router = useRouter();

  return (
    <div className={styles.main}>
      <CheckoutCard bucketList={bucketList} />
      <div className={`${styles['button-container']}`}>
        <ButtonText
          text="Buy"
          className={`${styles['button-buy']}`}
          onClick={() => clearBucketProduct().then(() => router.push('/'))}
        />
      </div>
    </div>
  );
};

Checkout.propTypes = {
  bucketList: PropTypes.shape({}),
  clearBucketProduct: PropTypes.func
};

Checkout.defaultProps = {
  bucketList: {},
  clearBucketProduct: () => {}
};

export default Checkout;
