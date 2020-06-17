/* eslint-disable react/jsx-one-expression-per-line */
import React, { useContext } from 'react';
import styles from './index.module.css';
import ProductsContext from '../../util/ProductsContext';

const Header = () => {
  const { productList } = useContext(ProductsContext);

  return (
    <>
      <div className={styles.header}>Total Product: {productList.length}</div>
    </>
  );
};

export default Header;
