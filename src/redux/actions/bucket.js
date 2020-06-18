import { ACTION_TYPE_BUCKET } from '../types';

const {
  CREATE_BUCKET,
  DELETE_BUCKET,
  INCREASE_QTY_BUCKET,
  REDUCE_QTY_BUCKET
} = ACTION_TYPE_BUCKET;

const createBucket = (bucketData, id) => dispatch => {
  dispatch({
    type: CREATE_BUCKET,
    bucketData,
    id
  });
  return Promise.resolve();
};

const deleteBucket = (bucketData, id) => dispatch => {
  dispatch({
    type: DELETE_BUCKET,
    bucketData,
    id
  });
  return Promise.resolve();
};

const increaseQtyBucket = (bucketData, id) => dispatch => {
  dispatch({
    type: INCREASE_QTY_BUCKET,
    bucketData,
    id
  });
  return Promise.resolve();
};

const reduceQtyBucket = (bucketData, id) => dispatch => {
  dispatch({
    type: REDUCE_QTY_BUCKET,
    bucketData,
    id
  });
  return Promise.resolve();
};

export { createBucket, deleteBucket, increaseQtyBucket, reduceQtyBucket };
