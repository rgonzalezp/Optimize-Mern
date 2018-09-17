import {BLOCKS_LOADING, GET_BLOCKS} from '../actions/types';

const initialState = {
  blocks: [],
  loading: false
}

export default function(state = initialState, action) {
	switch(action.type) {
    case GET_BLOCKS: {
      return{
        ...state,
        loading:true
      }
    }
    case BLOCKS_LOADING: {
      return{
        ...state,
        loading:true
    }

  }
  default:
  	  return state;
}
}