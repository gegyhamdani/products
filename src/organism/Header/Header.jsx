/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';
import { FaAngleLeft } from 'react-icons/fa';

import ButtonIconText from '../../atoms/Button/ButtonIconText';

import styles from './index.module.css';

const Header = ({ totalQtyBucket }) => {
  const router = useRouter();
  const { pathname } = router;
  return (
    <>
      <div className={styles.header}>
        {pathname === '/checkout' ? (
          <ButtonIconText
            icon={<FaAngleLeft size={30} />}
            text="Back to Home"
            className={`${styles['button-back']}`}
            onClick={() => router.push('/')}
          />
        ) : (
          <div />
        )}
        <p>Total product in bucket: {totalQtyBucket}</p>
      </div>
    </>
  );
};

Header.propTypes = {
  totalQtyBucket: PropTypes.number
};

Header.defaultProps = {
  totalQtyBucket: 0
};

export default Header;
