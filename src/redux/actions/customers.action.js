import ACTION_TYPES from './actionTypes';  
import makeQuery from '../../utils/query-maker';  
import axios from 'axios';
export default class CustomersAction{
    static loadCustomers(params) {
        return (dispatch,getState) => {
            dispatch({type: ACTION_TYPES.CUSTOMER_GET_FETCHING, payload: true});
            let url='/api/dummy';
            if(params){
                  url = makeQuery(url,params);
            }
            axios.get(url).then((response)=> {
              dispatch({type: ACTION_TYPES.CUSTOMERS_GET_SUCCESS, payload: response.data});
            }).catch(error => {
              dispatch({type: ACTION_TYPES.CUSTOMERS_GET_ERROR, error});
            });
        };
    }
    static setFilters(filters) {
      let cFilters = {};
      for(let i in filters){
        let obj = {};
        if(filters[i].type){
          obj.t = filters[i].type
        }
        if(filters[i].diff){
          obj.d = filters[i].diff
        }

        cFilters[filters[i].name] = {...obj};
      }
      return {type: ACTION_TYPES.CUSTOMERS_SET_FILTERS, payload: cFilters};
    }
    static setSort(sort) {
      return {type: ACTION_TYPES.CUSTOMERS_SET_SORT, payload: sort};
    }
    static setPage(page) {
      return {type: ACTION_TYPES.CUSTOMERS_SET_PAGE, payload: page};
    }
    static setQuery(q) {
      return {type: ACTION_TYPES.CUSTOMERS_SET_QUERY, payload: q};
    }
}