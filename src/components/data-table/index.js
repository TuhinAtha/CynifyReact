/**
* @author  Tuhin Atha https://github.com/TuhinAtha
* @decription : DataTable Component
* @usage : <DataTable config="@metadata" data="@data"/>
*/

/**Imports**/
import React from 'react';
import {
  SortingState,
  IntegratedSorting,
} from '@devexpress/dx-react-grid';
import {Grid,Table,TableHeaderRow,TableFilterRow} from '@devexpress/dx-react-grid-material-ui';
import Paper from 'material-ui/Paper';
import PropTypes from 'prop-types';
import DateTypeProvider from './formatters/date-type';
import LinkTypeProvider from './formatters/link-type';


/**Class Defination**/
export default function DataTable({config,data,changeSorting}){
	/*
	* Render Function
	*/
	let items = data;
	return(
		 <Paper>
	        <Grid
	          rows={data}
	          columns={config.columns}
	        >
	          {config.dateColumns && <DateTypeProvider for={config.dateColumns}/>}
	          {config.linkColumns && <LinkTypeProvider for={config.linkColumns}/>}
	          <SortingState
	            sorting={config.sorting}
	            onSortingChange={changeSorting}
	          />
	          <IntegratedSorting />
	          <Table />
	          <TableHeaderRow showSortingControls/>
	        </Grid>
	      </Paper>
	);
}

/**PropTypes**/
DataTable.propTypes = {
	config : PropTypes.any,
	data : PropTypes.any
}