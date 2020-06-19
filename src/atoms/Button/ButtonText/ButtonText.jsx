import React from 'react';
import PropTypes from 'prop-types';

import ButtonBase from '../ButtonBase';

import styles from './index.module.css';

const ButtonText = ({ text, className, onClick, label }) => {
  return (
    <ButtonBase
      className={`${styles['button-text']} ${className}`}
      onClick={onClick}
      label={label}
    >
      {text}
    </ButtonBase>
  );
};

ButtonText.propTypes = {
  text: PropTypes.string,
  className: PropTypes.string,
  onClick: PropTypes.func,
  label: PropTypes.string
};

ButtonText.defaultProps = {
  text: '',
  className: '',
  onClick: () => {},
  label: 'Text'
};

export default ButtonText;
