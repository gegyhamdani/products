import React from 'react';
import styles from './index.module.css';
import ProductCard from '../Card/ProductCard';
import Header from '../Header';

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
