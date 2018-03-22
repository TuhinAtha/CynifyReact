import { CYN_APP_SET_AUTH } from '../../constants/index'
import axios from 'axios';

export const cynAppLogin = (payload) => {
	return (dispatch) => new Promise((resolve, reject)=> {
		axios.post('/auth/login',payload).then((response)=> {
			if(response.data.state == 'success'){
				dispatch({type: CYN_APP_SET_AUTH, payload : response})
				resolve(response.data);
			}else{
				reject(response.data);
			}
			
    }).catch(error => {
			reject(response.data);
    });  
	})
}
export const cynAppLogout = (payload) => {
	return (dispatch) => axios.get('/auth/signout').then((response)=> {
				window.location.pathname = '/login'
    }) 
	
}