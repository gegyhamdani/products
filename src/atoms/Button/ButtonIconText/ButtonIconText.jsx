import React from 'react';
import PropTypes from 'prop-types';

import ButtonBase from '../ButtonBase';

import styles from './index.module.css';

const ButtonIcon = ({
  icon,
  text,
  className,
  textClassname,
  onClick,
  label
}) => {
  return (
    <ButtonBase
      className={`${styles['button-icon-text']} ${className}`}
      onClick={onClick}
      label={label}
    >
      {icon}
      <p className={`${textClassname}`}>{text}</p>
    </ButtonBase>
  );
};

ButtonIcon.propTypes = {
  icon: PropTypes.shape({}),
  text: PropTypes.string,
  className: PropTypes.string,
  textClassname: PropTypes.string,
  onClick: PropTypes.func,
  label: PropTypes.string
};

ButtonIcon.defaultProps = {
  icon: {},
  text: '',
  className: '',
  textClassname: '',
  onClick: () => {},
  label: 'Icon Text'
};

export default ButtonIcon;
