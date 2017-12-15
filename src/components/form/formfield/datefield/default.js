/**
* @author  Tuhin Atha https://github.com/TuhinAtha
* @decription : DateField Component
* @usage : <DateField config="@metadata" data="@data"/>
*/

/**Imports**/
import React from 'react';
import PropTypes from 'prop-types';
import DatePicker from 'material-ui/DatePicker';


/**Class Defination**/
export default class DateField extends React.Component{
	/*
	* Render Function
	*/
	constructor(props) {
		super(props);
	}
	render(){
		let config = this.props.config;
		return(
			//<input className="form-control" defaultValue={this.props.data}/>				
			<DatePicker
		        hintText="Controlled Date Input"
		        autoOk = {true}
		        value={this.props.data}
		    />
		)
	}
	
}

/**PropTypes**/
DateField.propTypes = {
	config : PropTypes.shape({
		label: PropTypes.string,
		value: PropTypes.any,
		type: PropTypes.string
	}),
	data : PropTypes.any
}