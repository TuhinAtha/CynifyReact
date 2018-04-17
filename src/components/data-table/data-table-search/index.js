/**
* @author  Tuhin Atha https://github.com/TuhinAtha
* @decription : DataTable Component
* @usage : <DataTable config="@metadata" data="@data"/>
*/

/**Imports**/
import React from 'react';
import Grid from 'material-ui/Grid';
import Drawer from 'material-ui/Drawer';
import Divider from 'material-ui/Divider';
import Button from 'material-ui/Button';
import Chip from 'material-ui/Chip';
import SearchIcon from 'material-ui-icons/Search';
import Typography from 'material-ui/Typography';

import ExpansionPanel, {
  ExpansionPanelSummary,
  ExpansionPanelDetails,
} from 'material-ui/ExpansionPanel';
import ExpandMoreIcon from 'material-ui-icons/ExpandMore';
import {
  FormLabel,
  FormControl,
  FormGroup,
  FormControlLabel,
  FormHelperText,
} from 'material-ui/Form';

import Input, { InputLabel } from 'material-ui/Input';
import Select from 'material-ui/Select';
import { MenuItem } from 'material-ui/Menu';

import Checkbox from 'material-ui/Checkbox';

import { withStyles } from 'material-ui/styles';

import { withRouter } from 'react-router'

import {styles} from './styles';


/**Class Defination**/
class DataTableSearch extends React.Component{
	constructor(props){
		super(props)
		this.state = {
			drawerOpen : false,
			filters: null,
			filterOptions: null,
			selected:{}
		}
		this.toggleDrawer = this.toggleDrawer.bind(this)
		this.handleMultiselectChange = this.handleMultiselectChange.bind(this)
		this.handleNumberRangeChange = this.handleNumberRangeChange.bind(this)
		this.addItemToSelected = this.addItemToSelected.bind(this)
		this.handleChipDelete = this.handleChipDelete.bind(this)
	}
	toggleDrawer(e){
		this.setState(prevState => ({
      drawerOpen: !prevState.drawerOpen
    }));
	}
	handleMultiselectChange(e){
		
		let filter = JSON.parse(e.target.getAttribute('filter'))
		let name = filter.name
		let index = e.target.getAttribute('index')
		let value = e.target.getAttribute('value')

		let filterOptions = {...this.state.filterOptions}
		filterOptions[name][index]['checked'] = !filterOptions[name][index]['checked']

		if(filterOptions[name][index]['checked']){
			this.addItemToSelected(JSON.stringify({control : 'multiselect', name : name, index : index}), value)
		}else{
			this.removerItemFromSelected(JSON.stringify({control : 'multiselect', name : name, index : index}))
		}

		this.setState(prevState => ({
      filterOptions: filterOptions
    }));

    let q = this.mapQueryFromFilters()
    this.props.onFilterChanged(q)
	}
	handleNumberRangeChange(e){
		let name = e.target.name.split('-')[0]
		let index = e.target.name.split('-')[1]
		let value = e.target.value

		let filterOptions = {...this.state.filterOptions}
		filterOptions[name][index+'Selected'] = value
		
		this.removerItemFromSelected(JSON.stringify({control : 'number-range', name : name,  index : index}))
		this.addItemToSelected(JSON.stringify({control : 'number-range', name : name, index : index}), value)

		this.setState(prevState => ({
      filterOptions: filterOptions
    }));

		let q = this.mapQueryFromFilters()
    this.props.onFilterChanged(q)
	}
	handleChipDelete(key){
		let keyObj = JSON.parse(key)
		let filterOptions = {...this.state.filterOptions}
		if(keyObj.control === 'multiselect'){
			filterOptions[keyObj.name][keyObj.index]['checked'] = false
		}else if(keyObj.control === 'number-range'){
			filterOptions[keyObj.name][keyObj.index+'Selected'] = null
		}
		this.setState({
			filterOptions: filterOptions
		})
		this.removerItemFromSelected(key)
		let q = this.mapQueryFromFilters()
    this.props.onFilterChanged(q)
	}
	addItemToSelected(key, value){
		let selected = {...this.state.selected}
		selected[key] = value
		this.setState({
			selected: selected
		})
	}
	removerItemFromSelected(key){
		let selected = {...this.state.selected}
		delete selected[key]
		this.setState({
			selected: selected
		})
	}
	render(){
		const {
			drawerOpen,
			selected
		} = this.state
		const{
			classes
		} = this.props

		return(
		 <React.Fragment>
			<Grid container spacing={0} justify="flex-end">
				<Grid item>
          {Object.keys(selected).length ? Object.keys(selected).map((key)=>{
          	return (<Chip className={classes.chip}
              key={key}
              label={selected[key]}
              onDelete={() => this.handleChipDelete(key)}
            />)
          }) : null}
        </Grid>
        <Grid item>
          <Button mini color="primary" aria-label="add" onClick={this.toggleDrawer}>
				 		<SearchIcon />
				 	</Button>
        </Grid>
      </Grid>
			<Divider />
			<Drawer anchor="right" open={drawerOpen} onClose={this.toggleDrawer}>
				<div className={classes.drawer}>
        {this.getFilters()}
        </div>
      </Drawer>
     </React.Fragment>
		)
	}
	getFilters(){
		if(this.state.filters && this.state.filterOptions){
			let filterControls = this.state.filters && this.state.filters.map((filter)=>{
	      if(filter.control === 'multiselect' && this.state.filterOptions[filter.name]){
	        return this.getMultiSelect(filter ,this.state.filterOptions[filter.name])
	      }else if(filter.control === 'number-range' && this.state.filterOptions[filter.name]){
	      	return this.getNumberRange(filter ,this.state.filterOptions[filter.name])
	      }else{
	      	return null
	      }
	    })
	    return filterControls
		}else{
			return null
		}
	    
	}
	getMultiSelect(filter, filterOption){
		const{
			classes
		}= this.props
    return (
      <ExpansionPanel defaultExpanded>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>{filter.label}</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <FormControl component="fieldset">
	          <FormGroup>
          	{
          		filterOption && filterOption.map((item,i)=>{
          			return (
          				<FormControlLabel 
	          				className={classes.checkbox}
	          				key={`filter-${filter.name}-${i}`}
		          			control={
		          				<Checkbox
		          					onChange={this.handleMultiselectChange} 
		          					inputProps={{'index' : i, 'filter': JSON.stringify(filter)}}
		          					checked={item.checked}
		          					value={item.value}/>
		          			} 
		          			label={`${item.value} (${item.count})`} 
		          		/>
          			)
          		})
          	}
	        </FormGroup>
	      </FormControl>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    )
	}
	getNumberRange(filter, filterOption) {
		const{
			classes
		}= this.props;
		if(filterOption.minSelected === undefined) {
			filterOption.minSelected = ""
		}
		if(filterOption.maxSelected === undefined) {
			filterOption.maxSelected = ""
		}
		return ( 
			<ExpansionPanel defaultExpanded>
	      <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
	        <Typography>{filter.label}</Typography>
	      </ExpansionPanelSummary>
	      <ExpansionPanelDetails>
	      	<Grid container>
		      	<Grid item xs={6}>
			  	    <FormControl fullWidth>
			          <InputLabel >Min</InputLabel>
			          <Select
			          	name={`${filter.name}-min`}
			            value={filterOption.minSelected}
			            onChange={this.handleNumberRangeChange}
			            inputProps={{'filter': JSON.stringify(filter)}}
			          >
			            {filterOption.min && filterOption.min.map((val,i)=>{
			            	return (<MenuItem key={`filter-${filter.name}-min-option-${i}`} value={val}>{val}</MenuItem>)
			            })}
			            
			          </Select>
			      	</FormControl>
			      	</Grid>
		      	<Grid item xs={6}>
			      	<FormControl fullWidth>
			          <InputLabel>Max</InputLabel>
			          <Select
			          	name={`${filter.name}-max`}
			            value={filterOption.maxSelected}
			            onChange={this.handleNumberRangeChange}
			            inputProps={{'filter': JSON.stringify(filter)}}
			          >
			            {filterOption.max && filterOption.max.map((val,i)=>{
			            	return (<MenuItem key={`filter-${filter.name}-max-option-${i}`} value={val}>{val}</MenuItem>)
			            })}
			          </Select>
			      	</FormControl>
		      	</Grid>
	      	</Grid>
	      </ExpansionPanelDetails>
     	</ExpansionPanel>
    )
		
	}
	mapQueryFromFilters(){
    let q = {};
    let {
    	filters,
    	filterOptions
    } = this.state

    for(let key in filters){
    	let filter = filters[key]
      if(filter.type == 'distinct'){
        let qForCurrent = filterOptions[filter.name].reduce(function(intialValue,current, index, arr){
          if(current.checked){
            intialValue.push(current.value);
          }
          return intialValue;
        },[]);
        if(qForCurrent.length){
          q[filter.name] = { '$in' : qForCurrent};
        }
      }else if(filter.type == 'number-range'){
        if(filterOptions[filter.name].minSelected ||filterOptions[filter.name].maxSelected){
          q[filter.name] = {};
          filterOptions[filter.name].minSelected && ( q[filter.name]['$gte'] = filterOptions[filter.name].minSelected );
          filterOptions[filter.name].maxSelected && ( q[filter.name]['$lte'] = filterOptions[filter.name].maxSelected )
        }
         
      }else{

      }
    }
    return q;
  }
	componentWillReceiveProps(newProps){
		newProps.filters && this.setState({
			filters : newProps.filters
		})
		newProps.filterOptions && this.setState({
			filterOptions : newProps.filterOptions
		})
		if(newProps.filters && newProps.filterOptions){
			this.setSelected(newProps.filters, newProps.filterOptions)
		}
	}
	setSelected(filters,filterOptions){
		let selected = {}
		filters.forEach((filter,index)=>{
			if(filter.control === 'multiselect' && filterOptions[filter.name]){
				filterOptions[filter.name].forEach((item,i)=>{
					if(item.checked){
						let key = JSON.stringify({control : 'multiselect', name : filter.name, index : i})
						let value = item.value
						selected[key] = value
					}
				})				
			}
			if(filter.control === 'number-range' && filterOptions[filter.name]){
				if(filterOptions[filter.name].maxSelected){
					let key = JSON.stringify({control : 'number-range', name : filter.name, index : 'max'})
					let value = filterOptions[filter.name].maxSelected
					selected[key] = value
				}
				if(filterOptions[filter.name].minSelected){
					let key = JSON.stringify({control : 'number-range', name : filter.name, index : 'min'})
					let value = filterOptions[filter.name].minSelected
					selected[key] = value
				}
			}
		})
		this.setState({
			selected
		})
	}
}
export default withRouter(withStyles(styles)(DataTableSearch));
	
