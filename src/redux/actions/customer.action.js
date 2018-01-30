import ACTION_TYPES from './actionTypes';  
//import customerApi from '../api/customer.api';
import axios from 'axios';
export default class CustomerAction{
    static loadCustomer(id) {  
        return (dispatch) => {
            axios.get('/api/dummy/'+id).then((response)=> {
              dispatch({type: ACTION_TYPES.CUSTOMER_GET_SUCCESS, payload: response.data});
            }).catch(error => {
              dispatch({type: ACTION_TYPES.CUSTOMER_GET_ERROR, error});
            });
           
        };
    }
    static updateProperty(property,value){
    	let payload={};
    	payload[property] = value;
    	return {
    		type: ACTION_TYPES.CUSTOMER_PROPERTY_CHANGE,
    		payload: payload
    	}
    }
}