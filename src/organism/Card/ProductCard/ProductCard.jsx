import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import CardBase from '../../../molecules/Card/CardBase';

import ButtonBase from '../../../atoms/Button/ButtonBase';

import ProductsContext from '../../../util/ProductsContext';

import styles from './index.module.css';

const ProductCard = ({ getBucketData }) => {
  const { productList } = useContext(ProductsContext);

  return (
    <div className={styles.grid}>
      {productList.map((val, id) => {
        return (
          <CardBase key={val.id}>
            <>
              <div className={styles.title}>
                <h3>{val.title}</h3>
              </div>
              <hr />
              <p style={{ textAlign: 'center' }}>Tambah Ke keranjang</p>
              <div className={styles.bucket}>
                <ButtonBase>-</ButtonBase>
                {getBucketData(id)}
                <ButtonBase>+</ButtonBase>
              </div>
            </>
          </CardBase>
        );
      })}
    </div>
  );
};

ProductCard.propTypes = {
  getBucketData: PropTypes.func
};

ProductCard.defaultProps = {
  getBucketData: () => {}
};

export default ProductCard;
