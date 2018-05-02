import React from 'react';

export default class PageContent extends React.Component{
	render(){
		return(
			<div className="page-content p-3">{this.props.children}</div>
		);
	}
}
