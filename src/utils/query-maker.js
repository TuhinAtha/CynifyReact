import _ from 'lodash';
const makeQuery=(url,obj)=>{
	let queryStringArr = [];
	if(_.isEmpty(obj)){
		return url;
	}
	for(let key in obj){
		let val = obj[key];
		if(typeof obj[key] == 'object'){
			queryStringArr.push(key+'='+JSON.stringify(obj[key]));
		}else{
			queryStringArr.push(key+'='+obj[key]);
		}
	}
	return url+'?'+queryStringArr.join('&');
}
export default makeQuery;