import React, { useContext } from 'react';

import CardBase from '../../../molecules/Card/CardBase';

import ProductsContext from '../../../util/ProductsContext';

import styles from './index.module.css';

const ProductCard = () => {
  const { productList } = useContext(ProductsContext);

  return (
    <div className={styles.grid}>
      {productList.map((val) => {
        return (
          <CardBase key={val.id}>
            <h3 style={{ textAlign: 'center' }}>{val.title}</h3>
          </CardBase>
        );
      })}
    </div>
  );
};

export default ProductCard;
