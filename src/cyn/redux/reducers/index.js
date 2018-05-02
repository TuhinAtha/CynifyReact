import {combineReducers} from 'redux';  
import AppReducer from './app.reducer';
import {createReducer} from './base.reducer'
let reducers = {
	app : AppReducer
}

let modules = ['customer','dealer']
modules.forEach((module) => {
	reducers[module] = createReducer(module)
})
const combinedReducers = combineReducers(reducers)

export default combinedReducers; 