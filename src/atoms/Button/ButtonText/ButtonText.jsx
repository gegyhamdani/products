import React from 'react';
import PropTypes from 'prop-types';
import ButtonBase from '../ButtonBase';

import styles from './index.module.css';

const ButtonText = ({ text, className, onClick }) => {
  return (
    <ButtonBase
      className={`${styles['button-text']} ${className}`}
      onClick={onClick}
    >
      {text}
    </ButtonBase>
  );
};

ButtonText.propTypes = {
  text: PropTypes.string,
  className: PropTypes.string,
  onClick: PropTypes.func
};

ButtonText.defaultProps = {
  text: '',
  className: '',
  onClick: () => {}
};

export default ButtonText;
