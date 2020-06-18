import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import CardBase from '../../../molecules/Card/CardBase';

import ButtonBase from '../../../atoms/Button/ButtonBase';

import ProductsContext from '../../../util/ProductsContext';

import styles from './index.module.css';

const ProductCard = ({ getQtyBucket, onAddBucket, onReduceBucket }) => {
  const { productList } = useContext(ProductsContext);

  return (
    <div className={styles.grid}>
      {productList.map(val => {
        return (
          <CardBase key={val.id}>
            <>
              <div className={styles.title}>
                <h3>{val.title}</h3>
              </div>
              <hr />
              <div className={styles.bucket}>
                <p style={{ textAlign: 'center' }}>Add to Bucket: </p>
                <div className={`${styles['bucket-qty']}`}>
                  <ButtonBase onClick={() => onReduceBucket(val)}>-</ButtonBase>
                  {getQtyBucket(val.id)}
                  <ButtonBase onClick={() => onAddBucket(val)}>+</ButtonBase>
                </div>
              </div>
            </>
          </CardBase>
        );
      })}
    </div>
  );
};

ProductCard.propTypes = {
  getQtyBucket: PropTypes.func,
  onAddBucket: PropTypes.func,
  onReduceBucket: PropTypes.func
};

ProductCard.defaultProps = {
  getQtyBucket: () => {},
  onAddBucket: () => {},
  onReduceBucket: () => {}
};

export default ProductCard;
