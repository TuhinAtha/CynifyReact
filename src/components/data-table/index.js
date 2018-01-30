/**
* @author  Tuhin Atha https://github.com/TuhinAtha
* @decription : DataTable Component
* @usage : <DataTable config="@metadata" data="@data"/>
*/

/**Imports**/
import React from 'react';
import {
  SortingState,
   PagingState,
  CustomPaging
} from '@devexpress/dx-react-grid';
import {Grid,Table,TableHeaderRow,TableFilterRow,PagingPanel} from '@devexpress/dx-react-grid-material-ui';
import Paper from 'material-ui/Paper';
import PropTypes from 'prop-types';
import { Loading } from './components/loading';
import DateTypeProvider from './formatters/date-type';
import LinkTypeProvider from './formatters/link-type';
import DataTableSearch from './data-table-search';
import { withStyles } from 'material-ui/styles';
import {styles} from './styles';

/**Class Defination**/
class DataTable extends React.Component{
	/*
	* Render Function
	*/
	constructor(props){
		super(props);
		this.handleSortChange = this.handleSortChange.bind(this);
		this.handlePageChange = this.handlePageChange.bind(this);
	}
	handleSortChange(sorting){
		//config.sorting = [].concat(sorting);
		this.props.onSortChange(sorting[0]);
	}
	handlePageChange(currentPage){
		this.props.onPageChange(currentPage+1);
	}
	render(){
		let {config,data,loading,onSortChange,onPageChange,classes} = this.props;
		return(
			 <Paper className={classes.root}>
			    <DataTableSearch filters={config.filters}/>
		        <Grid
		          rows={data.results}
		          columns={config.columns}
		        >
		          {config.dateColumns && <DateTypeProvider for={config.dateColumns}/>}
		          {config.linkColumns && <LinkTypeProvider for={config.linkColumns}/>}
		          <SortingState
		            sorting={config.sorting}
		            onSortingChange={this.handleSortChange}
		          />
		          <PagingState
		            currentPage={data.page}
		            onCurrentPageChange={this.handlePageChange}
		            pageSize={10}
		          />
		          <CustomPaging
		            totalCount={data.totalCount}
		          />
		          <Table />
		          <TableHeaderRow showSortingControls/>
		          <PagingPanel />
		          {loading && <Loading/>}
		        </Grid>
		      </Paper>
		);
	}
	
}

/**PropTypes**/
DataTable.propTypes = {
	config : PropTypes.any,
	data : PropTypes.any
}

export default withStyles(styles)(DataTable);