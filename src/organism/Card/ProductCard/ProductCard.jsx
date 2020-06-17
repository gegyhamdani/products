import React from 'react';

import styles from './index.module.css';
import CardBase from '../../../molecules/Card/CardBase';

const ProductCard = () => {
  return (
    <div className={styles.grid}>
      <CardBase>
        <h3>Examples</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio aliquam
          esse animi eum eligendi dolore libero illo.
        </p>
      </CardBase>
      <CardBase>
        <h3>Examples</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio aliquam
          esse animi eum eligendi dolore libero illo.
        </p>
      </CardBase>
      <CardBase>
        <h3>Examples</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio aliquam
          esse animi eum eligendi dolore libero illo.
        </p>
      </CardBase>
      <CardBase>
        <h3>Examples</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio aliquam
          esse animi eum eligendi dolore libero illo.
        </p>
      </CardBase>
    </div>
  );
};

export default ProductCard;
