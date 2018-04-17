import {createStore, applyMiddleware} from 'redux';  
import reducers from './reducers';  
import thunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import axios from 'axios';
axios.interceptors.response.use(null, function(err) {
	if(err.response.status === 401) {
		window.location.pathname = '/login';
    return;
	}
	if(err.response.status === 504) {
		window.location.pathname = '/unreachable';
    return;
	}
	return Promise.reject(error);
});

 
const persistConfig = {
  key: 'root',
  storage: storage
}
 
const persistedReducer = persistReducer(persistConfig, reducers)
 

export const store = createStore(
    persistedReducer,
    {},
    applyMiddleware(thunk)
);
store.subscribe(() => {
	console.log("Store Updated",store.getState());
});

export const persistor = persistStore(store)

export default store;