import React from 'react';
import ReactDom from 'react-dom';
import { connect } from 'react-redux';

import PageHeader from '../../../components/page-header/default';
import PageContent from '../../../components/page-content/default';
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
					label : "DOB",
					value : "dob",
					type : "date"
				}
			]
		}
	}
	render(){
		return(
			<div>
				<PageHeader title="Customer Detail"/>
				<PageContent>
					<Form data={this.props.data} config={this.config} onFormFieldChange={this.onFieldChange.bind(this)}/>
				</PageContent>
				<PageFooter/>
			</div>
			);
	}
	onFieldChange(e,value,config){
		debugger;
		this.props.updateProperty(config.value,value);
	}
	componentDidMount() {
		this.props.loadCustomer();
    }
    componentWillMount() {
	  console.log('Component WILL MOUNT!')
	}
	componentWillReceiveProps(newProps) {    
	  console.log('Component WILL RECIEVE PROPS!')
	}
	shouldComponentUpdate(newProps, newState) {
	  return true;
	}
	componentWillUpdate(nextProps, nextState) {
	  console.log('Component WILL UPDATE!');
	}
	componentDidUpdate(prevProps, prevState) {
	  console.log('Component DID UPDATE!')
	}
	componentWillUnmount() {
	  console.log('Component WILL UNMOUNT!')
	}
}
const mapStateToProps = (state) => {
	return {
		data : state.customer.data
	}
}
const mapDispatchFromProps = (dispatch, ownProps) => {
	return {
		loadCustomer : () => {
			return dispatch(CustomerAction.loadCustomer(ownProps.match.params.id));
		},
		updateProperty: (property,value) => {
			return dispatch(CustomerAction.updateProperty(property,value));
		}
	}
}

export default connect(
	mapStateToProps,
	mapDispatchFromProps
)(CustomerDetail);