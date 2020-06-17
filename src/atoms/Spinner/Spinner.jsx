import React from 'react';

import styles from './index.module.css';

const Spinner = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        {Array(12)
          .fill()
          .map((data, i) => {
            return <div key={i.toString()} />;
          })}
      </div>
    </div>
  );
};

export default Spinner;
