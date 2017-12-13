import ACTION_TYPES from '../actions/actionTypes';  
const initialData = {
	fetching : false,
	fetched : false,
	error : false,
	data : {
    username : "",
    address : "",
    age : "",
    mobile : "",
    _id : ""
  }
};
export default function customerReducer(state = initialData, action) {  
  switch(action.type) {
    case ACTION_TYPES.CUSTOMER_GET_SUCCESS: {
      debugger;
    	state = {
    		...state,
    		data : action.payload
	    }
	    break;
    }
      
    default: {
    }
      
  }
  return state;
}