import React from 'react';
import Spinner from '../../atoms/Spinner';

import styles from './index.module.css';

const LoadingScreen = () => {
  return (
    <div className={styles.container}>
      <Spinner />
    </div>
  );
};

export default LoadingScreen;
