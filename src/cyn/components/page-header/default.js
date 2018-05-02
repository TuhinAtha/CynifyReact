import React from 'react';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import Icon from 'material-ui/Icon';
import { withStyles } from 'material-ui/styles';
import styles from './styles';
class PageHeader extends React.Component{
	constructor(props){
		super(props);
	}
	render(){
		let {classes,title, actions} = this.props;
		return(
			<div>
		      <AppBar className={classes.root} position="static">
		        <Toolbar>
		          <Typography type="title" color="inherit" className={classes.flex}>
		            {title}
		          </Typography>
		          {
		          	actions && actions.map((action, index)=>{
		          		return (<Button  mini aria-label={action.text} color="primary">
				          	{action.icon && (<Icon>action.icon</Icon>)}
				          	action.text
				          </Button>)
		          	})
		          }
		          
		        </Toolbar>
		      </AppBar>
		    </div>
		);
	}
}
export default withStyles(styles)(PageHeader);
