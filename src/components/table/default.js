/**
* @author  Tuhin Atha https://github.com/TuhinAtha
* @decription : Table Component
* @usage : <Table config="@metadata" data="@data"/>
*/

/**Imports**/
import React from 'react';
import PropTypes from 'prop-types';
import TableHeader from './table-header/default';
import TableRow from './table-row/default';

/**Class Defination**/
export default class Table extends React.Component{
	/*
	* Render Function
	*/
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

/**PropTypes**/
Table.propTypes = {
	config : PropTypes.any,
	data : PropTypes.any
}