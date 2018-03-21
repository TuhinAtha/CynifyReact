import {combineReducers} from 'redux';  
import AppReducer from './app.reducer';
import CustomersReducer from './customers.reducer';
import CustomerReducer from './customer.reducer';

const reducers = combineReducers({  
  // short hand property names
  app : AppReducer,
  customers : CustomersReducer,
  customer : CustomerReducer
})

export default reducers; 