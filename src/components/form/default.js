import React from 'react';
import FormField from './formfield/default';

export default class Form extends React.Component{
	render(){
		let fields = this.props.config.fields;
		return(
			<form>
				{fields.map((field) => this.getField(field))}
			</form>
		)
	}
	getField(config){
		return <FormField key={REACT_KEY++} config={config} data={this.props.data[config.value]} />
	}
}