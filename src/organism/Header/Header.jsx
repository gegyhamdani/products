/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';
import { FaAngleLeft } from 'react-icons/fa';

import ButtonIcon from '../../atoms/Button/ButtonIcon';

import styles from './index.module.css';

const Header = ({ totalQtyBucket }) => {
  const router = useRouter();
  const { pathname } = router;
  return (
    <>
      <div className={styles.header}>
        {pathname === '/checkout' ? (
          <div className={styles['back-section']}>
            <ButtonIcon
              icon={<FaAngleLeft size={25} />}
              className={`${styles['button-back']}`}
              onClick={() => router.push('/')}
            />
            <p>Back to Home</p>
          </div>
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
