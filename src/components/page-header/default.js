import React from 'react';

export default class PageHeader extends React.Component{
	render(){
		return(
			<div className="page-header">
				<nav className="navbar navbar-light bg-light">
				  <span className="navbar-text">
				    {this.props.title}
				  </span>
				</nav>
			</div>
		);
	}
}
