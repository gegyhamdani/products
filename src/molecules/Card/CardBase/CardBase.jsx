import React from 'react';
import PropTypes from 'prop-types';
import styles from './index.module.css';

const CardBase = ({ children }) => {
  return <div className={styles.card}>{children}</div>;
};

CardBase.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.element
  ])
};

CardBase.defaultProps = {
  children: null
};

export default CardBase;
