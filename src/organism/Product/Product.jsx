import React from 'react';
import PropTypes from 'prop-types';

import ProductCard from '../Card/ProductCard';
import Header from '../Header';

import styles from './index.module.css';

const Product = ({ productList }) => {
  return (
    <div className={styles.container}>
      <Header />

      <div className={styles.main}>
        <h1 className={styles.title}>Product List</h1>
        <ProductCard productList={productList} />
      </div>
    </div>
  );
};

Product.propTypes = {
  productList: PropTypes.arrayOf(PropTypes.shape({})),
};

Product.defaultProps = {
  productList: [],
};

export default Product;
