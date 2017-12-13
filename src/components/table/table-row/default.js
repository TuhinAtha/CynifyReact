import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

export default class TableRow extends React.Component{
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
	getField(field){
		if(field.type == 'text'){
			return (<td key={REACT_KEY++}>{this.props.data[field.value]}</td>)
		}else if(field.type == 'link'){
			console.log("field.path"+field.path);
			let path = `${field.path}/${this.props.data[field.param]}`;
			return (
				<td key={REACT_KEY++}>
					<Link to={path}>{field.text}</Link>
				</td>
			)
		}
	}
}