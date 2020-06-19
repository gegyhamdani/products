import React from 'react';
import PropTypes from 'prop-types';

import ButtonBase from '../ButtonBase';

import styles from './index.module.css';

const ButtonIcon = ({ icon, className, onClick }) => {
  return (
    <ButtonBase
      className={`${styles['button-icon']} ${className}`}
      onClick={onClick}
    >
      {icon}
    </ButtonBase>
  );
};

ButtonIcon.propTypes = {
  icon: PropTypes.shape({}),
  className: PropTypes.string,
  onClick: PropTypes.func
};

ButtonIcon.defaultProps = {
  icon: {},
  className: '',
  onClick: () => {}
};

export default ButtonIcon;
