import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import { FaPlus, FaMinus } from 'react-icons/fa';
import CardBase from '../../../molecules/Card/CardBase';

import ButtonIcon from '../../../atoms/Button/ButtonIcon';

import ProductsContext from '../../../util/ProductsContext';

import styles from './index.module.css';

const ProductCard = ({ getQtyBucket, onAddBucket, onReduceBucket }) => {
  const { productList } = useContext(ProductsContext);

  return (
    <div className={styles.grid}>
      {productList.map(val => {
        return (
          <CardBase key={val.id} className={`${styles['product-card']}`}>
            <>
              <div className={styles.title}>
                <h3>{val.title}</h3>
              </div>
              <hr />
              <div className={styles.bucket}>
                <p style={{ textAlign: 'center' }}>Add to Bucket: </p>
                <div className={`${styles['bucket-qty']}`}>
                  <ButtonIcon
                    className={`${styles['button-bucket']}`}
                    onClick={() => onReduceBucket(val)}
                    icon={<FaMinus />}
                    label="Reduce Bucket"
                  />
                  {getQtyBucket(val.id)}
                  <ButtonIcon
                    className={`${styles['button-bucket']}`}
                    onClick={() => onAddBucket(val)}
                    icon={<FaPlus />}
                    label="Add Bucket"
                  />
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
