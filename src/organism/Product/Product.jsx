import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styles from './index.module.css';
import ProductCard from '../Card/ProductCard';
import Header from '../Header';
import fetchingProductsAPI from '../../redux/actions/products';

const Product = ({ fetchingProducts }) => {
  useEffect(() => {
    fetchingProducts();
  }, []);
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

Product.propTypes = {
  fetchingProducts: PropTypes.func,
};

Product.defaultProps = {
  fetchingProducts: () => {},
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchingProducts: () => {
      dispatch(fetchingProductsAPI());
    },
  };
};

export default connect(null, mapDispatchToProps)(Product);
