import React from 'react';
import PropTypes from 'prop-types';
import ButtonBase from '../ButtonBase';

import styles from './index.module.css';

const ButtonIcon = ({ icon, onClick }) => {
  return (
    <ButtonBase className={`${styles['button-icon']}`} onClick={onClick}>
      {icon}
    </ButtonBase>
  );
};

ButtonIcon.propTypes = {
  icon: PropTypes.shape({}),
  onClick: PropTypes.func
};

ButtonIcon.defaultProps = {
  icon: {},
  onClick: () => {}
};

export default ButtonIcon;
