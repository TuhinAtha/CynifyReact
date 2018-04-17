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
	constructor(props){
		super(props);
	}
	render(){
		return(
			<div>
				<PageHeader title="CustomerList"/>
				<DataTable data={this.props.data} loading={this.props.fetching} config={this.props.config} onFilterChanged={this.props.setQuery} onPageChange={this.props.setPage} onSortChange={this.props.setSort}/>
				<PageFooter/>
			</div>
		);
	}
  componentDidMount() {
  	this.props.setSort(this.props.config.sort)
  	this.props.setFilters(this.props.config.filters)
  	this.props.loadCustomers(this.props.params)
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
		config: state.app.screens.customerlist,
		params : state.customers.params,
		fetching : state.customers.fetching
	}
}

const mapDispatchToProps = dispatch => {
	return {
		loadCustomers : (params) => dispatch(CustomersAction.loadCustomers(params)),
		setFilters: (filters) => dispatch(CustomersAction.setFilters(filters)),
		setQuery: (q) => dispatch(CustomersAction.setQuery(q)),
		setSort: (sort) => dispatch(CustomersAction.setSort(sort)),
		setPage : (page) => dispatch(CustomersAction.setPage(page)),
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(CustomerList)
