import { CYN_APP_SET_AUTH } from '../../constants/index'
const appReducer = (state = {
	navs :[{
		text : "Customers",
		to : "/CustomerList",
		icon : "",
		isActive : false,
	}],
	auth : null,
	permissions : [
		'CanViewCustomerList',
	]
},action) => {
	switch(action.type) {
		case CYN_APP_SET_AUTH : {
			return {
				...state,
				auth : action.payload				
			}
			break;
		}
		default :{
			return state;
		}
	}
}
export default appReducer;