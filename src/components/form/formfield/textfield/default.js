import React from 'react';
import PropTypes from 'prop-types';

export default class TextField extends React.Component{
	render(){
		let config = this.props.config;
		return(
			<input className="form-control" defaultValue={this.props.data}/>				
		)
	}
}
TextField.propTypes = {
	config : PropTypes.shape({
		label: PropTypes.string,
		value: PropTypes.any,
		type: PropTypes.string
	}),
	data : PropTypes.any
}