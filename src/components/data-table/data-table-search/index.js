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
import Checkbox from 'material-ui/Checkbox';

import { withStyles } from 'material-ui/styles';
import {styles} from './styles';


/**Class Defination**/
class DataTableSearch extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			...props,
			drawerOpen : false
		}
		this.toggleDrawer = this.toggleDrawer.bind(this);
	}
	toggleDrawer(e){
		debugger;
		this.setState(prevState => ({
	      drawerOpen: !prevState.drawerOpen
	    }));
	}
	render(){
		return(
		 <React.Fragment>
			<Grid container spacing={0} justify="flex-end">
		        <Grid item>
		          <Button mini color="primary" aria-label="add" onClick={this.toggleDrawer}>
				 		<SearchIcon />
				 	</Button>
		        </Grid>
	        </Grid>
			<Divider />
			<Drawer anchor="right" open={this.state.drawerOpen} onClose={this.toggleDrawer} ref={(drawer) => { this.drawer = drawer; }}>
	          { this.state.filters && this.getFilters(this.state.filters)}
	        </Drawer>
         </React.Fragment>
		)
	}
	getFilters(filters){
	    let filterControls = filters && filters.map((filter)=>{
	      if(filter.control == 'multiselect'){
	        return this.getMultiSelect(filter)
	      }
	    })
	    return filterControls;
	}
	getMultiSelect(data){
    return(
      <ExpansionPanel>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>Expansion Panel 1</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <FormControl component="fieldset">
	        <FormLabel component="legend">Assign responsibility</FormLabel>
	          <FormGroup>
	           <FormControlLabel
	            control={
	                <Checkbox
	                  checked={false}
	                  value="gilad"
	                />
	            }
	            label="Gilad Gray"
	          />
	        </FormGroup>
	      </FormControl>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      
    )
	}
}
export default withStyles(styles)(DataTableSearch);
	
