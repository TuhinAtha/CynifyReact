/**
* @author  Tuhin Atha https://github.com/TuhinAtha
* @decription : TableRow Component
* @usage : <TableRow config="@metadata" data="@data"/>
*/

/**Imports**/
import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

/**Class Defination**/
export default class TableRow extends React.Component{
	/*
	* Render Function
	*/
	render(){
		let data = this.props.data;
		let config = this.props.config;
		let fields = config.fields;
		return(
			<tr>
			{fields.map((field)=>this.getField(field))}
			</tr>
		);
	}
	/*
	* To get field
	* @param field Configuration of the Table Field
	*/
	getField(field){
		if(field.type == 'text'){
			return (<td key={REACT_KEY++}>{this.props.data[field.value]}</td>)
		}else if(field.type == 'link'){
			let path = `${field.path}/${this.props.data[field.param]}`;
			return (
				<td key={REACT_KEY++}>
					<Link to={path}>{field.text}</Link>
				</td>
			)
		}
	}
}

/**PropTypes**/
TableRow.propTypes = {
	config : PropTypes.any,
	data : PropTypes.any
}