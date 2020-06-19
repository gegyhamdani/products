import React from 'react';
import PropTypes from 'prop-types';
import styles from './index.module.css';

const CardBase = ({ children, className }) => {
  return <div className={`${styles.card} ${className}`}>{children}</div>;
};

CardBase.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.element
  ]),
  className: PropTypes.string
};

CardBase.defaultProps = {
  children: null,
  className: ''
};

export default CardBase;
