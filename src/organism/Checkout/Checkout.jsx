import React from 'react';
import styles from './index.module.css';

import CheckoutCard from '../Card/CheckoutCard';
import ButtonText from '../../atoms/Button/ButtonText/ButtonText';

const Checkout = () => {
  return (
    <div className={styles.main}>
      <CheckoutCard />
      <div className={`${styles['button-container']}`}>
        <ButtonText text="Buy" className={`${styles['button-buy']}`} />
      </div>
    </div>
  );
};

export default Checkout;
