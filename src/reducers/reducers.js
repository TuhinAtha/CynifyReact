import {combineReducers} from 'redux';  
import CustomersReducer from './customers.reducer';
import CustomerReducer from './customer.reducer';

const reducers = combineReducers({  
  // short hand property names
  customers : CustomersReducer,
  customer : CustomerReducer
})

export default reducers; 