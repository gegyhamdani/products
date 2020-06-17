/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';

import { Provider } from 'react-redux';
import store from '../src/redux/store';

const MyApp = ({ Component, pageProps }) => {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
};

MyApp.propTypes = {
  Component: PropTypes.func,
  pageProps: PropTypes.shape({}),
};

MyApp.defaultProps = {
  Component: () => {},
  pageProps: {},
};

export default MyApp;
