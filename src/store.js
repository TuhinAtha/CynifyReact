import {createStore, applyMiddleware} from 'redux';  
import reducers from './reducers/reducers';  
import thunk from 'redux-thunk';

export default function configureStore() {  
  console.log('here');
  return createStore(
    reducers,
    {},
    applyMiddleware(thunk)
  );
}