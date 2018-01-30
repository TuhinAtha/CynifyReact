import ACTION_TYPES from './actionTypes';  
import makeQuery from '../../utils/query-maker';  

//import customerApi from '../api/customer.api';
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
    static sortChange(sort) {
      return {type: ACTION_TYPES.CUSTOMERS_SORT_CHANGE, payload: sort};
    }
    static pageChange(page) {
      return {type: ACTION_TYPES.CUSTOMERS_PAGE_CHANGE, payload: page};
    }
}