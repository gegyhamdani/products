import React from 'react';
import PropTypes from 'prop-types';

import styles from './index.module.css';

const ButtonBase = ({ children, onClick }) => {
  return (
    <button type="button" onClick={onClick} className={styles.btn}>
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
  onClick: PropTypes.func
};

ButtonBase.defaultProps = {
  children: null,
  onClick: () => {}
};

export default ButtonBase;
