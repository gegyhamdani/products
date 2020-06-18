import React from 'react';
import PropTypes from 'prop-types';

import styles from './index.module.css';

const ButtonBase = ({ children, onClick, className }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`${styles.button} ${className}`}
    >
      {children}
    </button>
  );
};

ButtonBase.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.element,
    PropTypes.string
  ]),
  className: PropTypes.string,
  onClick: PropTypes.func
};

ButtonBase.defaultProps = {
  children: null,
  className: '',
  onClick: () => {}
};

export default ButtonBase;
