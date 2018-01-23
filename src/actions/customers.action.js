import ACTION_TYPES from './actionTypes';  
//import customerApi from '../api/customer.api';
import axios from 'axios';
export default class CustomersAction{
    static loadCustomers() {  
        return (dispatch) => {
            axios.get('/api/dummy').then((response)=> {
              dispatch({type: ACTION_TYPES.CUSTOMERS_GET_SUCCESS, payload: response.data});
            }).catch(error => {
              dispatch({type: ACTION_TYPES.CUSTOMERS_GET_ERROR, error});
            });
            
        };
    }
}