import React from 'react';
import PropTypes from 'prop-types';
import TextField from './textfield/default';
export default class FormField extends React.Component{
	render(){
		let config = this.props.config;
		return(
			<div className="form-group">
				{config.label && <label className="col-form-label">{config.label}</label>}
				{this.getFieldByType(config)}			
			</div>
		)
	}
	getFieldByType(config){
		switch(config.type){
			default : {
				return (
					<TextField config={config} data={this.props.data} />
				)
			}
		}
	}
}
FormField.propTypes = {
	config : PropTypes.shape({
		label: PropTypes.string,
		value: PropTypes.any,
		type: PropTypes.string
	}),
	data : PropTypes.any
}