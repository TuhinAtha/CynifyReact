/**
* @author  Tuhin Atha https://github.com/TuhinAtha
* @decription : FormField Component
* @usage : <FormField config="@metadata" data="@data"/>
*/

/**Imports**/
import React from 'react';
import PropTypes from 'prop-types';
import TextField from './textfield/default';
import DateField from './datefield/default';


/**Class Defination**/
export default class FormField extends React.Component{
	/*
	* Render Function
	*/
	render(){
		let config = this.props.config;
		return(
			<div className="form-group">
				{config.label && <label className="col-form-label">{config.label}</label>}
				{this.getFieldByType(config)}			
			</div>
		)
	}
	/*
	* To get field based on type
	* @param config Configuration of the Form Field
	*/
	getFieldByType(config){
		switch(config.type){
			case 'date' : {
				return (
					<DateField config={config} data={new Date(this.props.data)} />
				)
			};
			default : {
				return (
					<TextField config={config} data={this.props.data} />
				)
			}
		}
	}
	
}

/**PropTypes**/
FormField.propTypes = {
	config : PropTypes.shape({
		label: PropTypes.string,
		value: PropTypes.any,
		type: PropTypes.string
	}),
	data : PropTypes.any
}