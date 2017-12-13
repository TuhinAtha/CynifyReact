import React from 'react';
import ListItem from './list-item/default'
export default class List extends React.Component{
	render(){
		let items = this.props.data;
		let config =  this.props.config;
		let listItems = items && items.map((item)=><ListItem key={item.toString()} data={item} config={config} />);
		return(
			<ul className="list-group">
				{listItems}
			</ul>
		);
	}
}