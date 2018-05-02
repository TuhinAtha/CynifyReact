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
  detail : {
    fetching : false,
    fetched : false,
    error : false,
    data : null
  }
};
export const createReducer = (module) =>{

  const baseReducer = (state = initialData, action) => {  
    switch(action.type) {
      case module.trim().toUpperCase()+'S_GET_FETCHING': {
        state = {
          ...state,
          fetching : true
        }
        break;
      }
      case module.trim().toUpperCase()+'S_GET_SUCCESS': {
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
      case module.trim().toUpperCase()+'S_SET_SORT': {
        state = {
          ...state,
          params : {
            ...state.params,
            sort:Object.assign({},action.payload)
          }
        }
        break;
      }
      case module.trim().toUpperCase()+'S_SET_PAGE': {
        state = {
          ...state,
          params : {
            ...state.params,
            page : action.payload
          }
        }
        break;
      }
       case module.trim().toUpperCase()+'S_SET_QUERY': {
        state = {
          ...state,
          params : {
            ...state.params,
            q : action.payload
          }
        }
        break;
      }
      case module.trim().toUpperCase()+'S_SET_FILTERS': {
        state = {
          ...state,
          params : {
            ...state.params,
            filters : action.payload
          }
        }
      }
      case module.trim().toUpperCase()+'_GET_SUCCESS': {
        state = {
          ...state,
          detail : {
            ...state.detail,
            data : action.payload
          }
        }
        break;
      }
      default: {
      }
        
    }
    return state;
  }
  return baseReducer
}
 