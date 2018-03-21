import { CYN_APP_SET_AUTH } from '../../constants/index'
import axios from 'axios';



export const cynAppLogin = (payload) => {
	// return (dispatch) => axios.post('/auth/login',payload).then((response)=> {
	// 		debugger;
	// 		if(response.data.state == 'success'){
	// 			//localStorage.setItem('user',JSON.stringify(response.data.user));
	// 			console.log('login suceessfull');
	// 			dispatch({type: CYN_APP_SET_AUTH, payload : payload})
	// 		}
			
	//     }).catch(error => {
			
	//     });
	return (dispatch) => new Promise((resolve, reject)=> {
		axios.post('/auth/login',payload).then((response)=> {
	   	debugger
			if(response.data.state == 'success'){
				dispatch({type: CYN_APP_SET_AUTH, payload : payload})
				resolve(response.data);
			}else{
				reject(response.data);
			}
			
    }).catch(error => {
			reject(response.data);
    });  
	})
	
	
}