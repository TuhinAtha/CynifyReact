import React from 'react';
export default class ListItem extends React.Component{
	render(){
		let data = this.props.data;
		let config = this.props.config;
		let fields = config.fields;
		return(

			<li className="list-group-item">
			<div  className = {config.itemStyles ? config.itemStyles : ''}>
			{fields.map((field)=>this.getField(field))}
			</div>
			</li>
		);
	}
	getField(field){
		if(field.type == 'text'){
			return (<div className={field.styles} key={field.value}>{this.props.data[field.value]}</div>)
		}
	}
}