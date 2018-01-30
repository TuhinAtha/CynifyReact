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
    dob : null,
    _id : ""
  }
};
export default function customerReducer(state = initialData, action) {  
  switch(action.type) {
    case ACTION_TYPES.CUSTOMER_GET_SUCCESS: {
    	state = {
    		...state,
    		data : action.payload
      }
      break;
    }
    case ACTION_TYPES.CUSTOMER_PROPERTY_CHANGE:{
      let data = Object.assign({},state.data,action.payload);
      state = {
        ...state,
        data : data
      }
      // state = {
      //   ...state,
      //   data : {
      //     ...data,
      //     action.payload.property : action.payload.value
      //   }
      // }
      break;
    }
      
    default: {
    
    }
      
  }
  return state;
}
