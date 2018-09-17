import { combineReducers} from 'redux';
import planReducer from './planReducer';
import blockReducer from './blockReducer';

export default combineReducers({
	plan: planReducer,
	block: blockReducer
});