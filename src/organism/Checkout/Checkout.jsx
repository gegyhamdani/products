import React from 'react';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';

import { FaAngleUp } from 'react-icons/fa';

import CheckoutCard from '../Card/CheckoutCard';

import ButtonText from '../../atoms/Button/ButtonText/ButtonText';
import ButtonIcon from '../../atoms/Button/ButtonIcon';

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
      <ButtonIcon
        icon={<FaAngleUp size={25} />}
        className={`${styles['button-up']}`}
      />
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
