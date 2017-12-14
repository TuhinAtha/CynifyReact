/**
* @author  Tuhin Atha https://github.com/TuhinAtha
* @decription : TableHeader Component
* @usage : <TableHeader config="@metadata" data="@data"/>
*/

/**Imports**/
import React from 'react';
import PropTypes from 'prop-types';

/**Class Defination**/
export default class TableHeader extends React.Component{
	/*
	* Render Function
	*/
	render(){
		let config = this.props.config;
		let fields = config.fields;
		return(
			<tr>
			{fields.map((field)=>this.getFieldHeader(field))}
			</tr>
		);
	}
	/*
	* To get field header
	* @param config Configuration of the Table Field
	*/
	getFieldHeader(field){
		return (<th className="bg-info text-white" key={REACT_KEY++}>{field.label}</th>)
	}
}

/**PropTypes**/
TableHeader.propTypes = {
	config : PropTypes.any,
	data : PropTypes.any
}