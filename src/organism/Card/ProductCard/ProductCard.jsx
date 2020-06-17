import React from 'react';
import PropTypes from 'prop-types';

import CardBase from '../../../molecules/Card/CardBase';

import styles from './index.module.css';

const ProductCard = ({ productList }) => {
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

ProductCard.propTypes = {
  productList: PropTypes.arrayOf(PropTypes.shape({})),
};

ProductCard.defaultProps = {
  productList: [],
};

export default ProductCard;
