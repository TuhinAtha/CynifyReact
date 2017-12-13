import React from 'react';
import ReactDom from 'react-dom';
import { connect } from 'react-redux';

import PageHeader from '../../../components/page-header/default';
import Form from '../../../components/form/default';
import PageFooter from '../../../components/page-footer/default';
import CustomerAction from  '../../../actions/customer.action';
class CustomerDetail extends React.Component{
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
		debugger;
		return(
			<div>
				<PageHeader title="Customer Detail"/>
				<Form data={this.props.data} config={this.config}/>
				<PageFooter/>
			</div>
			);
	}
	componentDidMount() {
		debugger;
      this.props.loadCustomer();
    }
}
const mapStateToProps = (state) => {
	console.log("inside state to props ccustomet detail");
	console.log(state);
	debugger;
	return {
		data : state.customer.data
	}
}
const mapDispatchFromProps = (dispatch, ownProps) => {
	debugger;
	return {
		loadCustomer : () => {
			return dispatch(CustomerAction.loadCustomer(ownProps.match.params.id));
		}
	}
}

export default connect(
	mapStateToProps,
	mapDispatchFromProps
)(CustomerDetail);