import React from 'react';
import TableHeader from './table-header/default';
import TableRow from './table-row/default';
export default class Table extends React.Component{
	render(){
		let items = this.props.data;
		let config =  this.props.config;
		let rows = items && items.map((item)=><TableRow key={REACT_KEY++} data={item} config={config} />);
		return(
			<table className="table table-bordered table-hover">
				<thead>
					<TableHeader config={config}/>
				</thead>
				<tbody>
				{rows}
				</tbody>
			</table>
		);
	}
}