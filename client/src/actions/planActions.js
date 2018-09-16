import {GET_PLANS, ADD_PLANS, DELETE_PLANS, PLANS_LOADING} from './types';
import axios from 'axios';

export const getPlans = (email) => dispatch => {
  dispatch(setPlansLoading);
  console.log(email);
  axios
    .post('/api/plans', email)
    .then(res=>
      dispatch({
        type:GET_PLANS,
        payload: res.data
      }));
};

export const addPlan = (plan) => dispatch => {
	console.log(plan);
  axios
    .put('/api/plans', plan)
    .then(res => 
      dispatch({
        type: ADD_PLANS,
        payload: res.data
      }));
};

export const deletePlan = (id) => dispatch => {
  axios.delete(`/api/plans/${id}`).then(res=>
  	dispatch({
  		type: DELETE_PLANS,
  		payload: id
  	}));
};



export const setPlansLoading = () => {
  return {
    type: PLANS_LOADING
  };
};