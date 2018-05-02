import axios from 'axios';
export const login = (data, cbSuccess, cdError) => {
	axios.post('/auth/login',data).then((response)=> {
		if(response.data.state == 'success'){
			localStorage.setItem('user',JSON.stringify(response.data.user));
			console.log('login suceessfull');
			cbSuccess();
		}else{
			console.log('login unsuceessfull');
			cbError();
		}
		
    }).catch(error => {
		console.log('login unsuceessfull');
		cbError();
    });
}