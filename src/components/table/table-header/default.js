import React from 'react';
export default class TableHeader extends React.Component{
	render(){
		let config = this.props.config;
		let fields = config.fields;
		return(

			<tr>
			{fields.map((field)=>this.getField(field))}
			</tr>
		);
	}
	getField(field){
		return (<th className="bg-info text-white" key={REACT_KEY++}>{field.label}</th>)
	}
}