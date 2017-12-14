/**
* @author  Tuhin Atha https://github.com/TuhinAtha
* @decription : FormFIeld Component
* @usage : <TextField config="@metadata" data="@data"/>
*/

/**Imports**/
import React from 'react';
import PropTypes from 'prop-types';

/**Class Defination**/
export default class TextField extends React.Component{
	/*
	* Render Function
	*/
	render(){
		let config = this.props.config;
		return(
			<input className="form-control" defaultValue={this.props.data}/>				
		)
	}
}

/**PropTypes**/
TextField.propTypes = {
	config : PropTypes.shape({
		label: PropTypes.string,
		value: PropTypes.any,
		type: PropTypes.string
	}),
	data : PropTypes.any
}