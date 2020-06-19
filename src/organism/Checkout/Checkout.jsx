import React from 'react';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';

import CheckoutCard from '../Card/CheckoutCard';
import ButtonText from '../../atoms/Button/ButtonText/ButtonText';

import styles from './index.module.css';

const Checkout = ({ bucketList }) => {
  const router = useRouter();

  return (
    <div className={styles.main}>
      <CheckoutCard bucketList={bucketList} />
      <div className={`${styles['button-container']}`}>
        <ButtonText
          text="Buy"
          className={`${styles['button-buy']}`}
          onClick={() => router.push('/')}
        />
      </div>
    </div>
  );
};

Checkout.propTypes = {
  bucketList: PropTypes.shape({})
};

Checkout.defaultProps = {
  bucketList: {}
};

export default Checkout;
