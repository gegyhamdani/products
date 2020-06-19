import React from 'react';

import CardBase from '../../../molecules/Card/CardBase';

import styles from './index.module.css';

const CheckoutCard = () => {
  return (
    <div className={styles.grid}>
      <CardBase>
        <>
          <div className={styles.title}>
            <h3>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</h3>
          </div>
        </>
      </CardBase>
    </div>
  );
};

CheckoutCard.propTypes = {};

CheckoutCard.defaultProps = {};

export default CheckoutCard;
