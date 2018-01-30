import {createStore, applyMiddleware} from 'redux';  
import reducers from './reducers/reducers';  
import thunk from 'redux-thunk';

const store = createStore(
    reducers,
    {},
    applyMiddleware(thunk)
);
store.subscribe(() => {
	console.log("Store Updated",store.getState());
});

export default store;