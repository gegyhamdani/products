import React from 'react';

import ProductCard from '../Card/ProductCard';
import Header from '../Header';

import styles from './index.module.css';

const Product = () => {
  return (
    <div className={styles.container}>
      <Header />

      <div className={styles.main}>
        <h1 className={styles.title}>Product List</h1>
        <ProductCard />
      </div>
    </div>
  );
};

export default Product;
