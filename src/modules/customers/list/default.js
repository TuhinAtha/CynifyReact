import React from 'react';
import ReactDom from 'react-dom';
import { connect } from 'react-redux';
import {ACTION_TYPES} from  '../../../actions/actionTypes';
import CustomersAction from  '../../../actions/customers.action';

import PageHeader from '../../../components/page-header/default';
import Table from '../../../components/table/default';
import PageFooter from '../../../components/page-footer/default';
class CustomerList extends React.Component{
	constructor(){
		super();
		this.config = {
			fields : [
				{
					label: "User Name",
					value : "username",
					type : "text"
				},
				{
					label: "City",
					value : "address",
					type : "text"
				},
				{
					label: "Contact",
					value : "mobile",
					type : "text"
				},
				{
					label: "Age",
					value : "age",
					type : "text"
				},
				{
					label: "",
					type : "link",
					text : "view",
					path : "/customer",
					param : "_id"
				}

			]
		}
	}
	render(){
		return(
			<div>
				<PageHeader title="CustomerList"/>
				<Table data={this.props.data} config={this.config}/>
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
