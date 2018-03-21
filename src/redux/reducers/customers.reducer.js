import ACTION_TYPES from '../actions/actionTypes';  
const initialData = {
	fetching : false,
	fetched : false,
	error : false,
  params : {},
	data : {
    results : [],
    totalCount : 0
  },
  
};
export default function customersReducer(state = initialData, action) {  
  switch(action.type) {
    case ACTION_TYPES.CUSTOMER_GET_FETCHING: {
      state = {
        ...state,
        fetching : true
      }
      break;
    }
    case ACTION_TYPES.CUSTOMERS_GET_SUCCESS: {
    	state = {
    		...state,
    		data : {
          ...state.data,
          results : action.payload.results,
          totalCount : action.payload.totalCount
          
        },
        fetched : true,
        fetching : false
	    }
	    break;
    }
    case ACTION_TYPES.CUSTOMERS_SORT_CHANGE: {
      state = {
        ...state,
        params : {
          ...state.params,
          sort:Object.assign({},action.payload)
        }
      }
      break;
    }
    case ACTION_TYPES.CUSTOMERS_PAGE_CHANGE: {
      state = {
        ...state,
        params : {
          ...state.params,
          page : action.payload
        }
      }
      break;
    }
    default: {
    }
      
  }
  return state;
}