import ACTION_TYPES from '../actions/actionTypes';  
const initialData = {
	fetching : false,
	fetched : false,
	error : false,
  params : {},
 	data : {
    results : [],
    filterOptions: {},
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
          totalCount : action.payload.totalCount,
          filterOptions: action.payload.filterOptions
          
        },
        fetched : true,
        fetching : false
	    }
	    break;
    }
    case ACTION_TYPES.CUSTOMERS_SET_SORT: {
      state = {
        ...state,
        params : {
          ...state.params,
          sort:Object.assign({},action.payload)
        }
      }
      break;
    }
    case ACTION_TYPES.CUSTOMERS_SET_PAGE: {
      state = {
        ...state,
        params : {
          ...state.params,
          page : action.payload
        }
      }
      break;
    }
     case ACTION_TYPES.CUSTOMERS_SET_QUERY: {
      state = {
        ...state,
        params : {
          ...state.params,
          q : action.payload
        }
      }
      break;
    }
    case ACTION_TYPES.CUSTOMERS_SET_FILTERS: {
      state = {
        ...state,
        params : {
          ...state.params,
          filters : action.payload
        }
      }
    }
    default: {
    }
      
  }
  return state;
}