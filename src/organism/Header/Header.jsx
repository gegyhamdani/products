/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import PropTypes from 'prop-types';

import styles from './index.module.css';

const Header = ({ totalQtyBucket }) => {
  return (
    <>
      <div className={styles.header}>
        Total product in bucket: {totalQtyBucket}
      </div>
    </>
  );
};

Header.propTypes = {
  totalQtyBucket: PropTypes.number
};

Header.defaultProps = {
  totalQtyBucket: 0
};

export default Header;
