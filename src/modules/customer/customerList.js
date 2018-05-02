import React from 'react';
import ReactDom from 'react-dom';
import _ from 'lodash';
import { connect,bindActionCreators  } from 'react-redux';
import CustomerAction from  '../../redux/actions/customer.action';
import PageHeader from '../../cyn/components/page-header/default';
import DataTable from '../../cyn/components/data-table';
import PageFooter from '../../cyn/components/page-footer/default';
class CustomerList extends React.Component{
	constructor(props){
		super(props);
	}
	render(){
		return(
			<div>
				<PageHeader title="Customer List"/>
				<DataTable data={this.props.data} loading={this.props.fetching} config={this.props.config} onFilterChanged={this.props.setQuery} onPageChange={this.props.setPage} onSortChange={this.props.setSort}/>
				<PageFooter/>
			</div>
		);
	}
  componentDidMount() {
  	if(this.props.config.sort){
  		this.props.setSort(this.props.config.sort, true)
  	}

  	this.props.setFilters(this.props.config.filters)
  	this.props.loadList(this.props.params)
  }
  componentWillReceiveProps(newProps){
  	console.log('Component WillReceiveProps!');
  	if(!_.isEqual(this.props.params,newProps.params)){
  		this.props.loadList(newProps.params);
  	}
  }
}
const mapStateToProps = state => {
	return {
		data : state.customer.data,
		config: state.app.screens.customerlist,
		params : state.customer.params,
		fetching : state.customer.fetching
	}
}

const mapDispatchToProps = dispatch => {
	return {
		setFilters: (filters) => dispatch(CustomerAction.setFilters(filters)),

		loadList : (params) => dispatch(CustomerAction.loadList(params)),
		setQuery: (q, skipReload) => dispatch(CustomerAction.setQuery(q, skipReload)),
		setSort: (sort, skipReload) => dispatch(CustomerAction.setSort(sort, skipReload)),
		setPage : (page, skipReload) => dispatch(CustomerAction.setPage(page, skipReload)),
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(CustomerList)
