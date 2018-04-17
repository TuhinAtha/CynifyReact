import { CYN_APP_SET_AUTH } from '../../constants/index'
const appReducer = (state = {
	navs :[{
		text : "Customers",
		to : "/CustomerList",
		icon : "",
		isActive : false,
	},{
		text : "Dashboard",
		to : "/Dashboard",
		icon : "",
		isActive : false,
	}],
	auth : null,
	permissions : [
		'CanViewCustomerList',
	],
	screens : {
		customerlist: {
			key : "customers",
			columns : [
				{
					title: "User Name",
					name : "username"
				},
				{
					title: "City",
					name : "address"
				},
				{
					title: "Contact",
					name : "mobile"
				},
				{
					title: "Age",
					name : "age"
				},
				{
					title: "DOB",
					name : "dob"
				},
				{
					title: "",
					name : "_id",
					text : "View Details",
					path : "/customer/{0}",
					replacements:["_id"],
					color : 'primary',
					disable : false
				}
			],
			dateColumns : ["dob"],
			linkColumns : ["_id"],
			sort: { columnName: 'username', direction: 'asc' },
			filters:[
				{
					name:'address',
					label:'Address',
					type:'distinct',
					control:'multiselect'
				},
				{
					name:'qualification',
					label:'Qualification',
					type:'distinct',
					control:'multiselect'
				},
				{
					name:'age',
					label:'Age',
					type:'number-range',
					control:'number-range',
					diff:5
				}
			]
		}
	}
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