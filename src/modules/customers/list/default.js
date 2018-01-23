import React from 'react';
import ReactDom from 'react-dom';
import { connect } from 'react-redux';
import {ACTION_TYPES} from  '../../../actions/actionTypes';
import CustomersAction from  '../../../actions/customers.action';

import PageHeader from '../../../components/page-header/default';
import List from '../../../components/list/default';
import DataTable from '../../../components/data-table';
import PageFooter from '../../../components/page-footer/default';
class CustomerList extends React.Component{
	constructor(){
		super();
		this.config = {
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
			sorting: [{ columnName: 'username', direction: 'asc' }],
		}
	}
	render(){
		return(
			<div>
				<PageHeader title="CustomerList"/>
				<DataTable data={this.props.data} config={this.config} changeSorting={this.props.loadCustomers}/>
				<PageFooter/>
			</div>
		);
	}
	
    componentDidMount() {
      this.props.loadCustomers();
    }

}
const mapStateToProps = state => {
	return {
		data : state.customers.results
	}
}

const mapDispatchToProps = dispatch => {
	return {
		loadCustomers : () => dispatch(CustomersAction.loadCustomers())
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(CustomerList)
