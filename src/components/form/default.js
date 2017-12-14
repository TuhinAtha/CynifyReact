/**
* @author  Tuhin Atha https://github.com/TuhinAtha
* @decription : Form Component
* @usage : <Form config="@metadata" data="@data"/>
*/

/**Imports**/
import React from 'react';
import PropTypes from 'prop-types';
import FormField from './formfield/default';

/**Class Defination**/
export default class Form extends React.Component{
	/*
	* Render Function
	*/
	render(){
		let fields = this.props.config.fields;
		return(
			<form>
				{fields.map((field) => this.getFormField(field))}
			</form>
		)
	}
	/*
	* To get field
	* @param config Configuration of the Form Field
	*/
	getFormField(config){
		return <FormField key={REACT_KEY++} config={config} data={this.props.data[config.value]} />
	}
}

/**PropTypes**/
Form.propTypes = {
	config : PropTypes.any,
	data : PropTypes.any
}