import React from 'react';

export default class FormField extends React.Component{
	render(){
		return(
			<div className="form-group">
				<input className="form-control" defaultValue={this.props.data}/>				
			</div>
		)
	}
}