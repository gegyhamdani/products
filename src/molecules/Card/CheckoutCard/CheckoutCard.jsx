import React from 'react';
import PropTypes from 'prop-types';

import CardBase from '../CardBase';

import styles from './index.module.css';

const CheckoutCard = ({ bucketList }) => {
  return (
    <div className={styles.grid}>
      {Object.keys(bucketList).map(keys => {
        return (
          <CardBase
            key={bucketList[keys].id}
            className={`${styles['checkout-card']}`}
          >
            <>
              <div className={styles.bucket}>
                <h3>{bucketList[keys].title}</h3>
                <div className={styles.qty}>
                  <div className={styles.lines} />
                  <p>
                    Quantity:&nbsp;
                    {bucketList[keys].qty}
                  </p>
                </div>
              </div>
            </>
          </CardBase>
        );
      })}
    </div>
  );
};

CheckoutCard.propTypes = {
  bucketList: PropTypes.shape({})
};

CheckoutCard.defaultProps = {
  bucketList: {}
};

export default CheckoutCard;
