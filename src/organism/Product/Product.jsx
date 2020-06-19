import React, { useState, useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';
import ReactPaginate from 'react-paginate';

import ProductCard from '../Card/ProductCard';

import ButtonText from '../../atoms/Button/ButtonText/ButtonText';

import ProductsContext from '../../util/ProductsContext';

import styles from './index.module.css';

const Product = ({
  bucket,
  onCreateBucket,
  onDeleteBucket,
  onIncreaseQtyBucket,
  onReduceQtyBucket
}) => {
  const [offset, setOffset] = useState(0);
  const [pageCount, setPageCount] = useState(0);
  const [activeProduct, setActiveProduct] = useState([]);

  const perPage = 9;

  const { productList } = useContext(ProductsContext);

  const router = useRouter();

  const createNewBucketObj = data => {
    const qty = { qty: 1 };
    const obj = { ...data, ...qty };
    return obj;
  };

  const handleAddBucket = data => {
    if (bucket[data.id] !== undefined && bucket[data.id].id === data.id) {
      return onIncreaseQtyBucket(bucket[data.id], data.id);
    }
    return onCreateBucket(createNewBucketObj(data), data.id);
  };

  const handleReduceBucket = data => {
    if (bucket[data.id] !== undefined && bucket[data.id].id === data.id) {
      if (bucket[data.id].qty === 1) return onDeleteBucket(data.id);
      return onReduceQtyBucket(bucket[data.id], data.id);
    }
    return null;
  };

  const getQtyBucket = id => {
    for (let i = 0; i < Object.keys(bucket).length; i += 1) {
      if (bucket[id] !== undefined && bucket[id].id === id)
        return bucket[id].qty;
    }
    return '-';
  };

  const handlePageClick = e => {
    const selectedPage = e.selected;
    const newOffset = selectedPage * perPage;
    setOffset(newOffset);
  };

  useEffect(() => {
    setActiveProduct(productList.slice(offset, offset + perPage));
  }, [offset]);

  useEffect(() => {
    setPageCount(Math.ceil(productList.length / perPage));
  }, [perPage]);

  return (
    <div className={styles.main}>
      <h1 className={styles.title}>Product List</h1>
      <ButtonText
        text="Checkout"
        className={`${styles['button-checkout']}`}
        onClick={() => router.push('/checkout')}
        label="Checkout"
      />
      <ProductCard
        activeProduct={activeProduct}
        getQtyBucket={getQtyBucket}
        onAddBucket={handleAddBucket}
        onReduceBucket={handleReduceBucket}
      />
      <ReactPaginate
        previousLabel="previous"
        nextLabel="next"
        breakLabel="..."
        breakClassName="break-me"
        pageCount={pageCount}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={e => handlePageClick(e)}
        containerClassName={styles.pagination}
        subContainerClassName={`${styles.pages} ${styles.pagination}`}
        activeClassName={styles.active}
      />
    </div>
  );
};

Product.propTypes = {
  bucket: PropTypes.shape({
    id: PropTypes.number,
    qty: PropTypes.number
  }),
  onCreateBucket: PropTypes.func,
  onDeleteBucket: PropTypes.func,
  onIncreaseQtyBucket: PropTypes.func,
  onReduceQtyBucket: PropTypes.func
};

Product.defaultProps = {
  bucket: {},
  onCreateBucket: () => {},
  onDeleteBucket: () => {},
  onIncreaseQtyBucket: () => {},
  onReduceQtyBucket: () => {}
};

export default Product;
