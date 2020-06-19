import React from 'react';
import PropTypes from 'prop-types';

import CardBase from '../../../molecules/Card/CardBase';

import styles from './index.module.css';

const CheckoutCard = ({ bucketList }) => {
  return (
    <div className={styles.grid}>
      {Object.keys(bucketList).map(keys => {
        return (
          <CardBase key={bucketList[keys].id}>
            <>
              <div className={styles.bucket}>
                <h3>{bucketList[keys].title}</h3>
                <p>
                  Quantity:&nbsp;
                  {bucketList[keys].qty}
                </p>
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
