import {GET_PLANS, ADD_PLANS, DELETE_PLANS, PLANS_LOADING} from '../actions/types';


const initialState = {
  plans: [],
  loading: false
}

export default function(state = initialState, action) {
  switch(action.type) {
  	case GET_PLANS: 
  	return{
  		...state,
  		plans: action.payload,
  		loading:false
  	}
  	case DELETE_PLANS: {
  		return {
  			...state,
  			plans: state.plans.filter(plan => plan._id !== action.payload)
  		}
  	}
  	case ADD_PLANS: {
  		return {
  			...state,
  			plans: [action.payload, ...state.plans]
  		}
  	}
  	case PLANS_LOADING: {
  		return{
  			...state,
  			loading:true
  		}
  	}
  	default:
  	  return state;
    }
}