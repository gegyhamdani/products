import React from 'react';
import PropTypes from 'prop-types';

import ButtonBase from '../ButtonBase';

import styles from './index.module.css';

const ButtonIcon = ({ icon, className, onClick, label }) => {
  return (
    <ButtonBase
      className={`${styles['button-icon']} ${className}`}
      onClick={onClick}
      label={label}
    >
      {icon}
    </ButtonBase>
  );
};

ButtonIcon.propTypes = {
  icon: PropTypes.shape({}),
  className: PropTypes.string,
  onClick: PropTypes.func,
  label: PropTypes.string
};

ButtonIcon.defaultProps = {
  icon: {},
  className: '',
  onClick: () => {},
  label: 'Icon'
};

export default ButtonIcon;
