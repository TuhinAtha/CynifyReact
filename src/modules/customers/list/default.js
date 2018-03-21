import React from 'react';
import ReactDom from 'react-dom';
import _ from 'lodash';
import { connect,bindActionCreators  } from 'react-redux';
import {ACTION_TYPES} from  '../../../redux/actions/actionTypes';
import CustomersAction from  '../../../redux/actions/customers.action';

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
			filters:[
				{
					name:'address',
					label:'Tab1',
					type:'distinct',
					control:'multiselect'
				},
				{
					label:'Tab1',
					type:'distinct',
					name:'qualification',
					control:'multiselect'

				}
			]
		};
		this.handleSortChange = this.handleSortChange.bind(this);
		this.handlePageChange = this.handlePageChange.bind(this);
	}
	render(){
		return(
			<div>
				{/*<PageHeader title="CustomerList"/>*/}
				<DataTable data={this.props.data} loading={this.props.fetching} config={this.config} onPageChange={this.handlePageChange} onSortChange={this.handleSortChange}/>
				<PageFooter/>
			</div>
		);
	}
	handlePageChange(page){
		this.props.pageChange(page);
	}
	handleSortChange(sorting){
		this.props.sortChange(sorting);
	}
    componentDidMount() {
    	this.props.loadCustomers();
    }
    componentWillReceiveProps(newProps){
    	console.log('Component WillReceiveProps!');
    	if(!_.isEqual(this.props.params,newProps.params)){
    		this.props.loadCustomers(newProps.params);

    	}
    	
    }
}
const mapStateToProps = state => {
	return {
		data : state.customers.data,
		params : state.customers.params,
		fetching : state.customers.fetching
	}
}

const mapDispatchToProps = dispatch => {
	return {
		loadCustomers : (params) => dispatch(CustomersAction.loadCustomers(params)),
		sortChange: (sort) => dispatch(CustomersAction.sortChange(sort)),
		pageChange : (page) => dispatch(CustomersAction.pageChange(page)),
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(CustomerList)
