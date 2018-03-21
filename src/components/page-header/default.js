import React from 'react';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import AddIcon from 'material-ui-icons/Add';
import MenuIcon from 'material-ui-icons/Menu';
import { withStyles } from 'material-ui/styles';
import styles from './styles';
class PageHeader extends React.Component{
	constructor(props){
		super(props);
	}
	render(){
		let {classes,title} = this.props;
		return(
			<div>
		      <AppBar className={classes.root} position="static">
		        <Toolbar>
		          <Typography type="title" color="inherit" className={classes.flex}>
		            {title}
		          </Typography>
		          <Button  mini aria-label="edit" color="secondary">
		          	<AddIcon />
		          	Add
		          </Button>
		        </Toolbar>
		      </AppBar>
		    </div>
		);
	}
}
export default withStyles(styles)(PageHeader);
