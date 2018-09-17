import {BLOCKS_LOADING,GET_BLOCKS} from './types';
import axios from 'axios';

export const getBlocks = () => dispatch => {
  dispatch(setBlocksLoading);
  axios
    .get('/api/map/blocks')
    .then(res=>
      dispatch({
        type:GET_BLOCKS,
        payload: res.data
      }));
};

export const setBlocksLoading = () => {
  return {
    type: BLOCKS_LOADING
  };
};