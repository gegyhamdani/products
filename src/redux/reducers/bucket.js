import { ACTION_TYPE_BUCKET } from '../types';

const bucket = (state = {}, action) => {
  const {
    CREATE_BUCKET,
    DELETE_BUCKET,
    INCREASE_QTY_BUCKET,
    REDUCE_QTY_BUCKET
  } = ACTION_TYPE_BUCKET;
  const { type, bucketData, id } = action;

  const createBucket = () => ({ ...state, [id]: { ...bucketData } });

  const deleteBucket = () => ({});

  const increaseQtyBucket = () => ({
    ...state,
    [id]: { ...state[id], qty: bucketData.qty + 1 }
  });

  const reduceQtyBucket = () => ({
    ...state,
    [id]: { ...state[id], qty: bucketData.qty - 1 }
  });

  switch (type) {
    case CREATE_BUCKET:
      return createBucket();
    case DELETE_BUCKET:
      return deleteBucket();
    case INCREASE_QTY_BUCKET:
      return increaseQtyBucket();
    case REDUCE_QTY_BUCKET:
      return reduceQtyBucket();
    default:
      return state;
  }
};

export default bucket;
