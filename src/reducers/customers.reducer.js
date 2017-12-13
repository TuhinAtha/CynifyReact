import ACTION_TYPES from '../actions/actionTypes';  
const initialData = {
	fetching : false,
	fetched : false,
	error : false,
	results : []
};
export default function customersReducer(state = initialData, action) {  
  switch(action.type) {
    case ACTION_TYPES.CUSTOMERS_GET_SUCCESS: {
    	state = {
    		...state,
    		results : action.payload.results
	    }
	    break;
    }
      
    default: {
    }
      
  }
  return state;
}