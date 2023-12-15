import { combineReducers } from 'redux';
import authReducer from './authReducer';

const rootReducer = combineReducers({
  auth: authReducer, // 'auth' is the key under which authReducer will be available in the state
  // Add other reducers here if you have them
});

export default rootReducer;
