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
            // setTimeout(()=>{
            //     let data = [{
            //         username : 'Raju',
            //         city : 'Bihar',
            //         contact : '8876567989',
            //         age : '26'

            //     },{
            //         username : 'Dinesh',
            //         city : 'Tamil',
            //         contact : '9876567838',
            //         age : '28'
            //     },{
            //         username : 'Raju',
            //         city : 'Bihar',
            //         contact : '8876567989',
            //         age : '26'

            //     },{
            //         username : 'Dinesh',
            //         city : 'Tamil',
            //         contact : '9876567838',
            //         age : '28'
            //     },{
            //         username : 'Raju',
            //         city : 'Bihar',
            //         contact : '8876567989',
            //         age : '26'

            //     },{
            //         username : 'Dinesh',
            //         city : 'Tamil',
            //         contact : '9876567838',
            //         age : '28'
            //     },{
            //         username : 'Raju',
            //         city : 'Bihar',
            //         contact : '8876567989',
            //         age : '26'

            //     },{
            //         username : 'Dinesh',
            //         city : 'Tamil',
            //         contact : '9876567838',
            //         age : '28'
            //     },{
            //         username : 'Raju',
            //         city : 'Bihar',
            //         contact : '8876567989',
            //         age : '26'

            //     },{
            //         username : 'Dinesh',
            //         city : 'Tamil',
            //         contact : '9876567838',
            //         age : '28'
            //     }];
            //     dispatch({type: ACTION_TYPES.CUSTOMERS_GET_SUCCESS, payload:data});
            // },2000);
        };
    }
}