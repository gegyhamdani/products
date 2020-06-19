import { ACTION_TYPE_BUCKET } from '../types';

const {
  CREATE_BUCKET,
  DELETE_BUCKET,
  INCREASE_QTY_BUCKET,
  REDUCE_QTY_BUCKET,
  CLEAR_BUCKET
} = ACTION_TYPE_BUCKET;

const createBucket = (bucketData, id) => ({
  type: CREATE_BUCKET,
  bucketData,
  id
});

const deleteBucket = id => ({
  type: DELETE_BUCKET,
  id
});

const increaseQtyBucket = (bucketData, id) => ({
  type: INCREASE_QTY_BUCKET,
  bucketData,
  id
});

const reduceQtyBucket = (bucketData, id) => ({
  type: REDUCE_QTY_BUCKET,
  bucketData,
  id
});

const clearBucket = () => dispatch => {
  dispatch({
    type: CLEAR_BUCKET
  });
  return Promise.resolve();
};

export {
  createBucket,
  deleteBucket,
  increaseQtyBucket,
  reduceQtyBucket,
  clearBucket
};
